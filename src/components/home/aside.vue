<!--
 * @Description: 
 * @Author: zhengtiancai
 * @Github: https://github.com/jfzzzz
 * @Date: 2019-05-09 07:02:16
 * @LastEditors: 
 * @LastEditTime: 2019-08-26 10:52:33
 -->
<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo noselect"
    @open="handleOpen"
    @close="handleClose"
    :unique-opened="element.unique_opened"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollapse"
    @select="selectOnce"
    :router="element.router"
  >
    <h1 v-show="!isCollapse">GoodPro</h1>
    <el-submenu index="/home">
      <template slot="title">
        <!-- <i class="el-icon-location"></i> -->
        <i class="fas fa-home fa-lg margin_R"></i>
        <span>主 页</span>
      </template>
      <el-menu-item-group>
        <!-- <template slot="title">分组一</template> -->
        <el-menu-item index="/">控制台</el-menu-item>
        <el-menu-item index="/home/homepage1">主页一</el-menu-item>
        <el-menu-item index="/home/homepage2">主页二</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="/technology">
      <i class="el-icon-menu"></i>
      <span slot="title">技术栈</span>
    </el-menu-item>
    <el-submenu index="/app">
      <template slot="title">
        <i class="fas fa-cog fa-lg margin_R"></i>
        <span slot="title">应 用（待开发）</span>
      </template>
      <el-menu-item-group>
        <el-submenu index="/article">
          <template slot="title">内容系统</template>
          <el-menu-item index="/article/addArticle">文章添加</el-menu-item>
          <el-menu-item index="/article/articleList">文章列表</el-menu-item>
          <el-menu-item index="/article/editport">文章修改</el-menu-item>
        </el-submenu>
        <el-submenu index="/tags">
          <template slot="title">标签</template>
          <el-menu-item index="/tags/addTag">添加标签</el-menu-item>
          <el-menu-item index="/setting/changepwd">回帖列表</el-menu-item>
        </el-submenu>
        <el-submenu index="/category">
          <template slot="title">分类</template>
          <el-menu-item index="/category/addCategory">添加分类</el-menu-item>
          <el-menu-item index="/category/getCategoryList">分类列表</el-menu-item>
        </el-submenu>
        <el-menu-item index="/article/comment">评论系统</el-menu-item>
        <el-menu-item index="/setting/changepwd">工单系统</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="/pro">
      <template slot="title">
        <!-- <i class="el-icon-location"></i> -->
        <i class="fas fa-home fa-lg margin_R"></i>
        <span>高 级（待开发）</span>
      </template>
      <el-menu-item-group>
        <!-- <template slot="title">分组一</template> -->
        <el-menu-item index="/pro/userlist">集成组件</el-menu-item>
        <el-menu-item index="/pro/administrators">后台管理员</el-menu-item>
        <el-menu-item index="/pro/roidManager">角色管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="/user">
      <template slot="title">
        <!-- <i class="el-icon-location"></i> -->
        <i class="fas fa-home fa-lg margin_R"></i>
        <span>用 户</span>
      </template>
      <el-menu-item-group>
        <!-- <template slot="title">分组一</template> -->
        <el-menu-item index="/user/userlist">网站用户</el-menu-item>
        <el-menu-item index="/user/administrators">后台管理员</el-menu-item>
        <el-menu-item index="/user/roidManager">角色管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="/setting">
      <template slot="title">
        <i class="fas fa-cog fa-lg margin_R"></i>
        <span slot="title">设 置</span>
      </template>
      <el-menu-item-group>
        <el-submenu index="/system">
          <template slot="title">系统设置</template>
          <el-menu-item index="/setting/website">网站设置</el-menu-item>
          <el-menu-item index="/setting/email">邮件服务</el-menu-item>
        </el-submenu>
        <el-submenu index="/our">
          <template slot="title">我的设置</template>
          <el-menu-item index="/setting/userinfo">基本资料</el-menu-item>
          <el-menu-item index="/setting/changepwd">修改密码</el-menu-item>
        </el-submenu>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="/map">
      <i class="fas fa-map-signs fa-lg margin_R"></i>
      <span slot="title">地 图</span>
    </el-menu-item>
    <el-menu-item index="/readme">
      <i class="fab fa-markdown fa-lg margin_R"></i>
      <span slot="title">README</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  mounted() {
    // this.element.active = this.$route.fullPath;
    this.element.active = this.$route.matched[0].path;
  },
  data() {
    return {
      element: {
        unique_opened: true,
        router: true,
        active: ""
      }
    };
  },
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
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
.margin_R {
  margin: 0 10px 0 0;
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

.el-menu-vertical-demo {
  /* overflow-x: hidden; */
  /* overflow-y: scroll; */
  height: 100%;

  /* width: 100%; */
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
