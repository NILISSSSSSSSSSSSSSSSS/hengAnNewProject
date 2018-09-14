<template>
  <div class="withdraw" :style="`background-image: url(${bacPng})`">
    <!-- :style="`background-image: url(${bacPng})`" -->
    <div class="bg-wraper">
      <section class="header">
        <van-nav-bar
          left-arrow
          :title="$t('wallet.mentionMoney')"
          :right-text="$t('wallet.getCoinRecord')"
          @click-left="onClickLeft"
          @click-right="onClickRight"
        >
        </van-nav-bar>
      </section>

      <!-- <div class="waves" :style="`width: 100%;height: 2.6rem;left:0;position:absolute;z-index:0;top: 46px`">
        <Waves></Waves>
      </div> -->
      <section class="assets">

        <div class="name">{{$t('wallet.remain')}}</div>
        <div class="amount">
          <span>{{totalCount}}</span><em></em>
        </div>
        <div class="name">
          <span>{{$t('wallet.moneyTotalAmount')}}</span>&nbsp;<em>{{totalAmount}}</em>
        </div>
        <div class="img-box">
          <!-- <img src="#" alt=""> -->
          <!-- <span class="icon iconfont icon-btc"></span> -->
        </div>
      </section>

    </div>

    <section class="operate-box">
      <div class="operate">
        <div class="address">
          <div class="name">{{$t('wallet.walletAddress')}}</div>
          <div class="input">
            <!-- <label class="placeholder" for="addressLabel" >{{placeholderAddress}}</label> -->
            <input type="text" id="addressLabel" style="font-size: 13px;" v-model="address" @keyup="hidePlhold(0)" :placeholder="$t('wallet.inputWalletAddress')" >
            <em class="icon erweima iconfont icon-erweima"></em>
          </div>
          <div class="line borderBottom"></div>
        </div>

        <div class="amount">
          <div class="name">{{$t('wallet.getCoinCount')}}</div>
          <div class="input">
            <!-- <label class="placeholder" for="amountLabel" >{{placeholderAmount}}</label> -->
            <input type="number" id="amountLabel" v-model="amount" @keyup="hidePlhold(1)" :placeholder="$t('wallet.inputCoinCount')">
            <!-- <van-field placeholder="请输入提币个数" /> -->
            <em class="curreny">{{currency}}</em>
          </div>
          <div class="price">
            <span>{{$t('wallet.getCoinTotalAmount')}}&nbsp;</span><em>583823729304.44</em>
          </div>
          <div class="price fee">
            <span>{{$t('wallet.getCoinCharge')}}&nbsp;</span><em>{{charges}}</em><em>{{currency}}</em>
          </div>
        </div>
      </div>
    </section>

    <section class="btn-box">
      <p class="tips">{{$t('wallet.tips')}}</p>
      <div class="btn" @click="showPopup">{{$t('wallet.getCoinBtn')}}</div>
    </section>

    <van-popup v-model="show" class="content-wraper" position="bottom">
      <div class="content">
        <header class="head">
          <van-icon class="icon" name="arrow-left" @click="hidePopup" />
          <em>{{$t('wallet.inputAssetsPw')}}</em>
        </header>
        <div class="line borderBottom"></div>
        <div class="pass-box">
          <van-password-input
            :value="value"
            @focus="showKeyboard = true"
          />
        </div>
        <div class="forget" >
          <span v-link="'/setting/security/paypw'">{{$t('wallet.forgetPw')}}</span>
        </div>
        <van-number-keyboard
          :show="show"
          @input="onInput"
          @delete="onDelete"
        />
      </div>
    </van-popup>
        <!-- <div class="keyboard"> -->
        <!-- </div> -->
      <!-- <van-number-keyboard
        :show="showKeyboard"
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard = false"
      /> -->
  </div>
