<template>
  <div class="drawer-container">
    <div>
      <h3 class="drawer-title">页面设置</h3>
      <div class="drawer-item">
        <span>更改标题布局</span>
        <el-switch v-model="MenuLeft" class="drawer-switch" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    MenuLeft: {
      get() {
        return this.$store.state.setting.menuleft;
      },
      set() {
        this.$store.dispatch("setting/changeMenuleft");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.drawer-container {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;

  .drawer-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 22px;
  }

  .drawer-item {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    padding: 12px 0;
  }

  .drawer-switch {
    float: right;
  }
}
</style>
