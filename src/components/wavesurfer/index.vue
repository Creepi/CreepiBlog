<template>
  <div id="wavesurfer">
    <div :class="['wave-wrap',isLoaded?'moveUp':'']">
      <div v-show="isLoaded" :class="['music-pic']">
        <img :src="musicPic" :class="[isPlaying?'rotate':'']" alt>
        <div :class="isPlaying?'btn-pause':'btn-play'" @click="playPause">
          <i :class="['iconfont', isPlaying?'icon-pause':'icon-play']"></i>
        </div>
      </div>
      <div id="waveform"></div>
      <div v-show="isLoaded" class="music-vol">
        <svg-icon iconClass="volumn"></svg-icon>
        <div class="vol-count"> <span>vol<br>100%</span> </div>
      </div>
      <div v-show="!isLoaded" class="wave-mask">
        <svg-icon class="svg-loading loading" iconClass="triangle"></svg-icon>
      </div>
    </div>
  </div>
</template>

<script>
import WaveSurfer from 'wavesurfer.js'

export default {
  props: {
    isLoading:{
      type: Boolean,
      default: true
    },
    musicsData: {
      type: Array,
      default: () => [2]
    }
  },
  watch: {
    musicsData: {
      handler: newData => {
        this.musicData = newData
      },
      deep: true
    }
  },
  data() {
    return {
      wavesurfer: null,
      isLoaded: false,
      isPlaying: false,
      musicData: this.musicsData,
      musicUrl: '',
      musicPic: ''
    }
  },
  mounted() {
    this.musicData = this.musicsData
    this.musicUrl = this.musicsData[0].url
    this.musicPic = this.musicsData[0].pic
    this.waveInit()
  },
  methods: {
    waveInit() {
      this.$nextTick(() => {
        this.wavesurfer = WaveSurfer.create({
          container: '#waveform',
          waveColor: 'hsla(0, 0%, 100%, 0.2)',
          progressColor: '#fff',
          cursorColor: 'transparent',
          hideScrollbar: true
        })
        // this.wavesurfer.on('audioprocess', () => {
        //   this.isPlaying = true
        // })
        this.wavesurfer.on('play', () => {
          this.isPlaying = true
        })
        this.wavesurfer.on('pause', () => {
          this.isPlaying = false
        })
        this.wavesurfer.on('ready', () => {
          this.isLoaded = true
          this.wavesurfer.pause()
          // this.wavesurfer.play()
        })
        this.wavesurfer.on('finish', () => {
          this.isPlaying = false
        })
        this.wavesurfer.load(this.musicUrl)
      })
    },
    playPause() {
      this.wavesurfer.playPause()
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('../../styles/keyframes.scss');
#wavesurfer {
  position: relative;
  .wave-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    .music-pic {
      position: relative;
      width: 128px;
      height: 128px;
      &:hover {
        .btn-pause {
          opacity: 1;
          background: rgba(0, 0, 0, 0.8);
        }
        .btn-play {
          opacity: 1;
          background: rgba(0, 0, 0, 0.8);
        }
      }
      img {
        width: 100%;
      }
      .btn-pause,
      .btn-play {
        opacity: 0;
        position: absolute;
        transition: 1s;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        line-height: 128px;
        cursor: pointer;
        i {
          font-size: 60px;
          color: hsla(0, 0%, 100%, 0.6);
        }
      }
    }
    .music-vol {
      position: relative;
      width: 128px;
      height: 128px;
      svg {
        width: 110px;
        height: 110px;
        margin: 9px;
      }
      .vol-count {
        display: inline-block;
        width: 128px;
        height: 128px;
        position: absolute;
        top: 0;
        left: 0;
        text-align: center;
        color: #fff;
        vertical-align: middle;
        font-family: halofont;
        span{
          display: inline-block;
          margin: 45px 0;
        }
      }
    }
    .rotate {
      overflow: hidden;
      border-radius: 50%;
      animation: rotate 10s linear infinite;
    }
    #waveform {
      width: 900px;
      margin-left: 20px;
    }
    .loading {
      display: inline-block;
      position: absolute;
      top: calc(50% - 12px);
      left: calc(50% - 12px);
      width: 24px;
      height: 24px;
      transform-origin: center center;
      animation: rotate 3s ease-in-out infinite forwards;
    }
  }
  .wave-mask {
    width: 100%;
    height: 100%;
    position: absolute;
    .svg-loading {
      fill: hsla(0, 0%, 100%, 0.6);
    }
  }
  .moveUp {
    animation: moveUp 1s ease-in-out;
    animation-fill-mode: forwards;
  }
}
</style>
