<template>
  <div class="home">
    <el-row class="model" id="myInfomation">
      <el-col :xs="24" :sm="0">
        <div class="top">
          <div class="head-pic">
            <img src="@/assets/my.jpg" alt />
          </div>
          <div class="header-name">
            <span>Four</span>的小站
          </div>
          <el-button @click="drawer = true" type="primary">
            <i class="el-icon-menu"></i>
          </el-button>
        </div>
      </el-col>
      <el-col :xs="0" :sm="24">
        <header>
          <div class="net-name">
            <span>Four</span>的小站
          </div>
          <div>One thing I don't know why</div>
        </header>

        <div v-show="isShow" class="fixed-header">
          <div class="fixed-header-wrap">
            <img src="@/assets/my.jpg" alt />
            <div class="fixed-header-name">
              <p>Four</p>
              <p>前端工程师</p>
            </div>
          </div>
        </div>

        <div class="right-nav-wrap">
          <div class="right-nav">
            <el-tooltip class="item" effect="light" placement="left">
              <div slot="content">
                <img class="v-chat-pic" src="@/assets/vchat.jpg" alt />
              </div>
              <i class="button el-icon-chat-dot-round"></i>
            </el-tooltip>
            <el-tooltip class="item" effect="light" content="846832901@qq.com" placement="left">
              <i class="button el-icon-message"></i>
            </el-tooltip>
            <el-tooltip
              class="item"
              effect="light"
              content="https://thtree.github.id"
              placement="left"
            >
              <i class="button el-icon-share"></i>
            </el-tooltip>
            <el-tooltip class="item" effect="light" placement="left">
              <div class="tooltip-slot-style" slot="content">
                出售模板，接受定制个人主页。
                <br />承接项目，详情请邮件本人。
              </div>
              <i class="button el-icon-help"></i>
            </el-tooltip>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="model">
      <el-col :xs="0" :sm="10" :md="8">
        <div class="info">
          <div class="info-left">
            <div class="head-pic-big">
              <img src="@/assets/my.jpg" alt />
            </div>
            <div class="info-left-text">
              <p style="font-size: 24px;">杨森</p>
              <p>前端工程师</p>
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
                <div>
                  {{item.title}}
                  <span>{{item.text}}</span>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="myself">简单的自我介绍</div>
        <div class="myself-text">
          这里是一位年轻的前端工程师,大学所读计算机专业：软件技术.net。热爱计算机，热爱电子竞技。敲得了代码，修的了电脑。喜欢新鲜事物与挑战，热衷于团队协作。为人和善，处事认真负责。个人兴趣爱好很多，喜欢有逻辑性的事物，喜欢推理，
          很高兴能结交到新得朋友。
        </div>
      </el-col>
    </el-row>

    <el-row class="model">
      <el-col :span="24">
        <el-collapse class="model-item-wrap" v-model="activeNames">
          <el-collapse-item title="我的天赋树" name="1" id="mySkill">
            <el-row class="row-skill-style">
              <el-col :xs="24" :sm="12">
                <ul class="skill-color-wrap">
                  <li>
                    <div class="color-model color-4"></div>
                    <div>掌握</div>
                  </li>
                  <li>
                    <div class="color-model color-3"></div>
                    <div>熟练</div>
                  </li>
                  <li>
                    <div class="color-model color-2"></div>
                    <div>一般</div>
                  </li>
                  <li>
                    <div class="color-model color-1"></div>
                    <div>了解</div>
                  </li>
                </ul>
                <ul class="skill-wrap">
                  <li>
                    <div class="skill-title">
                      <i class="el-icon-s-platform"></i>
                      <span>专业技能</span>
                    </div>
                    <div class="skill-item-wrap">
                      <el-tag type="warning">JavaScript</el-tag>
                      <el-tag type="success">CSS</el-tag>
                      <el-tag type="success">HTML</el-tag>
                      <el-tag>C#</el-tag>
                    </div>
                  </li>
                  <li>
                    <div class="skill-title">
                      <i class="el-icon-s-cooperation"></i>
                      <span>技术栈</span>
                    </div>
                    <div class="skill-item-wrap">
                      <el-tag type="success">Vue.js</el-tag>
                      <el-tag type="warning">Angular.js</el-tag>
                      <el-tag type="warning">Echarts</el-tag>
                      <el-tag type="success">Swiper</el-tag>
                      <el-tag type="danger">sass</el-tag>
                      <el-tag type="warning">bootstrap</el-tag>
                      <el-tag>webpack</el-tag>
                      <el-tag type="success">JQuery</el-tag>
                    </div>
                  </li>
                  <li>
                    <div class="skill-title">
                      <i class="el-icon-video-camera-solid"></i>
                      <span>其他技能</span>
                    </div>
                    <div class="skill-item-wrap">
                      <el-tag type="success">Photoshop</el-tag>
                      <el-tag type="success">视频剪辑</el-tag>
                      <el-tag type="success">PPT</el-tag>
                      <el-tag type="success">Word</el-tag>
                    </div>
                  </li>
                  <li>
                    <div class="skill-title">
                      <i class="el-icon-star-on"></i>
                      <span>业余爱好</span>
                    </div>
                    <div class="skill-item-wrap">
                      <el-tag type="info">篮球</el-tag>
                      <el-tag type="info">游泳</el-tag>
                      <el-tag type="info">乒乓球</el-tag>
                      <el-tag type="info">电子竞技</el-tag>
                      <el-tag type="info">桌游</el-tag>
                    </div>
                  </li>
                </ul>
              </el-col>
              <el-col :xs="24" :sm="12">
                <div class="echart-wrap">
                  <div id="myChart1"></div>
                </div>
              </el-col>
            </el-row>
          </el-collapse-item>

          <el-collapse-item title="履历" name="2" id="myWork">
            <el-timeline>
              <!-- <el-timeline :reverse="true"> -->
              <el-timeline-item
                class="time-line-item"
                v-for="(item, index) in companyList"
                :key="index"
                :timestamp="item.date"
                placement="top"
              >
                <el-card>
                  <el-row>
                    <el-col :xs="24" :sm="12" :md="8">
                      <h4>{{item.companyName}}</h4>
                      <p class="position">{{item.position}}</p>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="16">
                      <div class="working">工作职责/经历/经验简述</div>
                      <div>{{item.text}}</div>
                    </el-col>
                  </el-row>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </el-collapse-item>

          <el-collapse-item title="项目" name="3" id="myProject">
            <el-row class="project-wrap" type="flex" justify="space-around">
              <el-col
                v-for="(item, index) in projectList"
                class="project-item-wrap"
                :key="index"
                :xs="24"
                :sm="10"
                :md="7"
              >
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span class="project-name">{{item.projectName}}</span>
                    <span>{{item.duan}}</span>
                  </div>
                  <div>担任角色：{{item.position}}</div>
                </el-card>
              </el-col>
            </el-row>
          </el-collapse-item>

          <el-collapse-item title="其他" name="4">
            <div>内容暂定</div>
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>

    <div class="bg"></div>

    <footer>
      <span>第一视角工作室</span>
      <span>1.0版本</span>
      <span>2020.8更新</span>
    </footer>

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
      isShow: false,
      dataList: [
        {
          class: "el-icon-male",
          title: "性别：",
          text: "男"
        },
        {
          class: "el-icon-user-solid",
          title: "年龄：",
          text: "27"
        },
        {
          class: "el-icon-date",
          title: "生日：",
          text: "10.10"
        },
        {
          class: "el-icon-map-location",
          title: "所在地：",
          text: "上海"
        },
        {
          class: "el-icon-place",
          title: "籍贯：",
          text: "河南省"
        },
        {
          class: "el-icon-monitor",
          title: "行业经验：",
          text: "5年"
        }
      ],
      companyList: [
        {
          companyName: "第五大街信息商务有限公司",
          date: "2016.06 - 2017.01",
          position: "前端工程师/实习",
          text: `大四曾在此公司实习网页设计师岗位，后毕业后再次来到此公司司职前端工程师岗位，进行实习学习。
          期间认真学习了前端基础三剑客，由老师傅带领进行实际项目的开发。先后参与了两个大型购物网站的开发，一个直播单页面的开发，
          像老师傅们学习了很多前端交互的技巧，养成了良好的代码规范，开发规范，未今后的职业生涯打下了良好的基础。`
        },
        {
          companyName: "河南碧佳实业股份有限公司",
          date: "2017.01 - 2018.07",
          position: "前端工程师/初级",
          text: `此公司并购了前公司，任职期间开始正式接触前端的mvvm框架开发模式。团队所做的PC端，移动端，POS机等都基于angular框架。
          项目技术迭代从angular2一直到angular4。在此期间还接触了：响应式布局、H5混合开发、在线聊天（腾讯服务）、sass、less、TypeScript、webpack、es6、css3动画等技术。了解了前端广泛的知识空间，拓展了第三方插件库。
          并对项目结构，项目部署流程，打包配置等更深一步的了解。任职期间接触并解决跨域问题，众多移动端兼容问题、不同手机系统兼容性问题。个人技术得到很多提升，培养了独立解决问题的能力，前端插件库也丰富很多，学习能力增强。`
        },
        {
          companyName: "上海东普信息科技有限公司",
          date: "2018.07 - 2019.05",
          position: "前端工程师/中级",
          text: `任职期间前端团队所用技术都很老，依靠原生js或者jquey来做项目，没有前后端分离的项目，前端基本上只使用一些lazyUI、easyUI这些UI框架。任职后期提议团队革新开发模式，采用前后端分离。因为没有大型
          项目，便选择vue框架为前端开发框架，并在此期间负责项目下前端人员的任务分配，前端项目的搭建，并同大家一起学习，进行知识分享，问题解决经历经验分享等。在这之后开始深入学习vue，接触vue的“生态圈”，并逐步了解对比vue与angular的
          相同之处与不同之处，以此来更好的服务于业务。这段时间还独自学习了微信小程序，并应用到了开发中，完善了前端技术栈。`
        },
        {
          companyName: "上海恩梯梯数据晋恒软件有限公司",
          date: "2019.05 - 至今",
          position: "前端工程师/中级",
          text: `负责项目前端部分的技术选择，任务分配。因为是在项目初中期接手，在之后带领团队对项目先前前端不合理的地方进行了重构。规范了团队中的前后端交互，开发了大量公共组件。解决了甲方需要动态配置表单
          的需求，被甲方给予肯定。整个项目被甲方给予表彰，整个团队还被评为公司年度最佳团队。`
        }
      ],
      projectList: [
        {
          projectName: "第五大街跨境商城网站",
          duan: "PC端",
          position: "web前端工程师"
        },
        {
          projectName: "酷有机直播",
          duan: "PC端",
          position: "web前端工程师"
        },
        {
          projectName: "碧佳实业官网改版",
          duan: "PC端",
          position: "web前端工程师"
        },
        {
          projectName: "有机客商城",
          duan: "移动端",
          position: "web前端工程师"
        },
        {
          projectName: "韵味商城",
          duan: "小程序",
          position: "前端工程师"
        },
        {
          projectName: "质量管控",
          duan: "移动端",
          position: "前端工程师"
        },
        {
          projectName: "韵达公益基金官网",
          duan: "PC端",
          position: "前端工程师"
        },
        {
          projectName: "量本利",
          duan: "PC端",
          position: "前端负责人"
        },
        {
          projectName: "蒹葭电竞",
          duan: "小程序",
          position: "私人定制项目"
        },
        {
          projectName: "韵达招聘网站",
          duan: "PC端",
          position: "前端架构师"
        },
        {
          projectName: "银联营销开放平台",
          duan: "PC端",
          position: "前端负责人"
        }
      ],
      activeNames: ["1", "2", "3", "4"],
      option1: {
        title: {
          text: "技能雷达图"
        },
        tooltip: {},
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: "#fff",
              backgroundColor: "#999",
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: "CSS", max: 10 },
            { name: "JS", max: 10 },
            { name: "HTML", max: 10 },
            { name: "PC端", max: 10 },
            { name: "移动端", max: 10 },
            { name: "小程序", max: 10 }
          ]
        },
        series: [
          {
            name: "技能",
            type: "radar",
            data: [
              {
                value: [9.5, 7, 9.5, 9, 9, 8.5]
              }
            ]
          }
        ]
      }
    };
  },
  mounted() {
    let myChart1 = this.$echarts.init(document.getElementById("myChart1"));
    myChart1.setOption(this.option1);

    window.addEventListener("scroll", this.scrollToTop);
  },
  methods: {
    scrollToTop() {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if(scrollTop > 130){
        this.isShow = true
      } else {
        this.isShow = false
      }
    }
  },
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
  padding-bottom: 40px;
}
header {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80px;
  border-bottom: 1px solid #ddd;
}
.model {
  width: 100%;
  max-width: 1200px;
  margin-bottom: 20px;
  background-color: #fff;
}
.top {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 20px;
  border-bottom: 1px solid #ddd;
}
.head-pic {
  width: 60px;
  height: 60px;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.header-name {
  font-size: 12px;
  color: #333;
}
.header-name span {
  margin-right: 5px;
  font-size: 16px;
  font-weight: bold;
}
.header-name {
  font-size: 16px;
  color: #333;
}
.net-name span {
  margin-right: 5px;
  font-size: 24px;
  font-weight: bold;
}
.info {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.info-left {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}
.head-pic-big {
  width: 160px;
  height: 160px;
  margin-top: -60px;
}
.info-left-text {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: calc(100% - 160px);
  padding: 0 20px;
  font-size: 14px;
  font-weight: bold;
}
.info-left-text p {
  line-height: 70px;
}
.info-list-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}
.info-list-wrap .el-col {
  height: 50%;
}
.info-list-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 70px;
}
.info-list-wrap i {
  font-size: 18px;
  color: #409eff;
}
.info-list-item div {
  margin: 0 20px;
}
.myself {
  padding: 0 40px;
  font-weight: bold;
  font-size: 16px;
  line-height: 40px;
  text-align: left;
}
.myself-text {
  margin-bottom: 20px;
  padding: 0 40px;
  line-height: 30px;
  font-size: 14px;
  text-align: left;
}

