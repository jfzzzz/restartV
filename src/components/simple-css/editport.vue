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
            <el-form-item>
              <el-tag
                :key="tag"
                v-for="tag in dynamicTags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)"
              >{{tag}}</el-tag>
              <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
              ></el-input>
              <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
            </el-form-item>
            <el-form-item label="文章标签">
              <el-checkbox-group v-model="checkTags" @change="chengeTag">
                <el-checkbox-button v-for="tag in tags" :key="tag._id">{{tag.name}}</el-checkbox-button>
              </el-checkbox-group>
              <!-- <el-input v-model="form.tags"></el-input> -->
            </el-form-item>
            <el-form-item label="文章分类">
              <el-checkbox-group v-model="checkcategorys">
                <el-checkbox-button v-for="item in form.category" :key="item._id">{{item.name}}</el-checkbox-button>
              </el-checkbox-group>
              <!-- <el-input v-model="form.category"></el-input> -->
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
  props: ["portId"],
  async created() {
    await this.$http
      .get("/getTagList")
      .then(res => {
        let data = res.data;
        if (data.code == 0) {
          this.tags = data.data.list;
          // console.log(this.tags);
          this.$message.success(data.message);
        } else {
          this.$message.error(data.message);
        }
      })
      .catch(err => [console.log(err)]);
    await this.$http
      .post("/getArticleDetail", { id: this.portId })
      .then(res => {
        const data = res.data.data;
        // console.log(data)
        this.form.title = data.title;
        this.form.img_url = data.img_url;
        this.form.author = data.author;
        this.form.keyword = String(data.keyword);
        this.form.desc = data.desc;
        this.value = data.content;
        this.form.id = this.portId;
        this.form.state = data.state;
        this.form.category = data.category;
        // // console.log(data);
        // this.loading = false;
      })
      .catch(err => {});
  },
  data() {
    return {
      value: "",
      form: {
        title: "",
        author: "",
        keyword: "",
        desc: "",
        img_url: "",
        tags: [],
        category: "",
        state: "",
        content: "",
        id: ""
      },
      tags: [],
      checkTags: ["面试"],
      checkcategorys: [],
      dynamicTags: ["标签一", "标签二", "标签三"],
      inputVisible: false,
      inputValue: ""
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
      // console.log(this.form)

      await this.$http
        .post("/updateArticle", this.form)
        .then(res => {
          let data = res.data;
          this.$message.success(data.message);
        })
        .catch(err => {
          console.log(err);
        });
      // console.log(render);
    },
    chengeTag(newdata) {
      console.log(newdata);
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    }
  },
  mounted() {
    // console.log(this.portId)
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
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
