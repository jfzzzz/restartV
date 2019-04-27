<template>
  <div>
    <el-card :style="{ padding: '0px', width:'100%', position:'fixed',zIndex:'1'}">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/user/userlist' }">用户</el-breadcrumb-item>
        <el-breadcrumb-item>网站用户</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
    <div class="_body">
      <el-card :body-style="{ padding: '20px 10px' }">
        <div slot="header">
          <el-form :inline="true" :model="formInline" class="demo-form-inline block">
            <el-form-item label="ID">
              <el-input v-model="formInline.id" placeholder="ID"></el-input>
            </el-form-item>
            <el-form-item label="用户名">
              <el-input v-model="formInline.username" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="formInline.email" placeholder="邮箱"></el-input>
            </el-form-item>

            <el-form-item label="性别">
              <el-select v-model="formInline.sex" placeholder>
                <el-option label="不限" value="-1">不限</el-option>
                <el-option label="男" value="1">男</el-option>
                <el-option label="女" value="0">女</el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">
                <i class="fas fa-search fa-lg"></i>
              </el-button>
            </el-form-item>
          </el-form>
        </div>
        <div>
          <el-button type="primary" @click="handleAdd">添加</el-button>
          <el-button type="primary" @click="handleDel">删除</el-button>
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="日期" width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="branch" label="姓名" width="120"></el-table-column>
            <el-table-column prop="title" label="地址" show-overflow-tooltip></el-table-column>
          </el-table>
        </div>
      </el-card>
    </div>
    <el-dialog title="添加用户" :visible.sync="dialogFormVisible">
      <el-form :model="userinfo" class="dialogForm">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="userinfo.username" autocomplete="off" style="width:60%"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" :label-width="formLabelWidth">
          <el-input v-model="userinfo.mobelphone" autocomplete="off" style="width:60%"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="userinfo.email" autocomplete="off" style="width:60%"></el-input>
        </el-form-item>
        <el-form-item label="头像" :label-width="formLabelWidth">
          <el-input v-model="userinfo.pic" autocomplete="off" style="width:60%"></el-input>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="选择性别" :label-width="formLabelWidth">
          <el-radio-group v-model="userinfo.sax">
            <el-radio label="1">男</el-radio>
            <el-radio label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  created() {
    this.$http.get("/home/console/postList.json").then(res => {
      this.tableData = res.data.data;
    });
  },
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: "120px",
      userinfo: {
        username: "",
        mobelphone: "",
        email: "",
        pic: "",
        sax: "1"
      },
      formInline: {
        id: "",
        username: "",
        email: "",
        sex: "-1"
      },
      tableData: [],
      multipleSelection: [],
      imageUrl: ""
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleAdd() {
      this.dialogFormVisible = true;
    },
    handleDel() {},
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
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
.el-form-item {
  margin-bottom: 0px;
}
.el-col-6 {
  text-align: center;
}
.block {
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content: center;
  margin: 5px 0;
}
.dialogForm .el-form-item {
  margin-bottom: 22px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
