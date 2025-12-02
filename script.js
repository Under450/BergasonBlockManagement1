/* ================================
   MOBILE MENU TOGGLE
================================ */
function toggleMenu() {
    const nav = document.getElementById("mobileNav");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}


/* ================================
   ACCORDION LOGIC
================================ */
const accordionItems = document.querySelectorAll(".accordion .item");

accordionItems.forEach(item => {
    const title = item.querySelector(".title");
    const content = item.querySelector(".content");

    title.addEventListener("click", () => {

        // Close all open items except this one
        accordionItems.forEach(i => {
            if (i !== item) {
                i.querySelector(".content").style.display = "none";
            }
        });

        // Toggle current content
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});


/* ================================
   MODAL FUNCTIONALITY
================================ */
function openModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // lock scroll
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // unlock scroll
}

// Close modal when clicking outside content box
window.addEventListener("click", function(event) {
    const modals = document.querySelectorAll(".modal");

    modals.forEach(modal => {
        if (modal.style.display === "flex") {
            const content = modal.querySelector(".modal-content");

            if (!content.contains(event.target)) {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            }
        }
    });
});


/* ================================
   FADE-IN ON SCROLL
================================ */
const fadeElements = document.querySelectorAll(".fade-in");

function handleFadeIn() {
    const triggerPoint = window.innerHeight * 0.85;

    fadeElements.forEach(el => {
        const position = el.getBoundingClientRect().top;

        if (position < triggerPoint) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("load", handleFadeIn);
window.addEventListener("scroll", handleFadeIn);


/* ================================
   MOBILE MENU AUTO-CLOSE ON CLICK
================================ */
document.querySelectorAll(".mobile-nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("mobileNav").style.display = "none";
    });
});
