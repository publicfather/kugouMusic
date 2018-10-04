<template>
  <div class="user" ref="home">
    <user-search></user-search>
    <user-info></user-info>
    <user-menu-type></user-menu-type>
    <user-disc-list></user-disc-list>
  </div>
</template>

<script>
import UserSearch from './UserSearch.vue'
import UserInfo from './UserInfo.vue'
import UserMenuType from './UserType.vue'
import UserDiscList from './UserDiscList.vue'
export default{
  name: 'user',
  components: {
    UserSearch,
    UserInfo,
    UserMenuType,
    UserDiscList
  }
}
</script>

<style lang="scss" scoped type="text/css">
</style>
