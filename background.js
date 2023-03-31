// Listen for the button click event
chrome.browserAction.onClicked.addListener(function(tab) {
  // Simulate two mouse movements with a 2-second delay
  setTimeout(function() {
    chrome.tabs.executeScript(tab.id, { code: "document.dispatchEvent(new MouseEvent('mousemove', { clientX: 100, clientY: 100 }));" });
  }, 2000);
  
  setTimeout(function() {
    chrome.tabs.executeScript(tab.id, { code: "document.dispatchEvent(new MouseEvent('mousemove', { clientX: 200, clientY: 200 }));" });
  }, 4000);
});
