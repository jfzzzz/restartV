<template>
  <el-container class="container">
    <el-aside width="202px">
      <Aside></Aside>
    </el-aside>
    <el-container class="container">
      <el-header height>
        <Header></Header>
      </el-header>
      <el-main>
        <showMMD></showMMD>
        <!-- <showMd></showMd> -->
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from "./header";
import Aside from "./aside";
import showMMD from "../showMD/showMMD";
// import showMd from "../showMD/showMd";
export default {
  components: {
    Header,
    Aside,
    showMMD
    // showMd
  }
};
</script>

<style scoped>
.container {
  height: 100%;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 40px;
  padding: 0;
}
.el-aside {
  background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
body > .el-container {
  margin-bottom: 40px;
}
.aside {
  background-color: #d3dce6;
}

.main {
  background-color: #e9eef3;
  height: 100%;
}
</style>
