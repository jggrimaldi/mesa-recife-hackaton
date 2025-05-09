<template>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title><img height=150 class="mt-2" src="https://cdn.discordapp.com/attachments/1351620762502696992/1370408013801853010/mesa-recife-removebg-preview.png?ex=681f636b&is=681e11eb&hm=c5c140c036bada7492913c012d680563f5f5221c6bd343cb3786d91d3702951d&format=webp&quality=lossless&width=625&height=625" alt="logo"></v-toolbar-title>
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
  