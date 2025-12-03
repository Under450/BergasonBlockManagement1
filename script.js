/* ============================================================
   MOBILE NAVIGATION TOGGLE
============================================================ */
function toggleMenu() {
    const nav = document.getElementById("mobileNav");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}


/* ============================================================
   ACCORDION FUNCTIONALITY
============================================================ */
document.addEventListener("DOMContentLoaded", () => {
    const accordionItems = document.querySelectorAll(".accordion .item");

    accordionItems.forEach(item => {
        const title = item.querySelector(".title");
        const content = item.querySelector(".content");

        title.addEventListener("click", () => {
            const isOpen = content.style.display === "block";

            // Close all
            document.querySelectorAll(".accordion .content").forEach(c => {
                c.style.display = "none";
            });

            // Open the selected one
            content.style.display = isOpen ? "none" : "block";
        });
    });
});


/* ============================================================
   MODALS (CASE LAW + LEGAL)
============================================================ */
function openModal(id) {
    document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// close modal when clicking outside
window.addEventListener("click", function(e) {
    document.querySelectorAll(".modal").forEach(modal => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});


/* ============================================================
   HERO SLIDESHOW — UK BLOCK BUILDINGS
============================================================ */
const heroImages = [
    "https://images.unsplash.com/photo-1582407947304-71f1f1d5c9d8?auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1591455754041-b61c9a3fb63f?auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1950&q=80"
];

let currentSlide = 0;

// Build image DOM elements
const heroSection = document.querySelector(".hero");

heroImages.forEach((img, index) => {
    const div = document.createElement("div");
    div.classList.add("hero-slide");
    if (index === 0) div.classList.add("active");
    div.style.backgroundImage = `url('${img}')`;
    heroSection.appendChild(div);
});

// Cycle images
function cycleSlides() {
    const slides = document.querySelectorAll(".hero-slide");

    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}

setInterval(cycleSlides, 6000);


/* ============================================================
   FADE-IN ON SCROLL
============================================================ */
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(
    function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        });
    },
    appearOptions
);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
