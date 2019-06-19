<template>
  <div class="card-wrap">
    <div class="card-header">
      <div class="card-header-left">天气预报</div>
      <div class="card-header-right">上海</div>
    </div>
    <div class="weather-wrap">
      <div class="chart-wrap">
        <Line-chart :charData="chartData" id="ccc"></Line-chart>
      </div>
      <div class="weatherTable">123</div>
    </div>
  </div>
</template>

<script>
import weatherGet from '@/api/outer'
import LineChart from '@/components/g2charts/LineChart'

export default {
  components: {
    LineChart
  },
  data() {
    return {
      weatherData: null,
      chartData: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      weatherGet().then(res => {
        // this.weatherData = res.data
        this.chartData = []
        this._.forEach(res.data, item => {
          this.chartData.push({
            temper: parseInt(item.tem2.replace(/[^0-9]/gi, ''),0),
            type: 'low',
            date: item.date
          })
          this.chartData.push({
            temper: parseInt(item.tem.replace(/[^0-9]/gi, ''),0),
            type: 'average',
            date: item.date
          })
          this.chartData.push({
            temper: parseInt(item.tem1.replace(/[^0-9]/gi, ''),0),
            type: 'high',
            date: item.date
          })
        })
        this.weatherData = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
.card-wrap {
  @include card;
  .weather-wrap {
    display: flex;
    justify-content: space-between;
    .chart-wrap {
      width: 50%;
    }
  }
}
</style>
