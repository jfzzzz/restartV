<template>
  <div>
    <el-card :style="{ padding: '0px', width:'100%', position:'fixed',zIndex:'1'}">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/setting/website' }">设置</el-breadcrumb-item>
        <el-breadcrumb-item>网站设置</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
    <div class="_body">
      <el-card :body-style="{ padding: '20px 10px' }">
        <div slot="header">
          <span>网站设置</span>
        </div>
        <div>
          <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="网站名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="网站域名">
              <el-input v-model="form.domain"></el-input>
            </el-form-item>
            <el-form-item label="缓存时间">
              <el-input v-model="form.cachetime" style="width:100px"></el-input>
              <span class="_label">分钟</span>
              <span class="tips">本地开发一般推荐设置为 0，线上环境建议设置为 10。</span>
            </el-form-item>
            <el-form-item label="最大文件上传">
              <el-input v-model="form.upload" style="width:100px"></el-input>
              <span class="_label">KB</span>
              <span class="tips">提示：1 M = 1024 KB</span>
            </el-form-item>
            <el-form-item label="上传文件类型">
              <el-input v-model="form.uploadFileType"></el-input>
            </el-form-item>
            <el-form-item label="首页标题">
              <el-input type="textarea" v-model="form.title"></el-input>
            </el-form-item>

            <el-form-item label="META关键词">
              <el-input type="textarea" v-model="form.meta"></el-input>
            </el-form-item>
            <el-form-item label="META描述">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>

            <el-form-item label="版权信息">
              <el-input type="textarea" v-model="form.copyeright"></el-input>
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
      form: {
        name: "GoodPro",
        domain: "https://jfzzzz.github.io/restartV/index.html",
        cachetime: "0",
        upload: "10",
        uploadFileType: "png|gif|jpg|jpeg|zip|rar",
        title: "Application",
        meta: "",
        desc: "",
        copyeright: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$message({
        message: this.form,
        type: "success"
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
._body ._label {
  color: #ccc;
  margin: 0 10px;
}
._body .tips {
  color: #ccc;
}
</style>
