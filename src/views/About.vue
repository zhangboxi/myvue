<template>
  <div>
    this is about!! gittest
    <div id="mount-point"></div>
  </div>
</template>
<script>
import Vue from "vue";
import ext from "./exnteds.vue";
let extConstructor = Vue.extend(ext);
export default {
  mounted() {
    let options = {
      firstName: "山"
    };
    console.log("进行加载");
    new extConstructor({
      data: options
    }).$mount("#mount-point");
  }
};
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
