// HTML
<button onclick="openNewWindow()">新しいウィンドウを開く</button>

// JavaScript
function openNewWindow() {
  // 新しいウィンドウを開き、about:blankに設定する
  const newWindow = window.open('about:blank', '_blank');

  // 新しいウィンドウが正しく開いたか確認する
  if (newWindow) {
    // 挿入するHTMLコンテンツ
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
          <title>about:blankページ</title>
          <style>
              body { font-family: sans-serif; background-color: #f0f0f0; margin: 20px; }
              h1 { color: #333; }
              p { color: #555; }
          </style>
      </head>
      <body>
          <h1>新しいウィンドウに表示されたコンテンツ</h1>
          <p>これは、JavaScriptでabout:blankページに書き込まれた内容です。</p>
      </body>
      </html>
    `;

    // 新しいウィンドウのドキュメントにHTMLを書き込む
    newWindow.document.write(htmlContent);

    // ドキュメントの書き込みを終了する（これが重要）
    newWindow.document.close();
  }
}