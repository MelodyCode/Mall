
import Vue from 'vue'
import router from './router'
import axios from 'axios'
import App from './App.vue'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store'
//import env from './env'
Vue.prototype.axios = axios;
//图片懒加载
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.use(VueCookie)
Vue.config.productionTip = false//生产环境的提示
//根据前端的跨域方式做调整 /api/a =>(转发时) /a

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000;
//axios.defaults.baseURL = env.baseURL;
//接口错误拦截
axios.interceptors.response.use(function(response) {
  let res = response.data;
  let path = location.hash;
  if(res.status == 0) {//与后台设置的状态码，0代表成功登陆
    console.log(res.data)
    return res.data;
  } else if(res.status == 10) {//登陆不成功
    if(path != '#/index') {
      window.location.href = '/#/login';
    
    }
    return Promise.reject(res);
  } else {
    alert(res.msg);
    return Promise.reject(res);
  }
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
