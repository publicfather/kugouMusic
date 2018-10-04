<template>
  <div class="home">
    <index-header></index-header>
    <div class="router">
      <keep-alive>
        <transition
          name="router-transition"
          enter-active-class="animated zoomInUp"
          leave-active-class="animated zoomOutDown"
        >
          <router-view/>
        </transition>
      </keep-alive>
    </div>
    <index-footer></index-footer>
  </div>
</template>
<script>
import IndexHeader from '@/components/header'
import IndexFooter from '@/components/footer'
export default {
  name: 'home',
  components: {
    IndexHeader,
    IndexFooter
  }
}
</script>
<style scoped lang="scss">
  @import "../css/varibles.scss";
  .home{
    width: 100%;
    height: 100%;
    .bg{
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -99;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      filter: blur(3px);
    }
    .router{
      padding-top: .01rem;
      overflow: scroll;
      position: absolute;
      top: $IndexHeaderHeight;
      bottom: 64px;
      padding-bottom: 64px;
      width: 100%;
    }
  }
</style>
