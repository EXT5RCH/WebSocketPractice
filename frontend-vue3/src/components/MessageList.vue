<template>
  <ul :id="id">
    <li v-for="message in messages" :key="message">{{ message }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MessageList",

  props: {
    id: {
      type: String,
      default: "msglist",
    },
    messages: {
      type: Array,
      default: () => [],
    },
  },
});
</script>
