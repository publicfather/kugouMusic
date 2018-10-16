<template>
  <div class="songs">
    <ul class="songsList">
      <li v-for="(item, index) in songList" :key="index">
        <div class="add">
          <i class="iconfont icon-jia" @click="add(item)"></i>
        </div>
        <div class="cover">
          <img :src="`https://y.gtimg.cn/music/photo_new/T002R90x90M000${item.album.mid}.jpg?max_age=2592000`" alt="">
        </div>
        <div class="details">
          <span class="singer">{{item.singer[0].name}}</span>
          <span class="name">{{item.name}}</span>
          <span class="comment clearfix"><i class="iconfont icon-pinglun"></i>&nbsp;{{Math.floor(Math.random() * 100)}}</span>
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
import getMusic from '../../api/getMusic'
import getSongList from '../../api/getSongList'
export default {
  name: 'songs',
  data () {
    return {
      songList: [
      ],
      songVkey: ''
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
    getSongList().then((res) => {
      this.songList = res.new_song.data.song_list
      // console.log(this.songList)
    })
  },
  methods: {
    add (item) {
      // 获取音乐url，存入vuex状态树
      getMusic(item.mid).then((res) => {
        const svley = res.data.items
        this.songVkey = svley[0].vkey
        var ret = Object.assign({},
          {src: `http://dl.stream.qqmusic.qq.com/C400${item.mid}.m4a?vkey=${this.songVkey}&guid=7981028948&uin=0&fromtag=66`},
          {name: item.name},
          {singer: item.singer[0].name},
          {isActive: false})
        this.$store.commit('addToQueue', ret)
      })
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
