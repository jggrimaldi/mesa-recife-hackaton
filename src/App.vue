<template>
  <v-app>
    <!-- Barra de Aplicação -->
    <v-app-bar app color="white " dark>
      <v-toolbar-title><img height=150 class="mt-2" src="./assets/logo1.webp" alt="logo"></v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn v-show="$vuetify.breakpoint.mdAndUp" color="black" text @click="currentSection = 'minha-caixa'">Pontos de Descarte</v-btn>
      <!-- <v-btn v-show="$vuetify.breakpoint.mdAndUp" color="black" text @click="currentSection = 'itens-point'">Itens Points</v-btn> -->
      <v-btn v-show="$vuetify.breakpoint.mdAndUp" color="black" text @click="currentSection = 'ranking'">Ranking</v-btn>
      <v-btn v-show="$vuetify.breakpoint.mdAndUp" color="black" text @click="currentSection = 'metrics'">Métricas</v-btn>

      <v-btn icon v-show="$vuetify.breakpoint.smAndDown" @click="drawer = !drawer">
        <v-icon class="black--text">mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Drawer (Menu Lateral) para Dispositivos Móveis -->
    <v-navigation-drawer v-model="drawer" temporary app>
      <v-list>
        <v-list-item @click="navigate('minha-caixa')">
          <v-list-item-title>Pontos de Descarte</v-list-item-title>
        </v-list-item>
        <!-- <v-list-item @click="navigate('itens-point')">
          <v-list-item-title>Itens Points</v-list-item-title>
        </v-list-item> -->
        <v-list-item @click="navigate('ranking')">
          <v-list-item-title>Ranking</v-list-item-title>
        </v-list-item>
        <v-list-item @click="navigate('metrics')">
          <v-list-item-title>Métricas</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- ESTILIZAÇÃO -->
  <section class="gradient-bg">
    <div class="px-4 py-9 my-6 text-center">
      <h1 class="display-5 fw-bold text-white">Conectando o Excesso de Alimentos com 
        Quem Tem Fome
      </h1>

      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">Transformamos o desperdício de alimentos nas feiras em oportunidade de alimentação para quem mais precisa, com tecnologia inteligente, conexão em tempo real e impacto social imediato.</p>

      </div>
    </div>
  </section>

  <section>
    <div class="container px-4">
      <div class="text-center">
        <p class="text-uppercase text-success fw-semibold">Desperdício de alimento</p>
        <h1 class="mt-2 fs-2 fw-bold text-dark">Escala do problema</h1>
      </div>
    </div>
    <div class="container px-4 py-5" id="hanging-icons">
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-4">
        <div class="col d-flex align-items-start">
          <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <button class="btn btn-success">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-percent" viewBox="0 0 16 16">
                <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0M4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
              </svg>
            </button>
          </div>
          <div>
            <h3 class="fs-2 text-body-emphasis">96%</h3>
            <p>Das empresas não reaproveitão os alimentos ou evitam desperdícios</p>
          </div>
        </div>

        <div class="col d-flex align-items-start">
          <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <div class="btn btn-success" role="alert">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-exclamation-triangle " viewBox="0 0 16 16">
                <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z"/>
                <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
              </svg>
            </div>
          </div>
          <div>
            <h3 class="fs-2 text-body-emphasis">924,4 T</h3>
            <p>De resíduos por ano, são geradas nas feiras</p>
          </div>
        </div>

        <div class="col d-flex align-items-start">
          <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <div class="btn btn-success" role="house">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-house-heart" viewBox="0 0 16 16">
                <path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982" />
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5
                        A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 
                        .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 
                        7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 class="fs-2 text-body-emphasis">2,1 M</h3>
            <p>De pernanbucanos convivem com <strong>insegurança alimenta</strong></p>
          </div>
        </div>
        
        <div class="col d-flex align-items-start">
          <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <div class="btn btn-success" role="house">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-radioactive" viewBox="0 0 16 16">
                <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"/>
                <path d="M9.653 5.496A3 3 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.97 5.97 0 0 1 8 2c1.222 0 2.358.365 3.306.992zm1.342 2.324a3 3 0 0 1-.884 2.312 3 3 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a6 6 0 0 0 1.767-4.624zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
              </svg>
            </div>
          </div>
          <div>
            <h3 class="fs-2 text-body-emphasis">45%</h3>
            <p>Das emissões estão relacionadas a má gestão de resíduos sólidos</p>
          </div>
        </div>
      </div>
    </div>

  </section>
    
  <section class="mt-5" id="sobre">
    <div class="text-center pt-10">
      <p class="text-uppercase text-success fw-semibold">COMO FUNCIONA</p>
        <h1 class="mt-2 fs-2 fw-bold text-dark">Conectando alimentos com propósito</h1>
        <p>Nossa plataforma facilita a redireção de alimentos do desperdício para quem pode usá-los.</p>
    </div>
  <div class="container px-4 py-5" id="featured-3">
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
    <div class="feature col">
      <div class="icons-sobre feature-icon d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-2 mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-map" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"/>
        </svg>
      </div>
      <h3 class="fs-2 text-body-emphasis">Mapa de monitoramento</h3>
      <p>Mapa digital em tempo real, que localiza as cozinhas solidárias, Grupos voluntários e feiras.</p>
    </div>

    <div class="feature col">
      <div class="icons-sobre feature-icon d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-2 mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-database" viewBox="0 0 16 16">
          <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313M13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A5 5 0 0 0 13 5.698M14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A5 5 0 0 0 13 8.698m0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525"/>
        </svg>
      </div>
      <h3 class="fs-2 text-body-emphasis">Dados automatizados</h3>
      <p>Gestão eficiente da quantidade de cada alimento orgânico</p>
        <svg class="bi" aria-hidden="true">
          <use xlink:href="#chevron-right"></use>
        </svg>
    </div>

    <div class="feature col">
      <div class="icons-sobre feature-icon d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-2 mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-recycle" viewBox="0 0 16 16">
          <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242z"/>
          <path d="M2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24z"/>
          <path d="M13.863 9.236a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.5.5 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244z"/>
        </svg>
      </div>
      <h3 class="fs-2 text-body-emphasis">Lixos e Cestas inteligentes</h3>
      <p>monitoramento da quantidade e identificação dos alimentos doados.</p>
    </div>

  </div>
