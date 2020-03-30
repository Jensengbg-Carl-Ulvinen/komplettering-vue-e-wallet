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
