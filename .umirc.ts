import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  externals: {
    TMap: 'window.TMap'
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/data', component: '@/pages/dataScreen' },
    { path: '/demo', component: '@/pages/demo'}
  ],
  fastRefresh: {},
});
