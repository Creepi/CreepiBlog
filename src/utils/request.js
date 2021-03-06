import axios from 'axios'

import { Message, MessageBox } from 'element-ui'
// import { getToken } from '@/utils/auth'
import store from '../store'


// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 50000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    // if (store.getters.token) {
    //   config.headers['X-Requested-With'] = 'XMLHttpRequest'
    //   const regex = /.*csrftoken=([^;.]*).*$/ // 用于从cookie中匹配 csrftoken值
    //   config.headers['X-CSRFToken'] =
    //     document.cookie.match(regex) === null
    //       ? null
    //       : document.cookie.match(regex)[1]
    //   config.headers.Authorization = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
    return config
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * status 可结合自己业务进行修改
     */
    const res = response.data
    if (response.status.toString().substr(0, 1) !== '2') {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })

      // Token 过期了;
      if (response.status === 401) {
        MessageBox.confirm(
          '你已被登出，可以取消继续留在该页面，或者重新登录',
          '确定登出',
          {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }
        ).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload() // 为了重新实例化vue-router对象 避免bug
          })
        })
      }
      return Promise.reject('error')
    }
    return response.data
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
