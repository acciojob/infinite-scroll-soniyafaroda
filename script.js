//your code here!
// Select the list container
const list = document.getElementById("list");

// Counter for list items
let count = 1;

// --- Add initial 10 items ---
function addInitialItems() {
    for (let i = 0; i < 10; i++) {
        addListItem();
    }
}

// --- Function to add ONE <li> item ---
function addListItem() {
    const li = document.createElement("li");
    li.textContent = "Item " + count;
    list.appendChild(li);
    count++;
}

// --- Add 2 more items when user reaches bottom ---
function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // User reached end → add 2 items
        addListItem();
        addListItem();
    }
}

// Initialize
addInitialItems();
window.addEventListener("scroll", handleScroll);


