document.addEventListener('DOMContentLoaded', () => {
    // 記事データ（新しい記事はここに追加）
    const blogPosts = [
        {
            title: "はいにゅーURL------",
            date: "2025-10-06",
            content: "このサイト、renderっていう、作ったコードをサイトにしてくれるアプリで作ってるんだけど、ゲームサイトを作ろうとしたらrenderが垢banしやがった()今後、「This service has been suspended by its owner.」ってでたら、URLの数字(例:03)を一個増やして(例:04)ね。"
        },
        {
            title: "ちっくたっく",
            date: "2025-09-30",
            content: "なんかさ、ちっくたっくのサイト見つけたから埋め込もうと思うんだけど、中国に監視されたらいやじゃね？ウイルス送り込まれそう(?)"
        },
        {
            title: "サイトリニューアルのお知らせ",
            date: "2025-09-30",
            content: "なんか一口ブログを作ってみたり。うーん。たまにバージョンアップとかも入れたい。"
        }
    ];

    const blogContainer = document.getElementById('blog-container');

    // 記事データをループしてHTMLを生成
    blogPosts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.classList.add('blog-post');

        const title = document.createElement('h2');
        title.textContent = post.title;

        const date = document.createElement('span');
        date.classList.add('post-date');
        date.textContent = post.date;

        const content = document.createElement('p');
        content.textContent = post.content;

        postElement.appendChild(title);
        postElement.appendChild(date);
        postElement.appendChild(content);
        blogContainer.appendChild(postElement);
    });
});
