<template>
  <div class>
    <el-card :style="{ padding: '0px', width:'100%', position:'fixed',zIndex:'1'}">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>控制台</el-breadcrumb-item>
        <!-- <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
      </el-breadcrumb>
      <!-- card body -->
    </el-card>
    <div class="_body">
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-card class="convenient">
              <div slot="header">
                <span>快捷方式</span>
              </div>
              <div class="block">
                <el-button type="info" plain @click="$router.push({name:'homepage1'})">
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
                  <!-- <i class="fab fa-first-order-alt fa-3x"></i> -->
                  <i class="fa fa-user fa-3x" aria-hidden="true"></i>
                  <br>
                  <br>
                  <span>用户</span>
                </el-button>
                <el-button type="info" plain @click="$router.push({name:'homepage1'})">
                  <i class="fab fa-node-js fa-3x"></i>
                  <br>
                  <br>
                  <span>高级</span>
                </el-button>
                <el-button type="info" plain @click="$router.push({name:'technology'})">
                  <i class="fab fa-github fa-3x"></i>
                  <br>
                  <br>
                  <span>技术栈</span>
                </el-button>
                <el-button type="info" plain @click="$router.push({name:'homepage1'})">
                  <i class="fa fa-cog fa-3x" aria-hidden="true"></i>
                  <br>
                  <br>
                  <span>设置</span>
                </el-button>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-light">
            <el-card class="convenient">
              <div slot="header">
                <span>待办事项</span>
              </div>
              <div class="_goingToDiv">
                <el-button
                  type="primary"
                  plain
                  :style="{width:'45%',margin:'5px 10px',textAlign:'left'}"
                >
                  <span>待审评论</span>
                  <div>66</div>
                </el-button>
                <el-button
                  type="primary"
                  plain
                  :style="{width:'45%',margin:'5px 10px',textAlign:'left'}"
                >
                  <span>待审帖子</span>
                  <div>12</div>
                </el-button>
                <el-button
                  type="primary"
                  plain
                  :style="{width:'45%',margin:'5px 10px',textAlign:'left'}"
                >
                  <span>待审商品</span>
                  <div>99</div>
                </el-button>
                <el-button
                  type="primary"
                  plain
                  :style="{width:'45%',margin:'5px 10px',textAlign:'left'}"
                >
                  <span>待发货</span>
                  <div>20</div>
                </el-button>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-card class="convenient">
              <div slot="header">
                <span>当前信息</span>
              </div>
              <div class="_currentInfo">
                <table class="_table" border="1">
                  <tr>
                    <td>当前版本</td>
                    <td>v0.12</td>
                  </tr>
                  <tr>
                    <td>基于框架</td>
                    <td>Vue v2.6.6</td>
                  </tr>
                  <tr>
                    <td>UI 组件库</td>
                    <td>Element-UI v2.7.2</td>
                  </tr>
                  <tr>
                    <td>可视化插件</td>
                    <td>
                      echarts v4.2.1
                      <el-button type="primary">Echarts</el-button>
                    </td>
                  </tr>
                </table>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <el-card :style="{ margin:'10px' }">
            <div slot="header">
              <span>数据一览</span>
            </div>
            <div id="myChart" :style="{height: '500px'}"></div>
          </el-card>
        </el-col>
        <el-col :span="8"></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      autoPlay: false
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      const option = {
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00']
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: [20, 21, 35, 80, 120, 140, 160,150,80,60,40,60,82,60,50,40,20,10],
              type: 'line',
              areaStyle: {}
          }]
      };
      myChart.setOption(option);
    }
  }
};
</script>

<style scoped>
._body {
  padding: 10px;
  padding-top: 70px;
}
.convenient {
  margin: 10px;
  height: 300px;
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

._goingToDiv {
  width: 100%;
  text-align: left;
}
._goingToDiv span {
  font-size: 12px;
  display: inline-block;
  margin: 10px 0;
  /* float: left; */
}
._goingToDiv div {
  /* float: left; */
  font-size: 35px;
}
._currentInfo {
  width: 100%;
}
._table {
  width: 100%;
  border-collapse: collapse;
}
._table tr {
  height: 50px;
  text-align: center;
}
._table tr td:last-child {
  text-align: left;
  width: 80%;
  padding-left: 10px;
}
</style>
