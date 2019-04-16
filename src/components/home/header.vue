<template>
  <!-- <div> -->
  <!-- <el-header class="header"> -->
  <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1" title="侧边伸缩">
      <i v-show="!isCollapse" class="el-icon-d-arrow-left"></i>
      <i v-show="isCollapse" class="el-icon-d-arrow-right"></i>
    </el-menu-item>
    <el-menu-item index="2-1" title="主页">
      <!-- <i class="el-icon-location-outline"></i> -->
      <i class="fas fa-home"></i>
    </el-menu-item>
    <el-menu-item index="2-2" title="刷新"> 
      <i class="fas fa-redo"></i>
    </el-menu-item>
    <el-menu-item index="2-3">
      <el-input v-model="search" placeholder="搜索"></el-input>
    </el-menu-item>
    <el-menu-item index="3">
      <a href="https://www.ele.me" target="_blank">订单管理</a>
    </el-menu-item>
    <div class="_right">
      {{isCollapse}}
      <el-button type="primary">
        <i class="el-icon-setting"></i>
      </el-button>
      <span class="el-button--primary">{{ date | dateFilter }}</span>
      <!-- <span class="el-button--primary">{{ date | dateFilterSmall }}</span> -->
      <el-button type="primary" @click="handleLogout">登出</el-button>
    </div>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      date: Date.now(),
      // isCollapse: true,
      search:''
    };
  },
  mounted() {
    // console.log(post.isCollapse)
    setInterval(() => {
      this.date = Date.now();
    }, 100);
  },
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse;
    }
  },
  methods: {
    changeCollaspe() {
      this.$store.commit("changeCollaspe");
    },
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
      if (key == 1) {
        this.changeCollaspe();
      }
      // console.log(key);
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
/* .dateTime {
  height: 40px;
  line-height: 40px;
}
.dateTime .el-card__body {
  padding: 0 !important;
  background-color: pink;
  color: #fff;
} */
._right {
  float: right;
}
.el-button--primary {
  height: 40px;
  background-color: pink !important;
  border-color: #fff !important;
  margin: 0 10px;
}
.el-menu-item {
  height: 40px !important;
  line-height: 40px !important;
}
.el-menu-demo .el-menu-item:hover {
  border-top: 1px solid teal;
  color: #303133;
}

.is-active {
  /* border-top: 2px solid teal; */
  color: #303133;
}
</style>
