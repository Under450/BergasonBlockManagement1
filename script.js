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
   ACCORDION
============================================================ */
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".accordion .item");

    items.forEach(item => {
        const title = item.querySelector(".title");
        const content = item.querySelector(".content");

        title.addEventListener("click", () => {
            const isOpen = content.style.display === "block";

            document.querySelectorAll(".accordion .content").forEach(c => {
                c.style.display = "none";
            });

            content.style.display = isOpen ? "none" : "block";
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
