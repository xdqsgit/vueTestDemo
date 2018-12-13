<template>

  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="age" label="年龄"></el-table-column>
      </el-table>
    </el-main>
  </el-container>


</template>

<script>
export default {
  name: 'categoryManager',
  data(){
    return{
      tableData:[
        {
          name:'张三',
          age:18
        },
        {
          name:'张三',
          age:18
        },
        {
          name:'张三',
          age:18
        },
        {
          name:'张三',
          age:18
        },
        {
          name:'张三',
          age:18
        }
      ]

    }
  }
}
</script>
<style>
</style>
