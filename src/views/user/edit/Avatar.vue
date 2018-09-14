<template>
  <backLayout backgroundColor='#fff' title="修改头像" class="editAvatarPage">
    <div>
      <img src="http://cms-bucket.nosdn.127.net/1a47fcc17d2e46b5b0d3e0f160d98a0320180123163519.jpeg?imageView&thumbnail=550x0" alt="">
      <div class="btn"><van-button>从相册选择</van-button></div>
      <div class="btn"><van-button>拍摄</van-button></div>
    </div>
  </backLayout>
</template>

<script>
import backLayout from '@/components/backLayout/'
export default {
  components: {
    backLayout
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variable.scss';
.editAvatarPage{
  img{
    margin-top: 10px;
    width: 100%;
    height: 70%;
    margin-bottom: 20px;
  }
  .btn{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    .van-button{
      background-color: $color-primary;
      color: #fff;
      margin:0 auto;
      width: 80%;
      border-radius: 1rem;
    }
  }

}
</style>

<style lang='scss'>
.editAvatarPage{
  .van-nav-bar__title{
    font-size: 16px;
  }
}
</style>
