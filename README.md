# Hello GitHub - Demo Site

GitHub Pagesを使用したシンプルなデモサイトです。

## 概要

このプロジェクトは「Hello GitHub」と表示するシンプルなデモサイトです。GitHub Pagesの機能を紹介するために作成されました。

## 特徴

- 📱 レスポンシブデザイン
- 🎨 モダンなUI/UX
- ⚡ 高速な読み込み
- 🔒 HTTPS対応（GitHub Pages標準）

## GitHub Pagesの設定

1. GitHubリポジトリの「Settings」タブに移動
2. 「Pages」セクションを見つける
3. 「Source」で「Deploy from a branch」を選択
4. 「Branch」で「main」を選択し、「/ (root)」を選択
5. 「Save」をクリック

数分後、以下のURLでサイトが公開されます：
`https://leadcast-lab.github.io/leadcast-demo/`

## ファイル構成

```
.
├── index.html      # メインページ
├── .nojekyll      # Jekyll無効化
└── README.md      # このファイル
```

## ローカルでの表示

HTMLファイルをブラウザで直接開くか、簡単なHTTPサーバーを立ち上げて表示できます：

```bash
# Python 3がインストールされている場合
python -m http.server 8000

# Node.jsがインストールされている場合
npx serve .
```

## カスタマイズ

`index.html`ファイルを編集することで、サイトの内容やデザインを自由にカスタマイズできます。

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。
