import Vue from 'vue';
import Router from 'vue-router';

import routes from '@/routes/common';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes
});

export default router;
