import axios from 'axios'
import qs from 'qs'
import {Message} from 'element-ui'

let base = 'http://127.0.0.1:8089'

const Axios = axios.create({
  baseURL: base,
  timeout: 10000,
  responseType: 'json',
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})

// POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(config => {
  // 在发送请求之前做某件事
  if (config.method === 'post' ||
        config.method === 'put' ||
        config.method === 'delete') {
        // 序列化
    config.data = qs.stringify(config.data)
  }

  // 若是有做鉴权token , 就给头部带上token
  if (localStorage.token) {
    config.headers.Authorization = localStorage.token
  }
  return config
}, error => {
  Message.error({message: 'error.data.error.message!'})
  return Promise.reject(error.data.error.message)
})

// 返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(res => {
      // 对响应数据做些事
  if (res.data && !res.data.success) {
    Message({
          //  饿了么的消息弹窗组件,类似toast
      showClose: true,
      message: res.data.error.message.message
            ? res.data.error.message.message
            : res.data.error.message,
      type: 'error'
    })
    return Promise.reject(res.data.error.message)
  }
  return res
}, error => {
  // 用户登录的时候会拿到一个基础信息,比如用户名,token,过期时间戳
  // 直接丢localStorage或者sessionStorage
  if (!window.localStorage.getItem('loginUserBaseInfo')) {
    Message.error({message: '登录状态信息过期,请重新登录!'})
  } else {
    // 若是有基础信息的情况下,判断时间戳和当前的时间,若是当前的时间大于服务器过期的时间
    // 乖乖的返回去登录页重新登录
    let lifeTime = JSON.parse(window.localStorage.getItem('loginUserBaseInfo')).lifeTime * 1000
    let nowTime = new Date().getTime() // 当前时间的时间戳
    console.log(nowTime, lifeTime)
    console.log(nowTime > lifeTime)
    if (nowTime > lifeTime) {
      Message.error({message: '登录状态信息过期,请重新登录!'})
    } else {
      if (error.response.status === 403) {
        Message.error({message: '权限不足,请联系管理员!'})
      }
      if (error.response.status === 500) {
        Message.error({message: '服务器被吃了⊙﹏⊙∥'})
      }
      if (error.response.status === 502) {
        Message.error({message: '服务器被吃了⊙﹏⊙∥'})
      }
      if (error.response.status === 404) {
        Message.error({message: '页面不见了⊙﹏⊙∥'})
      }
    }
  }
      // 返回 response 里的错误信息
  let errorInfo = error.data.error ? error.data.error.message : error.data
  return Promise.reject(errorInfo)
})
