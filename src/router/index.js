import Vue from 'vue';
import VueRouter from 'vue-router';
import ProductPage from '@/views/ProductPage.vue';
import About from '@/views/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'product',
    component: ProductPage,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
