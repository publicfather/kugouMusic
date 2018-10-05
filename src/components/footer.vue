<template>
  <div class="footer clearfix">
    <div class="singerImg">
      <img src="static/images/singer.jpg" alt="">
    </div>
    <div class="player">
      <div class="progress" @click.prevent="changeCurTime" ref="progress">
        <div class="progressBar" :style="[progressBarStyle]"></div>
        <div class="showStep" v-show="isShowStep">{{direction}}{{step}}秒</div>
      </div>
      <div class="control clearfix">
        <div class="songInfo">
          <span class="name" ref="songName"></span><br />
          <span class="singer" ref="songSinger"></span>
        </div>
        <ul class="controlBar">
          <li><span class="iconfont icon-ai-rew-left" @click="goAheadOrBack(-step)"></span></li>
          <li><span class="iconfont icon-ai-rew-right" @click="goAheadOrBack(step)"></span></li>
          <li><span :class="{'iconfont':true, 'icon-bofang': !isPlaying, 'icon-zanting': isPlaying}" @click="controlStaus()"></span></li>
          <li><span class="iconfont icon-xiayishou-copy" @click="playNextSong()"></span></li>
          <li><span class="iconfont icon-bofangliebiao" @click="showList()"></span></li>
        </ul>
      </div>
    </div>
    <transition
      name="animate_01"
      enter-active-class="animated bounceIn"
      leave-active-class="animated bounceOut"
    >
      <ul class="playQueen"
          ref="playQueen"
          v-show="playQueen.isHidden"
      >
        <li v-for="(item, index) in playQueen.data"
            :key="index"
            :class="{'active': item.isActive}"
            @click="selectSong(index)"
        >
          <span class="name">{{item.name}}</span>
          <span class="playing">
          <div class="child"></div>
          <div class="child"></div>
          <div class="child"></div>
          <div class="child"></div>
          <div class="child"></div>
        </span>
        </li>
      </ul>
    </transition>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default{
  name: 'IndexFooter',
  data () {
    return {
      progressBarStyle: {
        width: '0%',
        height: '100%',
        background: 'orangered'
      },
      /*
      playQueen: {
        isHidden: true,
        data: [
          {
            src: 'static/music/夜的钢琴曲.mp3',
            name: '夜的钢琴曲',
            singer: '未知',
            isActive: true
          },
          {
            src: 'static/music/群星 - 舞随光动.mp3',
            name: '舞随光动',
            singer: '群星',
            isActive: false
          },
          {
            src: 'static/music/Age Of Echoes - Endless Horizon.mp3',
            name: 'Endless Horizon',
            singer: 'Age Of Echoes',
            isActive: false
          },
          {
            src: 'static/music/Bandari - 卡伐蒂纳.mp3',
            name: '卡伐蒂纳',
            singer: 'Bandari',
            isActive: false
          },
          {
            src: 'static/music/S.E.N.S. - Refrain.mp3',
            name: 'Refrain',
            singer: 'S.E.N.S.',
            isActive: false
          },
          {
            src: 'static/music/找幸福给你.mp3',
            name: '找幸福给你',
            singer: '飞轮海',
            isActive: false
          },
          {
            src: 'static/music/沈华夏 - 蓝色天际.mp3',
            name: '蓝色天际',
            singer: '沈华夏',
            isActive: false
          },
          {
            src: 'static/music/王心如 - 坏天气好心情.mp3',
            name: '坏天气好心情',
            singer: '王心如',
            isActive: false
          }
        ]
      },
      */
      // 当前播放曲目curIndex
      curIndex: 0,
      audio: 1,
      isPlaying: false,
      duration: 0,
      curTime: 0,
      percent: 0,
      step: 6, // 快进快退步长
      isShowStep: false,
      direction: '快进',
      timer: 1
    }
  },
  computed: {
    ...mapGetters(['playQueen'])
  },
  methods: {
    showList: function () {
      this.playQueen.isHidden = !this.playQueen.isHidden
    },
    controlStaus: function () {
      if (this.isPlaying === false) {
        this.audio.play()
        this.isPlaying = true
        // console.log(this.isPlaying)
      } else {
        this.audio.pause()
        this.isPlaying = false
      }
    },
    selectSong: function (index) {
      // 记录上一首的index
      var lastIndex = this.curIndex
      // 设置当前将要播放曲目的index
      this.curIndex = index
      this.playQueen.data[lastIndex].isActive = false
      this.playQueen.data[this.curIndex].isActive = true
      this.isPlaying = false
      this.audio.src = this.playQueen.data[this.curIndex].src
      // 重新加载，必要的
      this.audio.load()
      // 更新duration，curTime等数据
      this.duration = Math.floor(this.audio.duration)
      this.curTime = 0
      // 进度条长度归零
      this.progressBarStyle.width = '0%'
      // 隐藏播放列表
      this.playQueen.isHidden = !this.playQueen.isHidden
      // 显示曲目名称
      this.$refs.songName.innerHTML = this.playQueen.data[this.curIndex].name
      this.$refs.songSinger.innerHTML = this.playQueen.data[this.curIndex].singer
    },
    playNextSong () {
      var lastIndex = this.curIndex
      this.curIndex = ++this.curIndex % (this.playQueen.data.length)
      this.playQueen.data[lastIndex].isActive = false
      this.playQueen.data[this.curIndex].isActive = true
      this.isPlaying = false
      this.audio.src = this.playQueen.data[this.curIndex].src
      this.audio.load()
      this.duration = Math.floor(this.audio.duration)
      this.curTime = 0
      this.progressBarStyle.width = '0%'
      this.audio.play()
      this.isPlaying = true
      // 显示曲目名称
      this.$refs.songName.innerHTML = this.playQueen.data[this.curIndex].name
      this.$refs.songSinger.innerHTML = this.playQueen.data[this.curIndex].singer
    },
    // 点击改变播放进度
    changeCurTime (e) {
      // console.log(this.$refs.progress.offsetLeft)
      // console.log(e.clientX)
      // 点击改变播放进度百分比
      this.percent = (e.clientX - this.$refs.progress.offsetLeft) / this.$refs.progress.offsetWidth
      this.curTime = this.duration * this.percent
      // 改变当前播放时间
      this.audio.currentTime = Math.floor(this.duration * this.percent)
    },
    // 显示快进或快退
    goAheadOrBack (step) {
      this.curTime += step
      this.audio.currentTime = this.curTime
      if (step < 0) {
        this.direction = '快退'
      } else {
        this.direction = '快进'
      }
      this.isShowStep = true
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.isShowStep = false
      }, 1000)
    }
  },
  mounted: function () {
    const audio = new Audio(this.playQueen.data[this.curIndex].src)
    this.audio = audio
    var _this = this
    // 获取播放时长
    this.audio.addEventListener('canplay', function () {
      _this.duration = Math.floor(_this.audio.duration)
    })
    // 获取当前播放时间
    this.audio.addEventListener('timeupdate', function () {
      _this.curTime = Math.floor(_this.audio.currentTime)
      // console.log(`${_this.curTime}+${_this.duration}`)
      // 改变进度条宽度占比
      _this.progressBarStyle.width = (_this.curTime / _this.duration * 100) + '%'
      if (_this.audio.ended) {
        _this.isPlaying = false
        _this.progressBarStyle.width = '0%'
        // 自动播放下一首
        _this.playNextSong()
      }
    })
    // 显示曲目名称
    this.$refs.songName.innerHTML = this.playQueen.data[this.curIndex].name
    this.$refs.songSinger.innerHTML = this.playQueen.data[this.curIndex].singer
  }
}
</script>
<style lang="scss" scoped>
@keyframes rotate {
  100%{transform: rotate(360deg)}
}
@keyframes playing {
  50%{
    height: 12px;
  }
  100%{
    height: 0px;
  }
}
.hidden{
  display: none;
}
.playing{
  width: 24px;
  height: 30px;
  box-sizing: border-box;
  /*
  display: flex;
  justify-content: space-around;*/
  //border: 2px red solid;
  transform: rotate(180deg);
  .child{
    display: inline-block;
    height: 0px;
    width: 3px;
    background: orangered;
    float: left;
    margin-right: 1px;
    &:nth-child(1){
      animation: playing .8s infinite;
    }
    &:nth-child(2){
      animation: playing .8s infinite;
      animation-delay: .2s;
    }
    &:nth-child(3){
      animation: playing .8s infinite;
      animation-delay: .4s;
    }
    &:nth-child(4){
      animation: playing .8s infinite;
      animation-delay: .6s;
    }
    &:nth-child(5){
      animation: playing .8s infinite;
      animation-delay: .8s;
    }
  }
}

