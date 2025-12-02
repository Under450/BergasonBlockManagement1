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

            // Close all items
            document.querySelectorAll(".accordion .content").forEach(c => {
                c.style.display = "none";
            });

            // Open selected
            content.style.display = isOpen ? "none" : "block";
        });
    });
});


/* ============================================================
   MODALS (CASE LAW + LEGAL PAGES)
============================================================ */
function openModal(id) {
    document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// Close modal when clicking outside content
window.addEventListener("click", function(e) {
    document.querySelectorAll(".modal").forEach(modal => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});


/* ============================================================
   HERO SLIDESHOW (Faded, Block-Appropriate)
============================================================ */
/* ============================================================
   HERO SLIDESHOW — PREMIUM BLOCK BUILDING IMAGES
============================================================ */
const heroImages = [
    "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1950&q=80",  // modern flats
    "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1950&q=80",  // apartment balconies
    "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1950&q=80",  // residential blocks
    "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1950&q=80"   // managed building exterior
];


let currentSlide = 0;

// Create slideshow elements
const heroSection = document.querySelector(".hero");

heroImages.forEach((img, index) => {
    const div = document.createElement("div");
    div.classList.add("hero-slide");
    if (index === 0) div.classList.add("active");
    div.style.backgroundImage = `url('${img}')`;
    heroSection.appendChild(div);
});

function cycleSlides() {
    const slides = document.querySelectorAll(".hero-slide");

    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}

setInterval(cycleSlides, 6000); // every 6 seconds


/* ============================================================
   FADE-IN ON SCROLL
============================================================ */
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
