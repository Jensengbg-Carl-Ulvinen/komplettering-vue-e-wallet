<template>
<div class="home">
  <div class="header">
    <h1 class="headline">Welcome onbord</h1>
  </div>
  <p>Registrera dig för ett konto</p>
  <form @submit.prevent="form">

    <label for="name">Namn</label>

    <input v-model="form.name" type="text" id="name" />

    <label for="email">Email</label>

    <input v-model="form.email" type="text" id="email" />

    <label for="password">Password</label>

    <input v-model="form.password" type="text" id="password" />

  </form>

  <div class="button">

    <button type="button" v-on:click="createUser()" class="btn">Sign me up!</button>

  </div>
</div>


</template>

<script>

  export default {

    data() {
      return {
        form: {
          name: "",
          email: "",
          password: ""
        },
        forms: []
      };
    },
    methods: {
      createUser() {
        if (this.form.isValid === true) {
          if (localStorage.getItem("forms")) {
            this.forms = JSON.parse(localStorage.getItem("forms"));
            this.forms.push(this.form);
            localStorage.setItem("forms", JSON.stringify(this.forms));
          } else {
            this.forms.push(this.form);
            localStorage.setItem("forms", JSON.stringify(this.forms));
          }
          this.$router.push("/account");
        }
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

.home {
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