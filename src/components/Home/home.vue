<template>
  <div class="home" ref="home">
    <home-search></home-search>
    <home-user-info></home-user-info>
    <home-menu-type></home-menu-type>
    <home-menu-list></home-menu-list>
  </div>
</template>

<script>
import HomeSearch from './HomeSearch.vue'
import HomeUserInfo from './HomeUser.vue'
import HomeMenuType from './HomeType.vue'
import HomeMenuList from './HomeDiscList.vue'
export default{
  name: 'home',
  components: {
    HomeSearch,
    HomeUserInfo,
    HomeMenuType,
    HomeMenuList
  }
  /*,
  actived: function () {
    this.$refs.home.style.height = window.screen.height - 120 + 'px'
    console.log(window.screen.height)
  }
  */
}
</script>

<style lang="scss" scoped type="text/css">
</style>
