<template>
  <backLayout image backgroundColor="transparent" :leftText="$t('pay.pay')" class="payPage">
    <div class='form'>
      <div class='user'>
        <img :src="userInfo.avatar" alt="" class="avatar">
        <p class="name">{{userInfo.username}}</p>
      </div>
      <p class="amount">{{$t('pay.payCount')}}</p>
      <div class="inputBox borderBottom">
        <van-field class="inputAmount" type="number" v-model="count"></van-field>
        <span class="currency">{{currency.name}}</span>
      </div>
      <van-field v-model="remark" :placeholder="$t('pay.remarkNotice')" style="font-size: 13px;padding: .2rem 0"></van-field>
    </div>
    <div class="walletInfo">
      <cell @click.native="selectShowHandle" class="cell">
        <span slot="left">{{$t('pay.selectWallet')}}</span>
        <div slot="right" class="cell-right"><i :class="currency.icon"></i><span>{{currency.name}}</span><i class="iconfont icon-gengduo" style="color: #E1E1E1;margin-left: 10px;"></i></div>
      </cell>
    </div>
    <div class="subBtn"><van-button size="large" @click="subHandle">{{$t('pay.confirm')}}</van-button></div>
    <select-coin @getCurrency="getCurrency" :selectShow="selectShow" @defaultCurrency="defaultCurrency"></select-coin>
    <!-- <van-popup v-model="selectShow" class="selectPop">
      <van-nav-bar
        title="选择付款钱包"
        left-arrow
        @click-left="onClickLeft"
      />
      <van-cell-group>
        <van-cell v-for="(item, index) in currencyList" :key="index" :title="item.name" @click="selectCurHandle(index, item)" :class="{selectCur: index === selectIndex}">
          <i :class="item.icon" slot="icon" style="color: #FF8500;font-size: 30px"></i>
          <i class="iconfont icon-check" v-show="index === selectIndex"></i>
        </van-cell>
      </van-cell-group>
    </van-popup> -->
    <!-- NumberKeyboard -->
    <van-popup v-model="pwShow" class="pwInput" position="bottom">
      <van-nav-bar
        :title="$t('pay.pwd')"
        left-arrow
        @click-left="pwShow = false"
       />
      <van-password-input
        :value="password"
        @focus="showKeyboard = true"
      />
      <p class="forget">{{$t('user.forgetPwd')}}</p>
      <!-- NumberKeyboard -->
      <van-number-keyboard
        :show="pwShow"
        @input="onInput"
        @delete="onDelete"
      />
    </van-popup>
  </backLayout>
</template>

