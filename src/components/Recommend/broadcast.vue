<template>
  <div class="broadcast">
    <div class="broadcast-recom">
      <h1 class="type">情感生活</h1>
      <ul class="mood">
        <li
          v-for="item in mood"
          :key="item.id"
        >
          <div class="cover">
            <img :src="item.cover_path" alt="">
          </div>
          <div class="detail">
            <span class="name">{{item.richTitle}}</span>
            <span class="intro">{{item.intro}}</span>
            <span class="listennum">收听：{{item.play}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="broadcast-recom">
      <h1 class="type">音乐好时光</h1>
      <ul class="music">
        <li
          v-for="item in music"
          :key="item.id"
        >
          <div class="cover">
            <img :src="item.cover_path" alt="">
          </div>
          <div class="detail">
            <span class="name">{{item.richTitle}}</span>
            <span class="intro">{{item.intro}}</span>
            <span class="listennum">收听：{{item.play}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import broadcastSearch from '@/api/broadcastSearch'
export default {
  name: 'broadcast',
  data () {
    return {
      mood: [],
      music: []
    }
  },
  created: function () {
    if (this.mood.length === 0) {
      broadcastSearch('情感生活').then((res) => {
        this.mood = res.data.result.album.docs
      })
    }
    if (this.music.length === 0) {
      broadcastSearch('音乐好时光').then((res) => {
        this.music = res.data.result.album.docs
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .broadcast{
    width: 100%;
    .broadcast-recom{
      width: 100%;
      color: #fff;
      font-size: 14px;
      .type{
        font-size: 14px;
        font-weight: 100;
        margin-left: 10px;
        line-height: 30px;
      }
      ul{
        li{
          width: 100%;
          display: flex;
          border-bottom: 1px rgba(255, 255, 255, 0.1) solid;
          .cover{
            margin-left: 5px;
            img{
              height: 100px;
              border-radius: 8px;
            }
          }
          .detail{
            flex: 1;
            span{
              display: block;
              margin-left: 5px;
              &.name{
                font-size: 14px;
                color: #fff;
                line-height: 30px;
                max-height: 30px;
              }
              &.intro{
                font-size: 12px;
                color: #ddd;
                line-height: 20px;
                width: 100%;
                max-height: 60px;
                text-overflow: ellipsis;
                overflow: hidden;
              }
              &.listennum{
                font-size: 10px;
                line-height: 20px;
                color: #aaa;
              }
            }
          }
        }
      }
    }
  }
</style>
