import request from '@/utils/request'

export default function wheatherGet() {
  // 获取tabs detail
  return request({
    url: `https://www.tianqiapi.com/api/`,
    method: 'get'
  })
}
