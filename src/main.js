import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './services/routes'
import store from './services/store'
import BootstrapVue from 'bootstrap-vue'
import VueSimpleAlert from "vue-simple-alert"; 
import VueCircleSlider from 'vue-circle-slider'
import VueNumber from "vue-number-animation";

Vue.use( VueCircleSlider)
Vue.use( VueSimpleAlert)
Vue.use(VueNumber)
Vue.use(VueRouter, BootstrapVue,)
Vue.config.productionTip = false


const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})


new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')
