import request from '@/utils/request'
import qs from 'qs'
export function editEmployee(data) {
  return request({
    url: '/webapi/user/change/password',
    method: 'post',
    data:qs.stringify(data)
  })
}

