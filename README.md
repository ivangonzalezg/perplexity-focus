# Perplexity Focus 🔎

**Perplexity Focus** is a simple yet powerful Chrome extension designed to streamline your experience on Perplexity.ai. It automatically disables the web search feature, allowing you to get straight to the AI's core knowledge base without external search results.

---

## 🚀 Installation

To install and use this extension, follow these simple steps:

1.  **Download the Files**: Make sure you have all the extension files (`manifest.json`, `background.js`, `content.js`, and the `images` folder) in a single folder on your computer.

2.  **Open Chrome Extensions**: Open Google Chrome, navigate to `chrome://extensions`, or click the puzzle piece icon in the toolbar and select "Manage Extensions."

3.  **Enable Developer Mode**: In the top-right corner of the Extensions page, toggle the **Developer mode** switch to "On."

4.  **Load the Extension**: Click the **Load unpacked** button that appears on the top-left.

5.  **Select the Folder**: In the file selection window, choose the folder where you saved the extension files and click "Select."

The "Perplexity Focus" extension is now installed and will activate automatically whenever you visit `perplexity.ai`.

---

## ✨ How It Works

The extension patiently waits for the Perplexity page to finish loading. Once the page is ready, it performs the following actions automatically:

1.  **Locates the "Focus" button** that controls the search mode.
2.  **Clicks the "Focus" button** to open the search options.
3.  **Locates "Web Search" option** and clicks it to disable it.
4.  **Clicks the "Focus" button again** to close the menu.

This ensures that your session starts with the web search feature turned off, providing a more focused interaction with the AI.

---

## 🔧 Customization

Websites change their code from time to time. If Perplexity updates its interface and the extension stops working, you may need to update the button selectors.

You can do this by editing the `content.js` file and updating the `FIRST_BUTTON_SELECTOR` and `SECOND_BUTTON_SELECTOR` variables. Instructions on how to find these selectors are included as comments within the file.
