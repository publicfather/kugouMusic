<template>
  <div class="slide">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="item in recommendList"
        :key="item.id">
          <img :src="item.picUrl">
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>
<script>
import getRecommend from '../../api/getRecommend'
import {ERR_OK} from '../../api/config'
import {mapGetters} from 'vuex'
export default {
  name: 'slide',
  data () {
    return {
      swiperOption: {
        autoplay: 3000, // 每3s切换一张
        speed: 1500, // 切换速度1.5s
        pagination: '.swiper-pagination' // 开启圆点分页
      },
      imgUrl: [
        {
          id: '001',
          url: 'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/355419.jpg?max_age=2592000'
        },
        {
          id: '002',
          url: 'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/354498.jpg?max_age=2592000'
        },
        {
          id: '003',
          url: 'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/353632.jpg?max_age=2592000'
        },
        {
          id: '004',
          url: 'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/354689.jpg?max_age=2592000'
        },
        {
          id: '005',
          url: 'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/354364.jpg?max_age=2592000'
        }
      ]
    }
  },
  mounted: function () {
    getRecommend({platform: 'h5', uin: 0, needNewCode: 1}).then((res) => {
      if (res.code === ERR_OK) {
        this.$store.commit('initRecommendList', res.data.slider)
      }
    })
  },
  computed: {
    ...mapGetters([
      'recommendList'
    ])
  }
}
</script>
<style scoped lang="scss">
  .slide{
    margin-top: .04rem;
    position: relative;
    width: 100%;
    height: 40vw;
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
      position: absolute;
      bottom: -5%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>
