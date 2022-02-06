export const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/pages/HomePage.vue'),
  },
  {
    path: '/about',
    component: () => import('@/pages/AboutPage.vue'),
  }
];
