<template>
  <div class="headerCommon">
    <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" @select="handleSelect">
      <el-menu-item v-for="(item, index) in navData" :key="index" :index="item.maoDian">
        <div @click="custormAnchor(item.maoDian)">
          <i :class="item.class"></i>
          <span slot="title">{{item.text}}</span>
        </div>
      </el-menu-item>
      <el-menu-item index="phone">
        <i class="el-icon-phone"></i>
        <span slot="title">我的电话</span>
      </el-menu-item>
      <el-menu-item index="message">
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
      activeIndex: "",
      navData: [
        {
          maoDian: 'myInfomation',
          class: 'el-icon-s-custom',
          text: '我的信息'
        },
        {
          maoDian: 'mySkill',
          class: 'el-icon-s-platform',
          text: '我的技能'
        },
        {
          maoDian: 'myWork',
          class: 'el-icon-edit-outline',
          text: '工作经历'
        },
        {
          maoDian: 'myProject',
          class: 'el-icon-mouse',
          text: '项目经历'
        }
      ]
    };
  },
  methods: {
    handleSelect(index) {
      if(index == 'phone'){
        this.$notify({
          title: '我的手机',
          message: '15036119928',
          duration: 0
        });
      } else if(index == 'message'){
        this.$notify({
          title: '我的邮箱',
          message: '846832901@qq.com',
          duration: 0
        });
      }
    },
    custormAnchor(anchorName) {
      this.$emit('custorm-anchor', anchorName)
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
