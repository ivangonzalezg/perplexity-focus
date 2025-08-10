/**
 * This script is injected into the target web page.
 * Its job is to find and click the two buttons in sequence.
 */

console.log("Auto Clicker content script loaded.");

// --- IMPORTANT ---
// You MUST replace these placeholder selectors with the actual selectors for your buttons.
// To find a button's selector:
// 1. Right-click the button on the webpage and choose "Inspect".
// 2. The developer tools will open, highlighting the button's HTML.
// 3. Right-click the highlighted HTML, go to "Copy" > "Copy selector".
// 4. Paste the copied selector below.
const FIRST_BUTTON_SELECTOR = '[data-testid="sources-switcher-button"]'; // e.g., '#submit-button' or '.btn-primary'
const SECOND_BUTTON_SELECTOR = ".absolute .scrollbar-subtle button"; // e.g., '#confirm-action' or '[data-testid="final-step"]'

/**
 * A function that waits for an element to appear in the page and then returns it.
 * @param {string} selector - The CSS selector of the element to wait for.
 * @returns {Promise<Element>} - A promise that resolves with the element when it's found.
 */
function waitForElement(selector) {
  return new Promise((resolve) => {
    // First, check if the element already exists.
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    // If not, use a MutationObserver to watch for changes in the page.
    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect(); // Stop observing once the element is found.
      }
    });

    // Start observing the entire document for additions of new elements.
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

/**
 * The main function to run the button-clicking logic.
 */
async function clickButtons() {
  try {
    console.log(
      `Waiting for the first button with selector: ${FIRST_BUTTON_SELECTOR}`
    );
    const firstButton = await waitForElement(FIRST_BUTTON_SELECTOR);
    console.log("First button found! Clicking it.");
    firstButton.click();

    console.log(
      `Waiting for the second button with selector: ${SECOND_BUTTON_SELECTOR}`
    );
    const secondButton = await waitForElement(SECOND_BUTTON_SELECTOR);
    console.log("Second button found! Clicking it.");
    secondButton.click();

    console.log(
      `Waiting for the first button again with selector: ${FIRST_BUTTON_SELECTOR}`
    );
    const firstButtonAgain = await waitForElement(FIRST_BUTTON_SELECTOR);
    console.log("First button found again! Clicking it.");
    firstButtonAgain.click();

    console.log("Auto-clicking sequence complete!");
  } catch (error) {
    console.error("Auto Clicker Error:", error);
  }
}

// Run the main function.
clickButtons();
