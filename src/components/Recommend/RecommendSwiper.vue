<template>
  <div class="slide">
    <swiper :options="swiperOption">
      <swiper-slide><img src="https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/355419.jpg?max_age=2592000"></swiper-slide>
      <swiper-slide><img src="https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/354498.jpg?max_age=2592000"></swiper-slide>
      <swiper-slide><img src="https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/353632.jpg?max_age=2592000"></swiper-slide>
      <swiper-slide><img src="https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/354689.jpg?max_age=2592000"></swiper-slide>
      <swiper-slide><img src="https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/354364.jpg?max_age=2592000"></swiper-slide>
    </swiper>
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>
<script>
export default {
  name: 'slide',
  data () {
    return {
      swiperOption: {
        autoplay: true,
        speed: 1000,
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
      },
      imgUrl: [
        {
          src: 'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/355419.jpg?max_age=2592000'
        },
        {
          src: 'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/354498.jpg?max_age=2592000'
        },
        {
          src: 'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/353632.jpg?max_age=2592000'
        },
        {
          src: 'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/354689.jpg?max_age=2592000'
        },
        {
          src: 'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/354364.jpg?max_age=2592000'
        },
      ]
    }
  }
}
</script>
<style scoped lang="scss">
  .slide{
    height: 150px;
    .swiper-container{
      height: 100%;
      .swiper-wrapper{
        height: 100%;
        .swiper-slide{
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .swiper-pagination{
      color: #fff
    }
  }
</style>
