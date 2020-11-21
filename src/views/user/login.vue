<template>
  <div>
    这是登陆界面
    <el-button @click="logintest" type="primary">登陆测试</el-button>
  </div>
</template>

<script>
import { setToken } from "@/utils/auth";
import { mapActions, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations("user", ["SET_TOKEN", "SET_ROLES"]),
    ...mapActions("permission", ["generateRoutes"]),
    logintest() {
      console.log("登陆判断，并获取token和roles,并存储到store和cookies中");
      //暂时先手动设置，token和roles，模拟登陆
      let roles = "guest";
      this.SET_TOKEN("admin");
      setToken("admin");
      this.SET_ROLES(roles);
      this.generateRoutes(roles);
      this.$router.push({ path: "/index" });
      // .push({ path: this.redirect || '/', query: this.otherQuery })
    }
  }
};
</script>
