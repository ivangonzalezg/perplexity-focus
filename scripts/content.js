console.log("Perplexity Focus content script loaded.");

const FIRST_BUTTON_SELECTOR = '[data-testid="sources-switcher-button"]';
const SECOND_BUTTON_SELECTOR = ".absolute .scrollbar-subtle button";

function waitForElement(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function clickButtons() {
  try {
    await sleep(100);
    const firstButton = await waitForElement(FIRST_BUTTON_SELECTOR);
    firstButton.click();
    await sleep(100);

    const secondButton = await waitForElement(SECOND_BUTTON_SELECTOR);
    secondButton.click();
    await sleep(100);

    const firstButtonAgain = await waitForElement(FIRST_BUTTON_SELECTOR);
    firstButtonAgain.click();

    console.log("Perplexity Focus sequence complete!");
  } catch (error) {
    console.error("Auto Clicker Error:", error);
  }
}

clickButtons();
