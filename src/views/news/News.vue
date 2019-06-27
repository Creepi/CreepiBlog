<template>
  <div id="news">
    <div class="card-wrap">
      <div class="card-header">
        <div class="card-header-left">今日新闻</div>
        <div class="card-header-right">{{ resData.day }}</div>
      </div>
      <div class="card-content">
      </div>
      <Cloading v-if="isLoading"></Cloading>
    </div>
    <div class="card-wrap">
      <div class="card-header">
        <div class="card-header-left">历史上的今天</div>
        <div class="card-header-right">{{ resData.day }}</div>
      </div>
      <div class="card-content">
        <Timeline v-bind:lineData="resData.content"></Timeline>
      </div>
    </div>
  </div>
</template>

<script>
import { historyTodayGet } from '@/api/outer'
import Timeline from '@/components/timeline/timeline'
import Cloading from '@/components/loading/loading'

export default {
  components:{
    Timeline,
    Cloading
  },
  data() {
    return {
      isLoading: true,
      resData: {}
    }
  },
  methods: {
    fetchData() {
      historyTodayGet().then(res => {
        this.resData = res
      })
    }
  },
  created() {
    this.fetchData()
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
#news {
  display: flex;
  justify-content: space-around;
  align-items:flex-start;
  .card-wrap {
    align-items: flex-start;
    @include card;
    width: 45%;
  }
}
</style>
