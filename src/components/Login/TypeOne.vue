<template>
  <div class="wrap">
    <div class="user input-wrap">
      <label for="user">账号</label>
      <input id="user" name="user" type="text" placeholder="请输入账号" v-model.lazy="username">
      <i class="iconfont icon-xiangxia"></i>
    </div>
    <div class="pwd input-wrap">
      <label for="pwd">密码</label>
      <input id="pwd" name="pwd" type="password" placeholder="请填写密码" v-model.lazy="password">
      <i class="iconfont icon-yanjing"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TypeOne',
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  watch: {
    username: function (newvalue) {
      this.$store.commit('updateUsername', newvalue)
    },
    password: function (newvalue) {
      this.$store.commit('updatePassword', newvalue)
    }
  }
}
</script>
<style lang="scss" scoped>
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
</style>
