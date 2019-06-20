<template>
  <div>
    <v-chart :force-fit="true" :height="height" :data="charData">
      <v-tooltip/>
      <v-legend/>
      <v-axis data-key="temper" :label="XAxisLabel"/>
      <v-axis data-key="date" :label="YAxisLabel"/>
      <v-line :position="'date*temper'" color="type"/>
      <v-point :position="'date*temper'" :size="3" shape="circle"></v-point>
    </v-chart>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chart: null,
      height: 400,
      XAxisLabel: {
        formatter: val => {
          return `${val}°C`
        }
      },
      YAxisLabel: {
        formatter: val => {
          return val.substring(5)
        }
      }
    }
  },
  props: {
    charData: {
      type: Array,
      default: () => {
        return {
          data: []
        }
      }
    },
    id: String
  },

  mounted() {},
  methods: {}
}
</script>
