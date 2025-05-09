<template>
    <v-card class="mx-auto my-5" max-width="600">
      <v-card-title class="text-h5 text-center">Ranking de Usuários </v-card-title>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item-group>
          <v-list-item v-for="(user, index) in users" :key="user.id">
            <v-list-item-content>
              <v-list-item-title>
                <span :class="['rank', { 'top-user': index === 0 }]">#{{ index + 1 }}</span>
                <span>{{ user.name }}</span>
              </v-list-item-title>
              <v-list-item-subtitle>Toneladas  {{ user.points }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar color="indigo lighten-2" size="36">
              <span class="white--text">{{ user.points }}</span>
            </v-list-item-avatar>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </template>
  
  <script>
  export default {
    name: "UserRanking",
    data() {
      return {
        users: [
          { id: 1, name: "Feira de Casa Amarela", points: 150 },
          { id: 2, name: "Feira da Encruzilhada", points: 140 },
          { id: 3, name: "Feira da Madalena", points: 130 },
          { id: 4, name: "Feira de Água Fria", points: 120 },
          { id: 5, name: "Feira da Várzea", points: 110 },
          { id: 6, name: "Feira do Cordeiro", points: 100 },
          { id: 7, name: "Feira de Beberibe", points: 90 },
          { id: 8, name: "Feira de Afogados", points: 80 },
          { id: 9, name: "Feira da Mustardinha", points: 70 },
          { id: 10, name: "Feira da UR-01", points: 60 }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .rank {
    font-weight: bold;
    margin-right: 10px;
  }
  .top-user {
    color: gold;
  }
  </style>
  