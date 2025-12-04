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
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=2000&q=60",
    "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=2000&q=60",
    "https://images.unsplash.com/photo-1519139270027-3631bf29e08a?auto=format&fit=crop&w=2000&q=60",
    "https://images.unsplash.com/photo-1496309732348-3627f3f040ee?auto=format&fit=crop&w=2000&q=60",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=60",
    "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=2000&q=60"
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
