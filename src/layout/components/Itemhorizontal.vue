<template>
  <el-menu
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :router="isrouter"
  >
    <template v-for="item in routes">
      <template v-if="item.meta.display !== false">
        <el-menu-item
          v-if="!item.hasOwnProperty('children')"
          :key="item.path"
          :index="item.path"
          >{{ item.name }}
        </el-menu-item>

        <el-menu-item
          v-else-if="item.children.length === 1"
          :key="item.children[0].path"
          :index="item.children[0].path"
          >{{ item.children[0].name }}</el-menu-item
        >

        <el-submenu v-else :key="item.path" :index="item.path">
          <template slot="title">{{ item.name }}</template>
          <itemhorizontal :routes="item.children" />
        </el-submenu>
      </template>
    </template>
  </el-menu>
</template>
<script>
export default {
  name: "itemhorizontal",
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
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scope>
.el-submenu {
  width: 170px;
}
.el-menu--horizontal .el-menu .el-menu-item {
  height: 50px;
  line-height: 50px;
}
.el-menu.el-menu--horizontal {
  border-bottom: solid 0px #e6e6e6;
}
</style>
