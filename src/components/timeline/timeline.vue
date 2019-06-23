<template>
  <div class="timeline">
    <div class="content-wrap">
      <template v-for="(item,index) in lineData">
        <div :key="index" :class="(index+2) % 2 === 0?'item-left':'item-right'">{{item}}</div>
      </template>
    </div>
    <div class="line-wrap" @click="initAnimate()">22</div>
  </div>
</template>

<script>
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
    this.initAnimate()
  },
  methods: {
    initAnimate() {
      this.$nextTick(() => {
        this.initAnimation = this.$anime.timeline({
          easing: 'easeOutExpo',
          duration: 750
        })
        this.initAnimation.add({
          targets: '.item-left',
          translateX: -80,
          delay: this.$anime.stagger(100) // increase delay by 100ms for each elements.
        })
        this.initAnimation.add({
          targets: '.item-right',
          translateX: 80,
          delay: this.$anime.stagger(100) // increase delay by 100ms for each elements.
        },0)
        this.initAnimation.play()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.timeline {
  .content-wrap {
    width: 80%;
    margin: 0 auto;
    > div {
      width: 160px;
      margin: 0 auto;
    }
  }
}
</style>
