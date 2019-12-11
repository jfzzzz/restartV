<template>
  <div>
    <el-card :style="{ padding: '0px', width:'100%', position:'fixed',zIndex:'1'}">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>主页二</el-breadcrumb-item>
        <!-- <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
      </el-breadcrumb>
      <!-- card body -->
    </el-card>
    <div class="_body">
      <el-row class="row1">
        <el-col :span="6">
          <el-card :body-style="{ padding: '10px' }">
            <div slot="header">
              <span>需求量</span>
            </div>
            <div class="row_body">
              <span class="count">1,939</span>
              <div class="clearfix subtitle">
                <span class="_l">需求总提出量</span>
                <span class="_r">
                  10w
                  <i class="far fa-flag"></i>
                </span>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '10px' }">
            <div slot="header">
              <span>已完成</span>
            </div>
            <div class="row_body">
              <span class="count">214</span>
              <div class="clearfix subtitle">
                <span class="_l">完成总统计量</span>
                <span class="_r">
                  9w
                  <i class="far fa-smile"></i>
                </span>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '10px' }">
            <div slot="header">
              <span>BUG</span>
            </div>
            <div class="row_body">
              <span class="count">13</span>
              <div class="clearfix subtitle">
                <span class="_l">修改总统计量</span>
                <span class="_r">
                  2k
                  <i class="far fa-smile-wink"></i>
                </span>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '10px' }">
            <div slot="header">
              <span>待解决</span>
            </div>
            <div class="row_body">
              <span class="count">21</span>
              <div class="clearfix subtitle">
                <span class="_l">上次解决统计</span>
                <span class="_r">
                  213
                  <i class="far fa-frown"></i>
                </span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row class="row2">
        <el-card :body-style="{ padding: '0px' }">
          <div slot="header">
            <span>数量统计</span>
          </div>
          <el-col :span="16">
            <div id="myChart" :style="{height: '400px'}"></div>
          </el-col>
          <el-col :span="8">
            <div class="_require">
              <div class="title">月需求增长</div>
              <span>同上期增长</span>
              <el-progress :text-inside="true" :stroke-width="18" :percentage="30" ></el-progress>
            </div>
            <div class="_require">
              <div class="title">月BUG增长</div>
              <span>同上期增长</span>
              <el-progress :text-inside="true" :stroke-width="18" :percentage="10" ></el-progress>
            </div>
            <div class="_require">
              <div class="title">承受能力增长</div>
              <span>同上期增长</span>
              <el-progress :text-inside="true" :stroke-width="18" :percentage="5" ></el-progress>
            </div>
          </el-col>
        </el-card>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let myChart = this.$echarts.init(document.getElementById("myChart"));
    var colors = ["#409EFF", "#E6A23C", "#675bba"];
    var option = {
      color:colors,
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["2015 降水量", "2016 降水量"]
      },
      grid: {
        show:true,
        top: 70,
        bottom: 50,
        backgroundColor:'rgba(128, 128, 128, 0.1)'
      },
      xAxis: [
        {
          type: "category",
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: colors[1]
            }
          },
          // axisPointer: {
          //   label: {
          //     formatter: function(params) {
          //       return (
          //         "降水量  " +
          //         params.value +
          //         (params.seriesData.length
          //           ? "：" + params.seriesData[0].data
          //           : "")
          //       );
          //     }
          //   }
          // },
          data: [
            "2016-1",
            "2016-2",
            "2016-3",
            "2016-4",
            "2016-5",
            "2016-6",
            "2016-7",
            "2016-8",
            "2016-9",
            "2016-10",
            "2016-11",
            "2016-12"
          ]
        },
        {
          type: "category"
        }
      ],
      yAxis: [
        {
          type: "value"
        }
      ],
      series: [
        {
          name: "2015 降水量",
          type: "line",
          xAxisIndex: 1,
          smooth: true,
          data: [
            2.6,
            5.9,
            9.0,
            26.4,
            28.7,
            70.7,
            175.6,
            182.2,
            48.7,
            18.8,
            6.0,
            2.3
          ]
        },
        {
          name: "2016 降水量",
          type: "line",
          smooth: true,
          data: [
            3.9,
            5.9,
            11.1,
            18.7,
            48.3,
            69.2,
            231.6,
            46.6,
            55.4,
            18.4,
            10.3,
            0.7
          ]
        }
      ]
    };
    window.addEventListener("resize", () => {
      myChart.resize();
    });
    myChart.setOption(option);
  },
  methods: {}
};
</script>

<style scoped>
._body {
  padding: 10px;
  padding-top: 70px;
}
.block {
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content: space-around;
  margin: 5px 0;
}
.row1 {
  margin-bottom: 10px;
}
.row1 .row_body .count {
  font-size: 40px;
  margin: 10px;
}
.row1 .row_body .subtitle {
  color: #bbb;
  font-size: 14px;
}
.row2 ._require {
  width: 90%;
  margin-top: 30px;
  color: #888;
}
.row2 ._require .title {
  font-size: 20px;
  color: #555;
}
.row2 ._require span {
  display: inline-block;
  margin: 10px 0;
}
</style>
