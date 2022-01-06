module.exports = {
    devServer: {
        host: 'localhost',
        port:8000,
        //代理列表
        proxy: {
            'api': {
                target: 'http://mall-pre.springboot.cn',//要代理的域名
                changeOrigin:true,//允许跨域
                pathRewrite: {
                    '/api':'' // 这个是定义要访问的路径，名字随便写
                }
            }
        }
    }
}