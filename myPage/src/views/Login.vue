<template>
  <div class="login">
    <div class="bg-wrap">
      <img class="bg" src="../assets/earth.jpg" alt />
    </div>
    <div class="content">
      <div class="user-info">
        <img class="head-pic" alt="我是头像" src="../assets/灌篮高手.jpg" />
      </div>
      <p class="name">
        Four
        <span>的小站</span>
      </p>
      <p class="occupation">前端工程师</p>
      <ul class="button-wrap">
        <li>
          <el-tooltip class="item" effect="dark" content="进入主页" placement="top">
            <i class="el-icon-s-custom button-style"></i>
          </el-tooltip>
        </li>
        <li>
          <el-tooltip class="item" effect="dark" content="15036119928" placement="top">
            <i class="el-icon-phone button-style"></i>
          </el-tooltip>
        </li>
        <li>
          <el-tooltip class="item" effect="dark" content="846832901@qq.com" placement="top">
            <i class="el-icon-message button-style"></i>
          </el-tooltip>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
}
.bg-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.bg-wrap img.bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: #fff;
}
.user-info {
  width: 200px;
  height: 200px;
  border-radius: 100%;
  animation: change 3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
.name {
  margin-top: 20px;
  line-height: 40px;
  font-size: 24px;
  font-weight: bold;
}
.name span {
  font-size: 16px;
}
.occupation {
  font-size: 14px;
  color: #aaa;
}
.button-wrap{
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  margin-top: 150px;
  padding: 10px;
  border-radius: 20px;
}
.button-wrap:hover{
  box-shadow: 0 0 0px #fff;
}
.button-wrap li{
  margin: 0 20px;
}
.button-style{
  font-size: 30px;
}

.head-pic {
  width: 200px;
  height: 200px;
  border-radius: 100%;
}
@keyframes change {
  from {
    box-shadow: 0 0 0px #fff;
  }
  to {
    box-shadow: 0 0 40px #fff;
  }
}
</style>
