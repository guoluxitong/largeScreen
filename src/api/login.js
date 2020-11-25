import request from '@/utils/request'
import qs from 'qs'

export function login(loginId, password) {

  return request({
    url: '/account/datamanage/login',
    method: 'post',
    params: { loginId, password }
  })
}
export function wechatlogin(loginId, openId) {
  return request({
    url: '/account/datamanage/login/wechat',
    method: 'post',
    params: { loginId, openId}
  })
}
export function getUserInfo(employeeId) {
  return request({
    url: '/webapi/endusermanage/user/info',
    method: 'get',
    params:{ "employeeId": employeeId}
  })
}
