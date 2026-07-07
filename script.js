// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis
const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
});

// Sync Lenis with ScrollTrigger
lenis.on("scroll", ScrollTrigger.update);

// Animation loop
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

// Disable GSAP lag smoothing
gsap.ticker.lagSmoothing(0);

document.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault();

    lenis.scrollTo("#section2");
});


// Animation for navbar
gsap.from(".navbar", {
    y: -100,
    delay: 1,
    duration: 1,
    opacity: 0,
    trigger: ".navbar",
    stagger: 0.5
})

gsap.from(".navbar a", {
    z: -100,
    delay: 1.8,
    duration: 1,
    opacity: 0,
    stagger: 0.5,
    trigger: ".navbar a"
})



