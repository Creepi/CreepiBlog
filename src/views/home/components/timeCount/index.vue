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
        <Process :percent="processPercent" :text="processText" :type="classType"></Process>
        <div class="process-switch">
          <div
            class="item-btn"
            @click="processUpdate('day')"
            :class="processType === 'day'?'active':''"
          >今日剩余</div>
          <div
            class="item-btn"
            @click="processUpdate('month')"
            :class="processType === 'month'?'active':''"
          >本月剩余</div>
          <div
            class="item-btn"
            @click="processUpdate('year')"
            :class="processType === 'year'?'active':''"
          >今年剩余</div>
        </div>
      </div>
    </div>
    <Loading :loading="holidayLoading"></Loading>
  </div>
</template>

<script>
import { holidayGet } from '@/api/outer'
import Loading from '@/components/loading/loading'
import Process from '../3dProcess'

export default {
  components: {
    Loading,
    Process
  },
  data() {
    const hoursleft = Math.trunc(
      this.$moment()
        .endOf('day')
        .diff(this.$moment(), 'minutes') / 60
    )
    const minutesleft =
      this.$moment()
        .endOf('day')
        .diff(this.$moment(), 'minutes') % 60
    const totaldays =
      this.$moment()
        .endOf('year')
        .diff(this.$moment().startOf('year'), 'days') + 1

    return {
      weekdayList: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      today: this.$moment().format('ll'),
      daysLeft: this.$moment()
        .endOf('year')
        .diff(this.$moment(), 'days'),
      monthLeft: this.$moment()
        .endOf('month')
        .diff(this.$moment(), 'days'),
      totalDays: totaldays,
      hoursLeft: hoursleft,
      minutesLeft: minutesleft,
      holidayLoading: true,
      holidayLength: 0,
      holidayDistance: 0,
      holidayInfo: {},
      processType: 'day',
      processText: '',
      processPercent: 0,
      classType: ''
    }
  },
  created() {
    this.fetchData()
    this.processUpdate('day')
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
    },
    processUpdate(type) {
      this.processType = type
      switch (type) {
        case 'day':
          this.processText = `今日剩余${this.hoursLeft}小时${this.minutesLeft}分钟`
          this.processPercent = Math.floor(
            (this.$moment()
              .endOf('day')
              .diff(this.$moment(), 'minutes') /
              (24 * 60)) *
              100
          )

          break
        case 'month':
          this.processPercent = Math.floor(
            (this.monthLeft / this.$moment().daysInMonth()) * 100
          )
          this.processText = `本月剩余${this.monthLeft}天`
          break
        case 'year':
          this.processPercent = Math.floor(
            (this.daysLeft / this.totalDays) * 100
          )
          this.processText = `今年剩余${this.daysLeft}天`
          break
        default:
          break
      }
      if (this.processPercent < 30) {
        this.classType = 'red'
      } else if (this.processPercent > 70) {
        this.classType = 'green'
      } else {
        this.classType = 'yellow'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';

.card-wrap {
  @include card;
  min-height: 350px;
  .card-content {
    .process-wrap {
      padding-top: 100px;
      background: #f4f4f4;
      .process-switch {
        display: flex;
        justify-content: center;
        padding-bottom: 40px;
        .item-btn {
          padding: 12px 26px;
          background-color: #fff;
          border: 1px solid #2f92f8;
          color: #2f92f8;
          cursor: pointer;
          transition: all 0.3s;
          z-index: 3;
          &:first-child {
            border-bottom-left-radius: 22px;
            border-top-left-radius: 22px;
          }
          &:last-child {
            border-bottom-right-radius: 22px;
            border-top-right-radius: 22px;
          }
        }
        .active {
          color: #fff;
          background-color: #2f92f8;
          box-shadow: 0 14px 24px -6px #64b0fa, 0 22px 40px 2px #badcff;
          z-index: 1;
        }
      }
    }
  }
}
</style>
