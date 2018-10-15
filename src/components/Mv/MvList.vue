<template>
  <div class="mv-list">
    <div class="title">MV</div>
    <ul class="mvType clearfix">
      <li v-for="item in mvType"
        :key="item.id"
        :class="{'active': item.isActive}"
        @click="changeIndex(item.id)"
      >
        {{item.type}}
      </li>
    </ul>
    <ul class="allList">
      <li class="item" v-for="(item, index) in curList" :key="index">
        <div class="mv-cover">
          <img :src="item.picurl" @click="_getMvUrl(item)">
          <i class="iconfont icon-bofang"></i>
        </div>
        <div class="mv-detail">
          <span class="mv-title" @click="_getMvUrl(item)">{{item.mvtitle}}</span>
          <span class="mv-desc">{{item.mvdesc}}</span>
          <span class="mv-singer">{{item.singername}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import getMvList from '../../api/getMvList'
import {ERR_OK} from '../../api/config'
import getMvUrl from '../../api/getMvUrl'
export default {
  name: 'MvList',
  computed: {
    ...mapGetters([
      'mvList'
    ]),
    curList: function () {
      for (var i = 0; i < this.mvList.length; i++) {
        if (this.mvList[i].lan === this.mvType[this.curId].lan) {
          return this.mvList[i].mvlist
        }
      }
    }
  },
  data () {
    return {
      mvType: [
        {
          id: 0,
          type: '精选',
          isActive: true,
          lan: 'all'
        },
        {
          id: 1,
          type: '内地',
          isActive: false,
          lan: 'neidi'
        },
        {
          id: 2,
          type: '韩国',
          isActive: false,
          lan: 'korea'
        },
        {
          id: 3,
          type: '港台',
          isActive: false,
          lan: 'gangtai'
        },
        {
          id: 4,
          type: '欧美',
          isActive: false,
          lan: 'oumei'
        },
        {
          id: 5,
          type: '日本',
          isActive: false,
          lan: 'janpan'
        }
      ],
      curId: 0
    }
  },
  methods: {
    _getMvList () {
      if (this.mvList.length === 0) {
        for (var i = 0; i < this.mvType.length; i++) {
          getMvList({lan: this.mvType[i].lan}).then((res) => {
            if (res.code === ERR_OK) {
              this.$store.commit('initMvList', res.data)
            }
          })
        }
      }
    },
    changeIndex (id) {
      this.mvType[this.curId].isActive = false
      this.curId = id
      this.mvType[id].isActive = true
    },
    _getMvUrl (item) {
      getMvUrl(item.vid).then((res) => {
        if (res.code === ERR_OK) {
          // es6语法拼接出音乐url
          var url = `http://videohy.tc.qq.com/vcloud1049.tc.qq.com/${res.getMvUrl.data[item.vid].mp4[2].cn}?vkey=${res.getMvUrl.data[item.vid].mp4[2].vkey}&ocid=233316268`
          console.log(url)
          this.$router.push({path: '/home/mv/vid',
            query: {
              vid: item.vid,
              url: url,
              cover: item.picurl,
              name: item.mvtitle,
              date: item.pub_date,
              listennum: item.listennum
            }
          })
          // window.location.href = url
        }
      })
    }
  },
  mounted: function () {
    this._getMvList()
    // this._getMvUrl('y0027q7e8bp')
  }
}
</script>
<style scoped lang="scss">
  .mv-list{
    font-size: 14px;
    color: #d5d5d5;
    .title{
      line-height: 40px;
      text-align: center;
      font-size: 20px;
    }
    ul.mvType{
      li{
        float: left;
        text-align: center;
        padding: 0px 4px;
        line-height: 24px;
        color: #eee;
        font-size: 13px;
        cursor: pointer;
        &.active{
          font-size: 14px;
          border-bottom: 2px #007aff solid;
        }
      }
    }
    ul.allList{
      li{
        display: flex;
        border-bottom: 1px rgba(255, 255, 255, 0.1) solid;
        padding: 4px 0;
        .mv-cover{
          position: relative;
          img{
            display: block;
            height: 80px;
            border-radius: 4px;
          }
          i{
            display: block;
            box-sizing: border-box;
            width: 20px;
            height: 20px;
            line-height: 20px;
            text-align: center;
            font-size: 10px;
            color: #fff;
            border-radius: 50%;
            border: 1px #fff solid;
            background: rgba(0, 0, 0, 0.2);
            position: absolute;
            right: 4px;
            bottom: 4px;
          }
        }
        .mv-detail{
          flex: 1;
          span{
            width: 100%;
            display: block;
            margin-left: 4px;
            &.mv-title{
              line-height: 20px;
              font-size: 14px;
              height: 40px;
            }
            &.mv-desc{
              max-height: 36px;
              font-size: 12px;
              line-height: 20px;
              color: #aaa;
            }
            &.mv-singer{
              line-height: 20px;
            }
          }
        }
      }
    }
  }
</style>
