<template>
  <div class="userInfo">
    <div class="info">
      <img src="static/images/background6.jpg" alt="">
      <div class="detail">
        <span class="name">皮皮、夏</span>
        <span class="vip">VIP</span>
        <br />
        <span class="level">LV.8</span>
        <router-link to="#">完善个人资料</router-link>
      </div>
    </div>
    <div class="msg">
      <span class="iconfont icon-xinfeng"></span>
    </div>
  </div>
</template>
<script>
export default{
  name: 'UserInfo'
}
</script>

<style lang="scss" scoped>
  @import "../../css/varibles.scss";
.userInfo{
  margin-top: 20px;
  width: 100%;
  height: 50px;
  font-size: 14px;
  border-bottom: 1px rgba(244, 244, 244, 0.3) solid;
  .info{
    height: 100%;
    float: left;
    margin-left: 20px;
    img{
      float: left;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .detail{
      margin-left: 8px;
      float: right;
      .name{
        color: #fff;
        line-height: 20px;
      }
      .vip{
        display: inline-block;
        line-height: 18px;
        padding: 0 10px;
        border-radius: 10px;
        background: #666;
        color: #d5d5d5;
        font-style: oblique;
        font-size: 13px;
        font-weight: bold;
      }
      .level{
        color: orange;
        background: transparent;
        border: 1px orange solid;
        border-radius: 3px;
        padding: 0px 4px;
        font-size: 12px;
        font-style: oblique;
      }
      a{
        color: #d5d5d5;
        font-size: 12px;
        margin-left: 4px;
      }
    }
  }
  .msg{
    float: right;
    margin-right: 20px;
    .iconfont{
      display: block;
      width: 24px;
      height: 24px;
      font-size: 24px;
      color: #fff;
      position: relative;
      &:after{
        display: block;
        content: "1";
        width: 16px;
        line-height: 16px;
        text-align: center;
        background: red;
        color: #fff;
        border-radius: 50%;
        font-size: 12px;
        position: absolute;
        top: -8px;
        right: -8px;
        font-style: oblique;
      }
    }
  }
}
</style>
