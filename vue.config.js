/*
 * @Description: 
 * @Author: zhengtiancai
 * @Github: https://github.com/jfzzzz
 * @Date: 2019-05-09 07:02:16
 * @LastEditors: 
 * @LastEditTime: 2019-08-27 10:14:45
 */

module.exports = {
  // 基本路径
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: 'static',
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.mode = 'production';
    } else {
      // 为开发环境修改配置...
      config.mode = 'development';
    }

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
  },
  devServer: {
    // 通知dev server在服务器启动后打开浏览器。将其设置为true以打开默认浏览器。
    // Darwin是由苹果电脑于2000年所释出的一个开放原始码操作系统。
    // process.platform：列举node运行的操作系统的环境，只会显示内核相关的信息，
    // 如：linux2， darwin，而不是“Redhat ES3” ，“Windows 7”，“OSX 10.7”等；
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
