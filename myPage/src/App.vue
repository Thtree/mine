<template>
  <div id="app">
    <router-view />
    <el-backtop :bottom="100">
      <i class="el-icon-top"></i>
    </el-backtop>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  overflow: auto;
  background-image: url('./assets/earth.jpg')
}
body,
ul,
li,
ol,
dl,
dd,
dt,
p,
h1,
h2,
h3,
h4,
h5,
h6,
form,
fieldset,
legend,
img {
  margin: 0;
  padding: 0;
}
fieldset,
img {
  border: none;
}
address,
caption,
cite,
code,
dfn,
th,
var {
  font-style: normal;
  font-weight: normal;
}
html {
  -webkit-tap-highlight-color: transparent;
}
body {
  color: #333;
  font: 12px/20px "microsoft yahei", "SimSun", "宋体", "Arial Narrow", HELVETICA;
  background: #fff; /* overflow-y:scroll;*/
  overflow-x: hidden;
}
a,
a:hover,
a:active,
a:visited,
a:link,
a:focus {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  outline: none;
  background: none;
  text-decoration: none;
}
html,
body {
  width: 100%;
  height: 100%;
}
a,
input {
  outline: none;
}
a {
  color: #666;
  text-decoration: none;
  outline: none;
  cursor: pointer;
}
ul,
ol {
  list-style: none;
}
</style>
