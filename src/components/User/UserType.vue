<template>
  <ul class="types clearfix">
    <li>
      <router-link to="#">
        <span class="iconfont icon-icon--"></span>
        <span class="type">本地音乐</span>
        <span class="num">79</span>
      </router-link>
    </li>
    <li>
      <router-link to="#">
        <span class="iconfont icon-xihuan"></span>
        <span class="type">我的收藏</span>
        <span class="num">43</span>
      </router-link>
    </li>
    <li>
      <router-link to="#">
        <span class="iconfont icon-xiazai1"></span>
        <span class="type">下载</span>
        <span class="num">26</span>
      </router-link>
    </li>
    <li>
      <router-link to="#">
        <span class="iconfont icon-zuijinfangwen-"></span>
        <span class="type">最近播放</span>
        <span class="num">146</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default{
  name: 'UserMenuType'
}
</script>

<style lang="scss" scoped>
a{color: #d5d5d5}
a:hover{color: #fff}
ul.types{
  font-size: 14px;
  color: #d5d5d5;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 10px rgba(255, 255, 255, 0.2) solid;
  li{
    float: left;
    width: 25%;
    text-align: center;
    span{
      display: block;
      &.iconfont{
          line-height: 25px;
          font-size: 25px;
       }
      &.type{
         line-height: 25px;
       }

    }
  }
}
</style>
