console.log("Perplexity Focus content script loaded.");

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
  const FIRST_BUTTON_SELECTOR = '[data-testid="sources-switcher-button"]';
  const SECOND_BUTTON_SELECTOR =
    "body > div:nth-child(15) > div > div.flex.items-center.justify-center > div > div > div > div > div > div > div > div > div > div:nth-child(1) > div > div > div.gap-x-sm.flex.items-start.pt-0\\.5 > div > button";

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
    console.error("Perplexity Focus Error:", error);
  }
}

clickButtons();
