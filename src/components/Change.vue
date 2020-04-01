<template>
    <div class="home">
  <div class="header">
    <h1 class="headline">Välkommen!</h1>
  </div>
  <p>Ditt konto</p>
  <form @submit.prevent="loginFormValues">
    <label for="name">Namn</label>
    <input v-model="formName" type="text" ref="name" :placeholder="[[ menu.name ]]"/>
    <label for="email">Email</label>
    <input v-model="formEmail" type="text" ref="email" :placeholder="[[ menu.email ]]"/>
    <label for="password">Password</label>
    <input v-model="formPassword" type="password" ref="password" :placeholder="[[ menu.password ]]" />
  </form>
  <div class="footer">
  <div class="button">
    <button type="button" v-on:click="onSubmit()" class="btn">Spara</button>
  </div>
  </div>
</div>
</template>
<script>
export default {
  
  computed: {
    menu(){
      return JSON.parse(localStorage.getItem("user"))
    }
  }, 

  methods: {
    onSubmit() {
      const user = {
        name: this.formName,
        email: this.formEmail,
        password: this.formPassword
      }
      localStorage.setItem("user", JSON.stringify(user))
      this.$router.push("/account");
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
      font-size: 26px;
      font-family: Titillium Web;
      font-style: normal;
      font-weight: 600;
      font-size: 26px;
      line-height: 80%;
      display: flex;
      align-items: center;
      text-align: center;
    }
  }

  p {
    display: flex;
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-family: Titillium Web;
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 80%;
  }

  label[for^="email"] {
    color: $red;
    font-size: 10px;
    padding-top: 1rem;
  }

  label[for^="name"] {
    color: $black;
    font-size: 10px;
    padding-top: 1rem;
  }

  label[for^="password"] {
    color: $black;
    font-size: 10px;
    padding-top: 1rem;
  }

  input {
    font-weight: normal;
    font-size: 18px;
  }

  .button {
    padding-top: 4rem;

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

input::placeholder {
  color: #000000;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
}
</style>