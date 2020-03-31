<template>
    <div class="home">
  <div class="header">
    <h1 class="headline">Welcome onbord</h1>
  </div>
  <p>Registrera dig för ett konto</p>
  <form @submit.prevent="loginFormValues">
    <label for="name">Namn</label>
    <input v-model="formName" type="text" ref="name" />
    <label for="email">Email</label>
    <input v-model="formEmail" type="text" ref="email" />
    <label for="password">Password</label>
    <input v-model="formPassword" type="text" ref="password" />
  </form>
  <div class="button">
    <button type="button" v-on:click="onSubmit()" class="btn">Sign me up!</button>
  </div>
</div>
</template>

<script>
export default {
  data: () => {
    return {
      formName: '',
      formEmail: '',
      formPassword: ''
    }
  },
  methods: {
    updateloginFormValue(value) {
      this.loginFormValues = value;
    },
    onSubmit() {
      this.$router.push("/account");
      //this.$router.replace("/account");
      console.log('form submitted');
    }
  }
}
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
    cursor: pointer;
  }
}
</style>