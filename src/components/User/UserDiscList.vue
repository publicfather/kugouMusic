<template>
  <div class="menuList">
    <div class="title clearfix">
      <div class="pullLeft">
        <span>自建歌单</span>
        <span class="iconfont icon-een"></span>
      </div>
      <ul class="pullRight">
        <li ><span class="iconfont icon-daoru" title="导入"></span></li>
        <li ><span class="iconfont icon-shuaxin1" title="刷新"></span></li>
        <li ><span class="iconfont icon-jia" title="新建歌单"  @click="add()"></span></li>
      </ul>
    </div>
    <ul class="list">
      <li class="clearfix" v-for="(item, index) in discList" :key="index">
        <img class="cover" :src="item.cover" alt="">
        <div class="detail">
          <span class="name" contenteditable="true">{{item.name}}</span><br />
          <span class="num">{{item.sum}}首，{{item.download}}首已下载</span>
          <span class="iconfont icon-gengduo" @click="increment()"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default{
  name: 'UserDiscList',
  data: function () {
    return {
      MenuList: [
        {
          cover: 'static/images/background2.jpg',
          name: '我喜欢',
          sum: 43,
          download: 19
        },
        {
          cover: 'static/images/background4.jpg',
          name: '皮皮的歌单',
          sum: 43,
          download: 19
        }
      ]
    }
  },
  methods: {
    add () {
      this.MenuList.push({
        cover: 'static/images/background4.jpg',
        name: '新建歌单',
        sum: 43,
        download: 19
      })
      // console.log(this.count)
      // 传参必须用dispatch
      this.$store.dispatch('addList', {
        cover: 'static/images/background4.jpg',
        name: '新建歌单',
        sum: 0,
        download: 0
      })
    },
    ...mapActions({
      increment: 'increment'
    })
  },
  computed: {
    // 属性
    ...mapGetters([
      'count',
      'sum',
      'discList'
    ])
  }
}
</script>

<style scoped lang="scss">
.menuList{
  color: #d5d5d5;
  font-size: 14px;;
  .title{
    .pullLeft{
      float: left;
      margin-left: 20px;
      span{
        line-height: 40px;
        &:hover{
          color: #fff;
          cursor: pointer;
        }
        &.iconfont{
          margin-left: 10px;
        }
      }
    }
    .pullRight{
      float: right;
      margin-right: 20px;
      li{
        float: left;
        span{
          display: inline-block;
          line-height: 40px;
          width: 40px;
          text-align: center;
          &:hover{
            color: #fff;
            cursor: pointer;
          }
        }
      }
    }
  }
  ul.list{
    li{
      display: flex;
      margin-bottom: 6px;
      img.cover{
        float: left;
        width: 50px;
        height: 50px;
        border-radius: 3px;
      }
      .detail{
        float: right;
        height: 50px;
        flex: 1;
        margin-left: 8px;
        border-bottom: 1px rgba(255, 255, 255, 0.1) solid;
        .name{
          font-size: 14px;
          font-weight: 400;
          color: #fff;
        }
        .num{
          font-size: 12px;
        }
        .iconfont{
          float: right;
          margin-right: 20px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
