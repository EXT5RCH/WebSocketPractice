<template>
  <div>
    <Form v-model="inputText" @click="submit" />
    <MessageList :messages="messages" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Form from "./components/Form.vue";
import MessageList from "./components/MessageList.vue";
import io from "socket.io-client";

export default defineComponent({
  name: "App",
  components: {
    Form,
    MessageList,
  },
  setup() {
    const inputText = ref<string>("");
    const messages = ref<string[]>([]);

    // サーバへ接続
    const socket = io("http://localhost:3000");

    // 接続時
    // 再接続するたびに新しいハンドラーが作られてしまう。
    // そのためこの中にイベントハンドラーは登録しない。
    socket.on("connect", () => {
      console.log(`connected:${socket.connected}`);
      console.log(`connected:${socket.id}`);
    });

    // 切断時
    socket.on("disconnect", () => {
      console.log(`connected:${socket.connected}`);
      console.log(`connected:${socket.id}`);
    });

    // 送信処理
    const submit = () => {
      if (inputText.value === "") return false;

      // Socket.ioサーバへ送信
      socket.emit("post", { text: inputText.value });

      // 発言フォームを空にする
      inputText.value = "";
    };

    socket.on("member-post", (msg) => {
      messages.value.push(msg.text);
    });

    return { inputText, messages, submit };
  },
});
</script>
