<template>
  <div>
    <h1>Composition APIのテスト</h1>
    <h2>リアクティブなプロパティの宣言 ref, reactive</h2>
    <p>reactive: {{ state.messageOne }}</p>
    <p>ref: {{ messageTwo }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

type HogeType<T, S> = {
  name: T;
  age: S;
};

const hogeTypeObj: HogeType<string, number> = {
  name: "hoge",
  age: 50,
};

export default defineComponent({
  name: " CompositionTest",
  setup() {
    const state = reactive<{ messageOne: string }>({
      messageOne: "Hello",
    });
    const messageTwo = ref<string>("こんにちは");

    return {
      state,
      messageTwo,
    };
  },
});
</script>
