<template>
  <div class="card-wrap">
    <div class="card-header">
      <div class="card-header-left">{{weatherData.city}}一周天气</div>
      <div class="card-header-right">{{weatherData.country}}</div>
    </div>
    <div class="weather-wrap">
      <div class="chart-wrap">
        <Line-chart :charData="chartData" id="ccc"></Line-chart>
      </div>
      <div class="weather-table">
        <table>
          <tbody>
            <tr>
              <th>日期</th>
              <th>温度</th>
              <th>天气</th>
              <th>紫外线</th>
            </tr>
            <tr :key="index" v-for="(item,index) in weatherData.data">
              <td>{{item.day}}</td>
              <td>{{item.tem1}}</td>
              <td>{{item.wea}}</td>
              <td>{{item.index[0].level}}</td>
            </tr>
          </tbody>
        </table>
      </div>
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
        this.weatherData = res
        this._.forEach(res.data, item => {
          this.chartData.push({
            temper: parseInt(item.tem2.replace(/[^0-9]/gi, ''), 0),
            type: '最低气温',
            date: item.date
          })
          this.chartData.push({
            temper: parseInt(item.tem.replace(/[^0-9]/gi, ''), 0),
            type: '平均气温',
            date: item.date
          })
          this.chartData.push({
            temper: parseInt(item.tem1.replace(/[^0-9]/gi, ''), 0),
            type: '最高气温',
            date: item.date
          })
        })
      })
    }
  }
}
</script>

<style
  lang="scss"
  scoped
>
@import '@/styles/mixin.scss';
.card-wrap {
  @include card;

  .weather-wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .chart-wrap {
      width: 50%;
    }
    .weather-table {
      width: 50%;
      margin-top: 18px;
      table {
        width: 100%;
        tr {
          height: 39px;
          td {
            box-sizing: border-box;
            border-top: 2px dotted #f2f2f2;
          }
        }
      }
    }
  }
}
</style>
