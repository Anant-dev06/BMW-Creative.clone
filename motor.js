





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


let menu = document.querySelector("#menu");
let menuPage = document.querySelector("#menu-page");

let open = false;

menu.addEventListener("click", () => {
    console.log("clicked");

    if (!open) {

        menu.classList.replace("ri-menu-line", "ri-close-line");

        gsap.to("#menu-page", {

            left: "0%",
            duration: 0.8,
            ease: "ease"

        });

        open = true;

    } else {

        menu.classList.replace("ri-close-line", "ri-menu-line");

        gsap.to("#menu-page", {

            left: "-60%",
            duration: 0.8,
            ease: "ease"

        });

        open = false;

    }

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