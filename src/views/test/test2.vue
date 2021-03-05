<template>
  <div>
    test2
    <img :src="`${publicPath}img/logo.png`" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // imgUrl: require("/public/img/logo.png"),
      publicPath: process.env.BASE_URL,
      id: "1"
    };
  }
};
</script>
