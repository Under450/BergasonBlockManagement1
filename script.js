/* ============================================================
   MOBILE NAVIGATION
============================================================ */
function toggleMenu() {
    const nav = document.getElementById("mobileNav");
    nav.style.display = (nav.style.display === "flex") ? "none" : "flex";
}

/* Close mobile nav when clicking a link */
document.addEventListener("click", function(e) {
    if (e.target.closest("#mobileNav a")) {
        document.getElementById("mobileNav").style.display = "none";
    }
});


/* ============================================================
   ACCORDION — STRUCTURE 1 (NO BUTTON TAGS)
============================================================ */
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".accordion .item");

    items.forEach(item => {
        const title = item.querySelector(".title");
        const content = item.querySelector(".content");
        const plus = item.querySelector(".plus");

        title.addEventListener("click", () => {
            const isOpen = content.style.display === "block";

            /* Close all first */
            document.querySelectorAll(".accordion .content").forEach(c => {
                c.style.display = "none";
            });
            document.querySelectorAll(".accordion .plus").forEach(p => {
                p.textContent = "+";
            });

            /* Open selected */
            if (!isOpen) {
                content.style.display = "block";
                plus.textContent = "-";
            }
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

/* Close modal when clicking outside */
window.addEventListener("click", function(e) {
    document.querySelectorAll(".modal").forEach(modal => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});


/* ============================================================
   FADE-IN ON SCROLL
============================================================ */
const faders = document.querySelectorAll(".fade-in");

const observerOptions = {
    threshold: 0.25,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
    });
}, observerOptions);

faders.forEach(el => appearOnScroll.observe(el));
