/*
 * @Description: 
 * @Author: zhengtiancai
 * @Github: https://github.com/jfzzzz
 * @Date: 2019-05-09 07:02:16
 * @LastEditors: 
 * @LastEditTime: 2019-08-26 10:52:45
 */
import Vue from 'vue'
import Router from 'vue-router'
// import Login from './components/login/login'

// const Login = r =>
//   require.ensure([], () => r(require('@/components/login/login')), 'login')
// const F404 = r =>
//   require.ensure([], () => r(require('@/components/404')), 'F404')
// const home = r =>
//   require.ensure([], () => r(require('@/components/home/home')), 'home')
// const console = r =>
//   require.ensure([], () => r(require('@/components/home/console')), 'console')
// const homepage1 = r =>
//   require.ensure([], () => r(require('@/components/home/homepage1')), 'homepage1')
// const homepage2 = r =>
//   require.ensure([], () => r(require('@/components/home/homepage2')), 'homepage2')
// const technology = r =>
//   require.ensure([], () => r(require('@/components/technology/technology')), 'technology')
// const userlist = r =>
//   require.ensure([], () => r(require('@/components/user/userlist')), 'userlist')
// const administrators = r =>
//   require.ensure([], () => r(require('@/components/user/administrators')), 'administrators')
// const roidManager = r =>
//   require.ensure([], () => r(require('@/components/user/roidManager')), 'roidManager')
// const readme = r =>
//   require.ensure([], () => r(require('@/components/readme/readme')), 'readme')
// const map = r =>
//   require.ensure([], () => r(require('@/components/map/map')), 'map')
// const website = r =>
//   require.ensure([], () => r(require('@/components/setting/website')), 'website')
// const email = r =>
//   require.ensure([], () => r(require('@/components/setting/email')), 'email')
// const userinfo = r =>
//   require.ensure([], () => r(require('@/components/setting/userinfo')), 'userinfo')
// const changepwd = r =>
//   require.ensure([], () => r(require('@/components/setting/changepwd')), 'changepwd')

Vue.use(Router)

