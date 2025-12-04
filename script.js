/* ============================================================
   MOBILE NAVIGATION
============================================================ */
function toggleMenu() {
    const nav = document.getElementById("mobileNav");
    nav.style.display = (nav.style.display === "flex") ? "none" : "flex";
}

/* Close mobile menu when clicking a link */
document.addEventListener("click", function(e) {
    if (e.target.closest("#mobileNav a")) {
        document.getElementById("mobileNav").style.display = "none";
    }
});


/* ============================================================
   ACCORDION WITH + ICON ROTATION
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

            /* Reset all + icons */
            document.querySelectorAll(".accordion .plus").forEach(p => {
                p.style.transform = "rotate(0deg)";
            });

            /* Toggle the clicked one */
            if (!isOpen) {
                content.style.display = "block";
                plus.style.transform = "rotate(45deg)";
            }
        });
    });
});


/* ============================================================
   MODALS (LEGAL + CASE LAW)
============================================================ */
function openModal(id) {
    document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

/* Close modal when clicking outside content */
window.addEventListener("click", function(e) {
    document.querySelectorAll(".modal").forEach(modal => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});


/* ============================================================
   HERO — SINGLE SLIDE SYSTEM (Option B)
============================================================ */

/* 
   Your hero uses only ONE slide (a single office desk photo).
   We keep the slideshow structure intact, but do NOT rotate.
   This preserves compatibility with your original codebase.
*/

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".hero-slide");

    /* If more slides ever get added, this will auto-rotate */
    if (slides.length > 1) {
        let current = 0;
        setInterval(() => {
            slides[current].classList.remove("active");
            current = (current + 1) % slides.length;
            slides[current].classList.add("active");
        }, 7000);
    }
});


/* ============================================================
   FASTER FADE-IN ON SCROLL (Option B)
============================================================ */
const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
    (entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15,      // triggers earlier when content is 15 percent visible
        rootMargin: "0px 0px -10px 0px"
    }
);

faders.forEach(el => observer.observe(el));
