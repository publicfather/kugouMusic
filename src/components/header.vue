<template>
  <div class="header">
    <ul class="clearfix">
      <li><a href="#"><span class="iconfont icon-sanhengxian"></span></a></li>
      <li><router-link to="/home/user">我</router-link></li>
      <li><router-link to="/home/recommend">听</router-link></li>
      <li><router-link to="/home/mv">看</router-link></li>
      <li><router-link to="/home/album">唱</router-link></li>
      <li><a href="#"><span class="iconfont icon-yinle"></span></a></li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'IndexHeader'
}
</script>

<style lang="scss" scoped="">
@import "../css/varibles.scss";
.header{
  position: fixed;
  top: 0;
  width: 100%;
  height: $IndexHeaderHeight;
  ul{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgba(255, 255, 255, 0.2);
    li{
      flex: 1;
      float: left;
      cursor: pointer;
      a{
        display: block;
        font-size: .24rem;
        color: #d5d5d5;
        line-height: $IndexHeaderHeight;
        text-align: center;
        &:hover{
          color: #fff;
        }
        &.router-link-exact-active, &.router-link-active{
          color: white;
          font-size: .3rem;
        }
        .iconfont{
          font-size: .24rem;
          color: #fff;
        }
      }
    }
  }
}
</style>
