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

export function catsGet() {
  // 获取知乎
  return request({
    url: `https://api.thecatapi.com/v1/images/search`,
    method: 'get'
  })
}

export function holidayGet() {
  // 获取知乎
  return request({
    url: `http://timor.tech/api/holiday/next/`,
    method: 'get',
  })
}

export function newsGet(country) {
  // 获取知乎
  return request({
    url: `https://newsapi.org/v2/top-headlines`,
    method: 'get',
    params:{
      'country': country,
      'apiKey': 'fcfa0fe1280841f6b416bcd3ef0dffd5'
    }
  })
}
