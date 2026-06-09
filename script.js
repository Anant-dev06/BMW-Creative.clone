gsap.from(".navbar", {
    y: -100,
    delay: 1,
    duration: 1,
    opacity: 0
})

gsap.from(".navbar a", {
    z: -100,
    delay: 1.8,
    duration: 1,
    opacity: 0,
    stagger: 0.5
})