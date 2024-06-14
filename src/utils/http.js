
const baseUrl = import.meta.env.VITE_BASE_URL
// console.log('http:baseUrl', baseUrl)

const httpInterceptor = {
  // 拦截前触发
  invoke(options) {
    options.url = baseUrl + options.url
    options.timeout = options.timeout || 10000
    options.header = {
      ...options.header,
      token: uni.getStorageSync('token')
    }
    // console.log('request options', options)
  }
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)


const http = (options) => {
  return new Promise((resolve, reject) => {
    uni.request({
      ...options,
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data)
        } else if (res.statusCode === 401) {
          // 清除用户信息
          uni.removeStorageSync('token')
          reject(res)
        } else {
          // 清提示
          reject(res)
        }
      },
      fail: (err) => {
        // 网络错误
        reject(err)
      }
    })
  })
}

export default http