/*
 * @Description: 
 * @Author: zhengtiancai
 * @Github: https://github.com/jfzzzz
 * @Date: 2019-05-09 07:02:16
 * @LastEditors: 
 * @LastEditTime: 2019-08-27 10:14:45
 */

module.exports = {
  // publicPath:'/restartV/',
  // publicPath:'./',
  // devServer: {
  //   contentBase: __dirname + "/",
  //   proxy: {
  //     "/users": {
  //       //需要代理的路径
  //       // target: "http://jsonplaceholder.typicode.com",
  //       target: "https://jsonplaceholder.typicode.com/",
  //       //需要代理的域名
  //       changeOrigin:true//必须配置为true，才能正确代理
  //     }
  //   }
  // }
  // configureWebpack: (config) => {
  //   if (process.env.NODE_ENV === 'production') {
  //     // 为生产环境修改配置...
  //     config.mode = 'production';
  //   } else {
  //     // 为开发环境修改配置...
  //     config.mode = 'development';
  //   }

  //   Object.assign(config, {
  //     // 开发生产共同配置
  //     resolve: {
  //       alias: {
  //         '@': path.resolve(__dirname, './src'),
  //         '@a': path.resolve(__dirname, './src/assets'),
  //         '@c': path.resolve(__dirname, './src/components')
  //       }
  //     }
  //   });
  // },
  devServer: {
    open: process.platform === 'darwin',
    // host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      // 设置代理
      // proxy all requests starting with /api to jsonplaceholder
      '/': {
        target: 'http://localhost:4000', //真实请求的目标地址
        changeOrigin: true,
        ws: false
      }
    },
    before: (app) => { }
  },
}
