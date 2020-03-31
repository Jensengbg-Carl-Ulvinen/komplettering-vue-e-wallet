<template>
<div class="account">
    <div class="header">
    <h1 class="headline">Välkommen!</h1></div>
    <p>Ditt konto</p>
    
    <label for="name">Namn</label>
    <p>{{ formName.name }}</p>
    <label for="email">Email</label>
    <p>{{ formEmail.email }}</p>
    <label for="password">Password</label>
    <p>{{ formPassword.password }}</p>
    
    <button type="button" class="btn">Ändra</button>

  </div>
</template>

<script>
import Registration from "@/views/Registration.vue";

//need to fetch data from loginForm so that user can change his info.

export default {
  data: () => {

  },
  methods: {
    loginFormValues () {
      this.output = this.$refs.name.value
      this.output = this.$refs.email.value
      this.output = this.$refs.password.value
    }
  }};
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