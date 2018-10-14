<template>
  <div class="login">
    <div class="title">
      登陆
    </div>
    <ul class="loginType">
      <li><router-link to="/login/typeOne">账号登陆</router-link></li>
      <li><router-link to="/login/typeTwo">短信登陆</router-link></li>
    </ul>
    <form class="form">
      <div class="router">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </div>
      <a class="commit" @click="check()">登陆</a>
      <div class="other clearfix">
        <a href="#" class="pullLeft" @click="jumpToRegist">快速注册</a>
        <a href="#" class="pullRight">忘记密码</a>
      </div>
    </form>
    <div class="footer">
      <fieldset>
        <legend>其他登陆方式</legend>
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
import axios from 'axios'
export default{
  name: 'login',
  methods: {
    jumpToRegist () {
      this.$router.push({path: '/regist'})
    },
    check () {
      axios.get('/static/mock/users.json')
        .then((res) => {
          if (res.data.ret) {
            res = res.data.users
            for (var i = 0; i < res.length; i++) {
              console.table(res[i].username)
              if (res[i].username === this.$store.state.curUser.username && res[i].password === this.$store.state.curUser.password) {
                this.$store.state.isLogin = true
                break
              } else {
                this.$store.state.isLogin = false
              }
            }
            this.$router.push({path: '/home/user'})
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
  .login{
    font-size: 14px;
    .title{
      line-height: 56px;
      font-size: 16px;
      text-align: center;
      color: #fff;
      font-weight: 300;
    }
    ul.loginType{
      display: flex;
        background: rgba(255, 255, 255, 0.2);
      li{
        flex: 1;
        a{
          display: block;
          line-height: 34px;
          text-align: center;
          font-size: 14px;
          color: #ddd;
          &.router-link-exact-active{
            color: orange;
            border-bottom: 2px orange solid;
          }
        }
      }
    }
    form{
      .router{
        height: 76px;
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
      .other{
        a{
          display: block;
          line-height: 20px;
          font-size: 12px;
          color: gold;
          padding: 0 8px;
          &.pullLeft{
            float: left;
          }
          &.pullRight{
            float: right;
          }
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
