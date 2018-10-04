<template>
  <div class="searchWrap">
    <div class="search">
      <span class="iconfont icon-sousuo"></span>
      <input type="text" placeholder="洛天依、一百万个可能">
    </div>
  </div>
</template>

<script>
export default{
  name: 'UserSearch'
}
</script>

<style lang="scss" scoped="">
.searchWrap{
  margin-top: 10px;
  width: 100%;
  line-height: 40px;
  .search{
    width: 80%;
    height: 30px;
    line-height: 30px;
    margin: 4px auto;
    display: flex;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 15px;
    text-indent: 18px;
    .icon-sousuo{
      display: inline-block;
      line-height: 30px;
      color: #d5d5d5;
    }
    input{
      flex: 1;
      background: transparent;
      border: none;
      text-align: center;
      color: #fff;
    }

  }
}
</style>
