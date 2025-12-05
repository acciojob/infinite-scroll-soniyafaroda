const list = document.getElementById("infi-list");
let count = 1;

// Add initial 10 items
for (let i = 0; i < 10; i++) {
  addItem();
}

function addItem() {
  const li = document.createElement("li");
  li.textContent = "Item " + count++;
  list.appendChild(li);
}

list.addEventListener("scroll", () => {
  // Detect when scrolled to bottom
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItem();
    addItem();
  }
});
