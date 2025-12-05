const list = document.getElementById("infi-list");
let count = 1;

// Add MANY items so list becomes scrollable immediately
for (let i = 0; i < 30; i++) {
  addItem();
}

function addItem() {
  const li = document.createElement("li");
  li.textContent = "Item " + count++;
  list.appendChild(li);
}

list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    // Add 2 more items
    addItem();
    addItem();
  }
});