var router = new Router({
  // mode:'history',
  routes: [{
    path: '*',
    redirect: '/404'
  },
  {
    path: '/404',
    component: resolve => require(['@/components/404'], resolve)
    // component: Un404,
  }, {
    name: 'login',
    path: '/login',
    component: resolve => require(['@/components/login/login'], resolve)
  },
  {
    path: '/',
    // name: 'home',
    // component: Home
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: resolve => require(['@/components/home/home'], resolve),
    children: [{
      path: '/',
      name: 'home',
      meta: {
        keepAlive: true, //此组件不需要被缓存
      },
      component: resolve => require(['@/components/home/console'], resolve)
    }, {
      path: '/home/homepage1',
      name: 'homepage1',
      meta: {
        keepAlive: true, //此组件不需要被缓存
      },
      component: resolve => require(['@/components/home/homepage1'], resolve)
    }, {
      path: '/home/homepage2',
      name: 'homepage2',
      meta: {
        keepAlive: true, //此组件不需要被缓存
      },
      component: resolve => require(['@/components/home/homepage2'], resolve)
    }, {
      path: '/technology',
      name: 'technology',
      meta: {
        keepAlive: true, //此组件不需要被缓存
      },
      component: resolve => require(['@/components/technology/technology'], resolve)
    }, {
      path: '/user/userlist',
      name: 'userlist',
      meta: {
        keepAlive: true, //此组件不需要被缓存
      },
      component: resolve => require(['@/components/user/userlist'], resolve)
    }, {
      path: '/user/administrators',
      name: 'administrators',
      meta: {
        keepAlive: true, //此组件不需要被缓存
      },
      component: resolve => require(['@/components/user/administrators'], resolve)
    }, {
      path: '/user/roidManager',
      name: 'roidManager',
      meta: {
        keepAlive: true, //此组件不需要被缓存
      },
      component: resolve => require(['@/components/user/roidManager'], resolve)
    }, {
      path: '/readme',
      name: 'readme',
      meta: {
        keepAlive: true, //此组件不需要被缓存
      },
      component: resolve => require(['@/components/readme/readme'], resolve)
    }, {
      path: '/map',
      name: 'map',
      meta: {
        keepAlive: true, //此组件不需要被缓存
      },
      component: resolve => require(['@/components/map/map'], resolve)
    }, {
      path: '/setting/website',
      name: 'website',
      meta: {
        keepAlive: true, //此组件不需要被缓存
      },
      component: resolve => require(['@/components/setting/website'], resolve)
    }, {
      path: '/setting/email',
      name: 'email',
      meta: {
        keepAlive: true, //此组件不需要被缓存
      },
      component: resolve => require(['@/components/setting/email'], resolve)
    }, {
      path: '/setting/userinfo',
      name: 'userinfo',
      meta: {
        keepAlive: true, //此组件不需要被缓存
      },
      component: resolve => require(['@/components/setting/userinfo'], resolve)
    }, {
      path: '/setting/changepwd',
      name: 'changepwd',
      meta: {
        keepAlive: true, //此组件不需要被缓存
      },
      component: resolve => require(['@/components/setting/changepwd'], resolve)
    },
    {
      path: '/tags/addTag',
      name: 'addTag',
      meta: {
        keepAlive: true, //此组件不需要被缓存
      },
      component: resolve => require(['@/components/tags/addTag'], resolve)
    },
    {
      path: '/category/addCategory',
      name: 'addCategory',
      meta: {
        keepAlive: true, //此组件不需要被缓存
      },
      component: resolve => require(['@/components/category/addCategory'], resolve)
    },
    {
      path: '/category/getCategoryList',
      name: 'getCategoryList',
      meta: {
        keepAlive: true, //此组件不需要被缓存
      },
      component: resolve => require(['@/components/category/getCategoryList'], resolve)
    },
    {
      path: '/article/addArticle',
      name: 'addArticle',
      meta: {
        keepAlive: true, //此组件不需要被缓存
      },
      component: resolve => require(['@/components/simple-css/addSimpleCss'], resolve)
    },
    {
      path: '/article/articleList',
      name: 'articleList',
      meta: {
        keepAlive: true, //此组件不需要被缓存
      },
      component: resolve => require(['@/components/simple-css/simpleCssList'], resolve)
    },
    {
      path: '/article/comment',
      name: 'comment',
      meta: {
        keepAlive: true, //此组件不需要被缓存
      },
      component: resolve => require(['@/components/simple-css/comments'], resolve)
    },
    {
      path: '/article/editport',
      name: 'editport',
      component: resolve => require(['@/components/simple-css/editport'], resolve),
      props: true,
      meta: {
        keepAlive: false, //此组件不需要被缓存
      },
    },
    ]
  }
  ]
})
// 1. 添加路由拦截器（导航钩子、守卫）
//    接下来所有的视图导航都必须经过这道关卡
//    一旦进入这道关卡，你得告诉路由守卫，
//    to 我要去哪里
//    from 我从哪儿来的
//    next 用来放行的
// router.beforeEach((to, from, next) => {
  // 1. 添加全局路由导航守卫
  // 2.
  // 拿到当前请求的视图路径标识
  // 2.1 如果是登陆组件，则直接放行通过
  // 2.2 如果是非登陆组件，则检查 Token 令牌
  //    2.2.1 有令牌就过去
  //    2.2.2 无令牌，则让其登陆去
  // if (to.name === 'login') {
  //   // 2.1 如果是访问登陆组件，则让其通过
  //   next()
  // } else {
  //   // 检查登陆状态令牌
  //   const token = window.localStorage.getItem('admin-token')
  //   if (!token) {
  //     // 2.2.1 无令牌，则让其登陆去
  //     next({
  //       name: 'login'
  //     })
  //   } else {
  //     // 2.2.2 有令牌就允许通过
  //     next()
  //   }
  // }
// })
export default router