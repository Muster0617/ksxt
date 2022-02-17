import Vue from 'vue'
import App from './App.vue'
// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入路由器
import router from './router'
// 引入api接口
import api from './api'
// 引入ElementUI
Vue.use(ElementUI);
// 引用api
Vue.use(api)
    // 引入vuex
import store from './store'
import './permission.js'
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')