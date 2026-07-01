

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
    // content.style.height = "70dvh";
    // content.style.transition = "ease 1.2s";
    // content.style.opacity = "100%";
    // content.style.backgroundColor = "white";
    // content.style.zIndex = "1000";
    // rnav.style.borderTop = "4px solid black";
    // rnav.style.transition = "ease 1s";
    // srd.style.display = "none";
    // pin.style.display = "none";
    // sbox.style.display = "inline";
    // sbox.classList.add("srbox");
    // sinp.classList.add("srbox");
    // menu.classList.remove("ri-menu-line");
    // menu.classList.add("ri-close-line");
    // menu.innerHTML = " Close";
});

const menuEft = function () {
    content.style.height = "70dvh";
    content.style.transition = "ease 1.2s";
    content.style.opacity = "100%";
    content.style.backgroundColor = "white";
    content.style.zIndex = "1000";
    rnav.style.borderTop = "4px solid black";
    rnav.style.transition = "ease 1s";
    srd.style.display = "none";
    pin.style.display = "none";
    sbox.style.display = "inline";
    sbox.classList.add("srbox");
    sinp.classList.add("srbox");
}

// IMG1 HOVER EFFECT
let img1 = document.querySelector("#img1");
let over1 = document.querySelector("#over1");
let bdr1 = document.querySelector("#bdr1");
img1.addEventListener("mouseover", function () {
    bdr1.style.backgroundColor = "blue";
    over1.style.height = "20dvh";
    bdr1.style.marginTop = "5dvh";
    bdr1.style.transition = "0.6s ease";
});

img1.addEventListener("mouseleave", function () {
    over1.style.height = "15dvh";
    bdr1.style.backgroundColor = "rgb(95, 106, 106)";
    over1.style.transition = "0.6s ease";
    bdr1.style.marginTop = "2dvh";
})


// IMG2 HOVER EFFECT
let img2 = document.querySelector("#img2");
let over2 = document.querySelector("#over2");
let bdr2 = document.querySelector("#bdr2");
img2.addEventListener("mouseover", function () {
    bdr2.style.backgroundColor = "blue";
    over2.style.height = "20dvh";
    bdr2.style.marginTop = "5dvh";
    bdr2.style.transition = "0.6s ease";
});

img2.addEventListener("mouseleave", function () {
    over2.style.height = "15dvh";
    bdr2.style.backgroundColor = "rgb(95, 106, 106)";
    over2.style.transition = "0.6s ease";
    bdr2.style.marginTop = "4dvh";
});

// IMG3 HOVER EFFECT
let img3 = document.querySelector("#img3");
let over3 = document.querySelector("#over3");
let bdr3 = document.querySelector("#bdr3");
img3.addEventListener("mouseover", function () {
    bdr3.style.backgroundColor = "blue";
    over3.style.height = "20dvh";
    bdr3.style.marginTop = "5dvh";
    bdr3.style.transition = "0.6s ease";
});

img3.addEventListener("mouseleave", function () {
    over3.style.height = "15dvh";
    bdr3.style.backgroundColor = "rgb(95, 106, 106)";
    over3.style.transition = "0.6s ease";
    bdr3.style.marginTop = "4dvh";
});

// IMG4 HOVER EFFECT
let img4 = document.querySelector("#img4");
let over4 = document.querySelector("#over4");
let bdr4 = document.querySelector("#bdr4");
img4.addEventListener("mouseover", function () {
    bdr4.style.backgroundColor = "blue";
    over4.style.height = "20dvh";
    bdr4.style.marginTop = "5dvh";
    bdr4.style.transition = "0.6s ease";
});

img4.addEventListener("mouseleave", function () {
    over4.style.height = "15dvh";
    bdr4.style.backgroundColor = "rgb(95, 106, 106)";
    over4.style.transition = "0.6s ease";
    bdr4.style.marginTop = "4dvh";
});

// IMG5 HOVER EFFECT
let img5 = document.querySelector("#img5");
let over5 = document.querySelector("#over5");
let bdr5 = document.querySelector("#bdr5");
img5.addEventListener("mouseover", function () {
    bdr5.style.backgroundColor = "blue";
    over5.style.height = "20dvh";
    bdr5.style.marginTop = "5dvh";
    bdr5.style.transition = "0.6s ease";
});

