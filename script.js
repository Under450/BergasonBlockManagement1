function toggleMenu() {
    const nav = document.getElementById("mobileNav");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

function openModal(id) {
    alert("Full legal text for: " + id + "\n(Modal system can be added if you want full pop-ups)");
}
