import request from '@/utils/request'

export function musicsGet() {
  // 获取music list
  return request({
    url: `/musics/getMusics`,
    method: 'get'
  })
}
export function newsGet() {
  // 获取news list
  return request({
    url: ``,
    method: 'get'
  })
}
