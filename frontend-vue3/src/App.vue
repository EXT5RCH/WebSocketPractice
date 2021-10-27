<template>
  <Form :modelValue="inputText" @update:modelValue="submit($event)" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Form from "./components/Form.vue";
import io from "socket.io-client";

export default defineComponent({
  name: "App",
  components: {
    Form,
  },
  setup() {
    const inputText = ref<string>("");

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
    const submit = (e: string) => {
      if (e === "") return false;

      // Socket.ioサーバへ送信
      socket.emit("post", { text: e });
    };

    socket.on("member-post", (msg) => {
      inputText.value = msg.text;
    });

    return { inputText, submit };
  },
});
</script>
