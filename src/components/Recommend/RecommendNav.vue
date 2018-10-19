<template>
  <div class="recommend-nav clearfix">
    <ul>
      <li>
        <router-link to="/home/recommend/songs">新歌</router-link>
      </li>
      <li>
        <router-link to="/home/recommend/broadcast">电台</router-link>
      </li>
      <li>
        <router-link to="/home/recommend/disc">歌单</router-link>
      </li>
      <li>
        <router-link to="/home/recommend/information">资讯</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'RecommendNav'
}
</script>
<style lang="scss" scoped>
  .recommend-nav{
    margin-top: 4px;
    ul{
      margin-left: 6px;
      li{
        float: left;
        a{
          display: block;
          color: #d5d5d5;
          font-size: 13px;
          line-height: 24px;
          padding-left: 5px;
          padding-right: 5px;
          position: relative;
          // transition: .2s border linear;
          &.router-link-exact-active{
            font-size: 14px;
            color: #fff;
            border-bottom: 2px #007aff solid;
          }
        }
      }
    }
  }
</style>
