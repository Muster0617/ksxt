import axios from 'axios'
import qs from 'qs'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false, trickleSpeed: 150 }) // NProgress Configuration


// 基本路由
axios.defaults.baseURL = 'http://localhost/testApi/public/index.php/index/'
    // 响应时间
axios.defaults.timeout = 5000
    // 请求头
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8"

// 添加请求拦截器(请求之前的操作)
axios.interceptors.request.use(config => {
    NProgress.start()
    if (config.method == 'post') {
        if (!config.data) {
            config.data = {}
        } else {
            // qs.stringify()将对象 序列化成URL的形式，以&进行拼接
            config.data = qs.stringify(config.data)
        }
    }
    return config
}, error => {
    Promise.reject(error)
})

// 添加响应拦截器(操作响应的数据)
axios.interceptors.response.use(res => {
    if (res.data.status) {
        NProgress.done()
        return res.data
    } else {
        const errorInfo = { status: 'fail', msg: "网络错误，请检查网络配置" }
        NProgress.done()
        return errorInfo
    }
})
export default axios