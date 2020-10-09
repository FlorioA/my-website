import Vue from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  render: (h) => h(App),
}).$mount('#app');
