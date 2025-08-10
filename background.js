// This script listens for when a tab is updated.
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Check if the tab has finished loading and the URL matches your target page.
  // This now targets perplexity.ai
  if (
    changeInfo.status === "complete" &&
    tab.url &&
    tab.url.includes("perplexity.ai")
  ) {
    // This line tells Chrome to run content.js inside the web page,
    // where 'document' exists.
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["content.js"],
    });
  }
});
