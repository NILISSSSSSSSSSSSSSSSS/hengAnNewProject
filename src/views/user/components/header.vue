<template>
  <div class="user-header">
    <van-nav-bar :left-text="$t('common.back')" left-arrow @click-left="goBack"  />
  </div>
</template>
<script>
export default {
  name: 'wUserHeader',
  methods: {
    goBack () {
      this.$router.history.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
  .user-header {
    position: fixed;
    left: 0;
    width: 100%;
    top: 0px;
    background-color: white;
    z-index: 999;
    /deep/ .van-icon-arrow {
      color: $font-color-blue;
    }
    /deep/ .van-nav-bar__text {
      color: $font-color-blue;
    }
    /deep/ .van-hairline--bottom::after{
      border-bottom-style: none;
    }
    /deep/ .van-nav-bar{
      background-color: white;
    }
  }
</style>
