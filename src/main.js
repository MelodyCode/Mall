import axios from 'axios'
import Vue from 'vue'
import router from './router'
import App from './App.vue'
Vue.prototype.axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
