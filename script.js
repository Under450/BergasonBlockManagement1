/* -----------------------
   ACCORDION
------------------------ */
document.querySelectorAll(".accordion .title").forEach(btn => {
    btn.addEventListener("click", () => {
        let content = btn.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});

/* -----------------------
   MODALS
------------------------ */
function openModal(id) {
    document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

/* Close modal when clicking outside */
document.querySelectorAll(".modal").forEach(m => {
    m.addEventListener("click", e => {
        if (e.target === m) m.style.display = "none";
    });
});

/* -----------------------
   ROTATING HERO IMAGE
------------------------ */
const heroImages = [
    "hero1.jpg",
    "hero2.jpg",
    "hero3.jpg"
];

let index = 0;
function rotateHero() {
    index = (index + 1) % heroImages.length;
    document.getElementById("rotating-hero").style.backgroundImage =
        `url(${heroImages[index]})`;
}
setInterval(rotateHero, 6000);
