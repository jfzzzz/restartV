<template>
  <el-container class="main">
    <p class="code">404</p>
    <br>
    <div class="code2">
      <span>您找的页面不存在嗷</span>
    </div>
  </el-container>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  display: block;
  height: 100%;
  background-color: #496e95;
}
.main .code {
  font-size: 200px;
  color: #dc4e23;
  width: 360px;
  margin: 0 auto;
}
.main .code2 {
  font-size: 80px;
  color: #dc4e23;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
}
</style>
