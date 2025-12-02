/* ================================
   MOBILE MENU
================================ */
function toggleMenu() {
    const nav = document.getElementById("mobileNav");
    nav.style.display = (nav.style.display === "flex") ? "none" : "flex";
}


/* ================================
   ACCORDION FUNCTIONALITY
================================ */
const accordionItems = document.querySelectorAll(".accordion .item");

accordionItems.forEach(item => {
    const title = item.querySelector(".title");
    const content = item.querySelector(".content");

    title.addEventListener("click", () => {
        // Close all other accordions
        accordionItems.forEach(i => {
            if (i !== item) {
                i.querySelector(".content").style.display = "none";
            }
        });

        // Toggle selected accordion
        content.style.display = (content.style.display === "block") ? "none" : "block";
    });
});


/* ================================
   CASE LAW MODALS
================================ */
function openModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // disable background scroll
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // enable scroll
}

// Close modal when clicking outside the box
document.addEventListener("click", function(event) {
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
    const triggerBottom = window.innerHeight * 0.85;

    fadeElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            el.classList.add("visible");
        }
    });
}

// Add visible class immediately if already in view
window.addEventListener("load", handleFadeIn);
window.addEventListener("scroll", handleFadeIn);


/* ================================
   OPTIONAL: CLOSE MOBILE MENU ON NAV CLICK
================================ */
document.querySelectorAll(".mobile-nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("mobileNav").style.display = "none";
    });
});
