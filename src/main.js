// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css/normalize.css';
import anime from 'animejs'
import VueParticles from 'vue-particles';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.use(VueParticles);
Vue.prototype.$anime= anime
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  anime,
  components: { App },
  template: '<App/>',
});
