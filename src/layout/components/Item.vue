<template>
  <div>
    <template v-for="item in routes">
      <template v-if="item.meta.display !== false">
        <el-menu-item
          v-if="!item.hasOwnProperty('children')"
          :key="item.index"
          :index="item.path"
        >
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>

        <el-submenu v-else :key="item.index" index="item.path">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{ item.name }}</span>
          </template>
          <item :routes="item.children" />
          <!-- <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{ item.name }}</span>
        </template>
        <el-menu-item
          v-for="submenu in item.children"
          :key="submenu.name"
          :index="submenu.path"
        >
          {{ submenu.name }}
        </el-menu-item> -->
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
