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
            :border="true"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            resizable
            stripe
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="name" label="用户名" width="200"></el-table-column>
            <el-table-column prop="id" label="ID" width="55"></el-table-column>
            <el-table-column prop="_id" label="_ID" show-overflow-tooltip width="120"></el-table-column>
            <el-table-column prop="phone" label="手机号" width="150"></el-table-column>
            <el-table-column prop="type" label="类型" width="200">
              <template slot-scope="scope">{{ scope.row.type == 0 ?'博主':'其他用户' }}</template>
            </el-table-column>
            <el-table-column prop="create_time" label="加入时间" show-overflow-tooltip>
              <template slot-scope="scope">{{ scope.row.create_time | dateFilterSmall}}</template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="primary"
                  @click="handleEdit(scope.$index, scope.row)"
                >编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="pageInfo.count"
            @current-change="changePage"
          ></el-pagination>
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
          <el-input v-model="userinfo.pic" style="width:60%"></el-input>
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
    <el-dialog title="编辑用户" :visible.sync="dialogEidtVisible">
      <el-form :model="editUserInfo" class="dialogForm" :rules="rules" ref="editUserInfo">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="editUserInfo.name" autocomplete="off" style="width:60%" readonly></el-input>
        </el-form-item>
        <el-form-item label="手机号码" :label-width="formLabelWidth">
          <el-input v-model="editUserInfo.phone" autocomplete="off" style="width:60%"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="editUserInfo.email" autocomplete="off" style="width:60%"></el-input>
        </el-form-item>
        <el-form-item label="更新密码" prop="password" :label-width="formLabelWidth">
          <el-input
            type="password"
            v-model="editUserInfo.password"
            autocomplete="off"
            style="width:60%"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass" :label-width="formLabelWidth">
          <el-input
            type="password"
            v-model="editUserInfo.checkPass"
            autocomplete="off"
            style="width:60%"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogEidtVisible = false">取 消</el-button>
        <el-button type="primary" @click="editDialogEidt">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  created() {
    this.reloadList();
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.editUserInfo.checkPass !== "") {
          this.$refs.editUserInfo.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.editUserInfo.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      dialogFormVisible: false,
      dialogEidtVisible: false,
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
      // 复选框 存储
      multipleSelection: [],
      editUserInfo: {
        name: "",
        phone: "",
        email: "",
        password: "",
        checkPass: ""
      },
      pageInfo: {
        count: 0,
        limit: "",
        index: ""
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    reloadList() {
      this.$http.get("/userList").then(res => {
        this.tableData = res.data.data;
      });
    },
    onSubmit() {
      console.log("submit!");
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleAdd() {
      for (const i in this.userinfo) {
        if (this.userinfo.hasOwnProperty(i)) {
          this.userinfo[i] = "";
        }
      }
      this.dialogFormVisible = true;
    },
    handleDel() {},
    handleEdit(index, row) {
      console.log(row);
      // this.$message(scopeRow);
      this.dialogEidtVisible = true;
      // this.editUserInfo = scopeRow;
      this.editUserInfo = Object.assign({}, row);
      this.editUserInfo.password = "";
    },
    handleDelete() {},
    changePage(index) {
      console.log(index);
      this.pageInfo.index = index;
    },
    async editDialogEidt() {
      this.dialogEidtVisible = false;
      this.editUserInfo.id = this.editUserInfo._id;
      await this.$http
        .post("/upDateUser", this.editUserInfo)
        .then(res => {
          let data = res.data;
          if (data.code == 0) {
            this.$message.success(data.message);
            this.reloadList();
          } else {
            this.$message.error(data.message);
          }
        })
        .catch(err => {
          console.log(err);
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
</style>
