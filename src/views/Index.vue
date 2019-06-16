<template>
  <div id="main">
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
          :lineOpacity="1"
          :linesDistance="150"
          :moveSpeed="10"
          :hoverEffect="false"
          hoverMode="grab"
          :clickEffect="false"
          clickMode="repulse"
        ></vue-particles>
      </div>
    </div>
    <div id="main-content">
      <div class="main-top">
        <div class="user-logo">
          <img src="../assets/images/main/user.jpeg" alt>
        </div>
        <div class="site-logo">
          <div class="image-wrap">
            <img src="../assets/images/logo.png" alt>
          </div>
          <div class="app-brand">Creepi</div>
        </div>
        <div class="menu-wrap">
          <a href="#/home" :class="$route.name === 'Home'?'active':''">Home</a>
          <a href="#/news" :class="$route.name === 'News'?'active':''">News</a>
          <a href="#/timeline" :class="$route.name === 'Timeline'?'active':''">TimeLine</a>
          <a href="#/tools" :class="$route.name === 'Tools'?'active':''">Tools</a>
          <a href="#/docs" :class="$route.name === 'Docs'?'active':''">Docs</a>
        </div>
      </div>
      <router-view class="main-middle"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      router: [{}],
      userAnimate: null
    }
  },
  mounted() {
    this.initAnimate()
    console.log(this.$route.name)
  },
  methods: {
    initAnimate() {
      this.userAnimate = this.$anime.timeline({
        easing: 'easeOutExpo',
        duration: 1500
      })
      this.userAnimate
        .add({
          targets: '.user-logo',
          rotate: '360deg',
          opacity: '1',
          backgroundColor: '#FFF',
          borderRadius: ['0%', '50%']
        })
        .add({
          targets: '.user-logo',
          scale: '0.9',
          translateY: '-100%'
        })
      this.$anime({
        targets: '.menu-wrap',
        bottom: '8%',
        borderRadius: ['0%', '50%'],
        easing: 'easeInOutQuad'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/const.scss';
@import '@/styles/keyframes.scss';
#main {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .color-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    background: linear-gradient(to bottom, #000000 0%, #5788fe 100%);
    animation-fill-mode: both;
    mix-blend-mode: overlay;
    .landscape {
      width: 100%;
      height: 100%;
      position: absolute;
      background-image: url('../assets/images/main/back.png');
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
  #main-content {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    .main-top {
      width: 100%;
      height: 100%;
      .user-logo {
        position: absolute;
        left: calc(50% - 50px);
        top: 30%;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
        transform-origin: center center;
        opacity: 0;
        img {
          width: 100%;
        }
      }
      .site-logo {
        position: absolute;
        top: 30px;
        left: 30px;
        display: flex;
        .image-wrap {
          img {
            width: 50px;
            height: 50px;
          }
        }
        .app-brand {
          height: 50px;
          line-height: 50px;
          color: #fff;
          font-family: halofont !important;
        }
      }
      .menu-wrap {
        width: 100%;
        position: absolute;
        bottom: 0;
        a {
          position: relative;
          display: inline-block;
          font-family: halofont;
          font-size: 16px;
          font-weight: bold;
          color: #fff;
          text-decoration: none;
          width: 80px;
          height: 80px;
          margin: 30px;
          line-height: 80px;
          border: 6px solid transparent;
          // border: 6px solid hsla(0, 0%, 100%, 0.1);
          border-radius: 50%;
          &:hover {
            transition: 0.5s;
            border: 6px solid hsla(0, 0%, 100%, 0.2);
          }
          &:not(.active):hover:after {
            content: '';
            box-sizing: border-box;
            display: block;
            height: 6px;
            width: 6px;
            background: #fff;
            position: absolute;
            border-radius: 50%;
            // border: 3px solid hsla(0, 0%, 100%, 0.1);
            left: -6px;
            top: 37px;
            // background: url('../assets/svgs/circle.svg') no-repeat;
            // background-size: 100% 100%;
            transform-origin: 46px 3px;
            -webkit-animation: circle-zoom-in 2s linear infinite;
            animation: circle-zoom-in 2s linear infinite;
          }
        }
        .active {
          border: 6px solid hsla(0, 0%, 100%, 0.2);
        }
      }
    }
    .main-middle {
      width: 100%;
      height: 100%;
      max-width: 1200px;
      background: #fff;
      margin: 0 auto;
      border-radius: 5px;
    }
  }
}
</style>
