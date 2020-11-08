import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: '默认',
    redirect:'home',
  },
  {
    path: '/home',
    name: '主界面',
    redirect:'/home/message',
    component: 
      () => import('@/view/index/home'),
      children: [
        {
          path: 'message',
          name: 'message',
          component: () => import('@/view/message/index'),
          meta: {
            keepAlive: false, // 需要缓存
          }
        },        
        {
          path: 'workgroup',
          name: 'workgroup',
          component: () => import('@/view/workgroup/index'),
          meta: {
            keepAlive: true, // 需要缓存
          }
        },
        {
          path: 'setting',
          name: 'setting',
          component: () => import('@/view/setting/index'),
          meta: {
            keepAlive: false,
          }
        },
    ]
  },
  {
    path: '/login',
    name: '登录页面',
    component: () => import('@/view/index/login'),
  },
  {
    path: '/workgroupMessage',
    name: 'workgroupMessage',
    component: () => import('@/view/message/workgroupMessage'),
    meta: {
      keepAlive: false, // 不需要缓存
    }
  },
  {
    path: '/indexProSearch',
    name: 'indexProSearch',
    component: () => import('@/view/message/indexProSearch'),
    meta: {
      keepAlive: false, // 不需要缓存
    }
  },
  {
    path: '/userEdit',
    name: 'userEdit',
    component: () => import('@/view/setting/userEdit'),
    meta: {
      keepAlive: false, // 不需要缓存
    }
  },
  
  {
    name: 'test/:id',
    component: () => import('@/view/test'),
    meta: {
      title: '测试'
    }
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ 
  // mode:'history',
  routes,
  // scrollBehavior (to, from, savedPosition) {
  //   if (savedPosition) {
  //     console.log('router -> scrollBehavior -> savedPosition',savedPosition)
  //     return savedPosition
  //   } else {
  //     console.log('router -> scrollBehavior -> savedPosition = return { x: 0, y: 0 }',savedPosition)
  //     return { x: 0, y: 0 }
  //   }
  // }
});

router.beforeEach((to, from, next) => {
  // const title = to.meta && to.meta.title;
  const title = to.name;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};