img5.addEventListener("mouseleave", function () {
    over5.style.height = "15dvh";
    bdr5.style.backgroundColor = "rgb(95, 106, 106)";
    over5.style.transition = "0.6s ease";
    bdr5.style.marginTop = "4dvh";
});

// IMG6 HOVER EFFECT
let img6 = document.querySelector("#img6");
let over6 = document.querySelector("#over6");
let bdr6 = document.querySelector("#bdr6");
img6.addEventListener("mouseover", function () {
    bdr6.style.backgroundColor = "blue";
    over6.style.height = "20dvh";
    bdr6.style.marginTop = "5dvh";
    bdr6.style.transition = "0.6s ease";
});

img6.addEventListener("mouseleave", function () {
    over6.style.height = "15dvh";
    bdr6.style.backgroundColor = "rgb(95, 106, 106)";
    over6.style.transition = "0.6s ease";
    bdr6.style.marginTop = "4dvh";
});

// IMG7 HOVER EFFECT
let img7 = document.querySelector("#img7");
let over7 = document.querySelector("#over7");
let bdr7 = document.querySelector("#bdr7");
img7.addEventListener("mouseover", function () {
    bdr7.style.backgroundColor = "blue";
    over7.style.height = "20dvh";
    bdr7.style.marginTop = "5dvh";
    bdr7.style.transition = "0.6s ease";
});

img7.addEventListener("mouseleave", function () {
    over7.style.height = "15dvh";
    bdr7.style.backgroundColor = "rgb(95, 106, 106)";
    over7.style.transition = "0.6s ease";
    bdr7.style.marginTop = "4dvh";
});

// IMG8 HOVER EFFECT
let img8 = document.querySelector("#img8");
let over8 = document.querySelector("#over8");
let bdr8 = document.querySelector("#bdr8");
img8.addEventListener("mouseover", function () {
    bdr8.style.backgroundColor = "blue";
    over8.style.height = "20dvh";
    bdr8.style.marginTop = "5dvh";
    bdr8.style.transition = "0.6s ease";
});

img8.addEventListener("mouseleave", function () {
    over8.style.height = "15dvh";
    bdr8.style.backgroundColor = "rgb(95, 106, 106)";
    over8.style.transition = "0.6s ease";
    bdr8.style.marginTop = "4dvh";
});

// IMG10 HOVER EFFECT
let img10 = document.querySelector("#img10");
let over10 = document.querySelector("#over10");
let bdr10 = document.querySelector("#bdr10");
img10.addEventListener("mouseover", function () {
    bdr10.style.backgroundColor = "blue";
    over10.style.height = "20dvh";
    bdr10.style.marginTop = "5dvh";
    bdr10.style.transition = "0.6s ease";
});

img10.addEventListener("mouseleave", function () {
    over10.style.height = "15dvh";
    bdr10.style.backgroundColor = "rgb(95, 106, 106)";
    over10.style.transition = "0.6s ease";
    bdr10.style.marginTop = "4dvh";
});

// IMG11 HOVER EFFECT
let img11 = document.querySelector("#img11");
let over11 = document.querySelector("#over11");
let bdr11 = document.querySelector("#bdr11");
img11.addEventListener("mouseover", function () {
    bdr11.style.backgroundColor = "blue";
    over11.style.height = "20dvh";
    bdr11.style.marginTop = "5dvh";
    bdr11.style.transition = "0.6s ease";
});

img11.addEventListener("mouseleave", function () {
    over11.style.height = "15dvh";
    bdr11.style.backgroundColor = "rgb(95, 106, 106)";
    over11.style.transition = "0.6s ease";
    bdr11.style.marginTop = "4dvh";
});

// IMG12 HOVER EFFECT
let img12 = document.querySelector("#img12");
let over12 = document.querySelector("#over12");
let bdr12 = document.querySelector("#bdr12");
img12.addEventListener("mouseover", function () {
    bdr12.style.backgroundColor = "blue";
    over12.style.height = "20dvh";
    bdr12.style.marginTop = "5dvh";
    bdr12.style.transition = "0.6s ease";
});

img12.addEventListener("mouseleave", function () {
    over12.style.height = "15dvh";
    bdr12.style.backgroundColor = "rgb(95, 106, 106)";
    over12.style.transition = "0.6s ease";
    bdr12.style.marginTop = "4dvh";
});