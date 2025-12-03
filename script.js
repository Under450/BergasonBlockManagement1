/* ============================================================
   MOBILE NAVIGATION
============================================================ */
function toggleMenu() {
    const nav = document.getElementById("mobileNav");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

/* ============================================================
   ACCORDION
============================================================ */
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".accordion .item");

    items.forEach(item => {
        const title = item.querySelector(".title");
        const content = item.querySelector(".content");

        title.addEventListener("click", () => {
            const open = content.style.display === "block";

            document.querySelectorAll(".accordion .content").forEach(c => {
                c.style.display = "none";
            });

            content.style.display = open ? "none" : "block";
        });
    });
});

/* ============================================================
   MODALS
============================================================ */
function openModal(id) {
    document.getElementById(id).style.display = "flex";
}
function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

window.addEventListener("click", e => {
    document.querySelectorAll(".modal").forEach(m => {
        if (e.target === m) m.style.display = "none";
    });
});

/* ============================================================
   HERO SLIDESHOW — UK BLOCK BUILDINGS
============================================================ */

/* You said: 
   "Second image is OK, keep that. Replace the rest."
*/

const ukHero = [
    "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1950&q=80",  // NEW UK block
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1950&q=80",  // YOUR KEPT IMAGE (second)
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118d?auto=format&fit=crop&w=1950&q=80",  // NEW UK flats
    "https://images.unsplash.com/photo-1530092376999-2541f1032f5f?auto=format&fit=crop&w=1950&q=80"   // NEW UK apartment block
];

let slideIndex = 0;
const hero = document.querySelector(".hero");

// Build slides
ukHero.forEach((url, index) => {
    const div = document.createElement("div");
    div.classList.add("hero-slide");
    if (index === 0) div.classList.add("active");
    div.style.backgroundImage = `url('${url}')`;
    hero.appendChild(div);
});

// Slideshow rotation
function rotateHero() {
    const slides = document.querySelectorAll(".hero-slide");
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
}
setInterval(rotateHero, 6000);

/* ============================================================
   FADE IN ON SCROLL
============================================================ */
const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
    });
}, { threshold: 0.35 });

faders.forEach(f => observer.observe(f));
