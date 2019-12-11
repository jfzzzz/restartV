<template>
  <div>
    <div class="_body">
      <el-row class="__body">
        <el-col :span="16">
          <div class="markdownBox" v-loading="loading">
            
            <div  v-html="compiledMarkdown" class="markdown-body"></div>
          </div>
        </el-col>

        <el-col :span="8">
          <el-tree
            :data="tree.data"
            :props="tree.defaultProps"
            @node-click="handleNodeClick"
            default-expand-all
            class="fixedTree"
          ></el-tree>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import marked from "marked";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/github.css";
import { constants } from 'crypto';
export default {
  created() {
    this.$http.get("/technology/technologyTree.json").then(res => {
      // console.log(res.data);
      this.tree = res.data;
    });
  },
  data() {
    return {
      msg: "",
      loading:false,
      tree: {}
    };
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
  },
  methods: {
    handleNodeClick(data, node, obj) {
      if (data.children) return;
      // console.log(data.id);
      const path = `/${data.id}.md`;
      this.loading = true;
      this.$http.get(path).then(res => {
        this.msg = res.data;
        this.loading = false;
      });
      // this.$message(data)
    }
  }
};
</script>

<style scoped>
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
.fixedTree {
  background-color: #f5f5f5;
  margin: 20px;
  border-radius: 10px;
}
</style>
