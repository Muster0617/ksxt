<template>
  <div class="result_wrapper">
    <div class="result">
      <el-descriptions class="margin-top" title="考试结束" :column="1" border>
        <template slot="extra">
          <el-button type="warning" @click="back()">返回首页</el-button>
        </template>
        <el-descriptions-item label-class-name="my-label">
          <template slot="label">考试名称：</template>
          {{ testName }}
        </el-descriptions-item>
        <el-descriptions-item label-class-name="my-label">
          <template slot="label">姓名：</template>
          {{ name }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">得分：</template>
          {{ score }} 分
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">完成时间：</template>
          {{ completeTime }} 分钟
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      score: '',
      name: '',
      testName: '',
      completeTime: 0
    };
  },
  async mounted() {
    let res = await this.$api.score.getResult({ testSerial: this.$store.getters.testInfo.testSerial, studentID: this.$store.getters.info.studentID })
    if (res.code == 20000) {
      this.score = res.data.score
      this.name = res.data.name
      this.testName = res.data.testName
      this.completeTime =res.data.completeTime
    }
  },
  methods: {
    //  退出登陆
    back() {
      this.$router.replace('/');
    }
  },
};
</script>
<style>
.result_wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(242, 240, 247);
}
.result {
  width: 30%;
  height: 60%;
}
.my-label {
  width: 120px;
}
.el-descriptions__title {
  font-size: 28px;
  color: rgb(59, 79, 134);
}
</style>