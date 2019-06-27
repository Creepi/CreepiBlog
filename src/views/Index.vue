<template>
  <div id="main">
    <div :class="['color-wrap',hasHeader === 1?'back-blur':'']">
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
        <div class="profile">
          <div class="user-logo">
            <img src="../assets/images/main/user.jpeg" alt>
          </div>
          <div class="user-motto">
            <div class="user-me">Creepi</div>
            <div class="user-text">welcome to the real world, it sucks, but you will love it</div>
          </div>
        </div>
        <div class="music-box">
          <music-wave v-if="musicsData.length>0" :musics-data="musicsData"></music-wave>
        </div>
        <div class="site-logo">
          <div class="image-wrap">
            <img src="../assets/musics/cover.jpeg" alt>
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
      <div class="main-footer">
        <div class="social-wrap">
          <a class="iconfont icon-twitter"></a>
          <a class="iconfont icon-ins"></a>
          <a class="iconfont icon-github"></a>
        </div>
        <div class="motto">
          Sometimes ever,sometimes never.
          <span>@Author:Creepi</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import musicWave from '@/components/wavesurfer/'
import { musicsGet } from '@/api'

export default {
  components: {
    musicWave
  },
  data() {
    return {
      router: [{}],
      userAnimate: null,
      hasHeader: 0,
      musicsData: []
    }
  },
  mounted() {
    // window.addEventListener('scroll', this.handleScroll)
    this.fetchData()
    this.initAnimate()
  },
  methods: {
    fetchData() {
      musicsGet().then(res => {
        this.musicsData = res.data
      })
    },
    initAnimate() {
      this.userAnimate = this.$anime.timeline({
        easing: 'easeOutExpo',
        duration: 1000
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
          translateY: '-120%'
        })
        .add({
          targets: '.user-motto',
          translateY: '-85px',
          opacity: 1,
          duration: '1500'
        })
      this.$anime({
        targets: '.menu-wrap',
        bottom: '8%',
        borderRadius: ['0%', '50%'],
        easing: 'easeInOutQuad',
        delay: 1000
      })
    },
    handleScroll() {
      const maxHeight = document.body.offsetHeight
      this.top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset // 要做兼容 在模拟器能正常获取scrolltop在微信h5页面和手机的浏览器页面一直为0
      this.hasHeader = this.top > maxHeight ? 1 : 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/const.scss';
@import '@/styles/keyframes.scss';
#main {
  width: 100%;
  .back-blur {
    filter: grayscale(50%) brightness(80%) blur(5px);
  }
  .color-wrap {
    position: fixed;
    top: -8px;
    left: -8px;
    width: calc(100% + 12px);
    height: calc(100% + 12px);
    background: black;
    transition: filter 1.5s;
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
      filter: grayscale(00%) brightness(100%);
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
      .music-box {
        width: 100%;
        position: absolute;
        top: 50%;
      }
      .profile {
        position: absolute;
        top: 30%;
        width: 100%;
        .user-logo {
          margin: 0 auto;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          transform-origin: center center;
          opacity: 0;
          img {
            width: 100px;
          }
        }
        .user-motto {
          color: #fff;
          opacity: 0;
          .user-me {
            font-family: halofont;
            font-size: 20px;
            font-weight: bold;
          }
          .user-text {
            padding-top: 10px;
            font-family: halofont;
          }
        }
      }

      .site-logo {
        position: absolute;
        top: 30px;
        left: 30px;
        display: flex;
        .image-wrap {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 10px;
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
      max-width: 1200px;
      margin: 0 auto;
      border-radius: 5px;
    }
    .main-footer {
      // position: absolute;
      bottom: 0px;
      .social-wrap {
        margin-top: 100px;
        a {
          color: hsla(0, 0%, 100%, 0.68);
          text-decoration: none;
          margin: 0 20px;
          font-size: 28px;
        }
      }
      .motto {
        color: hsla(0, 0%, 100%, 0.68);
        margin: 30px 0;
      }
    }
  }
}
</style>
