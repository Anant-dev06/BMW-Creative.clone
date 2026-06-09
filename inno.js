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