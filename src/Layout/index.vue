<template>
  <div class="wrapper">
    <el-container>
      <el-header>
        <div class="header_title">
          <p>信息门户</p>
        </div>
        <div class="header_main">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-show="$route.meta.title">{{
              $route.meta.title == '首页' ? '' : $route.meta.title
            }}</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="header_right">
            {{ name }}
            <el-dropdown @command="handleCommand">
              <div class="header_dropdown">
                <el-avatar shape="square" size="large" :src="squareUrl">
                </el-avatar>
                <i class="el-icon-arrow-down el-icon--right"></i>
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            :default-active="$route.meta.pitch"
            class="el-menu-vertical-demo"
          >
            <el-menu-item index="1" @click="goto('/')">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="2" @click="goto('/StudentInfo')">
              <i class="el-icon-postcard"></i>
              <span slot="title">学籍信息</span>
            </el-menu-item>
            <el-menu-item index="3" @click="goto('/TestQuery')">
              <i class="el-icon-magic-stick"></i>
              <span slot="title">考试查询</span>
            </el-menu-item>
            <el-menu-item index="4" @click="goto('/TestScore')">
              <i class="el-icon-medal"></i>
              <span slot="title">我的成绩</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template> 
<script>
export default {
  data() {
    return {
      name: '',
      squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
    }
  },
  mounted() {
    this.name = this.$store.getters.info.name
  },
  methods: {
    goto(path) {
      this.$router.push(path).catch(err => {
        err
      })
    },
    handleCommand(command) {
      if (command == 'logout') {
        this.$store.dispatch('user/logout').then(() => {
          this.$router.push('/login')
        })
      }
    }
  }


}
</script>
<style lang='less' scoped>
.flex_center(@direction) {
  display: flex;
  flex-direction: @direction;
  align-items: center;
  justify-content: center;
}
.wrapper {
  height: 100%;
  width: 100%;
  margin: 0;
  overflow: hidden;
  .el-container {
    height: 100%;
    width: 100%;
    margin: 0;
    .el-header {
      background-color: rgb(33, 29, 65);
      padding: 0;
      margin: 0;
      width: 100%;
      display: flex;
      flex-direction: row;
      .header_title {
        height: 60px;
        width: 200px;
        .flex_center(row);
        p {
          font-size: 25px;
          color: cornsilk;
          margin: 0;
        }
      }
      .header_main {
        margin: 0;
        height: 60px;
        display: flex;
        flex-direction: row;
        align-items: center;
        .el-breadcrumb /deep/ .el-breadcrumb__inner {
          font-size: 17px;
          color: rgb(255, 255, 255);
        }
        .header_right {
          position: absolute;
          right: 10px;
          color: rgb(255, 255, 255);
          display: flex;
          align-items: center;
          .el-avatar {
            margin: 10px;
          }
          .header_dropdown {
            display: flex;
            align-items: center;
            color: rgb(255, 255, 255);
          }
        }
      }
    }
    .el-aside {
      .el-menu {
        height: 100%;
      }
    }
  }
}
</style>