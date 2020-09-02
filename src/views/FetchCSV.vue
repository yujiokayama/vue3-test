<template>
  <h1>CSVをJSONに変換する</h1>
  <div class="container">
    <ul>
      <li v-for="(csv, i) in state.csv" :key="i">
        {{ csv }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'

export default defineComponent({
  name: 'FetchCSV',
  setup() {
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
        state.csv = convertCSVtoArray(req.responseText)
      }
    }

    function convertCSVtoArray(csv: any) {
      var csvData = csv.split('\n')
      var jsonArray = []
      var items = csvData[0].split(',')
      for (var i = 1; i < csvData.length - 1; i++) {
        var a_line: any = new Object()
        var csvArrayD = csvData[i].split(',')
        for (var j = 0; j < items.length; j++) {
          a_line[items[j]] = csvArrayD[j]
        }
        jsonArray.push(a_line)
      }
      console.log(jsonArray)
      return jsonArray
    }

    /**
     * lifecycle hook
     */
    onMounted(() => {
      fetchJSON().then(data => {
        state.json = data
      })
      // fetchCSV().then(data => {
      //   state.csv = data
      // })
      getCSV()
    })
    return {
      state
    }
  }
})
</script>

<style lang="css" scoped>
.container {
  text-align: left;
}
</style>
