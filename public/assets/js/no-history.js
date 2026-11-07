// HTML
<button onclick="openNewWindow()">æ–°ã—ã„ã‚¦ã‚£ãƒ³ãƒ‰ã‚¦ã‚’é–‹ã</button>

// JavaScript
function openNewWindow() {
  // æ–°ã—ã„ã‚¦ã‚£ãƒ³ãƒ‰ã‚¦ã‚’é–‹ãã€about:blankã«è¨­å®šã™ã‚‹
  const newWindow = window.open('about:blank', '_blank');

  // æ–°ã—ã„ã‚¦ã‚£ãƒ³ãƒ‰ã‚¦ãŒæ­£ã—ãé–‹ã„ãŸã‹ç¢ºèªã™ã‚‹
  if (newWindow) {
    // æŒ¿å…¥ã™ã‚‹HTMLã‚³ãƒ³ãƒ†ãƒ³ãƒ„
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
          <title>about:blankãƒšãƒ¼ã‚¸</title>
          <style>
              body { font-family: sans-serif; background-color: #f0f0f0; margin: 20px; }
              h1 { color: #333; }
              p { color: #555; }
          </style>
      </head>
      <body>
          <h1>æ–°ã—ã„ã‚¦ã‚£ãƒ³ãƒ‰ã‚¦ã«è¡¨ç¤ºã•ã‚ŒãŸã‚³ãƒ³ãƒ†ãƒ³ãƒ„</h1>
          <p>ã“ã‚Œã¯ã€JavaScriptã§about:blankãƒšãƒ¼ã‚¸ã«æ›¸ãè¾¼ã¾ã‚ŒãŸå†…å®¹ã§ã™ã€‚</p>
      </body>
      </html>
    `;

    // æ–°ã—ã„ã‚¦ã‚£ãƒ³ãƒ‰ã‚¦ã®ãƒ‰ã‚­ãƒ¥ãƒ¡ãƒ³ãƒˆã«HTMLã‚’æ›¸ãè¾¼ã‚€
    newWindow.document.write(htmlContent);

    // ãƒ‰ã‚­ãƒ¥ãƒ¡ãƒ³ãƒˆã®æ›¸ãè¾¼ã¿ã‚’çµ‚äº†ã™ã‚‹ï¼ˆã“ã‚ŒãŒé‡è¦ï¼‰
    newWindow.document.close();
  }
}
