<template>
  <div class>
    <el-card :style="{ padding: '0px', width:'100%' }">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>控制台</el-breadcrumb-item>
        <!-- <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
      </el-breadcrumb>
      <!-- card body -->
    </el-card>

    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="convenient">
            <div slot="header">
              <span>快捷方式</span>
            </div>
            <div class="block">
              <el-button type="info" plain  @click="$router.push({name:'homepage1'})">
                <i class="fab fa-first-order-alt fa-3x"></i>
                <br>
                <br>
                <span>主页一</span>
              </el-button>
              <el-button type="info" plain @click="$router.push({name:'homepage2'})">
                <!-- <i class="fas fa-signature fa-2x"></i> -->
                <i class="fa fa-heartbeat fa-3x"></i>
                <br>
                <br>
                <span>主页二</span>
              </el-button>
              <el-button type="info" plain @click="$router.push({name:'homepage2'})">
                <i class="fa fa-cubes fa-3x"></i>
                <br>
                <br>
                <span>弹层</span>
              </el-button>
              <el-button type="info" plain @click="$router.push({name:'homepage1'})">
                <i class="fas fa-chart-pie fa-3x"></i>
                <br>
                <br>
                <span>图表</span>
              </el-button>
            </div>
            <div class="block">
              <el-button type="info" plain @click="$router.push({name:'homepage1'})">
                <i class="fab fa-first-order-alt fa-3x"></i>
                <br>
                <br>
                <span>主页一</span>
              </el-button>
              <el-button type="info" plain @click="$router.push({name:'homepage1'})">
                <i class="fab fa-first-order-alt fa-3x"></i>
                <br>
                <br>
                <span>主页一</span>
              </el-button>
              <el-button type="info" plain @click="$router.push({name:'homepage1'})">
                <i class="fab fa-first-order-alt fa-3x"></i>
                <br>
                <br>
                <span>主页一</span>
              </el-button>
              <el-button type="info" plain @click="$router.push({name:'homepage1'})">
                <i class="fab fa-first-order-alt fa-3x"></i>
                <br>
                <br>
                <span>主页一</span>
              </el-button>
            </div>
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
export default {
  data() {
    return {
      autoPlay: false
    };
  }
};
</script>

<style scoped>
/* .convenient .el-card__header {
  padding: 10px 17px;
} */
.convenient {
  /* width: 200px; */
  margin: 10px;
  height: 300px;
  /* flex-basis: 200px; */
}
.block {
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content: space-around;
  margin: 5px 0;
}
.block button {
  width: 85px;
}
</style>
