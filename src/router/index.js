import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/views/Index.vue'),
      redirect: 'home',
      children: [
        {
          path: '/home',
          name: 'Home',
          component: () => import('@/views/home/Home.vue')
        },
        {
          path: '/news',
          name: 'News',
          component: () => import('@/views/news/News.vue')
        },
        {
          path: '/timeline',
          name: 'Timeline',
          component: () => import('@/views/timeline/Timeline.vue')
        },
        {
          path: '/tools',
          name: 'Tools',
          component: () => import('@/views/tools/Tools.vue')
        },
        {
          path: '/docs',
          name: 'Docs',
          component: () => import('@/views/docs/Docs.vue')
        }
      ]
    }
  ]
})
