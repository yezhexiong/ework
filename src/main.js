import Vue from 'vue';
import storage from 'store'//浏览器本地存储方法插件

import App from './app';
import { router } from './router';
import globalFunc from '@/utils/globalFunc';//全局公用方法
import '@/utils/globalExtension';//注册相关全局扩展方法(扩展js原生对象)

/* 相关全局注册，方便使用 */
Vue.prototype.$storage = storage;
Vue.prototype.$GlobalFunc = globalFunc
// Vue.prototype.$Api = api;// 对后端接口 进行全局注册
// Vue.prototype.$Http = http;//http 使用方式this.$Http
// Vue.prototype.$GlobalData = globalData
// Vue.prototype.$GlobalDict = globalDict
// Vue.prototype.$Jquery = jquery

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
