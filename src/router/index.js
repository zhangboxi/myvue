import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

export const constantRoutes = [
  {
    path: "/login",
    name: "login",
    meta: {
      display: false
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/user/login.vue")
  },
  {
    path: "/home",
    name: "Home",
    meta: {
      icon: ""
    },
    component: () => import(/* webpackChunkName: "about" */ "../views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    meta: {
      icon: ""
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

export const asyncRoutes = [
  {
    path: "/index",
    name: "Index",
    meta: {
      icon: "",
      auto: ["admin", "guest"]
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../layout/index.vue"),
    children: [
      {
        path: "/index/about",
        name: "analysis",
        meta: {
          icon: "",
          auto: ["admin", "guest"]
        },
        component: () => import("../views/About.vue")
      },
      {
        path: "/index/home",
        name: "Home1",
        meta: {
          icon: "",
          auto: ["admin"]
        },
        component: () => import("../views/Home.vue")
      },
      {
        path: "/index/home",
        name: "Home2",
        meta: {
          icon: "",
          auto: ["admin", "guest"]
        },
        component: () => import("../views/Home.vue")
      }
    ]
  }
];

export const router = new VueRouter({
  routes: constantRoutes
});

export default router;
