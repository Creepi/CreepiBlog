<template>
  <div id="main">
    <div id="main-top">
      <div class="color-wrap">
        <div class="landscape"></div>
        <div class="filter"></div>
        <div class="canvas-back">
          <vue-particles
            color="#fff"
            :particleOpacity="0.7"
            :particlesNumber="20"
            shapeType="circle"
            :particleSize="3"
            linesColor="#fff"
            :linesWidth="1"
            :lineLinked="false"
            :lineOpacity="0"
            :linesDistance="150"
            :moveSpeed="5"
            :hoverEffect="false"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="repulse"
          ></vue-particles>
        </div>
      </div>
      <div class="user-logo">
        <img src="https://avatars3.githubusercontent.com/u/16206413?s=460&v=4" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mounted() {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/keyframes.scss';
#main {
  width: 100%;
  height: 100%;
  #main-top {
    width: 100%;
    height: 100%;
    .color-wrap {
      width: 100%;
      height: 100%;
      background: black;
      background: linear-gradient(to bottom, #000000 0%, #5788fe 100%);
      animation-fill-mode: both;
      mix-blend-mode: overlay;
      .landscape {
        width: 100%;
        height: 100%;
        background-image: url('../assets/main/back.png');
        background-repeat: repeat-x;
        background-position: center bottom;
      }
      .filter {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: #fe5757;
        animation: colorChange 30s ease-in-out infinite;
        animation-fill-mode: both;
        mix-blend-mode: overlay;
      }
      .canvas-back {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    .user-logo{
      position: fixed;
      left: 0;
      top: 0;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
      img{
        width: 100%;
      }
    }
  }
}
</style>
