<template>
  <h1>Composition APIのテスト</h1>
  <h2>リアクティブなプロパティの宣言</h2>
  <p>reactive: {{ state.message }}</p>

  <h2>ref($refsの代わり？)</h2>
  <div ref="refDivElement">refですよ</div>

  <h2>computed</h2>
  {{ helloVue }}
  {{ helloMessage('hoge') }}

  <h2>
    v-modelの仕様変更(一つのコンポーネント(要素)に複数のプロパティを指定できる)
  </h2>
  <ChildTest v-model:name="state.name" v-model:age="state.age" />

  <h2>v-for</h2>
  <ul>
    <li v-for="member in state.memberList" :key="member.id">
      {{ member.name }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, ref, onMounted } from 'vue'
import ChildTest from '../components/ChildTest.vue'

export default defineComponent({
  name: ' CompositionTest',
  components: {
    ChildTest
  },
  setup() {
    type Member = {
      id: number
      name: string
    }

    /**
     * reactive
     */
    const state = reactive<{
      name: string
      age: string
      memberList: Member[]
      message: string
    }>({
      name: 'デフォルト',
      age: '',
      memberList: [
        {
          id: 1,
          name: 'ポンタ'
        },
        {
          id: 2,
          name: 'たぬきち'
        }
      ],
      message: 'こんにちは'
    })

    /**
     * ref
     */

    const refDivElement = ref<HTMLDivElement>()

    /**
     * computed
     */
    const helloVue = computed(() => {
      return `${state.message} Vue3!!`
    })
    const helloMessage = computed(() => (message: string) =>
      `こんにちは${message}!`
    )

    /**
     * method
     */
    const methodTest = (str: string): void => {
      console.log(str)
    }


    /**
     * lifecycle hook
     */
    onMounted(() => {
      console.log('is mounted')
      console.log('is method')
      // ref
      console.log(refDivElement.value)
    })

    return {
      state,
      refDivElement,
      helloVue,
      helloMessage
    }
  }
})
</script>
