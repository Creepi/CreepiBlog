<template>
  <div id="wavesurfer">
    <div :class="['wave-wrap',!loading?'moveUp':'']">
      <div v-show="!loading" :class="['music-pic']">
        <img src="../../assets/musics/cover.jpeg" :class="[isPlaying?'rotate':'']" alt>
        <div :class="isPlaying?'btn-pause':'btn-play'" @click="playPause">
          <i :class="['iconfont', isPlaying?'icon-pause':'icon-play']"></i>
        </div>
      </div>
      <div :show="!loading" id="waveform"></div>
      <div v-if="loading" class="wave-mask">
        <img class="loading" src="../../assets/images/main/triangle.svg" alt>
      </div>
    </div>
  </div>
</template>

<script>
import WaveSurfer from 'wavesurfer.js'

export default {
  data() {
    return {
      wavesurfer: null,
      loading: true,
      isPlaying: false
    }
  },
  created() {
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
      // this.wavesurfer.load(
      //   'https://m10.music.126.net/20190617214422/c97070eb8b5d73bfe3faca58aebcd8c5/ymusic/34e4/5c9e/2e72/a0b14202265ddd633c1181d2c3fcd766.mp3'
      // )
    })
  },
  methods: {
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
      .btn-pause,.btn-play {
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
        i {
          font-size: 60px;
          color: hsla(0, 0%, 100%, 0.2);
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
  .moveUp {
    animation: moveUp 1s ease-in-out;
    animation-fill-mode: forwards;
  }
}
</style>
