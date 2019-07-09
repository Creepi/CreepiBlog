<template>
  <div v-if="vLoading" class="mask-loading">
    <div class="svg-wrap">
      <svg-icon iconClass="bars"></svg-icon>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    loading:{
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      vLoading: this.loading
    }
  },
  watch: {
    loading(val){
      this.vLoading = val
    }
  }
}
</script>

<style lang="scss" scoped>
.mask-loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #fff, $alpha: 0.6);
  border-radius: 5px;
  .svg-wrap {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
  }
}
</style>
