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

document.querySelectorAll('a[href="#section2"]').forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        lenis.scrollTo("#section2");
    });
});



//LOADER 
const main = document.querySelector("#main");
const loader = document.querySelector("#loader");
const video = document.querySelector("#loader-video");

function unlockScroll() {
    lenis.start();
    document.body.style.overflow = "";
}

function hideLoader() {
    if (!loader) {
        if (main) main.style.opacity = "1";
        unlockScroll();
        return;
    }

    gsap.to(loader, {
        opacity: 0,
        duration: 1,
        onComplete() {
            loader.remove();

            if (main) main.style.opacity = "1";

            unlockScroll();
        }
    });
}

if (!sessionStorage.getItem("loaderShown") && loader) {
    lenis.stop();
    document.body.style.overflow = "hidden";

    if (video) video.playbackRate = 2;

    window.addEventListener("load", () => {
        sessionStorage.setItem("loaderShown", "true");
        setTimeout(hideLoader, 2500);
    }, { once: true });
} else {
    loader?.remove();

    if (main) main.style.opacity = "1";

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
const opbtn = document.querySelector("#op-btn");
const menu = document.querySelector("#dd-list");
const clbtn = document.querySelector("#cl-btn");

if (opbtn && menu && clbtn) {
    gsap.set(menu, { x: 250 });

    opbtn.addEventListener("click", () => {
        opbtn.style.display = "none";
        clbtn.style.display = "block";

        gsap.to(menu, {
            x: 0,
            duration: 0.8,
            onStart: () => {
                menu.style.pointerEvents = "auto";
            }
        });
    });

    clbtn.addEventListener("click", () => {
        opbtn.style.display = "block";
        clbtn.style.display = "";

        gsap.to(menu, {
            x: 250,
            duration: 0.8,
            onComplete: () => {
                menu.style.pointerEvents = "none";
            }
        });
    });
}


// crosoul

const mainCard = document.querySelector("#mainCard");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

if (mainCard && prevBtn && nextBtn) {
    function getCardStep() {
        const card = mainCard.querySelector(".s-card");
        if (!card) return 0;

        const gap = parseFloat(getComputedStyle(mainCard).columnGap) || 0;

        return card.getBoundingClientRect().width + gap;
    }

    function updateButtons() {
        const maxScroll = mainCard.scrollWidth - mainCard.clientWidth;

        prevBtn.disabled = mainCard.scrollLeft <= 2;
        nextBtn.disabled = mainCard.scrollLeft >= maxScroll - 2;
    }

    prevBtn.addEventListener("click", () => {
        mainCard.scrollBy({
            left: -getCardStep(),
            behavior: "smooth"
        });
    });

    nextBtn.addEventListener("click", () => {
        mainCard.scrollBy({
            left: getCardStep(),
            behavior: "smooth"
        });
    });

    mainCard.addEventListener("scroll", updateButtons);
    window.addEventListener("resize", updateButtons);

    updateButtons();
}