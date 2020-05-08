<template>
  <nav>
    <ul>
      <!-- 声明式导航 -->
      <router-link to="/film" activeClass="myactive" tag="li">
        <i class="iconfont icon-dianying"></i>
        电影
      </router-link>
      <router-link to="/cinema" activeClass="myactive" tag="li">
        <i class="iconfont icon-yingyuan"></i>
        影院
      </router-link>
      <router-link to="/center" activeClass="myactive" tag="li">
        <i class="iconfont icon-wode"></i>
        我的
      </router-link>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.myactive {
  color: #e54847;
}
nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: white;
  ul {
    display: flex;
    li {
      flex: 1;
      line-height: 50px;
      text-align: center;
      color: #333;
    }
  }
}
</style>
