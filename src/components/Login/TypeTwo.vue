<template>
  <div class="wrap">
    <div class="user input-wrap">
      <label for="user">手机号</label>
      <input id="user" name="user" type="text" placeholder="请输入手机号">
    </div>
    <div class="pwd input-wrap">
      <label for="pwd">验证码</label>
      <input id="pwd" name="pwd" placeholder="请填写验证码">
      <button>发送验证码</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TypeTwo'
}
</script>
<style lang="scss" scoped>
  .wrap{
    margin-top: 8px;
    background: rgba(255, 255, 255, 0.2);
    line-height: 36px;
    .input-wrap{
      background: transparent;
      display: flex;
      margin-bottom: 2px;
      color: #ddd;
      label{
        display: block;
        font-size: 14px;
        line-height: 36px;
        margin-left: 25px;
        padding-right: 10px;
        border-bottom: 1px rgba(255, 255, 255, 0.1) solid;
      }
      input{
        flex: 1;
        background: transparent;
        border: none;
        color: #ddd;
        font-size: 14px;
        line-height: 36px;
        border-bottom: 1px rgba(255, 255, 255, 0.1) solid;
        font-size: 13px;
      }
      button{
        margin-top: 8px;
        color: #ddd;
        background: transparent;
        border: none;
        height: 20px;
        line-height: 20px;
        padding-left: 6px;
        padding-right: 6px;
        border-left: 2px  rgba(255, 255, 255, 0.1) solid;;
      }
    }
  }
</style>