</template>
<script>
// import Waves from '@/components/waves/'
import {getWithdrawInfo, withdrawPost} from '@/api/wallet'
const BACPNG = require('../../../assets/img/bac.png')
export default {
  data () {
    return {
      show: false,
      showKeyboard: true,
      value: '',
      bacPng: BACPNG,
      address: '',
      amount: '',
      totalCount: 0,
      totalAmount: 0,
      charges: '',
      currency: 'ETH'
    }
  },
  computed: {
    // placeholderAddress () {
    //   return this.address === '' ? this.$t('wallet.inputWalletAddress') : ''
    // },
    // placeholderAmount () {
    //   return this.amount === '' ? this.$t('wallet.inputWalletAddress') : ''
    // }
  },
  created () {
    this.currency = this.$route.params.currency
    if (!this.currency) {
      this.$router.go(-1)
    }
    this._getWithdrawInfo()
  },
  methods: {
    _getWithdrawInfo () {
      getWithdrawInfo({type: this.currency}).then((res) => {
        if (res.success) {
          let data = res.data
          this.totalCount = data.count || 0
          this.totalAmount = data.totalAmount || 0
          this.charges = data.charges || ''
        }
      })
    },
    onClickLeft () {
      // this.$router.push('/wallet/detail')
      this.$router.go(-1)
    },
    onClickRight () {
      this.$router.push('/record/rechangew')
    },
    hidePlhold (arg) {
      if (arg === 0) {
        this.placeholderAddress = ''
      } else if (arg === 1) {
        this.placeholderAmount = ''
      }
    },
    showPopup () {
      this.show = true
      this.value = ''
    },
    hidePopup () {
      this.show = false
    },
    onInput (key) {
      this.value = (this.value + key).slice(0, 6)
      if (this.value.length === 6) {
        this.raiseCoin()
      }
    },
    raiseCoin (obj) {
      let postData = Object.assign({
        type: this.currency,
        count: this.amount,
        walletAddress: this.address,
        pwd: this.value
      }, obj)
      withdrawPost(postData).then((res) => {
        if (res.success) {
          this.$toast('提币成功')
          this.show = false
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    onDelete () {
      this.value = this.value.slice(0, this.value.length - 1)
    }
  },
  components: {
    // Waves
  }
}
</script>
<style lang="scss" scoped>
.withdraw {
  input {
    border: none;
    outline: none;
    background: transparent;
    line-height: normal;
    &::placeholder {
      opacity: 0.3;
      font-family: $chinese-regular;
      font-size: 13px;
      padding: 0;
      margin: 0;
      text-indent: 0;
    }
  }
  // background-color: #46b0fb;
  background-size: cover;
  // background-color:  $color-primary;
  overflow: auto;
  .bg-wraper{
    position: relative;
    // background-image: linear-gradient(-180deg, #2B61FF 0%, #1A8BFD 100%);
  }
  .header {
    color: #fff;
    font-size: 17px;
    font-family: $chinese-regular;
    // background-color: #2B61FF;
    // background-image: linear-gradient(-180deg, #1A8BFD 0%, #2B61FF 100%);
  }
  .assets {
    position: relative;
    min-height: 1.8rem;
    width: 100%;
    padding: 0 0.6rem;
    color: #fff;
    text-align: left;
    margin-bottom: 0.22rem;
    z-index: 1;
    .name {
      font-family: $chinese-regular;
      font-size: 13px;
      letter-spacing: 0.29px;
      // height: 0.38rem;
      // line-height: 0.38rem;
      padding: 0.15rem 0;
      position: relative;
      z-index: 1;
    }
    .amount {
      position: relative;
      z-index: 1;
      font-family: $number-bold;
      font-size: 44px;
      line-height: 0.5rem;
      // height: 1.02rem;
      // line-height: 1.02rem;
      // padding: 0.2rem 0;
      em {
        font-size: 24px;
        font-family: $chinese-medium;
      }
    }
    .img-box {
      position: absolute;
      width: 1.24rem;
      height: 1.24rem;
      border-radius: 50%;
      background: $w-fz-color2;
      top: 0.3rem;
      right: 0.56rem;
      text-align: center;
      line-height: 1.24rem;
      // .icon{
      //   font-size: 80px;
      //   color: $w-fz-color2;
      // }
    }
  }
  .operate-box {
    width: 100%;
    box-sizing: border-box;
    padding: 0.24rem;
    margin-bottom: 2rem;
    position: relative;
    z-index: 2;
    .operate {
      height: 5.2rem;
      background: #fff;
      border-radius: $radius;
      padding: 0.5rem 0.3rem;
      text-align: left;
      .address {
        height: 1.3rem;
        margin-bottom: 0.48rem;
        .name {
          height: 0.4rem;
          line-height: 0.4rem;
          font-family: $chinese-regular;
          font-size: 20px;
          margin-bottom: 0.1rem;
        }
        .input {
          height: 0.8rem;
          line-height: 0.8rem;
          width: 100%;
          margin-bottom: 0.15rem;
          position: relative;
          input {
            width: 80%;
            font-size: 28px;
            line-height: 30px;
            align-self: flex-end;
            padding: 0;
            &::placeholder{
              line-height: 0.66rem;
            }
          }
          // .placeholder{
          //   position: absolute;
          //   left: 0;
          //   top: 0.08rem;
          //   z-index: 0;
          //   color: $w-text-color;
          //   opacity: 0.3;
          //   font-size: 13px;
          //   font-family: $chinese-regular;
          // }
          .erweima {
            width: 0.48rem;
            font-size: 26px;
            color: #06115C;
            float: right;
            // font-weight: bold;
          }
        }
        .line {
          width: 100%;
          // border-bottom: 1px solid #e1e1e1;
        }
      }
      .amount {
        .name {
          height: 0.3rem;
          line-height: 0.3rem;
          font-size: 15px;
          font-family: $chinese-regular;
          letter-spacing: 0.64px;
          margin-bottom: 0.24rem;
        }
        .input {
          position: relative;
          height: 0.66rem;
          line-height: 0.66rem;
          margin-bottom: 0.3rem;
          input {
            width: 80%;
            font-size: 28px;
            font-family: $number-bold;
            padding: 0;
            &::placeholder{
              line-height: 0.7rem;
            }
          }
          // .placeholder{
          //   position: absolute;
          //   left: 0;
          //   top: 0.1rem;
          //   z-index: 0;
          //   color: $w-text-color;
          //   opacity: 0.3;
          //   font-size: 13px;
          //   font-family: $chinese-regular;
          // }
          .curreny {
            opacity: 0.3;
            font-family: $chinese-medium;
            font-size: 18px;
            line-height: 0.95rem;
            float: right;
            margin-top: -0.1rem;
          }
        }
      }
      .price {
        opacity: 0.3;
        font-family: $chinese-regular;
        font-size: 13px;
        height: 0.5rem;
        border-bottom: 1px solid $w-split-line;
        margin-bottom: 0.1rem;
      }
      .fee{
        border: none;
      }
    }
  }

  .btn-box{
    // position: fixed;
    // left: 0;
    // bottom: 0.6rem;
    // z-index: 30;
    .tips{
      width: 100%;
      // padding: 0 0.6rem;
      // box-sizing: border-box;
      text-align: center;
      font-size: 12px;
      color: #fff;
      margin-bottom: 0.14rem;
    }
    width: 100%;
    box-sizing: border-box;
    padding: 0 0.6rem;
    margin-bottom: 0.6rem;
    .btn{
      height: 0.88rem;
      line-height: 0.88rem;
      width: 100%;
      background: #fff;
      font-size: 15px;
      border-radius: 1rem;
      text-align: center;
    }
  }

  .content-wraper{
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    padding: 0 0.24rem;
    background-color: transparent;
    // min-height: 62%;
    .content{
      // min-height: 3.62rem;
      width: 100%;
      background-color: #fff;
      border-radius: 6px;
      .head{
        text-align: center;
        padding: 0.3rem;
        box-sizing: border-box;
        height: 1.1rem;
        line-height: 0.55rem;
        opacity: 1;
        font-size: 18px;
        display: block;
        // margin-bottom: 0.3rem;
        .icon{
          float: left;
          font-size: 14px;
          margin-top: 0.14rem;
        }
      }
      .line{
        width: 100%;
        // border-bottom: 1px solid #E1E1E1;
        margin-bottom: 0.5rem;
      }
      // .pass-box{
      //   // margin-bottom: 0.3rem;
      // }
      .forget{
        text-align: right;
        // margin-top: -0.3rem;
        padding: 0.3rem;
        box-sizing: border-box;
        font-size: 15px;
        color: $color-primary;
      }
      .keyboard{
        padding: 0.3rem;
      }
    }
  }
}
</style>
<style lang="scss">
.withdraw {
  .van-nav-bar {
    // background-color: #46b0fb;
    // background-color:#2B61FF;
    // background-image: linear-gradient(-180deg, #1A8BFD 0%, #2B61FF 100%);
    background-color: transparent;
  }
  .van-nav-bar__left,
  .van-nav-bar__right {
    font-size: 15px;
  }
  .van-nav-bar__title{
    font-size: 17px;
  }
  .van-nav-bar .van-icon,
  .van-nav-bar__text {
    color: #fff;
  }
  .van-hairline--bottom::after {
    border: none;
  }

  .van-modal{
    background-color: #001A46;
    opacity: 0.6;
  }
  .van-number-keyboard{
    // margin-top: 2rem;
    position: relative;
  }
}
</style>
