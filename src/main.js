import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入框架和样式
import Vant from 'vant'
import '../node_modules/vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
