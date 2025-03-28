"use strict"

const togglebutton = document.querySelector(".togglebutton");
const navbar = document.querySelector(".navbar");
const closeBtn = document.querySelector(".closeBtn");


togglebutton.addEventListener("click", () => {

    /* toggle navbar open /  close */
    if (navbar.classList.contains("show")) {
        navbar.classList.remove("show")
    } else {
        navbar.classList.add("show")
    }
});

/* Close nav bar  */
closeBtn.addEventListener("click", () => {
    navbar.classList.toggle("show")
     console.log("NAVBAR CLOSED")
})