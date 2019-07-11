<template>
  <div class="process-wrap">
    <div class="square-box">
      <div class="item front">
        <div class="item-process" :style="{width:`${percent}%`}"></div>
      </div>
      <div class="item bottom">
        <div class="item-process" :style="{width:`${percent}%`}"></div>
      </div>
      <div class="item back">
        <div class="item-process" :style="{width:`${percent}%`}"></div>
      </div>
      <div class="item top">
        <div class="item-process" :style="{width:`${percent}%`}"></div>
      </div>
      <div class="item left"></div>
      <div class="item right"></div>
      <div class="indicator" :style="{marginLeft:`calc(${percent/2}% - 100px)`}">{{text}}({{percent}}%)</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    percent: {
      type: Number,
      default: 0
    },
    text: {
      type: String,
      default: ''
    }
  },
}
</script>

<style lang="scss" scoped>
$danger:rgba(232, 154, 173, 0.7);
.process-wrap {
  perspective: 1000px;
  text-align: center;
  -webkit-perspective-origin: 50% 50%;
  perspective-origin: 50% 50%;
  position: relative;
  transition: -webkit-transform 0.3s ease;
  transition: transform 0.3s ease;
  transition: transform 0.3s ease, -webkit-transform 0.3s ease;
  .square-box {
    width: 60%;
    height: 100px;
    margin: 40px;
    display: inline-block;
    position: relative;
    -webkit-transform: rotateX(55deg);
    transform: rotateX(55deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    .item {
      display: inline-block;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;

      .item-process {
        height: 100%;
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        margin: 0;
        background: linear-gradient(90deg, rgba(245, 239, 200, 0.5), #ec0071);
        box-shadow: 0 1px 8px -6px rgba(236, 0, 113, 0.5);
        transition: 1s;
      }
    }
    .danger{
      background: $danger
    }
    .front {
      transform: rotateX(-90deg);
    }
    .bottom {
      box-shadow: 0 20px 20px -5px rgba(0, 0, 70, 0.25),
        0 -25px 200px 5px #4d5075, 0 -8px 200px 300px rgba(255, 255, 255, 0.4);
    }
    .back {
      transform: rotateX(-90deg) translateZ(-100px);
    }
    .top {
      transform: translateZ(100px);
      box-shadow: 0 1px 8px -6px rgba(236, 0, 113, 0.5);
    }
    .indicator {
      box-shadow: 0px 15px 35px rgba(236, 0, 113, 0.3);
      background: #ec0071;
      width: 200px;
      height: 50px;
      color: white;
      transform: translateY(120px);
      text-align: center;
      font-size: 14px;
      font-weight: 900;
      line-height: 50px;
      transition: 1s;
      &:before {
        content: '';
        position: absolute;
        background: #ec0071;
        left: 0;
        right: 0;
        margin: auto;
        top: -6px;
        width: 25px;
        height: 25px;
        z-index: -1;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
  }
  @keyframes rotateanimation {
    0% {
      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }
  }
}
</style>
