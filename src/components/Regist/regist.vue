<template>
  <div class="regist">
    <div class="title">
      注册
    </div>
    <form class="form">
      <div class="wrap">
        <div class="user input-wrap">
          <label for="user">手机号</label>
          <input id="user" name="user" type="text" placeholder="请输入手机号">
          <i class="iconfont icon-xiangxia"></i>
        </div>
        <div class="pwd input-wrap">
          <label for="pwd">密码</label>
          <input id="pwd" name="pwd" type="password" placeholder="请填写密码">
          <i class="iconfont icon-yanjing"></i>
        </div>
        <div class="pwd input-wrap">
          <label for="pwd">确认密码</label>
          <input id="pwd2" name="pwd2" type="password" placeholder="请再次填写密码">
        </div>
      </div>
      <router-link class="commit" to="/login/typeOne">注册</router-link>
    </form>
    <div class="footer">
      <fieldset>
        <legend>其他注册方式</legend>
      </fieldset>
      <ul class="otherLoginType">
        <li><i class="iconfont icon-weibo"></i></li>
        <li><i class="iconfont icon-qq"></i></li>
        <li><i class="iconfont icon-weixin"></i></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default{
  name: 'regist'
}
</script>
<style lang="scss" scoped>
  .regist{
    font-size: 14px;
    .title{
      line-height: 56px;
      font-size: 16px;
      text-align: center;
      color: #fff;
      font-weight: 300;
    }
    form{
      .wrap{
        margin-top: 8px;
        background: rgba(255, 255, 255, 0.2);
        .input-wrap{
          background: transparent;
          display: flex;
          margin-bottom: 2px;
          label{
            display: block;
            font-size: 14px;
            color: #ddd;
            line-height: 36px;
            margin-left: 25px;
            padding-right: 10px;
            border-bottom: 1px rgba(255, 255, 255, 0.1) solid;
          }
          input{
            flex: 1;
            background: transparent;
            border: none;
            font-size: 14px;
            color: #ddd;
            line-height: 36px;
            border-bottom: 1px rgba(255, 255, 255, 0.1) solid;
            font-size: 13px;
          }
          i{
            display: block;
            font-size: 14px;
            color: #ddd;
            line-height: 36px;
            padding-left: 10px;
            padding-right: 25px;
            border-bottom: 1px rgba(255, 255, 255, 0.1) solid;
            font-weight: 100;
          }
        }
      }
      .commit{
        display: block;
        line-height: 30px;
        text-align: center;
        width: 90%;
        border-radius: 8px;
        margin: 8px auto;
        color: #ddd;
        background: linear-gradient(15deg, orange, orangered);
        &:hover{
          color: #fff;
          background: linear-gradient(-15deg, orange, orangered);
        }
      }
    }
    .footer{
      width: 100%;
      position: fixed;
      bottom: 40px;
      fieldset{
        height: 12px;
        border: none;
        border-top: 1px rgba(255, 255, 255, 0.3) solid;
        width: 80%;
        margin: 4px auto;
        legend{
          color: rgba(255, 255, 255, 0.3);
          font-size: 12px;
          margin: 0 auto;
        }
      }
      ul.otherLoginType{
        display: flex;
        width: 80%;
        margin: 0 auto;
        li{
          flex: 1;
          cursor: pointer;
          i{
            display: block;
            line-height: 30px;
            text-align: center;
            font-size: 20px;
            color: #fff;
          }
        }
      }
    }
  }
</style>
