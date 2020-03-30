<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Home from "../src/views/Home.vue";
import Account from "../src/views/Account.vue";

export default {
  name: 'App',
  components: {
    Home,
    Account
  }
}

</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Titillium+Web&display=swap");

html {
  background: $white;
  max-width: 100vw;
  height: auto;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  font-family: 'Titillium Web', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $black;
  margin-top: 60px;
  width: 37.5rem;
  min-height: 66.7rem;
}
</style>
