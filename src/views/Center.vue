<template>
  <div>
    <div class="app-title">
      <mt-header title="猫眼电影">
      <router-link to="/film/nowplaying" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
     </mt-header>
    </div>
    
    <mt-field label="用户名" placeholder="用户名/手机号/邮箱" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <div class="btn-login">
      <mt-button type="danger">登录</mt-button>
    </div>
    
    <div class="subline">
      <a href="javascript:;">立即注册</a>
      <a href="javascript:;">找回密码</a>
    </div>
    <div class="copyright">
      © 猫眼电影 客服电话：<a href="javascript:;">400-670-5335</a>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
.subline {
  font-size: 14px;
  a {
     color: #FE8C00;
  }
}
.copyright {
  text-align: center;
  font-size: 15px;
  a {
    color: #e54847;
  }
}
.mint-header {
  height: 50px;
  background-color: #e54847;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
}

.btn-login {
  margin: 15px;
  .mint-button {
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  font-size: 14px;
  line-height: 30px;
}
}
.subline {
  display: flex;
  justify-content: space-between;
  padding: 15px;
}

</style>