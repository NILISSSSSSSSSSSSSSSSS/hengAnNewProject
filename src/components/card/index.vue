<template>
  <div class="w-card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'wCard'
}
</script>

<style lang="scss">
  .w-card {
    .van-cell-group {
      border-radius: 6px;
      .van-cell:first-child {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
      }
      .van-cell:last-child {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  }
</style>

<style lang="scss" scoped>
.w-card {
  background: #FFFFFF;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.07);
  border-radius: $radius;
}
</style>
