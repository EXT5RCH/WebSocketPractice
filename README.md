# WebSocketPractice
`socket.io`を使ってWebSocketについて勉強するためのリポジトリ

# 使い方
1. firewall の設定
   - localの8080（フロントエンド用）,3000（バックエンド用）を解放する。
   - 検証だけなのでプライベートのみで大丈夫です。
2. _backend_ を起動する。
   - 未実施の場合は`npm i`を実行する。
   - `npm run build`を実行する。
   - `npm run start`を実行する。
3. _frontend_ または _frontend-vue3_ を起動する。
   - _frontend_ の場合
      - 未実施の場合は`npm i`を実行する。 
      - `npm run build`を実行する。
      - `npm run start`を実行する。
      - Chrome のウィンドウを2つ開き、それぞれ`http://localhost:8080`にアクセスする。
      - テキスト入力⇒送信ボタン押下とすれば、両方に送信内容が表示されます。
   - _frontend-vue3_ の場合
      - 未実施の場合は`npm i`を実行する。 
      - `npm run serve`を実行する。
      - Chrome のウィンドウを2つ開き、それぞれ`http://localhost:8080`にアクセスする。
      - テキスト入力すれば、両方とも入力値が変更されます。（衝突の解決は未対応）
