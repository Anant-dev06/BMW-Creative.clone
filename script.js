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


// crosoul

document.querySelectorAll("#mainCard").forEach((mainCard) => {
    const section = mainCard.closest(".card-section") || mainCard.parentElement;

    const prevBtn = section.querySelector("#prevBtn");
    const nextBtn = section.querySelector("#nextBtn");

    if (!prevBtn || !nextBtn) return;

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
});



// Time line animation and effect
const timelineItems = document.querySelectorAll(".f-time");
timelineItems.forEach(item => {

    const button = item.querySelector(".f-box");

    const content = item.querySelector(".f-item");

    const downArrow = item.querySelector(".ri-arrow-down-line");
    const upArrow = item.querySelector(".ri-arrow-up-long-line");


    // Initial state
    gsap.set(content, {
        height: 0,
        opacity: 0,
        overflow: "hidden",
        display: "none"
    });

    upArrow.style.display = "none";


    button.addEventListener("click", () => {

        const isOpen = content.style.display === "block";


        if (!isOpen) {

            // OPEN CONTENT
            content.style.display = "block";

            gsap.fromTo(content,
                {
                    height: 0,
                    opacity: 0
                },
                {
                    height: "100dvh",
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out"
                }
            );


            // DOWN → UP
            downArrow.style.display = "none";
            upArrow.style.display = "block";


        } else {

            // CLOSE CONTENT
            gsap.to(content, {
                height: 0,
                opacity: 0,
                duration: 0.8,
                ease: "power2.inOut",

                onComplete: () => {
                    content.style.display = "none";
                }
            });


            // UP → DOWN
            upArrow.style.display = "none";
            downArrow.style.display = "block";

        }

    });

});



//menu animation part

let menubtn = document.querySelector("#menu-btn");
let menuclose = document.querySelector("#menu-close");
let menubox = document.querySelector("#menu-box");
let menucontainer = document.querySelector("#menu-container");

menubtn.addEventListener("click", () => {
    menubtn.style.display = "none";
    menuclose.style.display = "block";
    gsap.to(menucontainer, {
        y: 0,
        duration: 0.8,
        opacity: 1
    })
})

menuclose.addEventListener("click", () => {
    menubtn.style.display = "block";
    menuclose.style.display = "none";
    gsap.to(menucontainer, {
        y: -300,
        duration: 0.8,

    })
})