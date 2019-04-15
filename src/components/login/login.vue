<template>
  <div class="login-wrap">
    <div ref="card">
      <el-form ref="form" :model="form" label-width="80px" class="login-form">
        <div class="login-title">系统登录</div>
        <el-form-item label="用户名">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密 码">
          <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-button class="login-btn" type="primary" @click="login">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import getToken from "../../assets/js/auth.js";
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },

      userForm: {}
    };
  },

  methods: {
    async login() {
      // 1. 采集表单数据
      // 2. 表单验证
      // 3. 发请求执行登陆操作
      // 4. 根据响应做交互
      const res = await this.$http.post("/login", this.form);
      const data = res.data;
      // console.log(data)
      if (data.meta.status === 200) {
        // 登陆成功，将服务器签发给用户的 Token 身份令牌记录到 localStorage 中
        // 其它需要使用 Token 的都去本地存储获取
        window.localStorage.setItem("admin-token", JSON.stringify(data.data));
        this.$message.success("登录成功鸭！");
        setTimeout(() => {
          this.$router.push({
            name: "home"
          });
        }, 1000);
      } else {
        this.$message.error("账号或者密码错误鸭");
        this.$refs.card.classList.add("animated", "shake");
        // console.log(this.$refs.card.classList);
        setTimeout(() => {
          this.$refs.card.classList.remove("shake");
        }, 1000);
        // this.$refs.card.classList.remove("shake");
        // console.log(this.$refs.card.classList);
      }
    }
  }
};
</script>

<style scoped>
.login-wrap {
  background-color: #324152;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-wrap .login-title {
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 20px;
}

.login-wrap .login-form {
  background-color: #fff;
  width: 400px;
  padding: 30px;
  border-radius: 5px;
}

.login-wrap .login-form .login-btn {
  width: 100%;
}
</style>
