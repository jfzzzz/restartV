import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/login/login'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/404',
      component: () => import( /* webpackChunkName: "404" */ './components/404.vue'),
      // component: Un404,
    }, {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      path: '/',
      // name: 'home',
      // component: Home
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "home" */ './components/home/home.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import( /* webpackChunkName: "console" */ './components/home/console.vue')
        }, {
          path: '/home/homepage1',
          name: 'homepage1',
          component: () => import( /* webpackChunkName: "homepage1" */ './components/home/homepage1.vue')
        }, {
          path: '/home/homepage2',
          name: 'homepage2',
          component: () => import( /* webpackChunkName: "homepage1" */ './components/home/homepage2.vue')
        },{
          path: '/technology',
          name: 'technology',
          component: () => import( /* webpackChunkName: "404" */ './components/technology/technology.vue')
        },{
          path: '/user/userlist',
          name: 'userlist',
          component: () => import( /* webpackChunkName: "404" */ './components/user/userlist.vue')
        },{
          path: '/user/administrators',
          name: 'administrators',
          component: () => import( /* webpackChunkName: "404" */ './components/user/administrators.vue')
        },{
          path: '/user/roidManager',
          name: 'roidManager',
          component: () => import( /* webpackChunkName: "404" */ './components/user/roidManager.vue')
        },{
          path: '/readme',
          name: 'readme',
          component: () => import( /* webpackChunkName: "404" */ './components/readme/readme.vue')
        },{
          path: '/map',
          name: 'map',
          component: () => import( /* webpackChunkName: "404" */ './components/map/map.vue')
        },{
          path: '/setting/website',
          name: 'website',
          component: () => import( /* webpackChunkName: "404" */ './components/setting/website.vue')
        },{
          path: '/setting/email',
          name: 'email',
          component: () => import( /* webpackChunkName: "404" */ './components/setting/email.vue')
        },{
          path: '/setting/userinfo',
          name: 'userinfo',
          component: () => import( /* webpackChunkName: "404" */ './components/setting/userinfo.vue')
        },{
          path: '/setting/changepwd',
          name: 'changepwd',
          component: () => import( /* webpackChunkName: "404" */ './components/setting/changepwd.vue')
        }]
    }
  ]
},
)
// 1. 添加路由拦截器（导航钩子、守卫）
//    接下来所有的视图导航都必须经过这道关卡
//    一旦进入这道关卡，你得告诉路由守卫，
//    to 我要去哪里
//    from 我从哪儿来的
//    next 用来放行的
// router.beforeEach((to, from, next) => {
//   // 1. 添加全局路由导航守卫
//   // 2.
//   // 拿到当前请求的视图路径标识
//   // 2.1 如果是登陆组件，则直接放行通过
//   // 2.2 如果是非登陆组件，则检查 Token 令牌
//   //    2.2.1 有令牌就过去
//   //    2.2.2 无令牌，则让其登陆去
//   if (to.name === 'login') {
//     // 2.1 如果是访问登陆组件，则让其通过
//     next()
//   } else {
//     // 检查登陆状态令牌
//     const token = window.localStorage.getItem('admin-token')
//     if (!token) {
//       // 2.2.1 无令牌，则让其登陆去
//       next({
//         name: 'login'
//       })
//     } else {
//       // 2.2.2 有令牌就允许通过
//       next()
//     }
//   }
// })
export default router