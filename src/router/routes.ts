// src/router/routes.js
import type { Route } from '@model/user'
import Layout from '../layout/index.vue'
import NotFound from '../pages/404/index.vue'
import Login from '../pages/login/index.vue'
import About from '../pages/about/index.vue'
import ProdectComponents from '../pages/prodect/components/index.vue'
import Prodect from '../pages/prodect/index.vue'
import Picture from '../pages/picture/index.vue'
import Home from '../pages/home/index.vue'
import ProdectSubHome from '../pages/prodect/subHome/index.vue'

export const baseRoutes: Route[] = [
  {
    path: '/',
    redirect: '/login',
    component: Login,
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
    meta: {
      title: '404',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: '登录',
    },
  },
]

export const asyncRoutes: Route[] = [
  {
    path: '/layout',
    component: Layout,
    meta: {
      title: '首页',
      roles: ['admin', 'user'], // 有权限的角色
    },
    children: [
      {
        path: 'home',
        component: Home,
        meta: {
          title: '首页',
          roles: ['admin', 'user'], // 有权限的角色
        },
      },
      {
        path: 'picture',
        name: 'Picture',
        component: Picture,
        meta: {
          title: '绘画',
          roles: ['admin'], // 有权限的角色
        },
      },
      {
        path: 'prodect',
        name: 'prodect',
        component: Prodect,
        meta: {
          title: '产品',
          roles: ['admin'], // 有权限的角色
        },
        children: [
          {
            path: 'subHome',
            name: 'prodect-subHome',
            component: ProdectSubHome,
            meta: {
              title: '一级产品',
              roles: ['admin'], // 有权限的角色
            },
          },
          {
            path: 'component',
            name: 'prodect-component',
            component: ProdectComponents,
            meta: {
              title: '二级产品',
              roles: ['admin'], // 有权限的角色
            },
          },
        ],
      },
      {
        path: 'about',
        name: 'about',
        component: About,
        meta: {
          title: '关于',
          roles: ['admin', 'user'], // 有权限的角色
        },
      },
    ],
  },
]
