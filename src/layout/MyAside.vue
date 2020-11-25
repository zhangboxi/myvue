<template>
  <el-menu
    default-active="2"
    class="aside"
    @open="handleOpen"
    @close="handleClose"
    :router="isrouter"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <item :routes="routes" />
  </el-menu>
</template>

<script>
import item from "./components/Item";
export default {
  components: { item },
  props: {
    routes: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isrouter: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  padding-left: 45px;
}
.aside {
  text-align: left;
}
</style>
