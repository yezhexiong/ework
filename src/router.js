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
    redirect:'/home/workbench',
    component: 
      () => import('./view/index/home'),
      children: [
        {
          path: 'workbench',
          name: '工作台',
          component: () => import('./view/workbench'),
        },
        {
          path: 'app',
          name: 'APP应用',
          component: () => import('./view/app'),
        },
        {
          path: 'setting',
          name: '管理',
          component: () => import('./view/setting'),
        },
    ]
  },{
    path: '/login',
    name: '登录页面',
    component: () => import('./view/index/login'),
  },
  {
    name: 'test',
    component: () => import('./view/test/index.vue'),
    meta: {
      title: '测试'
    }
  },
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ 
  mode:'history',
  routes 
});

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};
