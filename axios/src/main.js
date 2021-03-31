import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// 引入 api
import api from "./api/api";

// 将 axios 挂载到 vue 上
Vue.prototype.$api = api; // 可以通过 this.$api 执行Ajax请求  如：this.$api.模块.模块中的接口方法

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
