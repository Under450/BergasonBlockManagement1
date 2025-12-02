/* ================================
   MOBILE MENU TOGGLE
================================ */
function toggleMenu() {
    const nav = document.getElementById("mobileNav");

    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
}

/* Auto close mobile nav when clicking a link */
document.querySelectorAll(".mobile-nav a").forEach(link => {
    link.addEventListener("click", () => {
        const nav = document.getElementById("mobileNav");
        nav.style.display = "none";
    });
});


/* ================================
   ACCORDION FUNCTIONALITY
================================ */
const accordionItems = document.querySelectorAll(".accordion .item");

accordionItems.forEach(item => {
    const title = item.querySelector(".title");
    const content = item.querySelector(".content");

    title.addEventListener("click", () => {

        // Close all other items
        accordionItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.querySelector(".content").style.display = "none";
            }
        });

        // Toggle this one
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});


/* ================================
   MODAL SYSTEM
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

/* Close by clicking outside modal content */
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
    const trigger = window.innerHeight * 0.85;

    fadeElements.forEach(el => {
        const pos = el.getBoundingClientRect().top;

        if (pos < trigger) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("load", handleFadeIn);
window.addEventListener("scroll", handleFadeIn);


/* ================================
   OPTIONAL: SMOOTH SCROLL POLISH
================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        // Only smooth-scroll if element exists
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
            });
        }
    });
});
