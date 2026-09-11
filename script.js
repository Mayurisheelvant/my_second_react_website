// =========================
// MOBILE MENU
// =========================

function toggleMenu() {

    const nav = document.querySelector("nav");

    nav.classList.toggle("active");

}


// =========================
// GET STARTED BUTTON
// =========================

function showMessage() {

    alert("Welcome to My Website!");

}


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const formMessage = document.getElementById("formMessage");

    formMessage.textContent =
        "Thank you, " + name + "! Your message has been submitted.";

    contactForm.reset();

});