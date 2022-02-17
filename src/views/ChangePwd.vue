<template>
  <div class="wrapper">
    <div class="main">
      <el-row class="text"> 更改密码 </el-row>
      <el-row class="input">
        <el-input v-model="studentID" placeholder="请输入学号"></el-input>
        <el-input v-model="name" placeholder="请输入姓名"></el-input>
        <el-input
          placeholder="请输入新密码"
          v-model="newPassword"
          show-password
        ></el-input>
      </el-row>
      <div class="button">
        <el-button  type="primary" round @click="register">确认更改</el-button>
      </div>
      <el-row @click.native="goto('/login')" class="goto"> 返回登陆 </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      studentID: "",
      newPassword: "",
      name: "",
    };
  },
  methods: {
    // 注册
    register() {
      // 前台验证
      if (this.studentID && this.name && this.newPassword) {
        // 判断studentid是否是数字
        if (isNaN(this.studentID)) {
          this.$message({
            message: "请输入正确的学号",
            type: "warning",
          });
          // 判断username是否是字符串
        } else if (!isNaN(this.username)) {
          this.$message({
            message: "请输入正确的姓名",
            type: "warning",
          });
        } else {
          // 收集发送的数据
          let data = {
            studentID: this.studentID,
            name: this.name,
            newPassword: this.newPassword,
          };
          // 发送修改密码请求
          this.$api.user.changePwd(data).then(res => {
            // 判断状态
            if (res.status == 'success') {
              this.$message({
                message: res.msg,
                type: "success",
              });
              // 跳转回登陆页面
              this.$router.push("login");
            } else {
              this.$message({
                message: res.msg,
                type: "warning",
              });
            }
          });
        }
      } else {
        this.$message({
          message: "请输入正确的信息",
          type: "warning",
        });
      }
    },
    // 跳转登陆页面
    goto(path) {
      this.$router.push(path);
    },
  },
};
</script>
<style scoped>
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
  height: 520px;
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
  font-size: 30px;
}
.goto {
  font-size: 18px;
  color: rgb(79, 84, 153);
}

.el-input {
  margin-bottom: 17px;
}
.el-button.is-round {
  width: 260px;
}
</style>