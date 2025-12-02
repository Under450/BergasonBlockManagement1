/* ============================================================
   MOBILE MENU TOGGLE
============================================================ */
function toggleMenu() {
    const nav = document.getElementById("mobileNav");
    nav.style.display = (nav.style.display === "flex") ? "none" : "flex";
}

// Auto close mobile menu when link clicked
document.querySelectorAll(".mobile-nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("mobileNav").style.display = "none";
    });
});


/* ============================================================
   ACCORDION FUNCTIONALITY
============================================================ */
const accordionItems = document.querySelectorAll(".accordion .item");

accordionItems.forEach(item => {
    const title = item.querySelector(".title");
    const content = item.querySelector(".content");

    title.addEventListener("click", () => {

        // Close other items
        accordionItems.forEach(other => {
            if (other !== item) {
                other.querySelector(".content").style.display = "none";
            }
        });

        // Toggle current
        content.style.display = (content.style.display === "block") ? "none" : "block";
    });
});


/* ============================================================
   MODALS (Case Law + Legal Pages)
============================================================ */
function openModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

// Close modal by clicking outside content
window.addEventListener("click", function(event) {
    const modals = document.querySelectorAll(".modal");

    modals.forEach(modal => {
        if (modal.style.display === "flex") {
            const content = modal.querySelector(".modal-content");

            // If clicking outside inner content
            if (!content.contains(event.target)) {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            }
        }
    });
});


/* ============================================================
   FADE-IN ON SCROLL
============================================================ */
const fadeElements = document.querySelectorAll(".fade-in");

function handleFadeIn() {
    const triggerHeight = window.innerHeight * 0.85;

    fadeElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < triggerHeight) el.classList.add("visible");
    });
}

window.addEventListener("load", handleFadeIn);
window.addEventListener("scroll", handleFadeIn);


/* ============================================================
   SMOOTH SCROLLING FOR INTERNAL LINKS
============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
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


/* ============================================================
   HERO IMAGE SLIDESHOW (Crossfade Transition)
============================================================ */

// List of images to rotate through
const heroImages = [
    "https://images.unsplash.com/photo-1485988412941-77a35537dae4?auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1525186402429-b4ff38bedec6?auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1950&q=80"
];

// Create each slide layer
const heroSection = document.querySelector(".hero");

heroImages.forEach((src, index) => {
    const slide = document.createElement("div");
    slide.classList.add("hero-slide");
    slide.style.backgroundImage = `url('${src}')`;
    if (index === 0) slide.classList.add("active");
    heroSection.appendChild(slide);
});

// Slideshow rotation
let currentSlide = 0;
const slides = document.querySelectorAll(".hero-slide");

setInterval(() => {
    slides[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");

}, 6000); // 6 seconds per slide
