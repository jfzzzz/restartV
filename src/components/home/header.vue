<template>
  <!-- <div> -->
  <!-- <el-header class="header"> -->
  <el-row>
    <el-col :span="2">
      <div class="grid-content bg-purple">
        <!-- <span>测试</span> -->
        <el-card>
          <span>轰</span>
        </el-card>
      </div>
    </el-col>
    <el-col :offset="16" :span="5">
      <el-card shadow="always">{{ date | dateFilter }}</el-card>
      <!-- <span>{{ date | dateFilter }}</span> -->
    </el-col>

    <el-col :span="1">
      <el-button type="primary" @click="handleLogout">登出</el-button>
    </el-col>
  </el-row>
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
        message:"这是一个登出按钮，具体逻辑还没开发",
        type:'success'
      });
      // this.$notify({
      //   title: "成功",
      //   message: "这是一个登出按钮，具体逻辑还没开发",
      //   type: "success"
      // });
    }
  }
};
</script>

<style>
/* .el-row {
  height: 60px;
  line-height: 60px;
} */
.el-card__body {
  padding: 0 !important;
  background-color: pink;
  color: #fff;
}
.el-button--primary {
  height: 60px;
  background-color: pink !important;
  border-color: #fff !important;
}
</style>
