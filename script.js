const list = document.getElementById("infi-list");

let count = 1;

// Add 10 default items
function initialLoad() {
    for (let i = 0; i < 10; i++) {
        addItem();
    }
}

// Add one list item
function addItem() {
    const li = document.createElement("li");
    li.textContent = `Item ${count++}`;
    list.appendChild(li);
}

// Detect scroll to end
list.addEventListener("scroll", function () {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
        addItem();
        addItem();
    }
});

initialLoad();
