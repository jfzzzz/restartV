<template>
  <div>
    <el-card :style="{ padding: '0px', width:'100%', position:'fixed',zIndex:'1'}">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/setting/website' }">设置</el-breadcrumb-item>
        <el-breadcrumb-item>邮箱服务</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
    <div class="_body">
      <el-card :body-style="{ padding: '20px 10px' }">
        <div slot="header">
          <span>邮箱服务</span>
        </div>
        <div>
          <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="SMTP服务器">
              <el-input v-model="form.name" style="width:200px"></el-input>
              <span class="_label">如：</span>
              <span class="tips">smtp.163.com</span>
            </el-form-item>
            <el-form-item label="SMTP端口号">
              <el-input v-model="form.port" style="width:100px"></el-input>
              <span class="_label">一般为 25 或 465</span>
            </el-form-item>
            <el-form-item label="发件人邮箱">
              <el-input v-model="form.email" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item label="发件人昵称">
              <el-input v-model="form.nikename" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item label="邮箱登入密码">
              <el-input type="password" v-model="form.password" style="width:200px"></el-input>
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
        port:"25",
        email:"ztcweb@163.com",
        nikename:"jfzzzz",
        password:"password"
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
  margin: 0 10px;
  color: #ccc;
}
._body .tips {
  color: #ccc;
}
</style>
