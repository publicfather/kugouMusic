<template>
  <div id="app">
    <img class="bg" src="static/images/background6.jpg">
    <index-header></index-header>
    <router-view/>
    <index-footer></index-footer>
  </div>
</template>

<script>
import IndexHeader from '@/components/header'
import IndexFooter from '@/components/footer'
export default {
  name: 'App',
  components: {
    IndexHeader,
    IndexFooter
  }
}
</script>

<style lang="scss" scoped >
html, body{
  width: 100%;
  height: 100%;
}
#app{
  //background: rgba(255, 255, 255, 0.1);
  width: 100%;
  height: 100%;
  .bg{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -99;
    width: 375px;
    height: 667px;
    box-sizing: border-box;
    filter: blur(3px);
  }
}
</style>
