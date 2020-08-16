<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">HOME</router-link></li>
        <li>
          <router-link to="/composition-test">CompositionTest</router-link>
        </li>
        <li><router-link to="/provide-inject-test">ProvideInjectTest</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
