<template>
  <el-container class="layout-container">
    <el-aside width="210px"><MyAside :routes="routes"/></el-aside>
    <el-container>
      <el-header height="84px"><MyHeader /></el-header>
      <el-main><MyMain /></el-main>
    </el-container>
  </el-container>
</template>

<script>
import MyHeader from "@/layout/MyHeader.vue";
import MyMain from "@/layout/MyMain.vue";
import MyAside from "@/layout/MyAside.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    MyHeader,
    MyMain,
    MyAside
  },
  computed: {
    ...mapState("permission", {
      routes: state => state.routes
    })
  },
  data() {
    return {
      ccc: [
        {
          path: "/home",
          name: "Home",
          meta: {
            icon: "",
            auto: ["admin"]
          },
          component: () =>
            import(/* webpackChunkName: "about" */ "../views/Home.vue")
        },
        {
          path: "/about",
          name: "About",
          meta: {
            icon: "",
            auto: ["admin"]
          },
          component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
        },
        {
          path: "/index",
          name: "Index",
          meta: {
            icon: "",
            auto: ["admin"]
          },
          component: () =>
            import(/* webpackChunkName: "about" */ "../layout/index.vue"),
          children: [
            {
              path: "/index/about",
              name: "about",
              meta: {
                icon: "",
                auto: ["admin"]
              },
              component: () => import("../views/About.vue")
            },
            {
              path: "/index/home",
              name: "Home",
              meta: {
                icon: "",
                auto: ["admin"]
              },
              component: () => import("../views/Home.vue")
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}
.layout-container {
  height: 100%;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 84px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;

  // height: calc(100% - 100px);
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
