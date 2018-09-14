<template>
  <backLayout backgroundColor='#fff' :rightText="$t('pay.finish')" rightRouter="/" class="payDonePage" :leftArrow="false">
    <div class="content">
      <!-- <i class="iconfont icon-btc icon1"></i> -->
      <img :src="require('@/assets/img/btc.png')" alt="">
      <span class="text">{{$t('pay.transforSuccess')}}</span>
      <div><span>{{$route.query.currency}}</span><span class="amount">{{$route.query.count | currency}}</span></div>
    </div>
    <cell class="cell">
      <span slot="left" class="left">{{$t('pay.walletInfo')}}</span>
      <span slot="right" class="right"><i class="iconfont icon-btc"></i><span>{{$route.query.currency}}</span></span>
    </cell>
  </backLayout>
</template>

<script>
import backLayout from '@/components/backLayout/'
import cell from '@/components/cell/index.vue'
export default {
  components: {
    backLayout,
    cell
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/variable.scss';
.payDonePage{
  .content{
    padding-top: 30px;
    color: $font-color-blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    .text{
      font-size: 17px;
      font-weight: bold;
      margin: .2rem 0 .39rem 0;
    }
    .amount{
      margin-left: 5px;
      font-size: 24px;
      font-weight: 600;
      font-family: 'DINAlternate-Bold', 'PingFang SC', 'STHeitiSC-Light', 'Helvetica-Light', arial, sans-serif, 'Droid Sans Fallback';
    }
    img{
      width: 45px;
      height: 45px;
    }
    i{
      color: $icon-color-b;
    }
  }
  .cell{
    margin-top: .8rem;
    .left{
      color: $font-color-gray;
      font-size: 13px;
    }
    .right{
      i{
        color: $icon-color-b;
        margin-right: 5px;
      }
    }
  }
}
</style>
