<template>
  <h1>Vuexのテスト</h1>
  {{ count.counter }}
  <button @click="setCount(10)">count up !! </button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'VuexTest',
  setup() {

    const store = useStore();
    const count = ref(store.state);
    const setCount = (count: number) => {
      store.dispatch("setCount", count);
    };

    return {
      count,
      setCount,
    }
  }
})
</script>
