<template>
    <v-container>
      <v-card>
        <v-card-title class="headline">Tabela de Pontuação por Item</v-card-title>
        <v-data-table :headers="headers" :items="itens" class="elevation-1">
          <template v-slot:item.value="{ item }">
            <v-chip color="green" dark>{{ item.value }} Recifecoins</v-chip>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'ItensPoint',
    data() {
      return {
        headers: [
          { text: 'Item', align: 'start', value: 'item' },
          { text: 'Valor (Recifecoins)', value: 'value' },
        ],
        itens: [
          { item: 'Teclado', value: 5 },
          { item: 'Celular', value: 10 },
          { item: 'Monitor', value: 8 },
          { item: 'Computador', value: 15 },
          { item: 'Carregador', value: 3 },
          { item: 'Bateria', value: 6 },
          { item: 'Impressora', value: 12 },
          { item: 'Tablet', value: 10 },
          { item: 'Notebook', value: 15 },
          { item: 'Mouse', value: 4 },
          { item: 'Televisão', value: 20 },
          { item: 'DVD Player', value: 5 },
          { item: 'Modem', value: 7 },
          { item: 'Roteador', value: 7 },
          { item: 'Câmera Digital', value: 8 },
          { item: 'Console de Video Game', value: 12 },
          { item: 'Smartwatch', value: 5 },
          { item: 'Calculadora', value: 3 },
          { item: 'Secador de Cabelo', value: 6 },
          { item: 'Ventilador', value: 8 },
          { item: 'Aparelho de Fax', value: 10 },
          { item: 'Telefone Fixo', value: 4 },
          { item: 'Alto-Falante', value: 6 },
          { item: 'GPS Portátil', value: 5 },
          { item: 'Brinquedo Eletrônico', value: 3 },
          { item: 'Placa Mãe', value: 8 },
          { item: 'Placa de Vídeo', value: 7 },
          { item: 'Processador', value: 6 },
          { item: 'Memória RAM', value: 5 },
          { item: 'HD Externo', value: 7 },
          { item: 'SSD', value: 6 },
          { item: 'Fonte de Energia', value: 5 },
          { item: 'No-Break', value: 10 },
          { item: 'Relógio Digital', value: 4 },
          { item: 'Ferro de Passar', value: 6 },
          { item: 'Receptor de TV', value: 8 },
          { item: 'Projetor', value: 12 },
          { item: 'Apontador Laser', value: 4 },
          { item: 'Máquina de Barbear Elétrica', value: 5 },
          { item: 'Microfone', value: 4 },
          { item: 'Caixa de Som Bluetooth', value: 6 },
          { item: 'Video Game Portátil', value: 10 },
          { item: 'Webcam', value: 5 },
          { item: 'Walkman', value: 3 },
          { item: 'Discman', value: 3 },
          { item: 'Antena', value: 4 },
          { item: 'Controle Remoto', value: 2 },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Customizações de estilo para a tabela, se necessário */
  </style>
  