import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import VueSimpleAlert from "vue-simple-alert"; 


// VeeValidate is not used 
Vue.use( VueSimpleAlert)
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
