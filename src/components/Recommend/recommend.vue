<template>
  <div class="recommend">
    <slide></slide>
    <recommend-nav></recommend-nav>
    <div class="recommend-router">
      <keep-alive>
        <transition
          name="fade"
          enter-active-class="animated bounceIn"
          leave-active-class="animated bounceOut"
          mode="out-in"
        >
          <router-view></router-view>
        </transition>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import slide from './RecommendSwiper.vue'
import RecommendNav from './RecommendNav.vue'
export default{
  name: 'recommend',
  components: {
    slide,
    RecommendNav
  }
}
</script>
<style lang="scss" scoped>
  .recommend{
    .recommend-router{
      margin-top: 15px;
    }
  }
</style>
