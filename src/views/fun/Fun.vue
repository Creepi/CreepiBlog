<template>
  <div id="fun">
    <div class="card-wrap cats-wrap">
      <div class="card-header">
        <div class="card-header-left">云吸猫</div>
        <div class="card-header-right">0</div>
      </div>
      <div class="card-content">
        <img :src="catImage" alt="" @click="fetchData">
      </div>
      <Cloading v-if="catsLoading"></Cloading>
    </div>
    <div class="card-wrap">
      <div class="card-header">
        <div class="card-header-left">娱乐外链</div>
        <div class="card-header-right">0</div>
      </div>
      <div class="card-content">

      </div>
      <!-- <Cloading v-if="isLoading"></Cloading> -->
    </div>
  </div>
</template>

<script>
import Cloading from '@/components/loading/loading'
import { catsGet } from '@/api/outer'

export default {
  components: {
    Cloading
  },
  data() {
    return {
      catsLoading: true,
    }
  },
  methods: {
    fetchData() {
      this.catsLoading = true
      catsGet().then(res=>{
        this.catImage = res[0].url
        this.catsLoading = false
      })
    }
  },
  created() {
    this.fetchData()
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/const.scss';
@import '@/styles/mixin.scss';
#fun {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  .card-wrap {
    align-items: flex-start;
    @include card;
    &:nth-child(1) {
      width: 60%;
      .card-content{
        padding: 20px;
        img{
          max-width: 80%;
          margin: 0 auto;
          cursor: pointer;
        }
      }
    }
    &:nth-child(2) {
      width: 35%;
    }
    .card-content {

    }
  }
}
</style>
