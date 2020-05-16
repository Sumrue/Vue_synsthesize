import Vue from 'vue'
import store from '@/store/index' // token的依赖
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据
// import {Message} from 'element-ui' // element-ui 提示组件
import axios from 'axios' // 引入 axios
import router from '../router';

// 默认请求地址
axios.defaults.baseURL = 'https://www.ddd.com'

// 设置请求超时时长
axios.defaults.timeout = 10000

// 设置默认post请求消息头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// --请求--拦截器
axios.interceptors.request.use(
  // 每次发送请求之前要进行什么操作
  config => {        
    // 每次发送请求之前判断vuex中是否存在token        
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
    const token = store.state.token
    token && (config.headers.Authorization = token)
    return config;    
  },
  error => {        
    return Promise.error(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  // 响应状态为200 
  response => {   
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据     
    if (response.status === 200) {            
        return Promise.resolve(response)
    } else {      // 否则的话抛出错误         
        return Promise.reject(response)
    }    
},
    // 服务器状态码不是2开头的的情况
    // 这里可以跟你们的后台开发人员协商好统一的错误状态码    
    // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
    // 下面列举几个常见的操作，其他需求可自行扩展
  error => {
    if (error.response.status) { // 如果返回的错误响应状态存在
      switch (error.response.status) {
        // 404     当响应状态为404时 
        case 404:
          // 这一项时根据需求而定的，是弹出消息还是到另一个页面，都是根据需求而定的
          Message({
            showClose: true,
            message: '您请求的信息不存在', // 弹出的提示信息可以自定义，也可以是后台返回的错误信息
            type: 'error'
          })
          // 返回的状态码代表什么，是需要与后台配合使用的。比如 404 代表请求页面不存在， 403代表token过期
          break
        
        // 403 token过期
        case 403:
          Message({
            showClose: true,
            message: '登录信息已过期，请您重新登录',
            type: 'error'
          })
          // 清除 localStorage 中的token
          localStorage.removeItem('token')

          // 清除vuex中的token
          store.commit('loginSuccess', null)

          //提示弹出的1秒后跳转至登录页面重新登录，获取新的token 并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {                        
            router.replace({                            
                path: '/login',                            
                query: { 
                    redirect: router.currentRoute.fullPath 
                }                        
            });                    
          }, 1000)
          break
        
        // 其他的错误状态码 就直接抛出错误  
        default:
          Message({
            showClose: true,
            message: error.response.data.message,
            type: 'error'
          })
      }
      return Promise.reject(error.response)
    }
  }
)

// ------ 封装请求 ------
/**
* get方法，对应get请求
* @param {String} url [请求的url地址]
* @param {Object} params [请求时携带的参数]
*/
export function get(url, params){    
   return new Promise((resolve, reject) =>{        
       axios.get(url, {            
           params: params        
       }).then(res => {
           resolve(res.data) // 此处设置的res.data为请求后的res, 最终请求得到的结果，可以从此处来更改
       }).catch(err =>{
           reject(err.data)        
   })    
});}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
       axios.post(url, QS.stringify(params))
      .then(res => {
          resolve(res.data)
      })
      .catch(err =>{
          reject(err.data)
      })
  });
}
