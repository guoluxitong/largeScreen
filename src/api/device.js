import request from '@/utils/request'
export function queryDevice(query) {
  return request({
    url: '/screen/device/system/amount',
    method: 'get',
    params: query
  })
}
export function queryDeviceOnline(query) {
  return request({
    url: '/screen/device/snapshots',
    method: 'get',
    params: query
  })
}
export function queryDeviceByMedium(query) {
  return request({
    url: '/screen/device/system/info',
    method: 'get',
    params: query
  })
}
export function getEnterpriseList(query) {
  return request({
    url: '/webapi/datacenter/core/enterprise/prefix/list',
    method: 'get',
    params: query
  })
}
