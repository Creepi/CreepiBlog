<template>
  <div class="waves-wrap">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import SimplexNoise from 'simplex-noise'

export default {
  data() {
    return {}
  },
  mounted() {
    class Wave {
      constructor() {
        this.canvas = document.getElementById('canvas')
        this.ctx = this.canvas.getContext('2d')
        this.simplex = new SimplexNoise()
        this.speedY = 0
        this.speedX = 0
        this.init()
      }
      init() {
        this.reset()
        this.loop()
      }
      reset() {
        this.w = window.innerWidth
        this.h = 100
        this.canvas.width = this.w
        this.canvas.height = this.h
        this.count = Math.ceil(this.w / Math.floor(Math.random() * 40 + 10))
      }
      loop() {
        const that = this
        function drawloop() {
          window.requestAnimationFrame(drawloop)
          that.ctx.clearRect(0, 0, that.w, that.h)
          that.speedX = 0
          that.speedY += 0.01 // 每次渲染需要更新波峰波谷值
          // 连续绘制三次波浪线
          that.draw('#fff', 'screen')
          that.draw('#fff', 'screen')
          that.draw('#fff', 'screen')
        }
        drawloop()
      }
      draw(color, comp) {
        const amp = 20 // 波浪幅度 可以通过函数传递参数更改不同的幅度
        this.ctx.beginPath()
        let x = null
        let y =null
        for (let i = 0; i <= this.count; i++) {
          this.speedX += 0.05
          x = i * (this.w / this.count)
          y =
            this.h / 2 + this.simplex.noise2D(this.speedX, this.speedY) * amp
          this.ctx[i === 0 ? 'moveTo' : 'lineTo'](x, y)
        }
        this.ctx.lineTo(this.w, this.h)
        this.ctx.lineTo(0, this.h)
        this.ctx.closePath()
        this.ctx.fillStyle = 'hsla(0, 0%, 100%, 0.2)'
        this.ctx.globalCompositeOperation = comp
        this.ctx.fill()
      }
    }
    new Wave()
  }
}
</script>

<style lang="scss" scoped>
.waves-wrap {
  overflow: hidden;
  #canvas {
    display: block;
    height: auto;
  }
}
</style>
