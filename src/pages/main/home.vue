<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <Menu />
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from './menu.vue'

export default {
  components: {
    Menu
  }
}
</script>

<style scoped>
.el-container {
  height: calc(100vh - 60px);
}
.el-header {
  background-color: #b3c0d1;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  text-align: center;
  line-height: 200px;
  background-color: #b3c0d1;
}

.el-main {
  background-color: #e9eef3;
  text-align: center;
  line-height: 160px;
}
</style>
