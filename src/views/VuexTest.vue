<template>
  <h1>Vuexテスト</h1>
  {{ name }}です
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CompositionTest from "./CompositionTest.vue";

export default defineComponent({
  name: "VuexTest",
  setup() {
    return {};
  },
});
</script>
