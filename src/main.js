import Vue from 'vue';
import App from './App.vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'; 
import '@mdi/font/css/materialdesignicons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

Vue.use(Vuetify); // Usar o Vuetify
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
    libraries: "",
  },
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  vuetify: new Vuetify(), // Adicionar Vuetify à instância Vue
}).$mount('#app');
