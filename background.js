function runScriptOnPage(tabId, url) {
  const PERPLEXITY_URL = "https://www.perplexity.ai/";
  if (url && url === PERPLEXITY_URL) {
    console.log(`Perplexity page detected: ${url}. Injecting script.`);
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["scripts/content.js"],
    });
  }
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    runScriptOnPage(tabId, tab.url);
  }
});
