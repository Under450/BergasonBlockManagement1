// ACCORDIONS
const accordionItems = document.querySelectorAll(".accordion .item");

accordionItems.forEach(item => {
    item.querySelector(".title").addEventListener("click", () => {
        const content = item.querySelector(".content");
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});

// MODALS
function openModal(id) {
    document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}
