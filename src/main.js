import Vue from 'vue'
import VeeValidate from 'vee-validate'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'

// VeeValidate is not used 
Vue.use(VueRouter, VeeValidate)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: Routes,
  mode:'history'
})



new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