</div>

  </section>

    <!-- Conteúdo Principal -->
    <v-main>
      <div class="container">
        <GoogleMap v-if="currentSection === 'minha-caixa'" />
        <ItensPoint v-if="currentSection === 'itens-point'" />
        <UserRanking v-if="currentSection === 'ranking'" />
        <UserMetrics v-if="currentSection === 'metrics'" />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import GoogleMap from './components/GoogleMap.vue';
import ItensPoint from './components/ItensPoint.vue'; // Importando o novo componente
import UserRanking from './components/UserRanking.vue';
import UserMetrics from './components/UserMetrics.vue';

export default {
  name: 'App',
  components: {
    GoogleMap,
    ItensPoint, // Adicionando componente de Itens Points
    UserRanking,
    UserMetrics,
  },
  data() {
    return {
      drawer: false,
      currentSection: 'minha-caixa',
    };
  },
  methods: {
    navigate(section) {
      this.drawer = false; // Fecha o drawer
      this.currentSection = section; // Define a seção atual
    },
  },
};
</script>

<style>
  .projeto {
    color: black;
  }
  .gradient-bg {
    background: linear-gradient(135deg, #4ade80 0%, #3b82f6 100%);
    margin-top: 57px;
    color: white;
  }

  #sobre {
    background-color: rgb(245, 241, 241);
  }

  .icons-sobre {
    width: 50px;
    height: 50px;
    border-radius: 6px;
  }
</style>
