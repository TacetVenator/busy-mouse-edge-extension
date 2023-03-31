// Create a button element
var button = document.createElement("button");
button.innerText = "Simulate Cursor Input";

// Add a click event listener to the button
button.addEventListener("click", function() {
  // Send a message to the background script to simulate cursor input
  chrome.runtime.sendMessage({ action: "simulate_cursor_input" });
});

// Append the button to the body of the web page
document.body.appendChild(button);
