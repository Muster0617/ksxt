<template>
    <el-scrollbar style="height: 100%">
      <el-descriptions title="学籍信息" :column="2" size="medium" border>
        <el-descriptions-item>
          <template slot="label"> 学号 </template>
          {{ info.studentID }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 姓名 </template>
          {{ info.name }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 性别 </template>
          {{ info.sex }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 班级 </template>
          {{ info.class }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 院系 </template>
          {{ info.faculty }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 培养类型 </template>
          {{ info.type }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 学制 </template>
          {{ info.studyLength }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 专业 </template>
          {{ info.specialty }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 是否在校 </template>
          {{ info.atSchool }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 是否在籍 </template>
          {{ info.absentee }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 曾用名 </template>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 出生年月 </template>
          {{ info.dateBirth }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 民族 </template>
          {{ info.national }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 政治面貌 </template>
          {{ info.politicsStatus }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 婚姻状况 </template>
          {{ info.maritalStatus }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 入校时间 </template>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 通信地址 </template>
          {{ info.address }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 电子邮件 </template>
          {{ info.email }}
        </el-descriptions-item>
      </el-descriptions>
    </el-scrollbar>
</template>
<script>
export default {
  data() {
    return {
      info: ''
    }
  },
  mounted() {
    this.info = this.$store.getters.info
  }
}
</script>
<style lang="less" scoped>
  /deep/ .el-scrollbar__wrap {
    overflow-x: hidden;
  }
</style>