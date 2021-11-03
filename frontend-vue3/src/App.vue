<template>
  <Form :modelValue="inputText" @update:modelValue="submit($event)" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useSocket } from "./composable/socket";
import Form from "./components/Form.vue";

export default defineComponent({
  name: "App",
  components: {
    Form,
  },
  setup() {
    const { inputText, submit } = useSocket();
    return { inputText, submit };
  },
});
</script>
