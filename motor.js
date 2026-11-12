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

const open = document.querySelector("#menu");
const close = document.querySelector("#menu-close");
const mbox = document.querySelector("#lnk-box");
const nvbk = document.querySelector("#nav-link");
const rn = document.querySelector("#right-nav");
rn.classList.add("rn");

open.addEventListener("click", () => {

    open.style.display = "none";
    close.style.display = "block";
    rn.style.borderTop = "4px solid black";

    // Show menu
    gsap.fromTo(mbox,
        {
            y: -400,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
        }
    );

    // Blur background
    gsap.to(nvbk, {
        filter: "blur(8px)",
        duration: 0.5
    });

});

close.addEventListener("click", () => {
    rn.style.borderTop = "none";


    // Hide menu
    gsap.to(mbox, {
        y: -400,
        opacity: 0,
        duration: 0.8,
        ease: "power2.in",
        onComplete: () => {
            open.style.display = "block";
            close.style.display = "none";

            gsap.set(mbox, {
                y: -400,
                opacity: 1
            });
        }
    });

    // Remove background blur
    gsap.to(nvbk, {
        filter: "blur(0px)",
        duration: 0.5
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