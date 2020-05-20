import Vue from 'vue'
import Router from 'vue-router'
import ShouYe from '@/components/ShouYe'
import { Message } from 'element-ui'
import store from '@/store'

// 小程序
import NodePad from '@/miniapps/NodePad'
import TigerLottery from '@/miniapps/TigerLottery'
import NumLottery from '@/miniapps/NumberLottery'

// 组件
import Login from '@/component/Login'
import Regist from '@/component/regist'

// css技巧应用
import CssBottomFixed from '@/cssuse/CssBottomFixed'
import CssPicDiff from '@/cssuse/CssPicDiff'
Vue.use(Router)

const router = new Router({
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
      component: NumLottery,
      meta: { // 判定路由权限
        requireAuth: true
      }
    },

    // 组件
    { // 登录
      path: '/Login',
      component: Login
    },

    { // 注册
      path: '/regist',
      component: Regist
    },

    // CSS技巧应用
    { // 底部固定技巧
      path: '/cssuse/CssBottomFixed',
      component: CssBottomFixed
    },

    { // 图片背景视差效果
      path: '/cssuse/CssPicDiff',
      component: CssPicDiff
    }
  ]
})

// 设置路由导航前置守卫 判断登录权限
router.beforeEach((to, from, next) => {
  const token = window.sessionStorage.getItem('token')
  if (to.path === '/Login') { // 判断是否是去登录页
    if (!token) { // 是登录页的情况，也要判断是否已登录，已登录就发送错误消息提示，不是则去登录页  通过是否有token来判断
      store.commit('ChangeFullPath', Router.path) // vuex中设置一个共享参数，存放当前的路由地址，方便登陆成功后返回到当前页面
      next()
    } else {
      Message({
        message: '您已经登录，请勿重复登录',
        type: 'error',
        duration: 2000
      })
    }
  } else { // 不是去登录页的情况下
    if (to.meta.requireAuth) { // 判断当前要去的页面的权限， 是否需要验证
      if (!token) {
        store.commit('ChangeFullPath', to.path) // vuex中设置一个共享参数，存放原来要去的路由地址，方便登陆成功后返回原本要去的路由
        next({path: '/Login'})
      } else {
        next()
      }
    } else {
      next()
    }
  }
})

// 输出
export default router
