<template>
  <div class="searchWrap">
    <div class="search">
      <span class="iconfont icon-sousuo" @click="_search()"></span>
      <input type="text" placeholder="洛天依、一百万个可能" v-model="query">
    </div>
  </div>
</template>

<script>
import search from '../../api/search'
import {ERR_OK} from '../../api/config'
// import {getDiscList} from 'api/search3'
// import {searchByKeyWords} from 'api/search4'
import getMusic from '@/api/getMusic'
export default{
  name: 'UserSearch',
  data () {
    return {
      query: '',
      songmid: 0,
      songVkey: 0,
      songUrl: '',
      songname: '',
      singer: ''
    }
  },
  methods: {
    _search () {
      search(this.query, 1, 0).then((res) => {
        if (res.code === ERR_OK) {
          this.songmid = res.data.song.list[0].songmid
          this.songname = res.data.song.list[0].songname
          this.singer = res.data.song.list[0].singer[0].name
          getMusic(this.songmid).then((res) => {
            const svley = res.data.items
            this.songVkey = svley[0].vkey
            console.table(this.songVkey)
            var ret = Object.assign({},
              {src: `http://dl.stream.qqmusic.qq.com/C400${this.songmid}.m4a?vkey=${this.songVkey}&guid=7981028948&uin=0&fromtag=66`},
              {name: this.songname},
              {singer: this.singer},
              {isActive: false})
            this.$store.commit('addToQueue', ret)
          })
        }
      })
    }
  },
  mounted: function () {
    /*
    getDiscList().then((res) => {
      if (res.code === ERR_OK) {
        console.log('推荐:', res)
        this.discList = res.data.list
      } else {
        console.log('没,没有推荐')
      }
    })
    searchByKeyWords('千秋此意', 1, 1).then((res) => {
      if (res.code === ERR_OK) {
        console.log('千秋此意:', res)
        this.discList = res.data.list
      } else {
        console.log('没,没有推荐')
      }
    })
    */
  }
}
</script>

<style lang="scss" scoped="">
.searchWrap{
  margin-top: 10px;
  width: 100%;
  line-height: 40px;
  .search{
    width: 80%;
    height: 30px;
    line-height: 30px;
    margin: 4px auto;
    display: flex;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 15px;
    text-indent: 18px;
    .icon-sousuo{
      display: inline-block;
      line-height: 30px;
      color: #d5d5d5;
    }
    input{
      flex: 1;
      background: transparent;
      border: none;
      text-align: center;
      color: #fff;
    }

  }
}
</style>
