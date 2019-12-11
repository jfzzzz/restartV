<!--
 * @Description: 
 * @Author: zhengtiancai
 * @Github: https://github.com/jfzzzz
 * @Date: 2019-08-24 16:41:52
 * @LastEditors: 
 * @LastEditTime: 2019-08-26 11:02:38
 -->
<template>
  <div>
    <el-card :style="{ padding: '0px', width:'100%', position:'fixed',zIndex:'1'}">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/article/addArticle' }">文章</el-breadcrumb-item>
        <el-breadcrumb-item>添加文章</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
    <div class="_body">
      <el-card :body-style="{ padding: '20px 10px' }">
        <div slot="header">
          <span>网站设置</span>
        </div>
        <div>
          <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="文章名称*">
              <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="文章坐着*">
              <el-input v-model="form.author"></el-input>
            </el-form-item>
            <el-form-item label="文章关键字*">
              <el-input v-model="form.keyword"></el-input>
            </el-form-item>
            <el-form-item label="文章描述*">
              <el-input v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item label="文章封面">
              <el-input v-model="form.img_url"></el-input>
            </el-form-item>
            <el-form-item label="文章标签">
              <el-input v-model="form.tags"></el-input>
            </el-form-item>
            <el-form-item label="文章分类">
              <el-input v-model="form.category"></el-input>
            </el-form-item>
            <el-form-item label="文章状态">
              <el-input v-model="form.state"></el-input>
            </el-form-item>

            <mavon-editor @save="save" v-model="value" />

            <el-form-item>
              <el-button type="primary" @click="onSubmit">保存</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      form: {
        title: "",
        author: "",
        keyword: "",
        desc: "",
        img_url: "",
        tags: "",
        category: "",
        state: "",
        content: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$message({
        message: this.form,
        type: "success"
      });
    },
    async save(value, render) {
      // const sendObj = {
      //   name: this.form.name,
      //   content: value
      // };
      this.form.content = value;
      if (this.form.tags == "") {
        this.form.tags = null;
      }
      if (this.form.category == "") {
        this.form.category = null;
      }

      await this.$http
        .post("/addArticle", this.form)
        .then(res => {
          let data = res.data;
          this.$message.success(data.message);
        })
        .catch(err => {
          console.log(err);
        });
      // console.log(render);
    }
  }
};
</script>

<style scoped>
._body {
  padding: 10px;
  padding-top: 70px;
}
._body ._label {
  color: #ccc;
  margin: 0 10px;
}
._body .tips {
  color: #ccc;
}
</style>
