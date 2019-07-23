<template>
  <div class="news-card">
    <div class="news-content">
      <div class="news-title" @click="pagehref(newsdata.url)">{{newsdata.title}}</div>
      <div class="news-description">{{newsdata.description}}</div>
      <div class="news-footer">{{dateFormat(newsdata.publishedAt)}}</div>
    </div>
    <div class="news-image" v-if="newsdata.urlToImage">
      <img :src="newsdata.urlToImage" alt="图片加载失败" :onerror="`this.src = '${require('../../../../assets/images/image_error.png')}'`"/>
    </div>
  </div>
</template>

<script>
import pageHref from '@/utils/funcs'

export default {
  props: {
    newsdata: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  filters:{
    timeAgo(date) {
      const minutes = this.$moment(date).get('minutes')
      return minutes
    }
  },
  data() {
    return {
    }
  },
  methods:{
    pagehref:pageHref,
    dateFormat: (date)=> {
      const res = this.$moment(date).format('MMMM Do YYYY, h:mm:ss a')
      return res
    }
  }
}
</script>

<style lang="scss" scoped>
.news-card {
  width: 90%;
  margin: 16px auto;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  padding: 10px;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.25s;
  &:hover{
    box-shadow: 0 0 0 1px rgba(0,0,0,.08), 0 1px 4px 2px rgba(0,0,0,.05)
  }
  .news-content {
    .news-title {
      text-align: left;
      font-weight: bold;
      &:hover{
        text-decoration: underline;
        cursor: pointer;
      }
    }
    .news-description {
      font-size: 13px;
      padding-top: 20px;
      text-align: left;
    }
    .news-footer{
      text-align: left;
      padding-top: 20px;
      font-size: 13px;
    }
  }
  .news-image {
    width: 160px;
    min-width: 160px;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    display: flex;
    align-items: center;/*副轴居中*/
    padding-left: 10px;
    img {
      width: 100%;
      display: flex;
    }
  }
}
</style>
