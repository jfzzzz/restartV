<template>
  <!-- <div> -->
  <!-- <el-header class="header"> -->
  <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">
      <i class="el-icon-d-arrow-left"></i>
    </el-menu-item>
    <el-menu-item index="2-1">
      <i class="el-icon-location-outline"></i>
    </el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-menu-item index="3">
      <a href="https://www.ele.me" target="_blank">订单管理</a>
    </el-menu-item>
    <el-button type="primary" @click="handleLogout">登出</el-button>
  </el-menu>
  <!-- <el-col :span="2">
      <div class="grid-content bg-purple">
        <el-card>
          <span>轰</span>
        </el-card>
      </div>
  </el-col>-->
  <!-- <el-col :offset="16" :span="5">
      <el-card shadow="always">{{ date | dateFilter }}</el-card>
  </el-col>-->

  <!-- </el-header> -->
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      date: Date.now()
    };
  },
  mounted() {
    setInterval(() => {
      this.date = Date.now();
    }, 100);
  },
  computed: {},
  methods: {
    handleLogout() {
      this.$message({
        message: "这是一个登出按钮，具体逻辑还没开发",
        type: "success"
      });
      // this.$notify({
      //   title: "成功",
      //   message: "这是一个登出按钮，具体逻辑还没开发",
      //   type: "success"
      // });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
/* .el-row {
  height: 60px;
  line-height: 60px;
} */
@media screen and (max-width: 1640px) {
  .ads {
    display: none;
  }
}
.el-card__body {
  padding: 0 !important;
  background-color: pink;
  color: #fff;
}
.el-button--primary {
  height: 50px;
  background-color: pink !important;
  border-color: #fff !important;
}
.el-menu-item {
  height: 50px !important;
  line-height: 50px !important;
}
.el-menu-demo .el-menu-item:hover {
  border-top: 2px solid teal;
  color: #303133;
}

.is-active {
  /* border-top: 2px solid teal; */
  color: #303133;
}
</style>
