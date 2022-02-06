import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import {routes} from '@/router';
import vuetify from '@/plugins/vuetify';

Vue.use(VueRouter);
// Vue.use(VueCompositionAPI);

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
