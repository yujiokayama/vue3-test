<template>
  <div>
    <h1>Composition APIのテスト</h1>
    <h2>リアクティブなプロパティの宣言 ref, reactive</h2>
    <p>reactive: {{ state.messageOne }}</p>
    <p>ref: {{ messageTwo }}</p>
    <h2>computed</h2>
    {{ helloVue }}
    {{ helloMessage("hoge") }}

    <h2>v-modelの仕様変更(一つの要素に複数のプロパティを指定できる)</h2>
    <ChildTest v-model:name="state.name" v-model:age="state.age" />

    <h2>v-for</h2>
    <ul>
      <li v-for="member in state.memberList" :key="member.id">
        {{ member.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, ref, onMounted } from "vue";
import ChildTest from "../components/ChildTest.vue";

export default defineComponent({
  name: " CompositionTest",
  components: {
    ChildTest,
  },
  setup() {
    type Member = {
      id: number;
      name: string;
    };

    /**
     * reactive data
     */
    const state = reactive<{
      name: string;
      age: string;
      memberList: Member[];
      message: string;
    }>({
      name: "デフォルト",
      age: "",
      memberList: [
        {
          id: 1,
          name: "ポンタ",
        },
        {
          id: 2,
          name: "たぬきち",
        },
      ],
      message: "こんにちは",
    });
    const messageHello = ref<string>("こんにちは");

    /**
     * computed
     */
    const helloVue = computed(() => {
      return `${state.message} Vue3!!`;
    });
    const helloMessage = computed(() => (message: string) =>
      `こんにちは${message}!`
    );

    /**
     * lifecycle hook
     */
    onMounted(() => {
      console.log("is mounted");
    });

    return {
      state,
      messageHello,
      helloVue,
      helloMessage,
    };
  },
});
</script>
