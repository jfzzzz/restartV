<template>
  <el-container class="container">
    <!-- height设置102抵消el-scrollbar超出部分 -->
    <el-scrollbar :style="{height:'102%'}">
      <Aside></Aside>
    </el-scrollbar>
    <el-container class="container">
      <el-header height>
        <Header :post="post"></Header>
      </el-header>
      <el-scrollbar :style="{height:'98%'}">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </el-scrollbar>
    </el-container>
  </el-container>
</template>

<script>
import Header from "./header";
import Aside from "./aside";
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
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.container {
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
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
