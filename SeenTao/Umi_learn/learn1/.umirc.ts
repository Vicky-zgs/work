import { defineConfig } from 'umi';

export default defineConfig({
  base: 'docs',
  publicPath: '/static/',
  hash: true,
  history: {
    type: 'hash',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  routes: [
    // { path: '/', component: '@/pages/index' },
    // { exact: true, path: '/', redirect: '/list' },
    // { exact: true, path: '/list', component: 'list' },
    { path: '/user', component: 'user',
      wrappers: [
        '@/wrappers/auth',
      ]
  },
  { path: '/login', component: 'login' },
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/list', component: 'list' },
      { path: '/admin', component: 'admin' },
    ],
  }, 
  ],
});
