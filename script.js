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



//LOADER 
let main = document.querySelector("#main");

lenis.stop();
document.body.style.overflow = "hidden";

const video = document.querySelector("#loader-video");
video.playbackRate = 2;

function unlockScroll() {
    lenis.start();
    document.body.style.overflow = "auto";
}

if (!sessionStorage.getItem("loaderShown")) {

    sessionStorage.setItem("loaderShown", "true");

    window.addEventListener("load", () => {

        setTimeout(() => {

            gsap.to("#loader", {
                opacity: 0,
                duration: 1,
                onComplete() {
                    document.querySelector("#loader").remove();
                    document.querySelector("#main").style.opacity = "1";
                    unlockScroll();
                }
            });

        }, 2500);

    });

} else {

    document.querySelector("#loader").remove();
    document.querySelector("#main").style.opacity = "1";
    unlockScroll();

}

// Animation for navbar
gsap.from(".navbar", {
    y: -100,
    delay: 1,
    duration: 1,
    opacity: 0,
    stagger: 0.5
});

//MENU
let opbtn = document.querySelector("#op-btn");
let menu = document.querySelector("#dd-list");
let clbtn = document.querySelector("#cl-btn");

gsap.set(menu, { x: 250 });

opbtn.addEventListener("click", () => {
    opbtn.style.display = "none";
    clbtn.style.display = "block";
    gsap.to(menu, { x: 0, duration: 0.8 });
});

clbtn.addEventListener("click", () => {
    opbtn.style.display = "block";
    clbtn.style.display = "";
    gsap.to(menu, { x: 200, duration: 0.8 });
});


