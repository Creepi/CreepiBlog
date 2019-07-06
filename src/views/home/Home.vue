<template>
  <div id="page-home">
    <div class="time-wrap">
      <Timecount></Timecount>
    </div>
    <div class="weather-wrap">
      <Wheather></Wheather>
    </div>
  </div>
</template>

<script>
import Wheather from './components/wheather'
import Timecount from './components/timeCount'

export default {
  data() {
    return {}
  },
  components: {
    Wheather,
    Timecount
  }
}
</script>

<style lang="scss" scoped>
</style>
