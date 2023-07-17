const {
    createProxyMiddleware
} = require('http-proxy-middleware')
const { loadEnv } = require("vite");


module.exports = (req, res) => {
    let target = ''
    // 代理目标地址
    if (req.url.startsWith('/mj-api')) { //这里使用/api可能会与vercel serverless 的 api 路径冲突，根据接口进行调整
        target = 'https://midjourney-proxy-production-1382.up.railway.app'
    }
    // 创建代理对象并转发请求
    createProxyMiddleware({
        target,
        changeOrigin: true,
        pathRewrite: {
            // 通过路径重写，去除请求路径中的 `/api`
            '^/mj-api/': '/'
        }
    })(req, res)
}
