// import Vue from 'vue'
import Router from 'vue-router'

import Login          from './components/Login.vue'
import Index          from './components/Index.vue'
import OrderList      from './components/OrderList.vue'
import OrderDetail    from './components/OrderDetail.vue'
import PersonCenter   from './components/PersonCenter.vue'
import Recommend      from './components/Recommend.vue'
import GetAdvise      from './components/GetAdvise.vue'
import SetAdvise      from './components/SetAdvise.vue'
import NoMessage      from './components/NoMessage.vue'

Vue.use(Router)



export default new Router({
  // mode: 'abstract',
  routes: [
    { path: '/index', name: 'index', component: Index },
    { path: '/login', name: 'login', component: Login },
    { path: '/getAdvise', name: 'getAdvise', component: GetAdvise },
    { path: '/personCenter', name: 'personCenter', component: PersonCenter },
    { path: '/orderList', name: 'orderList', component: OrderList },
    { path: '/orderDetail', name: 'orderDetail', component: OrderDetail },
    { path: '/setAdvise', name: 'setAdvise', component: SetAdvise },
    { path: '/getAdvise', name: 'getAdvise', component: GetAdvise },
    { path: '/reCommend', name: 'reCommend', component: Recommend },
    { path: '/noMessage', name: 'noMessage', component: NoMessage },
    { path: '/',  redirect: '/index' },
    { path: '*',  redirect: '/index' }
  ]
})
