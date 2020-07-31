<template>
  <div class="home">
    <el-row class="header">
      <el-col :xs="24" :sm="0">
        <div class="top">
          <div class="head-pic"><img src="@/assets/my.jpg" alt=""></div>
          <div class="header-name"><span>Four</span>的小站</div>
          <el-button @click="drawer = true" type="primary"><i class="el-icon-menu"></i></el-button>
        </div>
      </el-col>
      <el-col :xs="0" :sm="24">
        <header>
          <div class="net-name"><span>Four</span>的小站</div>
          <div>One thing I don't know why</div>
        </header>
      </el-col>
    </el-row>
    <el-row class="header">
      <el-col :xs="0" :sm="10" :md="8">
        <div class="info">
          <div class="info-left">
            <div class="head-pic-big"><img src="@/assets/my.jpg" alt=""></div>
            <div class="info-left-text">
              <p style="font-size: 24px;">杨森</p>
              <p>前端工程师 </p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="14">
        <div class="info">
          <el-row class="info-list-wrap" type="flex" align="middle">
            <el-col :xs="12" :sm="12" :md="6" v-for="(item, index) in dataList" :key="index">
              <div class="info-list-item">
                <i :class="item.class"></i>
                <div>{{item.title}}<span>{{item.text}}</span></div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>

    <el-drawer :visible.sync="drawer" direction="ltr" :show-close="false" size="50%">
      <nav-common></nav-common>
    </el-drawer>
  </div>
</template>

<script>
import NavCommon from "@/components/NavCommon.vue";

export default {
  name: "home",
  data() {
    return {
      drawer: false,
      dataList: [
        {
          class: 'el-icon-male',
          title: '性别：',
          text: '男'
        },
        {
          class: 'el-icon-user-solid',
          title: '年龄：',
          text: '27'
        },
        {
          class: 'el-icon-date',
          title: '生日：',
          text: '10.10'
        },
        {
          class: 'el-icon-map-location',
          title: '所在地：',
          text: '上海'
        },
        {
          class: 'el-icon-place',
          title: '籍贯：',
          text: '河南省'
        },
        {
          class: 'el-icon-monitor',
          title: '行业经验：',
          text: '5年'
        }
      ]
    };
  },
  mounted() {
    
  },
  methods: {},
  components: {
    NavCommon
  }
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
header{
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80px;
}
.header {
  width: 100%;
  max-width: 1200px;
  background-color: #fff;
  margin-bottom: 1px;
}
.top{
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 20px;
}
.head-pic{
  width: 60px;
  height: 60px;
}
img{
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.header-name{
  font-size: 12px;
  color: #333;
}
.header-name span{
  margin-right: 5px;
  font-size: 16px;
  font-weight: bold;
}
.header-name{
  font-size: 16px;
  color: #333;
}
.net-name span{
  margin-right: 5px;
  font-size: 24px;
  font-weight: bold;
}
.info{
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.info-left{
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}
.head-pic-big{
  width: 160px;
  height: 160px;
  margin-top: -40px;
}
.info-left-text{
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: calc(100% - 160px);
  padding: 0 20px;
  font-size: 14px;
  font-weight: bold;
}
.info-list-wrap{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}
.info-list-wrap .el-col{
  height: 50%;
}
.info-list-item{
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 70px;
}
.info-list-wrap i{
  font-size: 18px;
  color: #409EFF;
}
.info-list-item div{
  margin: 0 20px;
}
</style>
