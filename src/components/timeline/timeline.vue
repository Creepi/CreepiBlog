<template>
  <div class="timeline">
    <div v-if="lineData.length > 0" class="content-wrap">
      <template v-for="(item,index) in lineData">
        <div
          @click="pagehref('https://www.baidu.com/s?wd=' + item)"
          :key="index"
          :class="(index+2) % 2 === 0?'item-left':'item-right'"
        >
          <span>{{item}}</span>
          <span class="item-point"></span>
        </div>
      </template>
      <div class="line-wrap"></div>
    </div>
    <div v-else style="margin:20px">No Data</div>
  </div>
</template>

<script>
import pageHref from '@/utils/funcs'

export default {
  props: {
    lineData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      initAnimation: null
    }
  },
  watch: {
    lineData() {
      this.initAnimate()
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initAnimate()
    })
  },
  methods: {
    initAnimate() {
      this.$nextTick(() => {
        this.initAnimation = this.$anime.timeline({
          duration: 1000,
          delay: 1000
        })
        this.initAnimation.add({
          targets: '.item-left',
          translateX: -90,
          delay: this.$anime.stagger(100) // increase delay by 100ms for each elements.
        })
        this.initAnimation.add(
          {
            targets: '.item-right',
            translateX: 90,
            delay: this.$anime.stagger(100) // increase delay by 100ms for each elements.
          },
          0
        )
        this.initAnimation.play()
      })
    },
    pagehref(url) {
      pageHref(url)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/const.scss';

.timeline {
  position: relative;
  .content-wrap {
    width: 90%;
    margin: 20px auto;
    .item-left,
    .item-right {
      position: relative;
      box-sizing: border-box;
      width: 180px;
      margin: 5px auto;
      padding: 8px;
      font-size: 14px;
      border-bottom: 1px solid $green;
      font-weight: bold;
      cursor: pointer;
      a {
        text-decoration: none;
      }
      &:hover {
        color: $green;
      }
      .item-point {
        position: absolute;
        bottom: 0;
        transform: translate(0, 50%);
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: $green;
      }
    }
    .item-left {
      .item-point {
        right: -4px;
      }
    }
    .item-right {
      .item-point {
        left: -4px;
      }
    }
    .line-wrap {
      width: 2px;
      height: 100%;
      background: $green;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
