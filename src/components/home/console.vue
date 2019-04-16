<template>
  <div class="">
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="convenient">
            <div slot="header">
              <span>快捷方式</span>
            </div>console/
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          <el-card class="convenient">
            <div slot="header">
              <span>快捷方式</span>
            </div>console/
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="convenient">
            <div slot="header">
              <span>快捷方式</span>
            </div>console/
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.convenient .el-card__header {
  padding: 10px 17px;
}
.convenient {
  /* width: 200px; */
  margin: 10px;
  height: 300px;
  /* flex-basis: 200px; */
}
</style>
