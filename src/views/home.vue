<template>
<el-container>
  <el-aside width="200px">
     
    <el-menu  >
     
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title"> 
        <router-link to="/view2">导航二</router-link></span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>

    </el-menu>
   
  </el-aside>


  <el-container>
    <el-header>Header</el-header>
    <el-main>
        Main
        <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  mounted:function () {
        // axios.get('./jsonData/test1.json')
        // .then((result) => {
        //     console.log(result)
        // }).catch((err) => {
        //     console.log(err)            
        // });
  }
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
