import http from  '@/utils/http'

export function login(data) { 
  return http({
    url: '/app/init',
    method: 'get',
    data
  })
}