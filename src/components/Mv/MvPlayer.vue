<template>
  <div class="mv-player">
    {{$route.params.vid}}
  </div>
</template>
<script>
export default {
  name: 'MvPlayer'
}
</script>
<style scoped lang="scss">
  .mv-player{
    font-size: 12px;
    color: #fff;
  }
</style>
