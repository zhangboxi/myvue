<template>
  <el-container class="layout-container">
    <el-aside width="250px" v-if="menuleft">
      <div class="title">this is title</div>
      <MyAside :routes="routes" />
    </el-aside>
    <el-container>
      <el-header height="61px" v-bind:class="{ ishorizontalMenu: !menuleft }">
        <MyHeader>
          <div v-if="!menuleft">
            <horizontalHead :routes="routes" />
          </div>
        </MyHeader>
      </el-header>
      <el-main v-bind:class="{ ishorizontalMenu: !menuleft }">
        <MyMain />
      </el-main>
    </el-container>
    <right-panel v-if="showSettings">
      <setting />
    </right-panel>
  </el-container>
</template>

<script>
import horizontalHead from "./components/horizontalHead";
import MyHeader from "@/layout/MyHeader.vue";
import MyMain from "@/layout/MyMain.vue";
import MyAside from "@/layout/MyAside.vue";
import RightPanel from "@/components/RightPanel";
import { mapState } from "vuex";
import setting from "./components/Setting";
export default {
  name: "Home",
  components: {
    MyHeader,
    MyMain,
    MyAside,
    RightPanel,
    horizontalHead,
    setting
  },
  computed: {
    ...mapState({
      routes: state => state.permission.routes
    }),
    menuleft: {
      get() {
        return this.$store.state.setting.menuleft;
      },
      set() {
        this.$store.dispatch("setting/changeMenuleft");
      }
    }
  },
  data() {
    return {
      showSettings: true
    };
  },
  mounted() {
    // console.log(this.$store.state.setting.menuleft);
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
.title{
  height:61px;
  width: 100%;
  color: red;
  line-height: 61px;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 61px;
  padding: 0px;
}

.el-aside {
  color: #333;
  text-align: center;
  line-height: 200px;
  background-color: rgb(84, 92, 100);

  // height: calc(100% - 100px);
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.ishorizontalMenu {
  width: 1670px;
  margin: 0 auto;
}
</style>
