<template>
  <div>
    <el-card :style="{ padding: '0px', width:'100%', position:'fixed',zIndex:'1'}">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/setting/website' }">设置</el-breadcrumb-item>
        <el-breadcrumb-item>基本资料</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
    <div class="_body">
      <el-card :body-style="{ padding: '20px 10px' }">
        <div slot="header">
          <span>设置我的资料</span>
        </div>
        <div>
          <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="我的角色">
              <el-select v-model="form.myroid" style="width:200px">
                <el-option label="超级管理员" value="supermanager" disabled></el-option>
                <el-option label="普通管理员" value="manager" disabled></el-option>
                <el-option label="审核员" value="review" disabled></el-option>
                <el-option label="编辑人员" value="ediotr" disabled></el-option>
              </el-select>
              <span class="_label">当前角色不可改为其他角色</span>
            </el-form-item>
            <el-form-item label="用户名">
              <el-input v-model="form.username" style="width:200px" readonly></el-input>
              <span class="_label">不可修改。一般用于后台登入名</span>
            </el-form-item>
            <el-form-item label="昵称">
              <el-input v-model="form.nikename" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-radio-group v-model="form.sax" size="medium">
                <el-radio :label="1">男</el-radio>
                <el-radio :label="0">女</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="头像">
              <el-upload
                class="upload-demo"
                action="/home"
                :limit=1
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                list-type="picture"
                :style="{width:'500px'}"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
            <el-form-item label="手机">
              <el-input v-model="form.mobelphone" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="form.email" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item label="备注">
              <el-input type="textarea" v-model="form.remark"></el-input>
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
        myroid: "supermanager",
        username: "jfzzzz",
        nikename: "杰尼杰尼",
        sax: 1,
        mobelphone: "",
        email: "",
        remark: ""
      },
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      this.$message({
        message: this.form,
        type: "success"
      });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
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
