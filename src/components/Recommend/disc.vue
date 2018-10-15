<template>
  <div class="disc">
    <ul class="recommend-discList">
      <li v-for="item in recommendDiscList" :key="item.dissid">
        <div class="recommend-discDetail">
          <img :src="item.imgurl" alt="" class="cover">
          <div class="listen">
            <i class="iconfont icon-erji"></i>
            <span class="count">{{item.listennum}}</span>
          </div>
          <div class="creatorDetail clearfix">
            <i class="iconfont icon-zhanghaodenglu"></i>
            <span class="creator">{{item.creator.name}}</span>
            <i class="iconfont icon-xing-copy"></i>
          </div>
          <i class="iconfont icon-bofang"></i>
        </div>
        <div class="recommend-discname">{{item.dissname}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
import {getDiscList} from 'api/search3'
import {ERR_OK} from '../../api/config'
import {mapGetters} from 'vuex'
import getDiscDetail from '../../api/getDiscDetail'
export default {
  name: 'disc',
  mounted: function () {
    getDiscDetail().then((res) => {
      if (res.code === ERR_OK) {
        console.log(res.data)
      }
    })
    if (this.recommendDiscList.length === 0) {
      getDiscList().then((res) => {
        if (res.code === ERR_OK) {
          this.$store.commit('initRecommendDiscList', res.data.list)
        } else {
          console.log('没,没有推荐')
        }
      })
    }
  },
  computed: {
    ...mapGetters([
      'recommendDiscList'
    ])
  }
}
</script>
<style lang="scss" scoped>
  .disc{
    font-size: 14px;
    color: #eee;
    ul.recommend-discList{
      margin-left: 0;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
      li{
        flex: 0 0 46%;
        flex-grow: 1;
        position: relative;
        padding: 0 4px;
        min-height: 200px;
        .recommend-discDetail{
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 50px;
          img.cover{
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            width: 98%;
            height: 100%;
            margin: 0 auto;
            border-radius: 4px;
            z-index: -99;
          }
          .listen{
            position: absolute;
            font-size: 12px;
            color: #fff;
            top: 2px;
            right: 4px;
          }
          .creatorDetail{
            position: absolute;
            left: 8px;
            bottom: 8px;
            line-height: 20px;
            i.icon-zhanghaodenglu{
              color: #fff;
              float: left;
            }
            .creator{
              font-size: 12px;
              float: left;
              color: #d5d5d5;
              margin-left: 4px;
            }
            i.icon-xing-copy{
              display: block;
              font-size: 10px;
              color: #fff;
              float: left;
              width: 14px;
              height: 14px;
              line-height: 14px;
              text-align: center;
              background: red;
              border-radius: 50%;
              margin-top: 3px;
              margin-left: 4px;
            }
          }
        }
        i.icon-bofang{
          display: block;
          font-size: 10px;
          color: #fff;
          float: left;
          width: 20px;
          height: 20px;
          line-height: 20px;
          text-align: center;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 50%;
          margin-top: 3px;
          margin-left: 4px;
          border: 1px #fff solid;
          position: absolute;
          right: 8px;
          bottom: 4px
        }
        .recommend-discname{
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 50px;
          line-height: 25px;
          font-size: 13px;
        }
      }
    }
  }
</style>
