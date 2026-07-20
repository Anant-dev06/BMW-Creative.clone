

// MENU BAR EFFECT
let menu = document.querySelector("#menu");
let nav = document.querySelector("#nav-bar");
let content = document.querySelector("#nav-content");
let hero = document.querySelector("#hero");
let hrct = document.querySelector("#hero-content");
let rnav = document.querySelector("#right-nav");
let src = document.querySelector("#srd");
let pin = document.querySelector("#pin");
let sbox = document.querySelector("#sbox");
let sinp = document.querySelector("#sinp");
menu.addEventListener("click", function () {
    menu.classList.toggle()

});



const imgs = document.querySelectorAll(".img-b");

imgs.forEach((img) => {

    const overlay = img.querySelector(".over-b");
    const border = img.querySelector(".bdr-b");

    img.addEventListener("mouseenter", () => {

        overlay.style.height = "20dvh";
        overlay.style.transition = "0.6s ease";

        border.style.backgroundColor = "blue";
        border.style.marginTop = "5dvh";
        border.style.transition = "0.6s ease";

    });

    img.addEventListener("mouseleave", () => {

        overlay.style.height = "15dvh";

        border.style.backgroundColor = "rgb(95,106,106)";
        border.style.marginTop = "2dvh";

    });

});


const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);