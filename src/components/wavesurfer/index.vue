<template>
  <div id="wavesurfer">
    <div :class="['wave-wrap',!loading?'moveUp':'']">
      <div v-show="!loading" :class="['music-pic']">
        <img :src="musicPic" :class="[isPlaying?'rotate':'']" alt>
        <div :class="isPlaying?'btn-pause':'btn-play'" @click="playPause">
          <i :class="['iconfont', isPlaying?'icon-pause':'icon-play']"></i>
        </div>
      </div>
      <div :show="!loading" id="waveform"></div>
      <div v-if="loading" class="wave-mask">
        <svg-icon class="svg-loading" iconClass="bars"></svg-icon>
      </div>
    </div>
  </div>
</template>

<script>
import WaveSurfer from 'wavesurfer.js'

export default {
  props: {
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
      loading: true,
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
          this.loading = false
          this.wavesurfer.pause()
          this.wavesurfer.play()
          this.isPlaying = true
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
        transition: 1s;
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
