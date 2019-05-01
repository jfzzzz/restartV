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
      <!-- <i class="fas fa-home"></i> -->
      <i class="fas fa-globe"></i>
    </el-menu-item>
    <el-menu-item index="2-2" title="刷新">
      <i class="fas fa-redo"></i>
    </el-menu-item>
    <el-menu-item style="padding:0" index="2-3">
      <el-input class="searchInput" v-model="search" placeholder="搜索"></el-input>
    </el-menu-item>

    <div class="_right">
      <el-button type="text">
        <el-badge :is-dot="is_dot" class="item">
          <i class="el-icon-bell"></i>
        </el-badge>
      </el-button>

      <el-button type="text">
        <i class="el-icon-setting"></i>
      </el-button>
      <span class="dateTimeBlock">{{ date | dateFilter }}</span>
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
      search: ""
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
    },
    is_dot() {
      return this.$store.state.is_dot;
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
.searchInput {
  line-height: 36px;
}
._right {
  float: right;
}
._right .el-button {
  margin: 0 15px;
}
.dateTimeBlock {
  display: inline-block;
  width: 330px;
  height: 35px;
  line-height: 35px;
  border: 1px solid #fff;
  background-color: pink;
  color: #fff;
  border-radius: 5px;
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
/* .el-menu-demo .el-menu-item:hover {
  border-bottom: 1px solid teal;
  color: #303133;
} */

/* .is-active {
  border-top: 2px solid teal;
  color: #303133;
} */
.is-active {
  /* background: #a3212f; */
  border-bottom: 0px solid transparent !important;
  color: #ffffff;
}
</style>
