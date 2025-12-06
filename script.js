/* ============================================================
   MOBILE MENU TOGGLE
============================================================ */
function toggleMenu() {
    const nav = document.getElementById("mobileNav");
    nav.style.display = (nav.style.display === "flex") ? "none" : "flex";
}

/* Close menu when clicking a link */
document.addEventListener("click", function(e) {
    if (e.target.closest("#mobileNav a")) {
        document.getElementById("mobileNav").style.display = "none";
    }
});


/* ============================================================
   ACCORDION FUNCTION
============================================================ */
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".accordion .item");

    items.forEach(item => {
        const title = item.querySelector(".title");
        const content = item.querySelector(".content");
        const plus = item.querySelector(".plus");

        title.addEventListener("click", () => {
            const isOpen = content.style.display === "block";

            /* Close all accordions */
            document.querySelectorAll(".accordion .content").forEach(c => {
                c.style.display = "none";
            });

            document.querySelectorAll(".accordion .plus").forEach(p => {
                p.textContent = "+";
            });

            /* Open selected */
            if (!isOpen) {
                content.style.display = "block";
                plus.textContent = "−";
            }
        });
    });
});


/* ============================================================
   MODALS (LEGAL & CASE LAW)
============================================================ */
function openModal(id) {
    document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

/* Close when clicking outside modal content */
window.addEventListener("click", function(e) {
    document.querySelectorAll(".modal").forEach(modal => {
        if (e.target === modal) modal.style.display = "none";
    });
});


/* ============================================================
   FADE-IN ON SCROLL
============================================================ */
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries, observerObj) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observerObj.unobserve(entry.target);
        }
    });
}, appearOptions);
/* Rotating hero background images */
/* Rotating hero background images with fail-safe */

/* ============================================================
   ROTATING HERO BACKGROUND WITH SMOOTH FADE
============================================================ */

const heroImages = [
    "hero1.jpg",
    "hero2.jpg",
    "hero3.jpg"
];

let heroIndex = 0;

function rotateHero() {
    const hero = document.getElementById("rotating-hero");

    if (!hero) return;

    // Fade out
    hero.classList.add("fade");

    setTimeout(() => {
        heroIndex = (heroIndex + 1) % heroImages.length;

        hero.style.backgroundImage = `url('${heroImages[heroIndex]}')`;

        // Fade back in
        hero.classList.remove("fade");
    }, 700);
}

// Change image every 6 seconds
setInterval(rotateHero, 6000);
