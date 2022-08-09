import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import store from './store'



// VeeValidate is not used 
Vue.use(VueRouter)
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
