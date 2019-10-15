import Vue from 'vue';
import Element from 'element-ui';
import NProgress from 'nprogress';

import store from './store';
import router from './router';

import App from './App.vue';
import '@/assets/style/common.less';
import 'nprogress/nprogress.css';

Vue.use(Element);

Vue.config.productionTip = false;

NProgress.configure({
  showSpinner: false,
  minimum: 0.3
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
router.afterEach(() => {
  NProgress.done();
});

const myApp = new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#app');

export default myApp;
