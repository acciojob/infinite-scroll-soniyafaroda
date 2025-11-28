document.addEventListener("DOMContentLoaded", function () {
    const list = document.getElementById("list");
    let count = 1;

    function addListItem() {
        const li = document.createElement("li");
        li.textContent = "Item " + count;
        list.appendChild(li);
        count++;
    }

    function addInitialItems() {
        for (let i = 0; i < 10; i++) addListItem();
    }

    function handleScroll() {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            addListItem();
            addListItem();
        }
    }

    addInitialItems();
    window.addEventListener("scroll", handleScroll);
});
