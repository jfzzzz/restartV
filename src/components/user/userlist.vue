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
            <el-table-column prop="id" label="ID" width="55"></el-table-column>
            <el-table-column prop="username" label="用户名" width="200"></el-table-column>
            <el-table-column prop="phoneNum" label="手机号" width="200"></el-table-column>
            <el-table-column prop="email" label="邮箱" width="200"></el-table-column>
            <el-table-column label="性别" width="80">
              <template slot-scope="scope">{{ scope.row.sex ==1?'男':'女' }}</template>
            </el-table-column>
            <el-table-column prop="ip" label="IP" width="200"></el-table-column>
            <el-table-column prop="joindate" label="加入时间" show-overflow-tooltip></el-table-column>
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
      <el-form :model="editUserInfo" class="dialogForm">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="editUserInfo.username" autocomplete="off" style="width:60%"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" :label-width="formLabelWidth">
          <el-input v-model="editUserInfo.phoneNum" autocomplete="off" style="width:60%"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="editUserInfo.email" autocomplete="off" style="width:60%"></el-input>
        </el-form-item>
        <el-form-item label="头像" :label-width="formLabelWidth">
          <el-input v-model="editUserInfo.pic" style="width:60%"></el-input>
        </el-form-item>
        <el-form-item label="选择性别" :label-width="formLabelWidth">
          <el-radio-group v-model="editUserInfo.sex">
            <el-radio label="1">男</el-radio>
            <el-radio label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogEidtVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogEidtVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  created() {
    this.$http.get("/user/userlist.json").then(res => {
      this.tableData = res.data.data;
      this.pageInfo.count = res.data.count;
      // console.log(res.data.count)
    });
  },
  data() {
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
        username: "",
        phoneNum: "",
        email: "",
        pic: "",
        sax: ""
      },
      pageInfo: {
        count: 0,
        limit: "",
        index: ""
      }
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
      for (const i in this.userinfo) {
        if (this.userinfo.hasOwnProperty(i)) {
          this.userinfo[i] = "";
        }
      }
      this.dialogFormVisible = true;
    },
    handleDel() {},
    handleEdit(index, row) {
      // this.$message(scopeRow);
      this.dialogEidtVisible = true;
      // this.editUserInfo = scopeRow;
      this.editUserInfo = Object.assign({}, row);

    },
    handleDelete() {},
    changePage(index) {
      console.log(index);
      this.pageInfo.index = index;
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
