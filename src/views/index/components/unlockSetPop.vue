<template>
  <van-popup class="unlockSetPop" v-model="show.boo" :close-on-click-overlay="false">
    <div class="card">
      <p class="breakAll title">为了你的资金安全，请尽快前往设置你的解锁密码</p>
      <div class="set-list">
        <van-cell-group>
          <van-cell title="人脸解锁" is-link>
            <i class="iconfont icon-renlianjiesuo" slot="icon"></i>
          </van-cell>
          <van-cell title="指纹解锁" is-link>
            <i class="iconfont icon-zhiwenjiesuo" slot="icon"></i>
          </van-cell>
          <van-cell title="PIN码解锁" is-link>
            <i class="iconfont icon-PINma" slot="icon"></i>
          </van-cell>
        </van-cell-group>
      </div>
      <div class="btn"><van-button type="default" v-link="'/setting/security'">去设置</van-button></div>
    </div>
    <div class="delete" @click="show.boo = false"><i class="iconfont icon-delete" ></i></div>
  </van-popup>
</template>

<script>
export default {
  props: {
    show: Object
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variable.scss';
.unlockSetPop{
  background-color: transparent;
  width: 74.7%;
  .card{
    background-color: #fff;
    width: 100%;
    height: 39.7%;
    padding: 4% 5.3%;
    border-radius: .1rem;
    .title{
      font-size: 15px;
      color: $font-color-blue;
      text-align: center;
    }
    .set-list{
      margin-top: 10px;
      border-radius: .1rem;
      box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.07);
      .van-cell{
        color: $font-color-gray;
        font-size: 12px;
        .iconfont{
          margin-right: 10px;
        }
      }
    }
    .btn{
      width: 100%;
      .van-button{
        color: #fff;
        letter-spacing: 1px;
        margin-top: 20px;
        width: 100%;
        border-radius: 1rem;
        background-color: $color-primary;
      }
    }
  }
  .delete{
    width: 100%;
    height: 50px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon-delete{
      color: #fff;
      font-size: 36px;
    }
  }
}
</style>
