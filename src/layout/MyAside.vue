<template>
  <item :routes="routes" />
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
