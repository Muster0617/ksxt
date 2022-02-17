<template>
  <div class="test_wrapper">
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>离开页面则自动交卷</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="commit()">确定离开</el-button>
      </span>
    </el-dialog>
    <!-- top组件 传递自定义函数-->
    <Top @submit="submit" ref="top" />
    <div class="answer">
      <div class="answer_wrapper">
        <div class="topics">
          <div v-for="(item, index) in data" :key="index" class="topic">
            <div class="answer_text">{{ index + 1 }}. {{ item.topic }}</div>
            <!-- 数据绑定array -->
            <el-radio-group v-model="array[index]" class="option">
              <el-radio label="A" class="label">{{ item.optionA }}</el-radio>
              <el-radio label="B" class="label">{{ item.optionB }}</el-radio>
              <el-radio label="C" class="label">{{ item.optionC }}</el-radio>
              <el-radio label="D" class="label">{{ item.optionD }}</el-radio>
            </el-radio-group>
          </div>
        </div>
        <el-button
          type="success"
          plain
          class="answer_button"
          @click="submit"
          v-loading.fullscreen.lock="fullscreenLoading"
          >提交</el-button
        >
      </div>
    </div>
    <div class="reduce_bottom">已完成：{{ complete }}/{{ data.length }}</div>
  </div>
</template>
<script>
import Top from "../components/Top.vue";

export default {
  components: {
    Top,
  },
  data() {
    return {
      data: [],
      array: [],
      dialogVisible: false,
      score: 0,
      fullscreenLoading: false
    };
  },
  async mounted() {
    let res = await this.$api.test.getTopic({ testSerial: this.$store.getters.testInfo.testSerial })
    if (res.code == 20000) {
      this.data = res.data
    }
    console.log(this.$store.getters.testInfo)
  },
  computed: {
    complete: {
      get() {
        let num = 0
        for (const val of this.array) {
          if (val) {
            num++
          }
        }
        return num
      }
    }

  },
  beforeRouteLeave(to, from, next) {
    if (to.path == '/result') {
      next()
    } else {
      this.dialogVisible = true
      next(false)
    }
  },
  methods: {
    //   提交
    submit() {
      this.fullscreenLoading = true
      const { data, array } = this;
      const answer = [];
      for (const item of data) {
        answer.push(item.answer);
      }
      for (const key in array) {
        if (answer[key] == array[key]) {
          this.score += this.$store.getters.testInfo.topicScore;
        }
      }
      if (this.complete < data.length) {
        this.$confirm('你未完成所有题目，确认交卷？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.commit()
        }).catch(() => {
          this.fullscreenLoading = false
        });
      }
      if (this.complete == data.length) {
        this.$confirm('确认提交', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.commit()
        }).catch(() => {
          this.fullscreenLoading = false
        });
      }
    },
    async commit() {
      let send = {
        name: this.$store.getters.info.name,
        testSerial: this.$store.getters.testInfo.testSerial,
        testName: this.$store.getters.testInfo.testName,
        testDate: this.$store.getters.testInfo.testDate,
        studentID: this.$store.getters.info.studentID,
        score: parseInt(this.score),
        totalScore:this.$store.getters.testInfo.topicNum*this.$store.getters.testInfo.topicScore,
        completeTime: parseInt(this.$store.getters.testInfo.testTime) - parseInt(this.$refs.top.minute),
        class: this.$store.getters.info.class
      };
      //   发送请求
      let res = await this.$api.score.setScore(send)
      if (res.code == 20000) {
        setTimeout(() => {
          this.fullscreenLoading = false
          this.$router.replace('/result')
        }, 2000);
      }
    }
  },
}
</script>
<style>
.test_wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  min-width: 1200px;
}
.answer {
  width: 100%;
  height: 100%;
  margin-top: 30px;
  overflow: auto;
}
.answer_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 100px;
}
.topics {
  width: 50%;
  border: solid 1px rgb(223, 223, 215);
}
.topic {
  padding: 10px;
  padding-left: 20px;
  font-weight: bold;
  color: rgb(83, 80, 80);
  font-size: 18px;
  /* border-left: 2px solid rgb(150, 147, 147); */
  background-color: rgb(250, 250, 249);
}
.option {
  display: flex;
  flex-direction: column;
  margin: 5px;
}
.el-radio{
  width: 100%;
}
.el-radio:hover{
  background-color: rgb(233, 235, 241);
}
.el-radio__label {
  font-size: 16px;
  color: rgb(0, 0, 0);
}
.el-radio__inner {
  width: 15px;
  height: 15px;
}
.label {
  margin-top: 15px;
  display: flex;
  align-items: center;
}
.answer_text {
  margin-bottom: 10px;
}
.answer_button {
  position: fixed;
  bottom: 10px;
  min-width: 650px;
}
.reduce_bottom {
  position: fixed;
  right: 30px;
  bottom: 10px;
  font-size: 25px;
  color: rgb(151, 55, 79);
  font-weight: bold;
}
</style>