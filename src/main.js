import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart, faBars, faCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(faUser, faShoppingCart, faCircle, farStar, faStar, faBars);

Vue.component('f-icon', FontAwesomeIcon);
require('@/styles/custom.css');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
