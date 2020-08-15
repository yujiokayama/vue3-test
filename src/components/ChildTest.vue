<template>
  {{ name }}
  {{ age }}
  <form>
    <label>name</label>
    <input type="text" @input="$emit('update:name', $event.target.value)" />
    <label>message</label>
    <input type="text" @input="$emit('update:age', $event.target.value)" />
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: " ChildTest",
  props: {
    name: {
      type: String,
      default: "",
    },
    age: {
      type: String,
      default: "",
    },
  },
});
</script>
