<template>
  <div>
    <div class="_body">
      <el-table :data="list" border style="width: 100%">
        <el-table-column fixed prop="create_time" label="日期">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.create_time | dateFilterSmall }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="title" label="文章标题"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button @click="editClick(scope.row)" type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog title="文章预览" :visible.sync="dialogTableVisible" width="80%">
      <div>
        <div class="clearfix article" v-cloak>
          <div style="width:100%">
            <div class="header">
              <h1 class="title">{{ title }}</h1>
              <div class="author">
                <div class="avator">
                  <img :src="img_src" alt />
                </div>
                <div class="info">
                  <span class="name">{{ author }}</span>
                  <div></div>
                  <div class="meta">
                    <span class="publish-time">{{ publish_time }}</span>
                    <span class="wordage">{{'字数 ' + countNum }}</span>
                    <span class="views-count">{{'阅读 ' + views_count}}</span>
                    <span class="comments-count">{{'评论 ' + comments_count }}</span>
                    <span class="likes-count">{{'喜欢 ' + likes_count }}</span>
                  </div>
                </div>

                <span class="clearfix"></span>
              </div>
            </div>
            <br />
            <div id="content" class="article-detail markdown-body" v-html="compiledMarkdown"></div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(msg) {
    return hljs.highlightAuto(msg).value;
  },
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  // sanitize: true,
  smartLists: true,
  smartypants: false
});
export default {
  async created() {
    await this.$http
      .get("/getArticleListAdmin")
      .then(data => {
        this.list = data.data.data.list;
      })
      .catch(err => {
        console.log(err);
      });
  },
  data() {
    return {
      msg: "",
      loading: false,
      list: [],
      title: "",
      img_src: "",
      author: "",
      publish_time: "",
      countNum: "",
      views_count: "",
      comments_count: "",
      likes_count: "",
      sendobj: {
        id: ""
      },
      articleDetail: {
        content: ""
      },
      loading: false,

      dialogTableVisible: false
    };
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.articleDetail.content);
    }
  },
  mounted() {},
  methods: {
    async handleClick(data) {
      this.dialogTableVisible = true;

      this.loading = true;
      var id = window.location.search;
      this.sendobj.id = data._id;
      await this.$http
        .post("/getArticleDetail", this.sendobj)
        .then(res => {
          const data = res.data.data;

          this.title = data.title;
          this.img_src = data.img_url;
          this.author = data.author;
          this.publish_time = this.dateFmt(data.create_time);
          this.countNum = data.numbers;
          this.views_count = data.meta.views;
          this.comments_count = data.meta.comments;
          this.likes_count = data.meta.likes;
          this.articleDetail.content = data.content;
          // console.log(data);
          this.loading = false;
        })
        .catch(err => {});
    },
    editClick(data) {
      // console.log(data);
      this.$router.push({ name: "editport", params: { portId: data._id } });
      // this.$router.push( `/article/editport/${data._id }`)
    },

    /*
     *	日期格式化
     */
    dateFmt(val) {
      var date = new Date(val);
      var Y = date.getFullYear() + "-";
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var D =
        date.getDate() > 9 ? date.getDate() + " " : "0" + date.getDate() + " ";
      var h =
        date.getHours() > 9
          ? date.getHours() + ":"
          : "0" + date.getHours() + ":";
      var m =
        date.getMinutes() > 9
          ? date.getMinutes() + ":"
          : "0" + date.getMinutes() + ":";
      var s =
        date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();
      return Y + M + D + h + m + s;
    }
  }
};
</script>

<style lang="less" scoped>
._body {
  /* border-radius: 20px; */
  background-color: #ccc;
  overflow: hidden;
}
.__body {
  margin: 20px;
  border-radius: 20px;
  background-color: #fff;
}
.markdownBox {
  /* width: 100%; */
  /* background-color: pink; */
  padding: 10px 50px;
}

.article {
  .header {
    .title {
      margin: 20px 0 0;
      text-align: center;
      font-size: 34px;
      font-weight: 700;
    }

    .author {
      position: relative;
      margin: 30px 0 40px;
      padding-left: 50px;

      .avator {
        position: absolute;
        left: 0;
        top: 0;
        width: 48px;
        height: 48px;
        vertical-align: middle;
        display: inline-block;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .info {
        float: left;
        vertical-align: middle;
        margin-left: 8px;
      }
      .name {
        margin-right: 3px;
        font-size: 16px;
        vertical-align: middle;
      }
      .meta {
        margin-top: 5px;
        font-size: 12px;
        color: #969696;

        span {
          padding-right: 5px;
        }
      }
    }
  }
}
</style>
