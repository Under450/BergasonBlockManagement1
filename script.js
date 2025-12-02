/* ============================================================
   MOBILE MENU TOGGLE
============================================================ */
function toggleMenu() {
    const nav = document.getElementById("mobileNav");
    nav.style.display = (nav.style.display === "flex") ? "none" : "flex";
}

// Auto close mobile nav when clicking a link
document.querySelectorAll(".mobile-nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("mobileNav").style.display = "none";
    });
});


/* ============================================================
   ACCORDION SYSTEM
============================================================ */
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

        // Toggle this item
        content.style.display =
            (content.style.display === "block") ? "none" : "block";
    });
});


/* ============================================================
   MODAL CONTROL (CASE LAW + LEGAL PAGES)
============================================================ */
function openModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // disable background scroll
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // enable background scroll
}

// Close when clicking outside modal content
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


/* ============================================================
   SCROLL FADE-IN
============================================================ */
const fadeElements = document.querySelectorAll(".fade-in");

function fadeInOnScroll() {
    const triggerPoint = window.innerHeight * 0.85;

    fadeElements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < triggerPoint) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("load", fadeInOnScroll);


/* ============================================================
   SMOOTH SCROLL FOR ANCHOR LINKS
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
   HERO SLIDESHOW (PROPERTY / BLOCK-MANAGEMENT IMAGES)
============================================================ */

/* You may replace images with your own property/block images */
const heroImages = [
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1950&q=80", /* modern apartments */
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1950&q=80", /* block hallway */
    "https://images.unsplash.com/photo-1599422757663-a0a8d3f5f4af?auto=format&fit=crop&w=1950&q=80", /* property lobby */
    "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1950&q=80"  /* building exterior */
];

const heroSection = document.querySelector(".hero");

// Create slides dynamically
heroImages.forEach((src, index) => {
    const slide = document.createElement("div");
    slide.classList.add("hero-slide");
    slide.style.backgroundImage = `url('${src}')`;
    if (index === 0) slide.classList.add("active");
    heroSection.appendChild(slide);
});

let currentSlide = 0;
const slides = document.querySelectorAll(".hero-slide");

// Rotate every 6 seconds
setInterval(() => {
    slides[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");
}, 6000);
