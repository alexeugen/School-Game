import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: Routes,
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
