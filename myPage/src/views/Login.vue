<template>
  <div class="login">
    <div class="bg-wrap">
      <img class="bg" src="@/assets/earth.jpg" />
    </div>

    <div class="content">
      <div class="user-info">
        <img class="head-pic" alt="我是头像" src="@/assets/my.jpg" />
      </div>
      <p class="name">
        Four
        <span>的小站</span>
      </p>
      <p class="occupation">前端工程师</p>
      <ul class="button-wrap">
        <li @click="home()">
          <el-tooltip
            class="item"
            effect="dark"
            content="个人简历"
            placement="top"
          >
            <i class="el-icon-s-custom button-style"></i>
          </el-tooltip>
        </li>
        <li>
          <el-tooltip
            class="item"
            effect="dark"
            content="好玩的功能"
            placement="top"
          >
            <i class="el-icon-magic-stick button-style"></i>
          </el-tooltip>
        </li>
        <li>
          <el-tooltip
            class="item"
            effect="dark"
            content="846832901@qq.com"
            placement="top"
          >
            <i class="el-icon-message button-style"></i>
          </el-tooltip>
        </li>
        <li>
          <el-tooltip class="item" effect="dark" placement="top">
            <div class="tooltip-slot-style" slot="content">
              我的B站直播间
              <br />http://live.bilibili.com/6025535
            </div>
            <i class="el-icon-video-camera button-style"></i>
          </el-tooltip>
        </li>
        <li>
          <el-tooltip
            class="item"
            effect="dark"
            content="846832901@qq.com"
            placement="top"
          >
            <div class="tooltip-slot-style" slot="content">
              出售模板，接受定制个人主页。
              <br />承接项目，详情请邮件本人。
            </div>
            <i class="el-icon-s-help button-style"></i>
          </el-tooltip>
        </li>
      </ul>
    </div>

    <el-dialog
      title="身份验证"
      :visible.sync="dialogVisible"
      width="300px"
      @close="close"
    >
      <el-form
        :model="my"
        status-icon
        :rules="rules"
        ref="my"
        label-width="60px"
      >
        <el-form-item label="账号" prop="acc">
          <el-input
            type="password"
            v-model="my.acc"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="my.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sure">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      dialogVisible: false,
      my: {
        acc: "",
        pass: "",
      },
      rules: {
        acc: [{ validator: this.validateAcc, trigger: "blur" }],
        pass: [{ validator: this.validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    close(){
      this.$refs["my"].resetFields()
    },
    validateAcc(rule, value, callback) {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        if (this.my.acc !== "thtree") {
          callback(new Error("账号错误"));
        }
        callback();
      }
    },
    validatePass(rule, value, callback) {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.my.pass !== "9999") {
          callback(new Error("密码错误"));
        }
        callback();
      }
    },
    home() {
      this.dialogVisible = true;
    },
    sure() {
      this.$refs["my"].validate((valid) => {
        if (valid) {
          window.localStorage.setItem('acc', this.my.acc)
          window.localStorage.setItem('pass', this.my.pass)
          this.$router.push({
            name: "home",
          });
        } else {
          this.$message.error("错误！")
          return false;
        }
      });
    },
  },
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
  padding-bottom: 50px;
}
.bg-wrap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
  width: 100%;
  margin-top: 10%;
  color: #fff;
  cursor: default;
}
.user-info {
  width: 200px;
  height: 200px;
  border-radius: 5px;
  animation: change 6s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
.head-pic {
  width: 100%;
  height: 100%;
  border-radius: 5px;
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
.button-wrap {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: calc(90% - 20px);
  max-width: 340px;
  margin-top: 150px;
  padding: 10px;
  cursor: pointer;
  animation: change2 6s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
.button-style {
  font-size: 30px;
}
.tooltip-slot-style {
  line-height: 30px;
}
@keyframes change {
  0% {
    box-shadow: 0 0 40px #fff;
  }
  50% {
    box-shadow: 0 0 0px #fff;
  }
  100% {
    box-shadow: 0 0 0px #fff;
  }
}
@keyframes change2 {
  0% {
    box-shadow: 0 0 0px #fff;
  }
  50% {
    box-shadow: 0 0 0px #fff;
  }
  100% {
    box-shadow: 0 0 40px #fff;
  }
}
</style>
