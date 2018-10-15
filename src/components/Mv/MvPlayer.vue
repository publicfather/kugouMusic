<template>
  <div class="mv-player">
    <div class="header">
      <i class="iconfont icon-xiangzuo1" @click="back"></i>
      <span @click="back()">返回</span>
    </div>
    <video-player
      class="video-player vjs-custom-skin"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions"
    ></video-player>
    <div class="footer">
      <div class="name">{{$route.query.name}}</div>
      <div class="detail">
        <span class="pub-date">发布：{{$route.query.date}}</span>
        <span class="listen-num">播放：{{$route.query.listennum}}</span>
      </div>
      <div class="type">
        <span>MV</span>
        <span>音乐</span>
        <span>Showtime</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MvPlayer',
  data () {
    return {
      // 视频播放
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: '',
          src: ''// url地址
          // src: 'http://www.html5videoplayer.net/videos/madagascar3.mp4'//url地址
          // src: "" //url地址
        }],
        poster: '', // 你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        }
      }
    }
  },
  created: function () {
    this.playerOptions.sources[0].src = this.$route.query.url
    this.playerOptions.poster = this.$route.query.cover
  },
  methods: {
    back () {
      this.$router.push({path: '/home/mv/mvlist'})
    }
  }
}
</script>
<style scoped lang="scss">
  .mv-player{
    font-size: 12px;
    color: #fff;
    .header{
      line-height: 30px;
      background: rgba(255, 255, 255, 0.1);
      color: #ddd;
      cursor: pointer;
      i{
        margin-left: 10px;
        font-size: 20px;
        &:hover{
          color: #fff;
        }
      }
      span{
        font-size: 14px;
        &:hover{
          color: #fff;
        }
      }
    }
    .footer{
      margin-top: 10px;
      .name{
        margin-left: 6px;
        color: #fff;
        font-size: 14px;
        line-height: 30px;
      }
      .detail{
        line-height: 20px;
        span{
          color: #aaa;
          font-size: 11px;
          padding: 4px 8px;
          &.pub-date{
            border-right: 1px rgba(255, 255, 255, 0.2) solid;
          }
        }
      }
      .type{
        line-height: 30px;
        margin-left: 6px;
        span{
          display: inline-block;
          box-sizing: border-box;
          height: 18px;
          line-height: 18px;
          padding: 0px 9px;
          font-size: 10px;
          color: #bbb;
          border-radius: 9px;
          border: 1px #aaa solid;
          margin-right: 8px;
        }
      }
    }
  }
</style>
