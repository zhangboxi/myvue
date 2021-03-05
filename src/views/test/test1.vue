<template>
  <div>
    test1
    <img :src="imgUrl" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: require("@/assets/logo.png"),
      id: "1"
    };
  }
};
</script>
