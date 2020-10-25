import Vue from 'vue';
import storage from 'store'//浏览器本地存储方法插件
import App from './App';
import { router } from './router';

/* 相关全局注册，方便使用 */
Vue.prototype.$storage = storage;

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
