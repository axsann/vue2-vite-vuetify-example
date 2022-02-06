import Vue from 'vue';
import App from './App.vue';
import {routes} from '@/router';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
// Vue.use(VueCompositionAPI);

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
