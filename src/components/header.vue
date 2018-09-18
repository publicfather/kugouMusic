<template>
  <div class="header">
    <ul class="clearfix">
      <li><span class="iconfont icon-sanhengxian"></span></li>
      <li class="active">我</li>
      <li>听</li>
      <li>看</li>
      <li>唱</li>
      <li><span class="iconfont icon-yinle"></span></li>
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
    background: rgba(255, 255, 255, 0.3);
    li{
      flex: 1;
      font-size: .24rem;
      color: #d5d5d5;
      float: left;
      line-height: $IndexHeaderHeight;
      text-align: center;
      cursor: pointer;
      &:hover{
        color: #fff;
       }
      .iconfont{
        font-size: .24rem;
        color: #fff;
      }
    }
    li.active{
      color: white;
      font-size: .3rem;
    }
  }
}
</style>