.footer{
  color: #d5d5d5;
  font-size: 14px;
  height: 60px;
  width: 100%;
  position: fixed;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  .singerImg{
    float: left;
    position: relative;
    height: 100%;
    width: 60px;
    img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      position: absolute;
      top: 5px;
      left: 5px;
      border: 2px #fff solid;
      animation: rotate 16s infinite linear;
    }
  }
  .player{
    margin-left: 10px;
    margin-right: 10px;
    flex: 1;
    float: right;
    height: 100%;
    .progress{
      width: 100%;
      height: 3px;
      background: rgba(255, 255, 255, 0.2);
      margin: 7px auto;
      position: relative;
      .progressBar{
        //width: 50%;
       // height: 100%;
        //background: red;
        position: relative;
        &:after{
          display: block;
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #fff;
          position: absolute;
          right: -4px;
          top: -2px;
          box-shadow: 0 0 3px 2px orangered;
        }
      }
      .showStep{
        position: absolute;
        top: -26px;
        font-size: 12px;
        color: #fff;
      }
    }
    .control{
      height: 40px;
      .songInfo{
        float: left;
        .name{
          color: #fff;
        }
        .singer{
          color: #bbb;
          font-size: 12px;
        }
      }
      ul.controlBar{
        float: right;
        line-height: 40px;
        li{
          float: left;
          padding-left: 4px;
          padding-right: 4px;
          cursor: pointer;
          .iconfont{
            font-size: 24px;
            color: #d5d5d5;
            &:hover{
              color: #fff;
            }
          }
        }
      }
    }
  }
  ul.playQueen{
    position: absolute;
    top: -100px;
    right: 16px;
    background: rgba(255, 255, 255, 0.1);
    max-height: 96px;
    overflow: scroll;
    li{
      line-height: 24px;
      padding-left: 4px;
      padding-right: 4px;
      position: relative;
      cursor: pointer;
      .name{
        margin-right: 30px;
        color: #d5d5d5;
      }
      .playing{
        display: none;
        position: absolute;
        right: 4px;
        top: -10px;
      }
      &.active{
        background: rgba(255, 255, 255, 0.1);
        .playing{
          display: block !important;
        }
        .name{
          color: #fff;
        }
      }
    }
  }
}
</style>
