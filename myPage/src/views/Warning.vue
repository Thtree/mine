<template>
  <div class="warning">
    <img src="@/assets/1.jpg" alt="" />
  </div>
</template>

<script>
export default {
  name: "warning",
};
</script>

<style scoped>
.warning {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
}
img {
  width: 100px;
  height: 100px;
}
</style>
