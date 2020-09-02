<template>
  <h1>CSVをJSONに変換する</h1>
  <div class="container">
    <ul>
      <li v-for="(data, i) in state.csv" :key="i" ref="refCSV">
        {{ data.lastUpdate }}
        {{ data.description }}
        <a :href="data.srcurl_pdf">{{ data.srcurl_pdf }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import * as d3 from 'd3'

export default defineComponent({
  name: 'FetchCSV',
  setup() {
    /**
     * ref
     */

    const refCSV = ref<HTMLDataListElement>()

    /**
     * reactive
     */
    const state = reactive<{
      json: any
      csv: any
    }>({
      json: null,
      csv: null
    })

    const fetchJSON = async () => {
      const res = await fetch(
        'https://test-restapi-654bc.firebaseio.com/members.json'
      )
      if (res.ok) {
        return await res.json()
      } else {
        throw new Error('fetch error')
      }
    }

    const fetchCSV = async () => {
      const res = await fetch(
        'https://storage.googleapis.com/y-o-test-bucket/covid19japan-all.csv'
      )
      if (res.ok) {
        return await res.text()
      } else {
        throw new Error('fetch error')
      }
    }

    function getCSV() {
      var req = new XMLHttpRequest()
      req.open(
        'get',
        'https://storage.googleapis.com/y-o-test-bucket/covid19japan-all.csv',
        true
      )
      req.send(null)
      req.onload = function() {
        state.csv = req.responseText
      }
    }

    /**
     * lifecycle hook
     */
    onMounted(() => {
      d3.csv(
        'https://storage.googleapis.com/y-o-test-bucket/covid19japan-all.csv'
      )
        .then(function(data) {
          var result = []
          for (var i = 0; i < data.length; i++) {
            result.push(data[i])
          }
          state.csv = result
        })
        .catch(function(error) {
          console.log(error)
        })
    })
    return {
      state,
      refCSV
    }
  }
})
</script>

<style lang="css" scoped>
.container {
  text-align: left;
}
</style>
