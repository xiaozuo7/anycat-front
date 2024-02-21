import Vue from 'vue';
import HomePage from './HomePage.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(HomePage)
}).$mount('#HomePage');
