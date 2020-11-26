<template>
  <div class="horizontalhead">
    <Itemhorizontal :routes="routes" />
  </div>
</template>
<script>
import Itemhorizontal from "./Itemhorizontal";
export default {
  components: { Itemhorizontal },
  props: {
    routes: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.horizontalhead {
  width: 1410px;
}
</style>
