<template>
  <div class="hello" id="login">
    <h1>{{ msg }}</h1>
    <h2>请先登录</h2>
    <ul>
      <li>
        <el-input :value="userId" placeholder="请输入内容" size="small">
          <template slot="prepend">账号</template>
        </el-input>
      </li>
      <li>
        <el-input :value="pwd" type="password" size="small">
          <template slot="prepend">密码</template>
        </el-input>
      </li>
    </ul>
    <el-button>登录</el-button>
    <el-button>注册</el-button>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      msg: "Welcome to my Vue.js App",
      userId:"test",
      pwd:"123qwe"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  margin: auto;
  width:400px;
  list-style-type: none;
  padding: 0;
}
li {
  margin:10px;
}
a {
  color: #42b983;
}
</style>
