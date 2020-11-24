import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout";
Vue.use(VueRouter);

export const constantRoutes = [
  // {
  //   path: "/redirect",
  //   component: Layout,
  //   meta: {
  //     display: false
  //   },
  //   children: [
  //     {
  //       path: "/redirect/:path(.*)",
  //       component: () => import("@/views/redirect/index")
  //     }
  //   ]
  // },
  {
    path: "/first",
    name: "first",
    meta: {
      icon: "",
      auto: ["admin", "guest"]
    },
    component: Layout,
    children: [
      {
        path: "/first/test1",
        name: "test1",
        meta: {
          icon: "",
          auto: ["admin", "guest"]
        },
        component: () =>
          import(/* webpackChunkName: "test1" */ "../views/test/test1.vue")
      },
      {
        path: "/first/test2",
        name: "test2",
        meta: {
          icon: "",
          auto: ["admin", "guest"]
        },
        component: () =>
          import(/* webpackChunkName: "test2" */ "../views/test/test2.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    meta: {
      display: false
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/user/login.vue")
  },

  // {
  //   path: "/home",
  //   name: "Home",
  //   meta: {
  //     icon: ""
  //   },
  //   component: () => import(/* webpackChunkName: "about" */ "../views/Home.vue")
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   meta: {
  //     icon: ""
  //   },
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // },
  {
    path: "/",
    meta: {
      display: false
    },
    redirect: "/first/test2"
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
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../layout/index.vue"),.
    component: Layout,
    children: [
      {
        path: "/index/about",
        name: "analysis",
        meta: {
          icon: "",
          auto: ["admin", "guest"]
        },
        component: () =>
          import(/* webpackChunkName: "About" */ "../views/About.vue")
      },
      {
        path: "/index/home",
        name: "Home1",
        meta: {
          icon: "",
          auto: ["admin"]
        },
        component: () =>
          import(/* webpackChunkName: "Home" */ "../views/Home.vue")
      }
      // {
      //   path: "/index/home",
      //   name: "Home2",
      //   meta: {
      //     icon: "",
      //     auto: ["admin", "guest"]
      //   },
      //   component: () =>
      //     import(/* webpackChunkName: "Home" */ "../views/Home.vue")
      // }
    ]
  }
];

export const router = new VueRouter({
  routes: constantRoutes
});

export default router;
