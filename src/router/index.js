import Vue from 'vue'
import Router from 'vue-router'
import OffPistes from '@/components/OffPistes/OffPistes.vue'
import OffPisteDetail from '@/components/OffPistes/OffPisteDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OffPiste',
      component: OffPistes
    },
    {
      path: '/offpiste/:id',
      name: 'OffPisteDetail',
      component: OffPisteDetail
    }
  ]
})
