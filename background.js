chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === "complete" &&
    tab.url &&
    tab.url.includes("perplexity.ai")
  ) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["scripts/content.js"],
    });
  }
});
