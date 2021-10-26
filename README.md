# WebSocketPractice
WebSocketの使い方確認用リポジトリ

# 概要
- frontend、backendに分ける必要は全くないのですが、興味本位で分けました。

# 使い方
1. firewallの設定
   - localの8080（フロントエンド用）,3000（バックエンド用）を解放する。
   - 検証だけなのでプライベートのみで大丈夫です。
2. backendを起動する。
   - `npm run build`を実行する。
   - `npm run start`を実行する。
3. frontendを起動する。
   - `npm run build`を実行する。
   - `npm run start`を実行する。
4. Chromeの「通常ウィンドウ」と「シークレットウィンドウ」でそれぞれ`http://localhost:8080`にアクセスする。
5. テキスト入力⇒送信ボタン押下とすれば、両方に送信内容が表示されます。
