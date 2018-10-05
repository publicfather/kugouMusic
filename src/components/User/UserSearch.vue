<template>
  <div class="searchWrap">
    <div class="search">
      <span class="iconfont icon-sousuo"></span>
      <input type="text" placeholder="洛天依、一百万个可能" v-model="query">
    </div>
  </div>
</template>

<script>
import search from '../../api/search'
import {ERR_OK} from '../../api/config'
// import {getDiscList} from 'api/search3'
// import {searchByKeyWords} from 'api/search4'
export default{
  name: 'UserSearch',
  data () {
    return {
      query: ''
    }
  },
  methods: {
    _search () {
      search('兄弟抱一下', 1, 0).then((res) => {
        if (res.code === ERR_OK) {
          var ret = Object.assign({}, {src: 'http://ra01.sycdn.kuwo.cn/resource/n3/32/56/3260586875.mp3'},
            {name: res.data.song.list[0].songname},
            {singer: res.data.song.list[0].singer[0].name},
            {isActive: false})
          this.$store.commit('addToQueue', ret)
        }
      })
    }
  },
  watch: {
    query: function () {
      console.log(this.query)
      this._search()
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
