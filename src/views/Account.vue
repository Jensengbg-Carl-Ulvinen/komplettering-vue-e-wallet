<template>
<div class="account">
    <div class="header">
    <h1 class="headline">Välkommen!</h1></div>
     
    <p>Ditt konto</p>
    <label for="name">Namn</label>
    <h2>{{ menu.name }}</h2>
    <label for="email">Email</label>
    <h2>{{ menu.email }}</h2>
    <label for="password">Password</label>
    <h2>{{ menu.password }}</h2>
    <div class="button">
    <button type="button" v-on:click="changeInfo" class="btn">Ändra</button>
    </div>
     
    <!--
    <template v-if="changeInfo()">
    <form @submit.prevent="loginFormValues">
    <label for="name">Namn</label>
    <input v-model="formName" type="text" ref="name" />
    <label for="email">Email</label>
    <input v-model="formEmail" type="text" ref="email" />
    <label for="password">Password</label>
    <input v-model="formPassword" type="password" ref="password" />
  </form>
  <div class="footer">
  <div class="button">
    <button type="button" v-on:click="onSubmit()" class="btn">Spara</button>
  </div>
  </div>
     </template>
     -->


  </div>
</template>

<script>
import Registration from "@/views/Registration.vue";
import Change from "@/components/Change.vue"

export default {
  computed: {
    menu() {
      return JSON.parse(localStorage.getItem("user"))
    }
  },
  methods: {
    changeInfo() {
      this.$router.push("/change");
    }
  }
};
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

  p {
    display: flex;
    text-align: center;
  }

  label {
    color: rgb(53, 53, 53);
    font-size: 14px;
    font-weight: 600;
  }

  h2 {
    font-size: 14px;
    font-weight: 300;
  }
  .button {
    margin-top: 1rem;

    .btn {
      display: flex;
      justify-content: center;
      text-align: center;
      padding: 1rem;
      font-family: Avenir, Helvetica, Arial, sans-serif;
      background: $white;
      font-size: 1.1rem;
      font-weight: 600;
      border: 1px solid $black;
      cursor: pointer;
    }
  }
}
</style>