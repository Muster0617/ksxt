<template>
  <div class="top_wrapper">
    <div class="top_text">姓名：{{ name }}</div>
    <div class="top_reciprocal">正在考试：{{testName}}</div>
    <div class="top_reciprocal">
      考试时间：{{ minute }}:{{ second }}{{ millisecond }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      minute: 0,
      second: 0,
      millisecond: 0,
      testName:'',
      name:''
    };
  },
  mounted() {
    console.log(this.$parent.data)
    this.minute=this.$store.getters.testInfo.testTime
    this.testName=this.$store.getters.testInfo.testName
    this.name=this.$store.getters.info.name
    //   挂载页面创建定时器
    let setIntervalId = setInterval(() => {
        // 如果个秒位为0
      if (this.millisecond == 0) {
        //   如果十秒位为0
        if (this.second == 0) {
            // 分位自减
          this.minute--;
        //   十秒位变为6
          this.second = 6;
        }
        // 个秒位变为10
        this.millisecond = 10;
        // 十秒位自减
        this.second--;
      }
    //   个秒位自减
      this.millisecond--;
    //   如果都为0
      if (this.minute == 0 && this.second == 0 && this.millisecond == 0) {
        //   提交
        this.$emit("submit");
        // 删除定时器
        clearInterval(setIntervalId);
      }
    }, 1000);
  },
};
</script>
<style>
.top_wrapper {
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30px;
  border-bottom: solid 2px rgb(205, 206, 153);
  align-items: center;
  margin: 0;
  justify-content: space-around;
  background-color: rgb(205, 206, 153);
}
.top_text {
  font-size: 20px;
  font-weight: bold;
  color: rgb(46, 55, 112);
}
.top_reciprocal {
  font-size: 20px;
  font-weight: bold;
  color: rgb(46, 55, 112);
}
</style>