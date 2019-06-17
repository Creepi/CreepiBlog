// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css/normalize.css'
import 'nprogress/nprogress.css' // 这个样式必须引入
import anime from 'animejs'
import VueParticles from 'vue-particles'
import NProgress from 'nprogress' // 进度条
import Vue from 'vue'
import App from './App'
import router from './router'
import '../src/styles/const.scss'

Vue.use(VueParticles)
Vue.prototype.$anime = anime
Vue.config.productionTip = false
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  anime,
  components: { App },
  template: '<App/>'
})
