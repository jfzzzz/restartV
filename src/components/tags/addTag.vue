<!--
 * @Description: 
 * @Author: zhengtiancai
 * @Github: https://github.com/jfzzzz
 * @Date: 2019-08-24 16:41:52
 * @LastEditors: 
 * @LastEditTime: 2019-08-26 10:46:31
 -->
<template>
  <div>
    <el-card :style="{ padding: '0px', width:'100%', position:'fixed',zIndex:'1'}">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/tag/addTag' }">标签</el-breadcrumb-item>
        <el-breadcrumb-item>添加标签</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
    <div class="_body">
      <el-card :body-style="{ padding: '20px 10px' }">
        <div slot="header">
          <span>标签设置</span>
        </div>
        <div>
          <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="标签名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="标签描述">
              <el-input v-model="form.desc"></el-input>
            </el-form-item>
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
        name: "",
        desc: ""
      }
    };
  },
  methods: {
    async onSubmit(value, render) {
      // const sendObj = {
      //   name: this.form.name,
      //   content: value
      // };
      let sendObj = {
        name: this.form.name,
        desc: this.form.desc
      };

      await this.$http
        .post("/addTag", sendObj)
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
