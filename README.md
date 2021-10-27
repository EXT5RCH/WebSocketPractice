# WebSocketPractice
WebSocketの使い方確認用リポジトリ

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
   - _frontend-vue3_ の場合
      - 未実施の場合は`npm i`を実行する。 
      - `npm run serve`を実行する。
4. Chrome のウィンドウを2つ開き、それぞれ`http://localhost:8080`にアクセスする。
5. テキスト入力⇒送信ボタン押下とすれば、両方に送信内容が表示されます。
