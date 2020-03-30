<template>
<div class="account">
    <div class="header">
    <h1 class="headline">Välkommen!</h1></div>
    <p>Ditt konto</p>
    
    <label for="name">Namn</label>
    <p>{{ form.name }}</p>
    <label for="email">Email</label>
    <p>{{ form.email }}</p>
    <label for="password">Password</label>
    <p>{{ form.password }}</p>
    
    <button type="button" class="btn">Ändra</button>

  </div>
</template>

<script>
import Registration from "@/views/Home.vue";

//need to import data from json localstorage so that user can change his info.
export default {
  data: () => {}};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
* {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
}

.account {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  width: auto;
  height: 90vh auto;

  .header {
    display: flex;
    justify-content: center;
    background: $grey;

    .headline {
      text-align: center;
    }
  }

  .button {
    padding-top: 1rem;
  }

  .btn {
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 1rem;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    background: $white;
    border: 1px solid $black;
  }
}
</style>