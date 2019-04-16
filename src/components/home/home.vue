<template>
  <el-container class="container">
    <transition>
      <!-- <el-aside :width="asideWidth"> -->
        <Aside></Aside>
      <!-- </el-aside> -->
    </transition>
    <el-container class="container">
      <el-header height>
        <Header :post="post"></Header>
        <!-- <Header :post="post" @:closeAsid="closeAsid"></Header> -->
      </el-header>
      <el-main>
        <!-- <showMMD></showMMD> -->
        <!-- <showMd></showMd> -->
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from "./header";
import Aside from "./aside";
// import showMMD from "../showMD/showMMD";
// import showMd from "../showMD/showMd";
export default {
  data() {
    return {
      post: {
        isCollapse: true
      }
    };
  },
  components: {
    Header,
    Aside
    // showMMD,
    // showMd
  },
  computed: {},
  methods: {}
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
