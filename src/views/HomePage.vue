<template>
<div class="main">
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>通知中心</span>
  </div>
  <el-skeleton :rows="9" />
</el-card>
</div>
</template>
<script>
export default {
           
           
}
</script>
<style lang='less' scoped>
 .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 80%;
  }
           
</style>

