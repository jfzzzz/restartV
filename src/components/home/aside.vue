<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :unique-opened="unique_opened"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollapse"
    @select="selectOnce"
    :router="router"
  >
    <h1 class="noselect" v-show="!isCollapse">GoodPro</h1>
    <!-- <el-menu-item>
      <template slot="title">
        <span>
        </span>
      </template>
    </el-menu-item>-->
    <el-submenu index="/">
      <template slot="title">
        <!-- <i class="el-icon-location"></i> -->
        <i class="fas fa-home fa-lg"></i>
        <span> 主 页</span>
      </template>
      <el-menu-item-group>
        <!-- <template slot="title">分组一</template> -->
        <el-menu-item index="/">控制台</el-menu-item>
        <el-menu-item index="homepage1">主页一</el-menu-item>
        <el-menu-item index="homepage2">主页二</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
    <el-menu-item index="5">
      <i class="el-icon-menu"></i>
      <span slot="title">导航5</span>
    </el-menu-item>
    <el-menu-item index="6">
      <i class="el-icon-document"></i>
      <span slot="title">导航6</span>
    </el-menu-item>
    <el-menu-item index="7">
      <i class="el-icon-setting"></i>
      <span slot="title">导航7</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      unique_opened: false,
      router: true
    }
  },
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    selectOnce(key, keyPath) {
      if (this.isCollapse == true) {
        this.$store.commit("changeCollaspe");
      }
    }
  }
};
</script>

<style scoped>
h1 {
  width: 202px;
  color: #fff;
  text-align: center;
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
not supported by any browser */
}

/* .el-menu-vertical-demo {
  width: 202px;
} */
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
