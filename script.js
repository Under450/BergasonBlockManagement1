function toggleMenu() {
    document.getElementById("mobileNav").classList.toggle("open");
}

document.querySelectorAll(".accordion .title").forEach(btn => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});
