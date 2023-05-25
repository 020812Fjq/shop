import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      //元信息
      title: "首页",
      requiresAuth: false,
    },
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    meta: {
      title: "关于",
      requiresAuth: true,
    },
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/categroy",
    name: "categroy",
    meta: {
      title: "分类",
      requiresAuth: true,
    },
    component: () => import("../views/CategroyView.vue"),
  },
  {
    path: "/my",
    name: "my",
    meta: {
      title: "我的",
      requiresAuth: true,
    },
    component: () => import("../views/MyView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    meta: {
      title: "购物车",
      requiresAuth: true,
    },
    component: () => import("../views/CartView.vue"),
  },
  {
    path: "/detail",
    name: "detail",
    meta: {
      title: "商品详情",
      requiresAuth: true,
    },
    component: () => import("../views/DetailView.vue"),
  },
  {
    path: "/order",
    name: "order",
    meta: {
      title: "订单",
      requiresAuth: true,
    },
    component: () => import("../views/OrderView.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录",
      
      requiresAuth: false,
    },
    component: () => import("../views/login.vue"),
  },
  {
    path: "/zhuce",
    name: "zhuce",
    meta: {
      title: "注册",
      requiresAuth: false,
    },
    component: () => import("../views/zhuce.vue"),
  },
  {
    path: "/address",
    name: "address",
    meta: {
      title: "地址管理",
      requiresAuth: true,
    },
    component: () => import("../views/addressView.vue"),
  },
  {
    path: "/newadd",
    name: "newadd",
    meta: {
      title: "地址管理",
      requiresAuth: true,
    },
    component: () => import("../views/newaddView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
