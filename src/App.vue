<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Registration from "@/views/Registration.vue";
import Account from "@/views/Account.vue";
import Change from "@/components/Change.vue"

export default {
  name: 'App',
  components: {
    Registration,
    Account,
    Change
  }
}

</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Titillium+Web&display=swap");

html {
  background: $white;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  font-family: 'Titillium Web', sans-serif;
  text-align: center;
  color: $black;
  width: 375px;
  height: 798px;
}
</style>
