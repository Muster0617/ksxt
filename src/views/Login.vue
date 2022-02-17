<template>
  <div class="wrapper">
    <div class="main">
      <el-row class="text"> 登陆 </el-row>
      <el-row class="input">
        <el-input v-model="studentID" placeholder="学号"></el-input>
        <el-input
          placeholder="密码"
          v-model="password"
          show-password
        ></el-input>
      </el-row>
      <div class="button">
        <el-button round type="primary" @click="login">登陆</el-button>
      </div>
      <el-row @click.native="goto('/changePwd')" class="goto">
        忘记密码
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      studentID: "",
      password: "",
    };
  },

  methods: {
    // 登陆
    login() {
      // 收集发送给接口的数据
      let data = {
        studentID: this.studentID,
        password: this.password,
      };
      // 前台验证
      if (this.studentID && this.password) {
        // 发生请求判断请求状态
        this.$api.user.login(data).then(res => {
          if (res.status !== 'success') {
            this.$message({
              message: res.msg,
              type: "warning",
            });
          } else {
            this.$store.dispatch('user/login', res.data).then(res => {
              this.$message({
                message: "登陆成功!",
                type: "success",
              });
              this.$router.replace('/')
            })
          }
        });
      } else {
        // 如果input输入有空
        this.$message({
          message: "请填写正确信息",
          type: "warning",
        });
      }
    },
    goto(path) {
      // 跳转注册页面
      this.$router.push(path);
    },
  },
};
</script>
<style lang="less" scoped>
.wrapper {
  height: 100%;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: url('../assets/1.jpg');
  background-size: cover;
}

.main {
  height: 450px;
  width: 400px;
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.input {
  width: 320px;
  margin: 0;
}
.text {
  font-size: 35px;
  line-height: 50px;
}
.goto {
  font-size: 18px;
  color: rgb(79, 84, 153);
}

.el-input {
  margin-bottom: 25px;
}
.el-button.is-round {
  width: 260px;
}
</style>