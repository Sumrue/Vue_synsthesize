/**   
 * api接口统一管理
 */
import { get, post } from './http'

// get 请求
export const apiAddressGet = () => post('api/123')

// post 请求

export const apiAddressPost = (msg) => post('api/321', msg)

/**
 * apiAddressPost 为顶一顶一个请求方法，需要在需要调用这个请求的页面当中引入
 * 'api/321' 为基于默认请求地址的接口信息
 * msg 是我们请求接口时携带的参数对象
 */


 /**
  * 在页面中这样用
  * import { apiAddress } from '@/request/api';// 导入我们的api接口
  * methods: {            
        // 获取数据            
        onLoad() {
            // 调用api接口，并且提供了两个参数                
            apiAddress({                    
                type: 0,                    
                sort: 1                
            }).then(res => {
                // 获取数据成功后的其他操作
                ………………                
            })            
        }        
    }
  */