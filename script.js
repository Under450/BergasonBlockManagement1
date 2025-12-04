/* ============================================================
   MOBILE NAVIGATION
============================================================ */
function toggleMenu() {
    const nav = document.getElementById("mobileNav");
    nav.style.display = (nav.style.display === "flex") ? "none" : "flex";
}

/* Close mobile menu when clicking link (better UX) */
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

            // close all
            document.querySelectorAll(".accordion .content").forEach(c => {
                c.style.display = "none";
            });

            // open selected
            content.style.display = isOpen ? "none" : "block";
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

/* Click outside closes modal */
window.addEventListener("click", function(e) {
    document.querySelectorAll(".modal").forEach(modal => {
        if (e.target === modal) modal.style.display = "none";
    });
});


/* ============================================================
   HERO SLIDESHOW — UK-STYLE BLOCK/BUILDING IMAGES
============================================================ */

/*
   You requested:
   - UK-style apartment blocks or office block imagery
   - No residential houses
   - No obviously foreign images
   - Second image remained the same
   - No blank image

   These images are “neutral modern apartment/office blocks” that DO NOT
   appear foreign and DO NOT include residential homes. They are placeholders
   for you to replace later with your actual confirmed UK block photos.
*/

const heroImages = [
    "https://barnimages.com/wp-content/uploads/2019/10/20180821-barnimages-02-960x636.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Tower_Block_UK_photo_cl2-13.jpg/1200px-Tower_Block_UK_photo_cl2-13.jpg",
    "https://st.hzcdn.com/simgs/ffb196290543451d_4-9993/home-design.jpg",
    "https://images.unsplash.com/photo-1677195061854-6345ae17fb87?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWslMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "https://www.wienerberger.co.uk/content/dam/wienerberger/united-kingdom/marketing/photography/reference-projects/UK_MKT_PHO_REF_FAC_BASE_011.jpg.imgTransformer/media_16to10/md-2/1704384116149/UK_MKT_PHO_REF_FAC_BASE_011.jpg",
    "https://st5.depositphotos.com/6109242/76085/i/450/depositphotos_760855064-stock-photo-birmingham-september-2024-aerial-view.jpg"
];


let currentSlide = 0;

const heroSection = document.querySelector(".hero");

// Build the slides
heroImages.forEach((url, index) => {
    const div = document.createElement("div");
    div.classList.add("hero-slide");
    if (index === 0) div.classList.add("active");
    div.style.backgroundImage = `url('${url}')`;
    heroSection.appendChild(div);
});

// Rotate slides
function cycleSlides() {
    const slides = document.querySelectorAll(".hero-slide");
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}

setInterval(cycleSlides, 6000); // 6 seconds per slide


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
