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
      <el-row class="_middle">
        <el-col :span="16">
          <el-card :style="{ margin:'10px' }">
            <div slot="header">
              <span>数据一览</span>
            </div>
            <div id="myChart" :style="{height: '300px'}"></div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :style="{ margin:'10px' }">
            <div slot="header">
              <span>业务进展</span>
            </div>
            <div>
              <div class="_block">
                <span>主页完成进度 80%</span>
                <el-progress
                  :text-inside="true"
                  :stroke-width="18"
                  :percentage="80"
                  color="rgba(142, 113,199, 0.7)"
                ></el-progress>
              </div>
              <div class="_block">
                <span>日结进度 70%</span>
                <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
              </div>
            </div>
            <div class="block">
              <el-progress type="circle" :percentage="25" status="text">开发进展</el-progress>
              <el-progress type="circle" :percentage="80" color="red" status="text">加班上限</el-progress>
              <el-progress type="circle" :percentage="20" color="#12CE66" status="text">剩余调休</el-progress>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <el-card :style="{ margin:'10px' }">
            <el-tabs value="first" @tab-click="handleClick">
              <el-tab-pane label="文章管理" name="first">
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column type="index" width="50"></el-table-column>
                  <el-table-column prop="branch" label="分类" width="150"></el-table-column>
                  <el-table-column prop="title" label="标题"></el-table-column>
                  <el-table-column prop="date" label="日期" width="180"></el-table-column>
                  <el-table-column label="操作" width="180">
                    <template slot-scope="scope">
                      <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
                      <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                      >删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
                <el-pagination
                  :style="{margin:'10px 0'}"
                  background
                  layout="prev, pager, next"
                  :total="pages.total"
                  @current-change="getContextFile"
                  :current-page="pages.currentPage"
                  :page-size="pages.size"
                ></el-pagination>
              </el-tab-pane>
              <el-tab-pane label="配置管理" name="second">
                <div v-html="compiledMarkdown" class="markdown-body"></div>
              </el-tab-pane>
              <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
              <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :style="{ margin: '10px' }">
            <div slot="header">
              <span>创作初衷</span>
            </div>
            <div class="_block">
              <p>(1)记录前端的学习笔记</p>
              <p>(2)简易管理系统</p>
              <p>(3)支持读取markdown文件</p>
              <p>(4)支持图表大数据展示</p>
              <p>(5)响应式系统，准备下一步支持媒体查询</p>
              <p>(6)细节有待完善，正在慢慢改进</p>
              <p>(7)功能逐步增加</p>
            </div>
          </el-card>
          
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
export default {
  data() {
    return {
      msg: "",
      autoPlay: false,
      activeName: "second",
      tableData: [],
      pages: {
        currentPage: 1,      // 当前页index
        size: 10,            // 每页显示多少条
        total: 50            // 数据总条数
      }
    };
  },
  created() {
    this.$http.get("/home/console/postList.json").then(res => {
      this.tableData = res.data.data;
    });
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.msg, { sanitize: true });
    }
  },
  mounted() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function(msg) {
        return hljs.highlightAuto(msg).value;
      },
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false
    });
    this.msg = marked(this.msg);
    this.$http.get("/README.md").then(res => {
      this.msg = res.data;
    });
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      const option = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "6:00",
            "7:00",
            "8:00",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "20:00",
            "21:00",
            "22:00"
          ]
        },
        title: {
          text: "今日流量统计",
          left: "center"
        },
        grid: {
          show: true
        },
        tooltip: {
          show: true,
          trigger: "axis"
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [
              20,
              21,
              35,
              80,
              120,
              140,
              160,
              150,
              80,
              60,
              40,
              60,
              82,
              60,
              50,
              40,
              20,
              10
            ],
            type: "line",
            areaStyle: {},
            // symbol: "none", //去掉折线图中的节点
            smooth: true, //true 为平滑曲线，false为直线
            areaStyle: {
              normal: {
                color: "#7ECAC3" //改变区域颜色
              }
            },
            itemStyle: {
              normal: {
                color: "#8cd5c2", //改变折线点的颜色
                lineStyle: {
                  color: "#029789" //改变折线颜色
                }
              }
            }
          }
        ]
      };
      window.addEventListener("resize", () => {
        myChart.resize();
      });
      myChart.setOption(option);
    },
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    getContextFile(currentIndex) {
      this.pages.currentPage = currentIndex;
      this.$http.get("/home/console/postList.json").then(res => {
        this.tableData = res.data.data;
      });
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

._block {
  margin: 10px 10px 30px 10px;
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
._middle ._block {
  padding-top: 8px;
}
</style>
