<template>
  <div>
    <div v-html="compiledMarkdown" class=" markdown-body"></div>
  </div>
</template>

<script>
import marked from "marked";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/github.css";
export default {
  data() {
    return {
      msg: ""
    };
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.msg, { sanitize: true });
    }
  },
  mounted() {
    marked.setOptions({
      renderer:  new marked.Renderer(),
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
    this.$http.get("/test.md").then(res => {
      console.log(res.data);
      this.msg = res.data;
    });
  }
};
</script>

<style>
</style>
