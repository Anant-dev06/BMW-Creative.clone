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



// ==========================
// CARD DATA
// ==========================

const btn = {

    b1: {

        title: "Card-1",

        image:
            "https://images.pexels.com/photos/7048473/pexels-photo-7048473.jpeg",

        discription:
            "This is a First Card Of list.",

        specs: [
            ["User-1", "Anant"],
            ["User-2", "Marco"]
        ]

    },


    b2: {

        title: "Card-2",

        image:
            "https://images.pexels.com/photos/27786742/pexels-photo-27786742.jpeg",

        discription:
            "This is a Second Card Of list.",

        specs: [
            ["User-3", "Muke"],
            ["User-4", "Morales"]
        ]

    },


    b3: {

        title: "Card-3",

        image:
            "https://images.pexels.com/photos/36504592/pexels-photo-36504592.jpeg",

        discription:
            "This is a Third Card Of list.",

        specs: [
            ["User-5", "Antony"],
            ["User-6", "Mauzi"]
        ]

    },


    b4: {

        title: "Card-4",

        image:
            "https://images.pexels.com/photos/38713531/pexels-photo-38713531.jpeg",

        discription:
            "This is a Fourth Card Of list.",

        specs: [
            ["User-7", "Kumo"],
            ["User-8", "Lago"]
        ]

    },

    // b5: {

    //     title: "Card-5",

    //     image:
    //         "https://images.pexels.com/photos/38713531/pexels-photo-38713531.jpeg",

    //     discription:
    //         "This is a Fourth Card Of list.",

    //     specs: [
    //         ["User-7", "Kumo"],
    //         ["User-8", "Lago"]
    //     ]

    // }

};


// ==========================
// SELECT ELEMENTS
// ==========================

const buttons = document.querySelectorAll(".btneft");

const overlay = document.querySelector("#overlay");

const title = document.querySelector("#title");

const image = document.querySelector("#image");

const desc = document.querySelector("#discription");

const specs = document.querySelector("#specs");

const close = document.querySelector("#close");


// ==========================
// BUTTON CLICK
// ==========================

buttons.forEach(button => {

    button.addEventListener("click", () => {


        // 1. Get data-card value
        const btnId = button.dataset.btn;


        // 2. Get the selected card
        const btns = btn[btnId];


        // 3. Set title
        title.textContent = btns.title;


        // 4. Remove previous image
        image.innerHTML = "";


        // 5. Create image
        const img = document.createElement("img");


        // 6. Set image source
        img.src = btns.image;


        // 7. Set alt text
        img.alt = btns.title;


        // 8. Add image to image container
        image.appendChild(img);


        // 9. Set description
        desc.textContent = btns.discription;


        // 10. Clear previous specs
        specs.innerHTML = "";


        // 11. Add specs
        btns.specs.forEach(spec => {

            const p = document.createElement("p");

            p.textContent = `${spec[0]} : ${spec[1]}`;

            specs.appendChild(p);

        });


        // 12. Show overlay
        overlay.style.opacity = "1";

        overlay.style.visibility = "visible";

    });

});


// ==========================
// CLOSE OVERLAY
// ==========================

close.addEventListener("click", () => {

    overlay.style.opacity = "0";

    overlay.style.visibility = "hidden";

});

