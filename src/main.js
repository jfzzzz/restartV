import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/store'
import './plugins/element.js'
// 初始化样式
import './assets/css/style.css'
// 引入animate动画库
import animate from 'animate.css'
// 引入字体图标
import '@fortawesome/fontawesome-free/css/all.min.css'
import moment from 'moment'
import 'moment/locale/zh-cn'
// echarts引入
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 
// markdown编辑
import mavonEditor from 'mavon-editor'
// markdown-it对象：md.s_markdown, md => mavonEditor实例
//                 or
//                 mavonEditor.markdownIt 
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)
Vue.use(animate)
Vue.use(Vuex)
Vue.filter("dateFilter", function(date, formatPattern){  
  return moment(date).format(formatPattern || "YYYY[年] MMM Do, dddd, H:mm:ss a"); // 2019年 4月 15日, 星期一, 11:01:46 上午
  return moment(date).format(formatPattern || "LLLL");  //2019年4月15日星期一上午11点01分
}); 
Vue.filter("dateFilterSmall", function(date, formatPattern){  
  return moment(date).format(formatPattern || "a H:mm:ss"); // 2019年 4月 15日, 星期一, 11:01:46 上午
  return moment(date).format(formatPattern || "LLL");  //2019年4月15日星期一上午11点01分
}); 

import httpPlugin from '@/assets/js/http'

Vue.use(httpPlugin)
Vue.config.productionTip = false


// excel导出包
import JsonExcel from 'vue-json-excel'
Vue.component('downloadExcel', JsonExcel)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
