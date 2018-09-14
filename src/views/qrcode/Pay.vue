<template>
  <backLayout image backgroundColor="transparent" :leftText="$t('qrCode.payToMerchant')" class="payCodePage">
    <div class="content">
      <img src="../../assets/img/btc.png" alt="" class="icon-btc-big">
      <span class="currency">{{currency.name}}</span>
      <div class="card">
        <h5>{{$t('qrCode.myPayCode')}}</h5>
        <QrcodeVue class="qrcode" :value="qrCode" size="172"></QrcodeVue>

        <cell @click.native="selectShowHandle" class="cell">
          <span slot="left">{{$t('qrCode.selecWallet')}}</span>
          <div slot="right" class="cell-right"><i :class="currency.icon"></i><span>{{currency.name}}</span><i class="iconfont icon-gengduo" style="color: #E1E1E1;margin-left: 10px;"></i></div>
        </cell>
      </div>
      <span class="notice">{{$t('qrCode.payNotice')}}</span>
    </div>
    <select-coin @getCurrency="getCurrency" :selectShow="selectShow" @defaultCurrency="defaultCurrency"></select-coin>
  </backLayout>
</template>

<script>
import backLayout from '@/components/backLayout/'
import cell from '@/components/cell/'
import selectCoin from '@/components/select/'
import { getPayCode } from '@/api/qrcode'
import QrcodeVue from 'qrcode.vue'
export default {
  components: {
    backLayout,
    cell,
    selectCoin,
    QrcodeVue
  },
  data () {
    return {
      selectShow: {
        boo: false
      },
      currency: {
      },
      codeList: [],
      qrCode: ''
    }
  },
  methods: {
    //  获取默认货币
    defaultCurrency (item) {
      this.currency = item
    },
    selectShowHandle () {
      console.log('1111111111111')
      this.$set(this.selectShow, 'boo', true)
    },
    // 接受子组件回传的值
    getCurrency (item) {
      this.currency = item
      let currencyCode = this.codeList.filter((item, index) => {
        return item.coinType === this.currency.name
      })
      this.qrCode = currencyCode[0].qrCode
    },
    //  获取付款码列表
    _getPayCode () {
      getPayCode().then(res => {
        this.codeList = res.data
      })
    }
  },
  created () {
    this._getPayCode()
  }
}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/variable.scss';
.payCodePage{
  .icon-btc-big{
    margin: 0rem auto 0 auto;
    height: 1.3rem;
    width: 1.3rem;
  }
  .currency{
    color: #fff;
    font-size: 20px;
    margin: .2rem 0 .5rem 0;
  }
  .notice{
    font-size: 13px;
    color: #fff;
  }
  .card{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: $radius;
    padding: .3rem 0 0 0;
    margin-bottom: .51rem;
    h5{
      font-size: 17px;
      color: $font-color-blue;
      font-weight: 600;
      margin:0;
    }
    .qrcode{
      width: 172px;
      height: 172px;
      margin: 0.5rem 0 0.5rem 0;
    }
    p{
      color: $w-text-color;
      padding: .1rem;
    }
    .cell{
      background: #F0F1F2;
      display: flex;
      justify-content: space-between;
      padding: .25rem .18rem .25rem .3rem;
      color: $font-color-blue;
      align-items: center;
      font-size: 14px;
      border-bottom-left-radius: $radius $radius;
      border-bottom-right-radius: $radius $radius;
      &::after{
        width: 0;
      }
      .cell-right{
        display: flex;
        align-items: center;
        i{
          color: $w-fz-color1;
          font-size: 18px;
          margin-right: 5px;
        }
      }
    }
  }
  .link{
    width: 100%;
    left: 0;
    text-align: center;
    font-size: 13px;
    position: fixed;
    top: calc(100% - 43px);
    a{
      color: #fff;
      letter-spacing: 0.5px;
    }
  }
}
</style>

<style lang="scss">
.payCodePage{
  background-position: center;
  background-size: cover;
  .layout-header{
    .van-nav-bar{
      background-color: transparent!important;
    }
  }
  .content{
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .van-nav-bar{
    background-color: transparent;
  }
}
</style>
