<template>
  <el-scrollbar style="height: 100%">
    <el-table
      :data="
        tableData.filter(
          (data) =>
            !search || data.testName.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
      <el-table-column type="index" :index="1"> </el-table-column>
      <el-table-column label="考试编号" prop="testSerial" > </el-table-column>
      <el-table-column label="考试日期" prop="testDate" sortable> </el-table-column>
      <el-table-column label="考试科目" prop="testName"> </el-table-column>
      <el-table-column label="考试分数" prop="score" sortable> </el-table-column>
      <el-table-column align="center">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search"  placeholder="输入考试科目搜索" />
        </template>
        <template slot-scope="scope">
          <el-tag type="danger" :disable-transitions="true" v-if="scope.row.totalScore*0.6>scope.row.score">不及格</el-tag>
          <el-tag type="success" :disable-transitions="true" v-else>及格</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </el-scrollbar>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
      search: ''
    }
  },
  async mounted(){
     let res=await this.$api.score.getScore({studentID:this.$store.getters.info.studentID})
      res.data.sort((a,b)=>{
        return b.id-a.id
      })
      this.tableData=res.data
  }


}
</script>
<style lang='less' scoped>
/deep/ .el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>