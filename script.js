// Select the list element
const list = document.getElementById("list");

// Counter to keep track of item numbers
let count = 1;

// Function to add new list items
function addItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement("li");
    li.textContent = "Item " + count;
    list.appendChild(li);
    count++;
  }
}

// Add initial 10 items
addItems(10);

// Detect when user reaches bottom
window.addEventListener("scroll", () => {
  // Check if user is at bottom of the page
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    addItems(2); // Add 2 more items
  }
});
