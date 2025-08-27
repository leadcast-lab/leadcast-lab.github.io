# LeadCast デモサイト

## 画面構成

```
/
├── index.html                      # メインランディングページ
├── .nojekyll                      # GitHub Pages設定ファイル
├── expert/                        # 専門家向けエリア（KNOWLEDGE CAST）
│   ├── login.html                # ログイン画面
│   ├── mypage.html              # マイページ（ダッシュボード）
│   ├── contact.html             # お問い合わせフォーム
│   ├── components/              # 共通コンポーネント
│   │   ├── header.html         # ヘッダーコンポーネント
│   │   └── sidebar.html        # サイドバーコンポーネント
│   ├── signup/                  # 新規登録フロー
│   │   ├── index.html          # 登録フロー入り口
│   │   ├── input.html          # 基本情報入力
│   │   ├── confirm.html        # 入力内容確認
│   │   └── thanks.html         # 登録完了
│   ├── password/               # パスワード関連
│   │   ├── reset.html          # パスワードリセット申請
│   │   └── valid.html          # 新パスワード設定
│   └── resources/              # 画像リソース
│       ├── expert_logo_b.png   # 黒背景用ロゴ
│       └── expert_logo_w.png   # 白背景用ロゴ
└── sponsor/                       # スポンサー向けエリア（LEADCAST）
    ├── login.html                # ログイン画面
    ├── mypage.html              # マイページ（ダッシュボード）
    ├── contact.html             # お問い合わせフォーム（VIP機能付き）
    ├── components/              # 共通コンポーネント
    │   ├── header.html         # ヘッダーコンポーネント
    │   └── sidebar.html        # サイドバーコンポーネント
    ├── password/               # パスワード関連
    │   ├── reset.html          # パスワードリセット申請
    │   └── valid.html          # 新パスワード設定（企業レベルセキュリティ）
    └── resources/              # 画像リソース
        ├── sponsor_logo_b.png  # 黒背景用ロゴ
        └── spnosor_logo_w.png  # 白背景用ロゴ
```

## 技術仕様

- 📱 **レスポンシブデザイン**: モバイル・タブレット・デスクトップ対応
- 🎨 **モダンなUI/UX**: CSS Grid・Flexbox活用
- ⚡ **高速な読み込み**: 軽量な設計
- 🔒 **HTTPS対応**: GitHub Pages標準セキュリティ
- 🔧 **コンポーネント設計**: 再利用可能なUI部品

## GitHub Pagesの設定

1. GitHubリポジトリの「Settings」タブに移動
2. 「Pages」セクションを見つける
3. 「Source」で「Deploy from a branch」を選択
4. 「Branch」で「main」を選択し、「/ (root)」を選択
5. 「Save」をクリック

数分後、以下のURLでサイトが公開されます：
`https://leadcast-lab.github.io/leadcast-demo/`

## ローカルでの表示

HTMLファイルをブラウザで直接開くか、簡単なHTTPサーバーを立ち上げて表示できます：

```bash
# Python 3がインストールされている場合
python -m http.server 8000

# Node.jsがインストールされている場合
npx serve .
```

## カスタマイズ

各HTMLファイルを編集することで、サイトの内容やデザインを自由にカスタマイズできます。
コンポーネント機能により、ヘッダーやサイドバーの変更は各コンポーネントファイルの編集で全体に反映されます。

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。
