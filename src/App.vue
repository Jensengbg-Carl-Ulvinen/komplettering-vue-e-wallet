<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Registration from "../src/views/Registration";
import Account from "../src/views/Account";

export default {
  name: 'App',
  components: {
    Registration,
    Account
  }
}
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
