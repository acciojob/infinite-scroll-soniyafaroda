const list = document.getElementById("list");
let count = 0;

// ******** Add Initial 10 Items ********
function addInitialItems() {
  for (let i = 0; i < 10; i++) {
    addItem();
  }
}

// ******** Create and Append New List Item ********
function addItem() {
  count++;
  const li = document.createElement("li");
  li.textContent = "Item " + count;
  list.appendChild(li);
}

// ******** Detect Scroll to Bottom and Add 2 Items ********
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;

  if (scrollTop + windowHeight >= fullHeight - 5) {
    addItem();
    addItem();
  }
});

// ******** Start App ********
addInitialItems();
