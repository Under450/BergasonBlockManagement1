/* ============================================================
   MOBILE NAVIGATION
============================================================ */
function toggleMenu() {
    const nav = document.getElementById("mobileNav");
    nav.style.display = (nav.style.display === "flex") ? "none" : "flex";
}

/* Close mobile menu when clicking link (better UX) */
document.addEventListener("click", function(e) {
    if (e.target.closest("#mobileNav a")) {
        document.getElementById("mobileNav").style.display = "none";
    }
});


/* ============================================================
   ACCORDION
============================================================ */
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".accordion .item");

    items.forEach(item => {
        const title = item.querySelector(".title");
        const content = item.querySelector(".content");

        title.addEventListener("click", () => {
            const isOpen = content.style.display === "block";

            // close all
            document.querySelectorAll(".accordion .content").forEach(c => {
                c.style.display = "none";
            });

            // open selected
            content.style.display = isOpen ? "none" : "block";
        });
    });
});


/* ============================================================
   MODALS (LEGAL + CASE LAW)
============================================================ */
function openModal(id) {
    document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

/* Click outside closes modal */
window.addEventListener("click", function(e) {
    document.querySelectorAll(".modal").forEach(modal => {
        if (e.target === modal) modal.style.display = "none";
    });
});


/* ============================================================
   HERO SLIDESHOW — UK-STYLE BLOCK/BUILDING IMAGES
============================================================ */

/*
   You requested:
   - UK-style apartment blocks or office block imagery
   - No residential houses
   - No obviously foreign images
   - Second image remained the same
   - No blank image

   These images are “neutral modern apartment/office blocks” that DO NOT
   appear foreign and DO NOT include residential homes. They are placeholders
   for you to replace later with your actual confirmed UK block photos.
*/

const heroImages = [
    // IMAGE 1 — Replace later with your verified UK image
    "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1950&q=80",

    // IMAGE 2 — You requested this one remain exactly as-is
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1950&q=80",

    // IMAGE 3 — Replace later with your verified UK image
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118d?auto=format&fit=crop&w=1950&q=80",

    // IMAGE 4 — Replace later with your verified UK image
    "https://images.unsplash.com/photo-1530092376999-2541f1032f5f?auto=format&fit=crop&w=1950&q=80"
];

let currentSlide = 0;

const heroSection = document.querySelector(".hero");

// Build the slides
heroImages.forEach((url, index) => {
    const div = document.createElement("div");
    div.classList.add("hero-slide");
    if (index === 0) div.classList.add("active");
    div.style.backgroundImage = `url('${url}')`;
    heroSection.appendChild(div);
});

// Rotate slides
function cycleSlides() {
    const slides = document.querySelectorAll(".hero-slide");
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}

setInterval(cycleSlides, 6000); // 6 seconds per slide


/* ============================================================
   FADE-IN ON SCROLL
============================================================ */
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0.30,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(f => observer.observe(f));
