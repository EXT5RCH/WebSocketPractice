<template>
  <input :id="inputId" v-model="inputValue" type="text" />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "Form",

  props: {
    modelValue: {
      type: String,
      default: "",
    },
    inputId: {
      type: String,
      default: "msg",
    },
  },

  setup(props, context) {
    const inputValue = computed({
      get: () => {
        return props.modelValue;
      },
      set: (val: string) => {
        context.emit("update:modelValue", val);
      },
    });

    const handleClick = () => {
      context.emit("click");
    };
    return { inputValue, handleClick };
  },
});
</script>
