function toggleMenu() {
    document.getElementById("mobileNav").classList.toggle("open");
}

document.querySelectorAll(".title").forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});
