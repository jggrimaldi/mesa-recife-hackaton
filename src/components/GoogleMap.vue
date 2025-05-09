<template>
  <div>
    <h2 style="text-align: center; color: black;">Feiras parceiras e cozinha solidárias</h2>
    <p style="text-align: center; color: black;">
      Clique em um dos marcadores no mapa abaixo para ver detalhes sobre cada feira e cozinhas solidárias parceiras do projeto.
    </p>
    <gmap-map
      :center="center"
      :zoom="16"
      style="width: 100%; height: 500px; background-color: black;"
    >
      <gmap-marker
        v-for="(marker, index) in markers"
        :key="index"
        :position="marker.position"
        :title="marker.title"
        :clickable="true"
        :draggable="false"
        @click="showDetails(marker)"
      ></gmap-marker>
    </gmap-map>

    <div v-if="selectedMarker" style="background-color: white; padding: 20px; margin-top: 20px;">
      <h3>{{ selectedMarker.title }}</h3>
      <img :src="selectedMarker.image" alt="Material do lixo" style="max-width: 200px; margin-bottom: 15px;" />
      <p><strong>Descrição:</strong> {{ selectedMarker.description }}</p>
      <p><strong>Capacidade Máxima:</strong> {{ selectedMarker.maxCapacity }} kg</p>
      <p><strong>Ocupado:</strong> {{ selectedMarker.occupiedCapacity }} kg</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: -8.0476, lng: -34.8770 }, // Centro de Recife
      markers: [
        {
          position: { lat: -8.0475, lng: -34.8769 },
          title: "Feira de Casa Amarela",
          description: "Cesta de composto: URGENTE!! // Cestas de Doção: 3 bananas, 2 maçãs e 1 mamão",
          image: "https://media.discordapp.net/attachments/1351620762502696992/1370463068261454026/Imagem_do_WhatsApp_de_2025-05-09_as_11.48.20_24c6e25e.jpg?ex=681f96b1&is=681e4531&hm=188aa1098fc5d5d398e727d9b23554758bc67af7fe87f07abd24fe97122c3118&=&format=webp&width=694&height=694",
          maxCapacity: 100, // kg
          occupiedCapacity: 90, // kg
        },
        {
          position: { lat: -8.0480, lng: -34.8775 },
          title: "Feira da Encruzilhada",
          description: "Cesta de composto: Vazia // Cestas de Doção: 9 maçãs e 3 mamões",
          image: "https://media.discordapp.net/attachments/1351620762502696992/1370463068261454026/Imagem_do_WhatsApp_de_2025-05-09_as_11.48.20_24c6e25e.jpg?ex=681f96b1&is=681e4531&hm=188aa1098fc5d5d398e727d9b23554758bc67af7fe87f07abd24fe97122c3118&=&format=webp&width=694&height=694",
          maxCapacity: 100, // kg
          occupiedCapacity: 50, // kg
        },
        {
          position: { lat: -8.0490, lng: -34.8780 },
          title: "Feira da Madalena",
          description: "cesta de composto: Cheia // Cestas de Doção: 1 bananas, 6 maçãs e 1 abacaxi",
          image: "https://media.discordapp.net/attachments/1351620762502696992/1370463068261454026/Imagem_do_WhatsApp_de_2025-05-09_as_11.48.20_24c6e25e.jpg?ex=681f96b1&is=681e4531&hm=188aa1098fc5d5d398e727d9b23554758bc67af7fe87f07abd24fe97122c3118&=&format=webp&width=694&height=694",
          maxCapacity: 80, // kg
          occupiedCapacity: 30, // kg
        },
        {
          position: { lat: -8.0460, lng: -34.8755 },
          title: "Feira de Beberibe",
          description: "cesta de composto: vazia // Cestas de Doção: 3 bananas, 1 maçãs, 5 abacaxi",
          image: "https://media.discordapp.net/attachments/1351620762502696992/1370463068261454026/Imagem_do_WhatsApp_de_2025-05-09_as_11.48.20_24c6e25e.jpg?ex=681f96b1&is=681e4531&hm=188aa1098fc5d5d398e727d9b23554758bc67af7fe87f07abd24fe97122c3118&=&format=webp&width=694&height=694",
          maxCapacity: 40, // kg
          occupiedCapacity: 10, // kg
        },
        {
          position: { lat: -8.0500, lng: -34.8790 },
          title: "Cozinha Solidária",
          description: "Almoço: Terça e Quinta as 12:30",
          image: "https://media.discordapp.net/attachments/1351620762502696992/1370486005173583955/ChatGPT_Image_9_de_mai._de_2025_16_41_56.png?ex=681fac0e&is=681e5a8e&hm=2d4b5d5e6601196798a3a87ccf1a264ccc04162e37d3bfda737269c50ea80c14&=&format=webp&quality=lossless&width=1230&height=820",
          maxCapacity: 60, // kg
          occupiedCapacity: 25, // kg
        },
        {
          position: { lat: -8.0520, lng: -34.8800 },
          title: "Cozinha Solidária 2",
          description: "Almoço: Segunda e Sexta as 13:00",
          image: "https://media.discordapp.net/attachments/1351620762502696992/1370486005173583955/ChatGPT_Image_9_de_mai._de_2025_16_41_56.png?ex=681fac0e&is=681e5a8e&hm=2d4b5d5e6601196798a3a87ccf1a264ccc04162e37d3bfda737269c50ea80c14&=&format=webp&quality=lossless&width=1230&height=820",
          maxCapacity: 120, // kg
          occupiedCapacity: 80, // kg
        },
        {
          position: { lat: -8.0510, lng: -34.8810 },
          title: "Cozinha Solidária 3",
          description: "Café da manhã: Quarta e Terça: ",
          image: "hhttps://media.discordapp.net/attachments/1351620762502696992/1370486005173583955/ChatGPT_Image_9_de_mai._de_2025_16_41_56.png?ex=681fac0e&is=681e5a8e&hm=2d4b5d5e6601196798a3a87ccf1a264ccc04162e37d3bfda737269c50ea80c14&=&format=webp&quality=lossless&width=1230&height=820",
          maxCapacity: 70, // kg
          occupiedCapacity: 35, // kg          
        },
        {
          position: { lat: -8.0530, lng: -34.8820 },
          title: "Grupos voluntários",
          description: "BBbox para lixo eletrônico (lâmpadas LED, discos rígidos, etc.)",
          image: "https://www.nucleodoconhecimento.com.br/wp-content/uploads/2020/04/lixeiras-inteligentes.jpg",
          maxCapacity: 90, // kg
          occupiedCapacity: 40, // kg
        },
        {
          position: { lat: -8.0540, lng: -34.8830 },
          title: "grupos voluntários 2",
          description: "BBbox para lixo eletrônico (placas-mãe, fontes, etc.)",
          image: "https://lh4.googleusercontent.com/proxy/vr9YIOMpEgucYNEnNLw1Fi5PUngB7lsYU37t54dMGMDB_SeyoRLIEEZcp33nuY4YlFhTjwEqfvqQfRDfowF_uxMdVIVnBQ1APo8vGbGFvivmIwrxUbR9tJUKFc-0S2TbqudiCyiFy3lf3v1UKoA",
          maxCapacity: 100, // kg
          occupiedCapacity: 60, // kg         
        },
        {
          position: { lat: -8.0550, lng: -34.8840 },
          title: "grupos voluntários 3",
          description: "BBbox para lixo eletrônico (bocais de lâmpadas, fios, etc.)",
          image: "https://www.nucleodoconhecimento.com.br/wp-content/uploads/2020/04/lixeiras-inteligentes.jpg",
          maxCapacity: 110, // kg
          occupiedCapacity: 55, // kg
        }
      ],
      selectedMarker: null
    };
  },
  methods: {
    showDetails(marker) {
      this.selectedMarker = marker;
    }
  }
};
</script>

<style scoped>
h2, p {
  color: black;
}
</style>
