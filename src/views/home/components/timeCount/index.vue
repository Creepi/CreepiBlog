<template>
  <div class="card-wrap">
    <div class="card-header">
      <div class="card-header-left">
        <i class="iconfont icon-holiday"></i>
        {{today}}({{weekdayList[$moment().day()]}})
      </div>
      <div class="card-header-right">距离{{holidayInfo.name}}还有{{holidayDistance}}天</div>
    </div>
    <div class="card-content">
      <div class="process-wrap">
        <Process></Process>
      </div>
    </div>
    <Loading :loading="holidayLoading"></Loading>
  </div>
</template>

<script>
import Loading from '@/components/loading/loading'
import Process from '../3dProcess'
import { holidayGet } from '@/api/outer'

export default {
  components: {
    Loading,
    Process
  },
  data() {
    return {
      weekdayList:['周日','周一','周二','周三','周四','周五','周六'],
      today: this.$moment().format('ll'),
      holidayLoading: true,
      holidayLength: 0,
      holidayDistance: 0,
      holidayInfo: {}
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      holidayGet().then(res => {
        this.holidayInfo = res.holiday
        this.holidayLoading = false
        this.holidayDistance = this.$moment(res.holiday.date).diff(
          this.$moment(),
          'days'
        )
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';

.card-wrap {
  @include card;
  min-height: 350px;
  .card-content{
    .process-wrap{
      margin-top: 100px;
    }
  }
}
</style>
