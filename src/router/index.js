import Vue from 'vue'
import Router from 'vue-router'
import ShouYe from '@/components/ShouYe'

// 小程序
import NodePad from '@/miniapps/NodePad'
import TigerLottery from '@/miniapps/TigerLottery'
import NumLottery from '@/miniapps/NumberLottery'

// 组件
import Login from '@/component/Login'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ShouYe',
      component: ShouYe
    },

    // 小程序
    { // 记事本
      path: '/miniapps/NodePad',
      component: NodePad
    },

    { // 老虎机抽奖
      path: '/miniapps/TigerLottery',
      component: TigerLottery
    },

    { // 数字抽奖
      path: '/miniapps/NumLottery',
      component: NumLottery
    },

    // 组件
    {
      path: '/Login',
      component: Login
    }
  ]
})
