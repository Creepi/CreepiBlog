<template>
  <div id="news">
    <div class="card-wrap news-wrap">
      <div class="card-header">
        <div class="card-header-left"><i class="iconfont icon-news"></i> 今日新闻</div>
        <div class="card-header-right">{{ resData.day }}</div>
      </div>
      <div class="card-content">
        <template v-for="(item,index) in newsData">
          <news-card :key="index" :newsdata="item"></news-card>
        </template>
      </div>
      <Cloading v-if="newsLoading"></Cloading>
    </div>
    <div class="card-wrap history-wrap">
      <div class="card-header">
        <div class="card-header-left"><i class="iconfont icon-lishi1"></i> 历史上的今天</div>
        <div class="card-header-right">{{ resData.day }}</div>
      </div>
      <div class="card-content">
        <Timeline v-bind:lineData="resData.content"></Timeline>
      </div>
      <Cloading v-if="newsHisLoading"></Cloading>
    </div>
  </div>
</template>

<script>
import { historyTodayGet, newsGet } from '@/api/outer'
import Timeline from '@/components/timeline/timeline'
import Cloading from '@/components/loading/loading'
import newsCard from './components/newsCard'

export default {
  components: {
    Timeline,
    Cloading,
    newsCard
  },
  data() {
    return {
      newsType: 'cn',
      newsLoading: true,
      newsHisLoading: true,
      resData: {},
      newsData: []
    }
  },
  methods: {
    fetchData() {
      historyTodayGet().then(res => {
        this.resData = res
        this.newsHisLoading = false
      })
      newsGet(this.newsType).then(res=>{
        this.newsData = res.articles
        this.newsLoading = false
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
  align-items: flex-start;
  .news-wrap{
    width:60%;
  }
  .history-wrap{
    width: 35%
  }
  .card-wrap {
    align-items: flex-start;
    @include card;

  }
}
</style>
