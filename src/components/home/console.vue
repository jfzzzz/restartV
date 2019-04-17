<template>
  <div class>
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="convenient">
            <div slot="header">
              <span>快捷方式</span>
            </div>
            <div class="block">
              <span class="demonstration">默认 Hover 指示器触发</span>
              <el-carousel height="150px" :autoplay="autoPlay" >
                <el-carousel-item v-for="item in 2" :key="item">
                  <h3>{{ item }}</h3>
                </el-carousel-item>
              </el-carousel>
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
      autoPlay:false
    }
  },
};
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
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
