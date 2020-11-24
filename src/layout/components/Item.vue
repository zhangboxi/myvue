<template>
  <div>
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

        <!-- <el-menu-item
          v-else-if="item.children.length === 1"
          :key="item.children[0].path"
          :index="item.children[0].path"
        >
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.children[0].name }}</span>
        </el-menu-item> -->

        <el-submenu v-else :key="item.path" :index="item.path">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{ item.name }}</span>
          </template>
          <item :routes="item.children" />
        </el-submenu>
      </template>
    </template>
  </div>
</template>
<script>
export default {
  name: "item",
  props: {
    routes: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped></style>
