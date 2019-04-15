import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/style.css'
import animate from 'animate.css'
import moment from 'moment'
import 'moment/locale/zh-cn'
// markdown编辑
import mavonEditor from 'mavon-editor'
// markdown-it对象：md.s_markdown, md => mavonEditor实例
//                 or
//                 mavonEditor.markdownIt 
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)

Vue.use(animate)
// Vue.use(moment)

Vue.filter("dateFilter", function(date, formatPattern){  
  return moment(date).format(formatPattern || "YYYY[年] MMM Do, dddd, H:mm:ss a"); // 2019年 4月 15日, 星期一, 11:01:46 上午
  return moment(date).format(formatPattern || "LLLL");  //2019年4月15日星期一上午11点01分
}); 

import httpPlugin from '@/assets/js/http'

Vue.use(httpPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
