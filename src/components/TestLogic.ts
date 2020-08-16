import { defineComponent, computed, reactive, ref, onMounted } from "vue";

export default defineComponent({
  name: "TestLogic",
  setup() {
    /**
     * reactive
     */
    const state = reactive<{
      name: string;
    }>({
      name: "デフォルト",
    });

    return {
      state,
    };
  },
});
