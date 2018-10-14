<template>
  <div class="songs">
    <ul class="songsList">
      <li v-for="(item, index) in recommendSongsList" :key="index">
        <div class="add">
          <i class="iconfont icon-jia" @click="add(item)"></i>
        </div>
        <div class="cover">
          <img v-lazy="item.cover" alt="">
        </div>
        <div class="details">
          <span class="singer">{{item.singer}}</span>
          <span class="name">{{item.name}}</span>
          <span class="comment clearfix"><i class="iconfont icon-pinglun"></i>&nbsp;{{item.comment}}</span>
        </div>
        <div class="more">
          <i class="iconfont icon-gengduo"></i>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import axios from 'axios'
export default {
  name: 'songs',
  data () {
    return {
      songList: [
        {
          id: '0001',
          cover: 'https://y.gtimg.cn/music/photo_new/T002R90x90M000004Y72Tr10VJ3x.jpg?max_age=2592000',
          name: '我一直在这里',
          singer: '李玉刚',
          comment: 458
        },
        {
          id: '0002',
          cover: 'https://y.gtimg.cn/music/photo_new/T002R90x90M000004ZqRQp2kg9yM.jpg?max_age=2592000',
          name: '悲伤逆流成河',
          singer: '张韶涵',
          comment: 458
        },
        {
          id: '0003',
          cover: 'https://y.gtimg.cn/music/photo_new/T002R90x90M0000019TZUn0vMfjP.jpg?max_age=2592000',
          name: '双栖动物',
          singer: '胡夏',
          comment: 458
        },
        {
          id: '0004',
          cover: 'https://y.gtimg.cn/music/photo_new/T002R90x90M000003Hd2CQ36Uh1p.jpg?max_age=2592000',
          name: '寻找记忆',
          singer: '洛天依',
          comment: 458
        }

      ]
    }
  },
  mounted: function () {
    var _this = this
    axios.get('/static/mock/music.json')
      .then(function (res) {
        _this.$store.commit('initRecommendSongsList', res.data.music)
        console.log(res.data.music)
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    add (item) {
      // 存入vuex状态树
      this.$store.dispatch('addToQueue', item)
    }
  },
  computed: {
    ...mapGetters([
      'recommendSongsList'
    ])
  }
}
</script>
<style lang="scss" scoped>
  .songs{
    ul.songsList{
      li{
        width: 100%;
        display: flex;
        height: 70px;
        .add{
          padding: 28px 8px;
          i{
            display: block;
            width: 14px;
            height: 14px;
            line-height: 16px;
            text-align: center;
            font-size: 10px;
            color: #d5d5d5;
            border: 1px #d5d5d5 solid;
            border-radius: 2px;
            cursor: pointer;
          }
        }
        .cover{
          height: 70px;
          padding: 15px 0;
          img{
            display: block;
            height: 40px;
            border-radius: 3px;
          }
        }
        .details{
          margin-left: 8px;
          margin-right: 8px;
          flex: 1;
          padding: 10px 0;
          border-bottom: 1px rgba(255, 255, 255, 0.1) solid;
          span{
            display: block;
            color: #fff;
            &.singer{
              line-height: 18px;
              font-size: 14px;
            }
            &.name{
              line-height: 14px;
              font-size: 12px;
            }
            &.comment{
              line-height: 14px;
              font-size: 10px;
              i{
                display: block;
                float: left;
                color: #ddd;
                font-size: 10px;
              }
            }
          }
        }
        .more{
          padding: 27px 8px;
          margin-right: 8px;
          i{
            display: block;
            width: 14px;
            height: 14px;
            line-height: 16px;
            text-align: center;
            font-size: 16px;
            color: #d5d5d5;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
