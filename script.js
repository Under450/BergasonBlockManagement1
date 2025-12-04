/* ============================================================
   MOBILE NAVIGATION
============================================================ */
function toggleMenu() {
    const nav = document.getElementById("mobileNav");
    nav.style.display = (nav.style.display === "flex") ? "none" : "flex";
}

document.addEventListener("click", function(e) {
    if (e.target.closest("#mobileNav a")) {
        document.getElementById("mobileNav").style.display = "none";
    }
});


/* ============================================================
   ACCORDION — UPDATED FOR ORANGE + ACTIVE STATE
============================================================ */
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".accordion .item");

    items.forEach(item => {
        const title = item.querySelector(".title");
        const content = item.querySelector(".content");

        title.addEventListener("click", () => {
            const isOpen = content.style.display === "block";

            document.querySelectorAll(".accordion .content").forEach(c => c.style.display = "none");
            document.querySelectorAll(".accordion .title").forEach(t => t.classList.remove("active-title"));

            if (!isOpen) {
                content.style.display = "block";
                title.classList.add("active-title");
            }
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

window.addEventListener("click", function(e) {
    document.querySelectorAll(".modal").forEach(modal => {
        if (e.target === modal) modal.style.display = "none";
    });
});


/* ============================================================
   HERO IMAGE (single background)
============================================================ */

document.querySelector(".hero").style.backgroundImage =
    "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1950&q=80')";


/* ============================================================
   FADE-IN EFFECT
============================================================ */
const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

faders.forEach(f => observer.observe(f));
