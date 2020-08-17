import { reactive } from 'vue'

const TestLogic = () => {
  /**
   * state
   */
  const state = reactive<{
    count: number
  }>({
    count: 0
  })

  /**
   * logic
   */
  const increment = () => state.count++
  const decrement = () => state.count--

  return {
    state,
    increment,
    decrement
  }
}

export default TestLogic



