const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        document.body.style.background = "#fff";
        document.body.style.color = "#000";
    }
    else {

        document.body.style.background = "#000";
        document.body.style.color = "#fff";
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