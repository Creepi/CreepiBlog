<template>
  <div class="card-wrap">
    <div class="card-header">
      <div class="card-header-left">天气预报</div>
      <div class="card-header-right">上海</div>
    </div>
    <div></div>
  </div>
</template>

<script>
import wheatherGet from '@/api/outer'

export default {
  data() {
    return {
      wheatherData: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData: () => {
      wheatherGet().then(res => {
        this.data = res
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
.card-wrap {
  @include card;
}
</style>
