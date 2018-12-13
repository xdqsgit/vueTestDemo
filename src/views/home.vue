<template>
<el-container >
  <el-header>welcome</el-header>
  <el-main>
<el-container>

  <el-aside width="200px">
     
    <el-menu  >
     
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title"> 
        <router-link to="/home/view2">栏目管理</router-link></span>
      </el-menu-item>

      <el-menu-item index="3" >
        <i class="el-icon-document"></i>
        <router-link tag="span" to="categoryManager">分类管理</router-link>
      </el-menu-item>

      <el-menu-item index="4">        
        <i class="el-icon-setting"></i>
        <span slot="title">文章管理</span>
      </el-menu-item>

    </el-menu>
   
  </el-aside>
<el-main id="mainContent">
  <transition name="el-zoom-in-bottom"> 
    <router-view v-show="show" class="transition-box"></router-view>
  </transition> 

</el-main>
</el-container>
</el-main>
 
</el-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  data:()=>({
    show:true
  }),
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
body{
  padding:0;
  margin: 0;
}
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
  .el-container{
    height:100%;
  }
     .transition-box {
    border-radius: 4px;
    text-align: center;
    box-sizing: border-box;
  }
  #mainContent{
     background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
</style>
