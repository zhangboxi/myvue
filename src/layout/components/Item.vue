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
    <template v-for="item in routes">
      <template v-if="item.meta.display !== false">
        <el-menu-item
          v-if="!item.hasOwnProperty('children')"
          :key="item.path"
          :index="item.path"
        >
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>

        <el-menu-item
          v-else-if="item.children.length === 1"
          :key="item.children[0].path"
          :index="item.children[0].path"
          class="one-el-menu"
        >
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.children[0].name }}</span>
        </el-menu-item>

        <el-submenu v-else :key="item.path" :index="item.path">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{ item.name }}</span>
          </template>
          <item :routes="item.children" />
        </el-submenu>
      </template>
    </template>
  </el-menu>
</template>
<script>
export default {
  name: "item",
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

<style scoped>
.el-submenu {
  width: 250px;
}
.el-menu-item {
  width: 200px;
  margin-left: 20px;
}
.one-el-menu{
  margin-left: 0px;
  margin-right: 20px;
  width: 250px;
}
</style>
