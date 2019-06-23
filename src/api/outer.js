import request from '@/utils/request'

export function weatherGet() {
  // 获取tabs detail
  return request({
    url: `https://www.tianqiapi.com/api/`,
    method: 'get'
  })
}
export function historyTodayGet() {
  // 获取tabs detail
  return request({
    url: `https://api.66mz8.com/api/today.php?format=json`,
    method: 'get'
  })
}
