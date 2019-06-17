<template>
  <div id="wavesurfer">
    <div :class="['wave-wrap',!loading?'moveUp':'']">
      <div v-show="!loading" class="music-pic">
        <img src="../../assets/musics/cover.jpeg" alt>
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
      loading: true
    }
  },
  created() {
    this.$nextTick(() => {
      this.wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'hsla(0, 0%, 100%, 0.2)',
        progressColor: '#fff',
        cursorColor: 'transparent',
        hideScrollbar: true,
      })
      this.wavesurfer.on('ready', () => {
        this.loading = false
        this.wavesurfer.play()
      })
      this.wavesurfer.load(
        '../../assets/musics/The XX - Intro - intro.mp3'
      )
    })
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
      width: 128px;
      margin-right: 20px;
      img {
        width: 100%;
      }
    }
    #waveform {
      width: 900px;
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
