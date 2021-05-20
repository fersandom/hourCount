<template>
  <div class="header-container">
    <h1 class="title">{{title}}</h1>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const title = ref("Hour counter");

    return {
      title,
    };
  },
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}

.header-container {
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>