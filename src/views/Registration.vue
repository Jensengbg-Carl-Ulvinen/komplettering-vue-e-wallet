<template>
<div class="register">
    <div class="header">
    <h1 class="headline">Welcome onbord</h1></div>
    <p>Registrera dig för ett konto</p>
    
    <label for="name">Namn</label>
    <input v-model="name" type="text" id="name" />
    <label for="email">Email</label>
    <input v-model="email" type="text" id="email" />
    <label for="password">Password</label>
    <input v-model="password" type="text" id="password" />
    
    <button @click="registerUser" class="btn">Sign me up</button>

  </div>
</template>

<script>
export default {
  data: () => {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    registerUser() {
      if (this.password === true) {
        const user = { name: this.name, email: this.email, password: this.password };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
</style>