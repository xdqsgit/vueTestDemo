<template>
  <el-table :data="tableData">
<el-table-column prop="name" label="姓名"></el-table-column>
<el-table-column prop="age" label="年龄"></el-table-column>

  </el-table>
</template>

<script>
export default {
  name: 'view3',
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
