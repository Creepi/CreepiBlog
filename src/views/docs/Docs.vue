<template>
  <div id="docs">
    <div class="card-wrap">
      <div class="card-header">
        <div class="card-header-left">我的文章</div>
        <div class="card-header-right">0</div>
      </div>
      <div class="card-content"></div>
      <Cloading v-if="isLoading"></Cloading>
    </div>
    <div class="card-wrap">
      <div class="card-header">
        <div class="card-header-left">常用文档</div>
        <div class="card-header-right">4</div>
      </div>
      <div class="card-content">
        <template v-for="(item, index) in docLink">
          <div :key="item.name" class="link-item">
            <a :href="item.url" target="view_window">{{index + 1}}.{{item.name}}</a>
            <svg-icon :iconClass="item.icon"></svg-icon>
          </div>
        </template>
      </div>
      <!-- <Cloading v-if="isLoading"></Cloading> -->
    </div>
  </div>
</template>

<script>
import Cloading from '@/components/loading/loading'

export default {
  components: {
    Cloading
  },
  data() {
    return {
      isLoading: true,
      docLink: [
        {
          name: 'MDN',
          url: 'https://developer.mozilla.org/zh-CN/',
          icon: 'mozila'
        },
        {
          name: 'Vue Api',
          url: 'https://cn.vuejs.org/v2/guide/',
          icon: 'vue'
        },
        {
          name: 'React',
          url: 'https://reactjs.org/docs/hello-world.html',
          icon: 'react'
        },
        {
          name: 'Element',
          url: 'https://element.eleme.cn/#/zh-CN/component/installation',
          icon: 'element'
        }
      ]
    }
  },
  methods: {
    fetchData() {}
  },
  created() {
    this.fetchData()
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/const.scss';
@import '@/styles/mixin.scss';
#docs {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  .card-wrap {
    align-items: flex-start;
    @include card;
    &:nth-child(1) {
      width: 75%;
    }
    &:nth-child(2) {
      width: 20%;
    }
    .card-content {
      .link-item {
        text-align: left;
        padding: 20px 20px;
        border-bottom: 1px dashed $border-color;
        display: flex;
        justify-content: space-between;
        a {
          text-align: left;
          color: $green;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
