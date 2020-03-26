<template>
<div class="account">
    <div class="header">
    <h1 class="headline">Välkommen!</h1></div>
    <p>Ditt konto</p>
    
    <label for="name">Namn</label>
    <input v-model="name" type="text" id="name" />
    <label for="email">Email</label>
    <input v-model="email" type="text" id="email" />
    <label for="password">Password</label>
    <input v-model="password" type="text" id="password" />
    
    <button @click="" class="btn">Ändra</button>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
</style>