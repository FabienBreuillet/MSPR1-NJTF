import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import i18n from './i18n/i18n.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/style.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'

Vue.config.productionTip = false
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.use(VueAxios, axios)
Vue.use(VueMoment, {
  moment,
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')