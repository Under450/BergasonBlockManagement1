const items = document.querySelectorAll(".item");

items.forEach(item => {
    item.querySelector(".title").addEventListener("click", () => {
        const content = item.querySelector(".content");
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});
