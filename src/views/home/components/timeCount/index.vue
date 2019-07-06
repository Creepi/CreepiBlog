<template>
  <div class="card-wrap">
    <div class="card-header"></div>
    <div class="card-content"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';

.card-wrap {
  @include card;
  min-height: 350px;
}
</style>
