<template>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title><img height=150 class="mt-2" src="./assets/logo1.webp" alt="logo"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="$emit('navigate', 'map')">Minha Caixa</v-btn>
      <v-btn text @click="$emit('navigate', 'ranking')">Ranking</v-btn>
      <v-btn text @click="$emit('navigate', 'minhaCaixa')">Usuário</v-btn>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    name: "Navbar"
  };
  </script>
  
  <style scoped>
  .text-h6 {
    font-weight: bold;
  }
  </style>
  