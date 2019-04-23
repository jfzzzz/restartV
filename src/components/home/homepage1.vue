<template>
  <div>
    <el-card :style="{ padding: '0px', width:'100%', position:'fixed',zIndex:'1'}">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>主页一</el-breadcrumb-item>
        <!-- <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
      </el-breadcrumb>
      <!-- card body -->
    </el-card>
    <div class="_body">
      <el-row>
        <el-col :span="16">
          <el-container>
            <el-main :style="{ padding: '0px' }">
              <el-card :body-style="{ padding: '0px' }" :style="{ marginBottom: '20px'}">
                <div slot="header">
                  <span>简单布局</span>
                  <el-button style="float:right" type="text">全部</el-button>
                </div>
                <div class="block">
                  <el-card class="_card" shadow="never">
                    <header>
                      <i class="fas fa-tint marginLR"></i>
                      <span>流式布局（Liquid Layout）</span>
                    </header>
                    <p>流式布局，是页面元素的宽度按照屏幕分辨率进行适配调整，但整体布局不变</p>
                    <footer>
                      <span>流加载</span>
                      <span class="footer_time">7天前</span>
                    </footer>
                  </el-card>
                  <el-card class="_card" shadow="never">
                    <header>
                      <i class="fas fa-adjust marginLR"></i>
                      <span>自适应布局（Adaptive Layout）</span>
                    </header>
                    <p>自适应布局的特点是分别为不同的屏幕分辨率定义布局，即创建多个静态布局，每个静态布局对应一个屏幕分辨率范围。</p>
                    <footer>
                      <span>自适应</span>
                      <span class="footer_time">7天前</span>
                    </footer>
                  </el-card>
                  <el-card class="_card" shadow="never">
                    <header>
                      <i class="fas fa-mobile-alt marginLR"></i>
                      <span>响应式布局（Responsive Layout）</span>
                    </header>
                    <p>响应式设计的目标是确保一个页面在所有终端上（各种尺寸的PC、手机、手表等等）都能显示出令人满意的效果。</p>
                    <footer>
                      <span>响应式</span>
                      <span class="footer_time">7天前</span>
                    </footer>
                  </el-card>
                </div>
                <div class="block">
                  <el-card class="_card" shadow="never">
                    <header>
                      <i class="fas fa-tint marginLR"></i>
                      <span>流式布局（Liquid Layout）</span>
                    </header>
                    <p>网页中主要的划分区域的尺寸使用百分数，例如，设置网页主体的宽度为80%，min-width为960px。</p>
                    <footer>
                      <span>流加载</span>
                      <span class="footer_time">7天前</span>
                    </footer>
                  </el-card>
                  <el-card class="_card" shadow="never">
                    <header>
                      <i class="fas fa-adjust marginLR"></i>
                      <span>自适应布局（Adaptive Layout）</span>
                    </header>
                    <p>改变屏幕分辨率可以切换不同的静态局部，但在每个静态布局中，页面元素不随窗口大小的调整发生变化。</p>
                    <footer>
                      <span>自适应</span>
                      <span class="footer_time">7天前</span>
                    </footer>
                  </el-card>
                  <el-card class="_card" shadow="never">
                    <header>
                      <i class="fas fa-mobile-alt marginLR"></i>
                      <span>响应式布局（Responsive Layout）</span>
                    </header>
                    <p>在实现上不拘泥于具体手法，但通常是糅合了流式布局+弹性布局，再搭配媒体查询技术使用。</p>
                    <footer>
                      <span>响应式</span>
                      <span class="footer_time">7天前</span>
                    </footer>
                  </el-card>
                </div>
              </el-card>
              <el-card :body-style="{ padding: '0px' }">
                <div slot="header">
                  <span>动态</span>
                </div>
                <div class="DT_List">
                  <img class="head_img" src="../../assets/logo.png" alt>
                  <span>小VV</span>
                  <p>Vue的模板语法：插值表达式{ { } }，但实际上，对于所有的数据绑定，Vue.js 都提供了完全的 JavaScript 表达式支持。</p>
                  <span class="time">3小时前</span>
                </div>
                <div class="DT_List">
                  <img class="head_img" src="../../assets/logo.png" alt>
                  <span>小VV</span>
                  <p>Vue的计算属性和侦听器：模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护。</p>
                  <span class="time">3小时前</span>
                </div>
                <div class="DT_List">
                  <img class="head_img" src="../../assets/logo.png" alt>
                  <span>小VV</span>
                  <p>
                    当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。这个默认的模式是高效的，但是只适用于
                    <b>不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出。</b>
                  </p>
                  <span class="time">3小时前</span>
                </div>
              </el-card>
            </el-main>
          </el-container>
        </el-col>
        <el-col :span="8">
          <el-container>
            <el-header style=" height:200px ">
              <el-card>
                <div slot="header">
                  <span>快速开始/便捷导航</span>
                </div>
                <div class="block">
                  <el-button type="text">操作一</el-button>
                  <el-button type="text">操作二</el-button>
                  <el-button type="text">操作三</el-button>
                  <el-button type="text">操作四</el-button>
                </div>
                <div class="block">
                  <el-button type="text">操作五</el-button>
                  <el-button type="text">操作六</el-button>
                  <el-button type="text">
                    <i class="fas fa-plus"></i>
                    <span>添加</span>
                  </el-button>
                </div>
              </el-card>
            </el-header>
            <el-main>
              <el-card :style="{ marginBottom: '20px' }">
                <div slot="header">
                  <span>能力值</span>
                </div>
                <div id="myChart" :style="{height: '300px'}"></div>
              </el-card>
              <el-card>
                <div slot="header">
                  <span>重点技能</span>
                </div>
                <div class="block">
                  <router-link tag="span" to="/technology">
                    <el-button type="text">
                      <i class="fab fa-vuejs marginR fa-1x"></i>
                      <span>Vue</span>
                    </el-button>
                  </router-link>
                  <router-link tag="span" to="/technology">
                    <el-button type="text">
                      <i class="fab fa-js-square marginR"></i>
                      <span>JavaScript</span>
                    </el-button>
                  </router-link>
                </div>
                <div class="block">
                  <router-link tag="span" to="/technology">
                    <el-button type="text">
                      <i class="fab fa-html5 marginR"></i>
                      <span>Html5</span>
                    </el-button>
                  </router-link>
                  <router-link tag="span" to="/technology">
                    <el-button type="text">
                      <i class="fab fa-bootstrap marginR"></i>
                      <span>bootstrap</span>
                    </el-button>
                  </router-link>
                </div>
                <div class="block">
                  <router-link tag="span" to="/technology">
                    <el-button type="text">
                      <i class="fab fa-css3 marginR"></i>
                      <span>Css3</span>
                    </el-button>
                  </router-link>
                  <router-link tag="span" to="/technology">
                    <el-button type="text">
                      <i class="fa fa-chart-line marginR"></i>
                      <span>Echarts</span>
                    </el-button>
                  </router-link>
                </div>
              </el-card>
            </el-main>
          </el-container>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      const option = {
        tooltip: {},
        legend: {
          left: "left",
          data: ["小乔", "大乔"],
          icon: "pin"
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: "#fff",
              backgroundColor: "#999",
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: "ExtJs", max: 6500 },
            { name: "JQuery", max: 16000 },
            { name: "Element-UI", max: 30000 },
            { name: "Vue", max: 38000 },
            { name: "HTML5", max: 52000 },
            { name: "CSS3", max: 25000 }
          ]
        },
        series: [
          {
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
            // areaStyle: {normal: {}},
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: "小乔",
                reaStyle: {
                  normal: {
                    // color: "rgba(255, 255, 255, 0.5)"
                  }
                }
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: "大乔"
              }
            ]
          }
        ]
      };
      window.addEventListener("resize", () => {
        myChart.resize();
      });
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
.marginLR {
  margin: 0 4px;
}
.marginR {
  margin-right: 8px;
}
.block {
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content: space-around;
  margin: 5px 0;
}
.block i {
  color: darkturquoise;
}
.block ._card {
  width: 100%;
  margin: 5px;
  background-color: #f8f8f8;
  height: 160px;
}
.block ._card p {
  color: #777;
  font-size: 14px;
  height: 60px;
}
.block ._card footer {
  font-size: 10px;
  color: #777;
}
.block ._card .footer_time {
  float: right;
}
.DT_List {
  margin: 20px;
  border-bottom: 1px solid #ccc;
}
.DT_List p {
  /* display: inline-block; */
  /* height: 40px; */
  /* line-height: 20px; */
  clear: both;
  margin-left: 10px;
}
.DT_List span {
  margin-left: 10px;
}
.DT_List .time {
  font-size: 12px;
  color: #777;
}
.DT_List .head_img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f5f5f5;
  vertical-align: middle;
  /* float: left; */
}
</style>
