<template>
  <h1>Vuexのテスト</h1>
  {{ state.counter }}
  2倍: {{ countDouble }}
  <button @click="setCount(10)">count up !!</button>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'VuexTest',
  setup() {
    const store = useStore()

    /**
     * state
     */
    const state = ref(store.state)

    /**
     * actions
     */
    const setCount = (count: number) => {
      store.dispatch('setCount', count)
    }

    /**
     * getters
     */
    const countDouble = computed(() => {
      return store.getters.countDouble
    })

    return {
      state,
      setCount,
      countDouble
    }
  }
})
</script>