<script>
import backLayout from '@/components/backLayout/'
import selectCoin from '@/components/select/'
import cell from '@/components/cell/'
import {getTransferInfo, submitTransfer} from '@/api/transfer'
export default {
  components: {
    backLayout,
    selectCoin,
    cell
  },
  data () {
    return {
      remark: '',
      count: '',
      userInfo: {
        avatar: '',
        username: ''
      },
      selectShow: {
        boo: false
      },
      currency: {},
      selectIndex: 0,
      pwShow: false,
      password: '',
      showKeyboard: true
    }
  },
  methods: {
    //  从相册中选择图片扫码
    scanViaPic () {
      let codePic = require('@/assets/img/qqrr.png')
      window.qrcode.decode(codePic)
      window.qrcode.callback = function (imgMsg) {
        console.log(imgMsg)
      }
    },
    //  获取默认货币
    defaultCurrency (item) {
      this.currency = item
    },
    //  选择货币回调
    getCurrency (item) {
      this.currency = item
    },
    //  进入输入密码
    onInput (key) {
      this.password = (this.password + key).slice(0, 6)
      this.password.length === 6 && this._submitTransfer()
    },
    //  提交转账
    _submitTransfer () {
      let data = {
        currency: this.currency.name,
        count: this.count,
        remark: this.remark,
        password: this.password
      }
      submitTransfer(data).then(data => {
        data.success && this.$router.push({path: '/pay/result', query: {count: this.count, currency: this.currency.name}})
      })
    },
    onDelete () {
      this.password = this.password.slice(0, this.password.length - 1)
    },
    subHandle () {
      this.pwShow = true
    },
    selectShowHandle () {
      this.selectShow.boo = true
    },
    onClickLeft () {
      this.selectShow.boo = false
    },
    _getTransferInfo () {
      getTransferInfo().then((data) => {
        this.userInfo = data.data.userInfo
        // this.currency = this.walletList[0]
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
  },
  created () {
    this._getTransferInfo()
    this.scanViaPic()
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/variable.scss';
.form{
  background-color: #fff;
  border-radius: $radius;
  padding: 0.3rem;
  .user{
    display: flex;
    flex-direction: column;
    align-items: center;
    .avatar{
      width: 1.3rem;
      height: 1.3rem;
      border-radius: 50%;
    }
    .name{
      margin: .3rem 0;
      color: $w-text-color;
      font-weight: 600;
      letter-spacing: 1px;
    }
  }
  .amount{
    color: $w-text-color;
    text-align: left;
  }
  .inputAmount{
    padding: .1rem 0;
    color: $w-text-color;
    font-weight: 600;
    .van-cell__value{
      font-size: 18px;
    }
    ::after{
      left: 0px!important;
    }
  }

}
.walletInfo{
  padding: .1rem;
  margin-top: .2rem;
  background-color: #fff;
  border-radius: $radius;
  .cell{
      display: flex;
      justify-content: space-between;
      padding: .25rem .18rem .25rem .3rem;
      color: $font-color-blue;
      align-items: center;
      font-size: 14px;
      border-bottom-left-radius: $radius $radius;
      border-bottom-right-radius: $radius $radius;
      .cell-right{
        display: flex;
        align-items: center;
        i{
          color: $w-fz-color1;
          font-size: 18px;
        }
      }
      &:after{
        height: 0;
      }
    }
}
.selectPop{
  width: 93.6%;
  height: 58.2%;
  border-radius: $radius;
  .van-nav-bar{
    background-color: transparent;
  }
  .selectCur{
    background-color: #fff;
  }
}
.subBtn{
  width: 100%;
  position: fixed;
  left: 0;
  top: calc(100% - 70px);
  padding: 0 $distance-x2;
  font-size: 15px;
  .van-button{
    border-radius: 1rem;
    color: $w-text-color;
  }
}
.pwInput{
  width: 93.6%;
  height: 62%;
  border-radius: $radius;
  display: flex;
  flex-direction: column;
  .van-nav-bar{
    background-color: transparent;
  }
  .forget{
    text-align: right;
    margin-right: .14rem;
    font-size: 13px;
    color: $color-primary;
    margin: .3rem;
  }
  .van-number-keyboard{
    z-index: 999999!important;
  }
}
</style>
<style lang="scss">
.payPage{
  background-position: center;
  background-size: contain;
  .layout-header{
    .van-nav-bar{
      background-color: transparent!important;
    }
  }
  .inputBox{
    display: flex;
    align-items: center;
    .inputAmount{
      &:not(:last-child)::after{
          border-bottom-width: 0px;
      }
      .van-cell__value{
        font-size: 28px;
      }
    }
    .currency{
      // align-self: flex-end;
      color: $w-text-color1;
      margin-left: $place-length;
      font-weight: 550;
      font-size: 16px;
    }
  }
  .van-cell:not(:last-child)::after{
    left: 0px;
  }
  .walletInfo{
    .van-cell__title{
      text-align: left;
      color: $w-text-color;
    }
    .van-hairline--top-bottom::after{
      border-width: 0;
    }
  }
  .selectPop{
    .van-nav-bar{
      .van-nav-bar__left{
        i{
          color: rgba(6,17,92,0.6);
        }
      }
    }
    .van-nav-bar__title{
      color: $w-text-color;
      font-size: 16px;
    }
    .van-cell__title{
      text-align: left;
      margin-left: .1rem;
    }
  }
  .pwInput{
    .van-nav-bar__title{
      font-size: 14px;
      color: $w-text-color;
      letter-spacing: 1px;
    }
    i{
      color: rgba(6,17,92,0.6);
    }
  }
}

</style>
