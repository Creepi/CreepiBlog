<template>
  <div class="process-wrap">
    <div class="square-box">
      <div :class="['item','front',`item-${type}`]">
        <div :class="['item-process']" :style="{width:`${percent}%`}"></div>
      </div>
      <div :class="['item','bottom',`item-${type}`]">
        <div :class="['item-process']" :style="{width:`${percent}%`}"></div>
      </div>
      <div :class="['item','back',`item-${type}`]">
        <div :class="['item-process']" :style="{width:`${percent}%`}"></div>
      </div>
      <div :class="['item','top',`item-${type}`]">
        <div :class="['item-process']" :style="{width:`${percent}%`}"></div>
      </div>
      <!-- <div :class="['item','left',`item-${type}`]"></div> -->
      <div :class="['item-cover','right',`item-cover-${type}`]" :style="{marginLeft:`${percent}%`}"></div>
      <div
        :class="['indicator',`indicator-${type}`]"
        :style="{marginLeft:`calc(${percent/2}% - 100px)`}"
      >
        <div class="indicator-triangle"></div>
        {{text}}({{percent}}%)
      </div>
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
    },
    type: {
      type: String,
      default: 'red'
    }
  }
}
</script>

<style lang="scss" scoped>
$red: rgba(232, 154, 173, 0.7);
$yellow: rgba(241, 212, 103, 0.7);
$green:rgba(118, 185, 155,0.7);
$red-linear: #ec0071;
$yellow-linear: #f1bf0f;
$green-linear: #42b983;
@mixin background-red {
  background: linear-gradient(90deg, rgba(245, 200, 200, 0.5), #ec0071);
  box-shadow: 0 1px 8px -6px rgba(236, 0, 113, 0.7);
}
@mixin background-yellow {
  background: linear-gradient(90deg, rgba(245, 239, 200, 0.5), #f1bf0f);
  box-shadow: 0 1px 8px -6px rgba(241, 195, 15, 0.7);
}
@mixin background-green {
  background: linear-gradient(90deg, rgba(226, 245, 200, 0.5), #42b983);
  box-shadow: 0 1px 8px -6px rgba(66, 185, 131,0.7);
}
@mixin shadow-red{
    box-shadow: 0px 15px 35px rgba(236, 0, 113,0.7);
}
@mixin shadow-yellow{
    box-shadow: 0px 15px 35px rgba(241, 195, 15, 0.7);
}
@mixin shadow-green{
    box-shadow: 0px 15px 35px rgba(66, 185, 131, 0.7);
}
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
      transition: 1s;
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
      .item-process {
        height: 100%;
        display: block;
        position: absolute;
        bottom: 0;
        margin: 0;
        transition: 1s;
      }
    }
    .item-red {
      background: $red;
      .item-process {
        @include background-red();
      }
    }
    .item-yellow {
      background: $yellow;
      .item-process {
        @include background-yellow();
      }
    }
    .item-green {
      background: $green;
      .item-process {
        @include background-green();
      }
    }
    .item-cover {
      position: absolute;
      width: 100px;
      height: 100%;
    }
    .item-cover-red {
      background: $red-linear;
    }
    .item-cover-green {
      background: $green-linear;
    }
    .item-cover-yellow {
      background: $yellow-linear;
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
    .right {
      transition: 1s;
      transform: translateX(-50px) translateZ(50px) rotateY(90deg);
    }
    .indicator {
      width: 200px;
      height: 50px;
      color: white;
      transform: translateY(120px);
      text-align: center;
      font-size: 14px;
      font-weight: 900;
      line-height: 50px;
      margin-top: 10px;
      .indicator-triangle {
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        top: -6px;
        width: 25px;
        height: 25px;
        z-index: -1;
        transform: rotate(45deg);
      }
    }
    .indicator-red {
      background: $red-linear;
      @include shadow-red();
      .indicator-triangle {
        background: $red-linear;
      }
    }
    .indicator-green {
      background: $green-linear;
      @include shadow-green();
      .indicator-triangle {
        background: $green-linear;
      }
    }
    .indicator-yellow {
      background: $yellow-linear;
      @include shadow-yellow();
      .indicator-triangle {
        background: $yellow-linear;
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
