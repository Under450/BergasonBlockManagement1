/* ============================================================
   MOBILE NAV
============================================================ */
function toggleMenu() {
    const nav = document.querySelector(".desktop-nav");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}


/* ============================================================
   MODALS
============================================================ */
function openModal(id) {
    document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

window.addEventListener("click", function(e) {
    document.querySelectorAll(".modal").forEach(modal => {
        if (e.target === modal) modal.style.display = "none";
    });
});


/* ============================================================
   ACCORDION
============================================================ */
document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll(".accordion .item");

    items.forEach(item => {
        const title = item.querySelector(".title");
        const content = item.querySelector(".content");
        const plus = item.querySelector(".plus");

        title.addEventListener("click", () => {
            const open = content.style.display === "block";

            document.querySelectorAll(".accordion .content").forEach(c => c.style.display = "none");
            document.querySelectorAll(".accordion .plus").forEach(p => p.textContent = "+");

            if (!open) {
                content.style.display = "block";
                plus.textContent = "−";
            }
        });
    });
});


/* ============================================================
   ROTATING HERO BACKGROUND
============================================================ */
const heroImages = [
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
];


let heroIndex = 0;

function rotateHero() {
    const hero = document.getElementById("rotating-hero");
    hero.style.backgroundImage = `url('${heroImages[heroIndex]}')`;
    heroIndex = (heroIndex + 1) % heroImages.length;
}

rotateHero();
setInterval(rotateHero, 5000);


/* ============================================================
   SCROLL FADE-IN
============================================================ */
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.2 };

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => observer.observe(fader));
