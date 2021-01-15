<template>
  <p>{{ firstName }} {{ lastName }} aka {{ alias }}</p>
</template>

<script>
export default {
  data: function() {
    return {
      firstName: "张",
      lastName: "旭东",
      alias: "字伯西"
    };
  }
};
</script>
