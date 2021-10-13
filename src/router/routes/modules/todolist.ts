import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/todolist',
  name: 'Todolist',
  component: LAYOUT,
  redirect: '/todolist/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'ant-design:container-outlined',
    title: t('routes.dashboard.todolist'),
    orderNo: 2000,
  },
  children: [
    {
      path: 'index',
      name: 'TodolistPage',
      component: () => import('/@/views/todolist/index.vue'),
      meta: {
        title: t('routes.dashboard.todolist'),
        icon: 'ant-design:container-outlined',
        hideMenu: true,
      },
    },
  ],
};

export default dashboard;
