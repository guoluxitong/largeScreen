import request from '@/utils/request'

export function queryDeviceByOnline(query) {
  return request({
    url: '/webapi/output/device/online',
    method: 'get',
    params: query
  })
}

