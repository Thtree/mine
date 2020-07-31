<template>
  <div class="headerCommon">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
    >
      <el-menu-item index="1">
        <i class="el-icon-s-custom"></i>
        <span slot="title">我的信息</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-edit-outline"></i>
        <span slot="title">工作经历</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-mouse"></i>
        <span slot="title">项目经历</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-phone"></i>
        <span slot="title">我的电话</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-message"></i>
        <span slot="title">我的邮箱</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "headerCommon",
  data() {
    return {
      activeIndex: "1"
    };
  },
  mounted() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.headerCommon {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 2px;
}
.el-menu {
  width: 100%;
}
</style>
