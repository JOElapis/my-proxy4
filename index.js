// index.js (修正版)

const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

// セキュリティとパース
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(cors());
app.use(express.json({ limit: '256kb' }));
app.use(express.urlencoded({ extended: true }));

// 静的ファイルの提供
const publicPath = path.join(__dirname, 'public'); // または '../public' → 構造に合わせる
app.use(express.static(publicPath));

// 動的ルート: /game/:gameName
app.get('/game/:gameName', (req, res) => {
  const gameName = req.params.gameName;
  const filePath = path.join(publicPath, 'game', `${gameName}.html`);
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).send('ゲームが見つかりません');
    }
  });
});

// 動的ルート: /blog/:blogName
app.get('/blog/:blogName', (req, res) => {
  const blogName = req.params.blogName;
  const filePath = path.join(publicPath, 'blog', `${blogName}.html`);
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).send('ブログが見つかりません');
    }
  });
});

// その他のルートは index.html にフォールバック（SPA風）
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// ポート設定
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// シグナルハンドリング
process.on('SIGINT', () => {
  console.log('Shutting down...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('Shutting down...');
  process.exit(0);
});   

// 個別のページルート
app.get('/proxy', (req, res) => {
  res.sendFile(path.join(publicPath, 'proxy.html'));
});

app.get('/test-proxy', (req, res) => {
  res.sendFile(path.join(publicPath, 'test-proxy.html'));
});

app.get('/blog', (req, res) => {
  res.sendFile(path.join(publicPath, 'blog.html'));
});

app.get('/no-history', (req, res) => {
  res.sendFile(path.join(publicPath, 'no-history.html'));
});

app.get('/game', (req, res) => {
  res.sendFile(path.join(publicPath, 'games.html'));
});

app.get('/music-player', (req, res) => {
  res.sendFile(path.join(publicPath, 'music-player.html'));
});

app.get('/youtube', (req, res) => {
  res.sendFile(path.join(publicPath, 'youtube.html'));
});

// 動的ルート: /game/:gameName
app.get('/game/:gameName', (req, res) => {
  const gameName = req.params.gameName;
  const filePath = path.join(publicPath, 'game', `${gameName}.html`);
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(err);
      res.status(404).send('ゲームが見つかりません');
    }
  });
});

// 動的ルート: /blog/:blogName
app.get('/blog/:blogName', (req, res) => {
  const blogName = req.params.blogName;
  const filePath = path.join(publicPath, 'blog', `${blogName}.html`);
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(err);
      res.status(404).send('運営が書いたブログが見つかりません');
    }
  });
});
