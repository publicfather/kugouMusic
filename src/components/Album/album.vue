<template>
  <div class="album">
    <div class="album-info">
      <div class="album-header">
        <div class="album-details">
          <div class="album-cover">
            <img :src="curAlbum.cover" alt="封面">
            <div class="album-listennum">
              <i class="iconfont icon-erji"></i>
              <span>{{curAlbum.listennum | toMillion}}</span>
            </div>
          </div>
          <div class="album-detail">
            <div class="album-name">{{curAlbum.dissname}}</div>
            <div class="album-creator">{{curAlbum.creator}}</div>
          </div>
        </div>
      </div>
      <div class="album-tool">
        <i class="iconfont icon-bofang" @click="selectAll"></i>
        <span class="playall">播放全部</span>
        <span class="sum">(共{{curAlbum.songnum}}首)</span>
        <span class="shoucang">
          <i class="iconfont icon-jia1"></i>收藏
        </span>
      </div>
      <ul class="song-list">
        <li
          v-for="(item, index) in curAlbum.songlist"
          :key="item.songmid"
        >
          <div class="index" @click="selectSong(item)">{{index + 1}}</div>
          <div class="song clearfix">
            <div class="detail">
              <span class="name">{{item.songname}}</span>
              <span class="sq">SQ</span>
              <span class="singer">{{item.singer[0].name}}-{{item.albumname}}</span>
            </div>
            <div class="control">
              <i class="iconfont icon-gengduo1"></i>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import getMusic from '@/api/getMusic'
export default {
  name: 'album',
  filters: {
    toMillion (value) {
      return (value - value % 100) / 10000 + '万'
    }
  },
  methods: {
    back () {
      this.$store.state.isShowAlbum = false
      // console.log(this.$store.state.isShowAlbum)
    },
    selectAll () {
      this.curAlbum.songlist.forEach((item) => {
        this.selectSong(item)
      })
    },
    selectSong (item) {
      getMusic(item.songmid).then((res) => {
        const svley = res.data.items
        var songVkey = svley[0].vkey
        console.table(songVkey)
        var ret = Object.assign({},
          {src: `http://dl.stream.qqmusic.qq.com/C400${item.songmid}.m4a?vkey=${songVkey}&guid=7981028948&uin=0&fromtag=66`},
          {name: item.songname},
          {singer: item.singer[0].name},
          {isActive: false})
        this.$store.commit('addToQueue', ret)
      })
    }
  },
  computed: {
    ...mapGetters([
      'curAlbum'
    ])
  }
}
</script>
<style scoped lang="scss">
  .album{
    color: #fff;
    .album-info{
      .album-header{
        // background: rgba(255, 255, 255, 0.3);
        margin-top: 10px;
        .album-details{
          display: flex;
          .album-cover{
            position: relative;
            height: 120px;
            width: 120px;
            margin-left: 10px;
            img{
              display: block;
              height: 120px;
              position: absolute;
              top: 0;
              left: 0;
              border-radius: 4px;
            }
            .album-listennum{
              font-size: 10px;
              position: absolute;
              top: 0;
              right: 0;
            }
          }
          .album-detail{
            flex: 1;
            height: 120px;
            margin-left: 10px;
            .album-name{
              font-size: 14px;
              line-height: 20px;
              height: 60px;
            }
            .album-creator{
              vertical-align: bottom;
              font-size: 12px;
              line-height: 14px;
              height: 60px;
            }
          }
        }
      }
      .album-tool{
        height: 30px;
        line-height: 40px;
        height: 40px;
        font-size: 14px;
        border-bottom: 1px rgba(255, 255, 255, 0.1) solid;
        .icon-bofang{
          display: inline-block;
          box-sizing: border-box;
          width: 20px;
          height: 20px;
          line-height: 20px;
          text-align: center;
          font-size: 12px;
          border: 1px #fff solid;
          border-radius: 50%;
          margin-left: 10px;
          margin-right: 10px;
        }
        .playall{
          font-size: 14px;
        }
        .sum{
          color: #ddd;
          font-size: 12px;
        }
        .shoucang{
          text-align: center;
          display: inline-block;
          width: 80px;
          background: orangered;
          border-top-right-radius: 8px;
          float: right;
          .iconfont{
            margin-right: 4px;
          }
        }
      }
      ul.song-list{
        li{
          font-size: 14px;
          line-height: 50px;
          height: 50px;
          display: flex;
          .index{
            color: #ddd;
            line-height: 50px;
            font-size: 14px;
            text-align: center;
            padding: 0 20px;
          }
          .song{
            flex: 1;
            border-bottom: 1px rgba(255, 255, 255, 0.1) solid;;
            .detail{
              float: left;
              line-height: 25px;
              margin-top: 10px;
              .name{
                max-width: 100%;
                font-size: 14px;
                display: block;
                line-height: 16px;
                max-height: 16px;
                overflow: hidden;
              }
              .sq{
                display: inline-block;
                line-height: 10px;
                color: orangered;
                font-size: 8px;
                border: 1px orangered solid;
                margin-top: 4px;
              }
              .singer{
                color: #ddd;
                font-size: 10px;
                line-height: 14px;
                marign-top: 4px;
                overflow: hidden;
                max-height: 14px;
              }
            }
            .control{
              float: right;
              i{
                display: inline-block;
                margin-right: 10px;
              }
            }
          }
        }
      }
    }
  }
</style>
