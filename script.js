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
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=85",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85",
    "https://images.unsplash.com/photo-1529421308413-6221b5b2b3c5?auto=format&fit=crop&w=2000&q=85"
];

let workingImages = [];
let heroIndex = 0;

function validateImages(images, callback) {
    let checked = 0;

    images.forEach(url => {
        const img = new Image();
        img.onload = () => {
            workingImages.push(url);
            checked++;
            if (checked === images.length) callback();
        };
        img.onerror = () => {
            console.warn("Image failed & removed:", url);
            checked++;
            if (checked === images.length) callback();
        };
        img.src = url;
    });
}

function rotateHero() {
    const hero = document.getElementById("rotating-hero");
    if (!hero || workingImages.length === 0) return;

    hero.classList.add("fade");

    setTimeout(() => {
        heroIndex = (heroIndex + 1) % workingImages.length;
        hero.style.backgroundImage = `url('${workingImages[heroIndex]}')`;
        hero.classList.remove("fade");
    }, 800);
}

validateImages(heroImages, () => {
    rotateHero();
    setInterval(rotateHero, 6000);
});
