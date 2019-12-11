<template>
  <div>
    <el-card :style="{ padding: '0px', width:'100%', position:'fixed',zIndex:'1'}">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/article/articleList' }">文章</el-breadcrumb-item>
        <el-breadcrumb-item>评论系统</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
    <div class="_body">
      <el-card :body-style="{ padding: '20px 10px' }">
        <el-table :data="commentsList" border row-key="_id" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <div v-if="props.row.other_comments.length">
                <el-table :data="props.row.other_comments" border row-key="_id" style="width: 100%">
                  <el-table-column prop="create_time" label="创建时间" width="250">
                    <template slot-scope="scope">
                      <span style="margin-left: 10px">{{ scope.row.create_time | dateFilterSmall }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column prop="title" label="标题" width="150"></el-table-column>
                  <el-table-column prop="is_handle" label="是否处理" width="120">
                    <template slot-scope="scope">
                      <span style="margin-left: 10px">{{ scope.row.is_handle ? '是': '否' }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="是否置顶" width="120">
                    <template slot-scope="scope">
                      <span style="margin-left: 10px">{{ scope.row.is_top ? '是': '否' }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column prop="user.name" label="用户名" width="200">
                    <template slot-scope="scope">
                      <div slot="reference" class="name-wrapper">
                        <el-tag size="medium">{{ scope.row.user.name }}</el-tag>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="state" label="状态" width="120">
                    <template slot-scope="scope">
                      <div slot="reference" class="name-wrapper">
                        <el-select v-model="commentsList[scope.$index]" placeholder="请选择">
                          <el-option
                            v-for="item in commentState"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          >
                            <el-tag size="medium" type="success">{{ item.label }}</el-tag>
                          </el-option>
                        </el-select>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="content" label="评论内容" width="150"></el-table-column>
                  <el-table-column label="操作" width="100">
                    <template slot-scope="scope">
                      <el-button
                        @click="delOtherComment(scope.row,scope.$index, props.row)"
                        type="text"
                        size="small"
                      >删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>

                <!-- <button @click="check(props)">props</button> -->
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="create_time" label="创建时间" width="250">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.create_time | dateFilterSmall }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="title" label="标题" width="150"></el-table-column>
          <el-table-column prop="is_handle" label="是否处理" width="120">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.is_handle ? '是': '否' }}</span>
            </template>
          </el-table-column>
          <el-table-column label="是否置顶" width="120">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.is_top ? '是': '否' }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="user.name" label="用户名" width="200">
            <template slot-scope="scope">
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.user.name }}</el-tag>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="state" label="状态" width="120">
            <template slot-scope="scope">
              <div slot="reference" class="name-wrapper">
                <el-select v-model="commentsList[scope.$index]" placeholder="请选择">
                  <el-option
                    v-for="item in commentState"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                    <el-tag size="medium" type="success">{{ item.label }}</el-tag>
                  </el-option>
                </el-select>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="content" label="评论内容" width="150"></el-table-column>
          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <el-button
                @click="delComment(scope.row,scope.$index, scope)"
                type="text"
                size="small"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  async created() {
    await this.getCommentList();
  },
  data() {
    return {
      // 评论总数
      count: 0,
      commentsList: [],
      commentState: [
        {
          value: "-1",
          label: "已删除"
        },
        {
          value: "0",
          label: "待审核"
        },
        {
          value: "1",
          label: "通过正常"
        }
      ],
      value: "1"
    };
  },
  methods: {
    check(props) {
      console.log(props);
    },
    getCommentList() {
      this.$http
        .get("/getCommentList")
        .then(res => {
          let data = res.data;
          if (data.code == 0) {
            this.commentsList = data.data.list;
            this.count = this.commentsList.length;
            console.log(this.commentsList);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    async delComment(row, index, scope) {
      // console.log(scope);
      // console.log(index);
      // this.commentsList.splice(index,1);
      await this.$http.post("/delComment", { id: row._id }).then(async res => {
        let data = res.data;
        if (data.code == 0) {
          await this.getCommentList();
          this.$message.success(data.message);
        } else {
          this.$message.error(data.message);
        }
      });
    },
    async delOtherComment(row, index, comment) {
      await this.$http
        .post("/delOtherComment", { id: comment._id, commId: row._id })
        .then(async res => {
          let data = res.data;
          if (data.code == 0) {
            // await this.getCommentList();
            this.$message.success(data.message);
          } else {
            this.$message.error(data.message);
          }
        });
    }
  }
};
</script>

<style lang="less" scoped>
._body {
  padding: 10px;
  padding-top: 70px;
}
</style>
