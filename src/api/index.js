import request from '@/utils/request'

export function musicsGet() {
  // 获取tabs detail
  return request({
    url: `/musics/getMusics`,
    method: 'get'
  })
}