.model-item-wrap {
  box-sizing: border-box;
  padding: 0 20px;
}
.row-skill-style {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}
.skill-color-wrap {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}
.skill-color-wrap li {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 5px;
}
.color-model {
  width: 30px;
  height: 15px;
  margin-right: 5px;
}
.color-4 {
  background-color: #67c23a;
}
.color-3 {
  background-color: #e6a23a;
}
.color-2 {
  background-color: #f56c6c;
}
.color-1 {
  background-color: #409eff;
}

.skill-wrap {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
}
.skill-wrap li {
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.skill-title {
  margin-bottom: 20px;
  text-align: left;
  font-size: 14px;
  font-weight: bold;
}
.skill-title span {
  margin-left: 5px;
}
.skill-item-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.skill-item-wrap .el-tag {
  margin: 10px;
}
.echart-wrap {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px 0 20px 0;
}
#myChart1 {
  width: 330px;
  height: 300px;
}
.project-wrap {
  box-sizing: border-box;
  flex-wrap: wrap;
  padding: 0 20px;
}
.project-item-wrap {
  margin: 20px 0;
}
.box-card {
  width: 100%;
}
.project-name {
  margin-right: 40px;
  font-size: 14px;
  font-weight: bold;
  color: #409eff;
}
.time-line-item {
  text-align: left;
}
p.position {
  margin-bottom: 20px;
}
.working {
  color: #409eff;
  font-weight: bold;
  font-size: 16px;
}

.right-nav-wrap {
  position: fixed;
  top: 50%;
  right: 35px;
  margin-top: -75px;
  background-color: #fff;
  z-index: 1;
  border: 1px solid #ddd;
}
.right-nav {
  display: flex;
  flex-direction: column;
}
.right-nav i.button {
  width: 50px;
  line-height: 50px;
  font-size: 24px;
  color: #409eff;
}
.right-nav i:hover {
  background-color: #efefef;
}
.tooltip-slot-style {
  color: #333;
  line-height: 30px;
}
.v-chat-pic {
  width: 285px;
  height: auto;
}

footer {
  position: fixed;
  left: 50%;
  bottom: 0;
  width: 1200px;
  margin-left: -600px;
  line-height: 40px;
  color: #fff;
  background-color: #000;
}
footer span {
  margin: 0 5px;
}
.bg {
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url("../assets/earth.jpg");
  z-index: -1;
}
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  z-index: 1;
}
.fixed-header-wrap{
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.fixed-header-wrap img{
  width: 50px;
  height: 50px;
}
.fixed-header-name{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
}
.fixed-header-name p{
  text-align: left;
  color: #555;
}
.fixed-header-name p:first-child{
  font-weight: bold;
  font-size: 16px;
  color: #333;
}
</style>
