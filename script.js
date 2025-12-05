/* ============================================================
   MOBILE MENU
============================================================ */
function toggleMenu() {
    const nav = document.getElementById("mobileNav");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}


/* ============================================================
   ACCORDION
============================================================ */
document.querySelectorAll(".accordion .title").forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});
