<template>
  <h1>provide/injectテスト</h1>
  {{ state.count }}
  <button @click="increment">プラス</button>
  <button @click="decrement">マイナス</button>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TestLogic from '@/components/TestLogic'

export default defineComponent({
  name: 'ProvideInjectTest',
  setup() {
    const { state, increment, decrement } = TestLogic()
    return {
      state,
      increment,
      decrement
    }
  }
})
</script>
