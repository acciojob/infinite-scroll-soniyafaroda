const list = document.getElementById("infi-list");
let count = 0;

// Add initial 10 items
function addInitialItems() {
  for (let i = 0; i < 10; i++) {
    addItem();
  }
}

// Add a single item
function addItem() {
  count++;
  const li = document.createElement("li");
  li.textContent = "Item " + count;
  list.appendChild(li);
}

// Infinite scroll logic: add 2 items at bottom
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;

  if (scrollTop + windowHeight >= fullHeight - 5) {
    addItem();
    addItem();
  }
});

// Start with 10 items
addInitialItems();
