import Vue from 'vue'
import App from './App.vue'
import router from './router'
import modal from './modal';

Vue.config.productionTip = false

new Vue({
  router,
  modal,
  render: h => h(App)
}).$mount('#app')