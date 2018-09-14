<template>
  <backLayout image backgroundColor="transparent" :leftText="$t('qrCode.collectMoney')" class="receiveCodePage">
    <div class="card">
      <h5>{{$t('qrCode.myCollectCode')}}</h5>
      <QrcodeVue class="qrcode" :value="qrCode" size="172"></QrcodeVue>
      <p >{{$t('qrCode.savePhoto')}}</p>
    </div>
    <div class="link"><span v-link="'/record/transfer'">{{$t('qrCode.transforRecord')}}</span></div>
  </backLayout>
</template>

<script>
import backLayout from '@/components/backLayout/'
import { getReceiveCode } from '@/api/qrcode'
import QrcodeVue from 'qrcode.vue'
export default {
  components: {
    backLayout,
    QrcodeVue
  },
  data () {
    return {
      qrCode: ''
    }
  },
  methods: {
    _getReceiveCode () {
      getReceiveCode().then(res => {
        this.qrCode = res.data.qrCode
      })
    }
  },
  created () {
    this._getReceiveCode()
  }
}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/variable.scss';
.receiveCodePage{
  .card{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: $radius;
    margin-top: .8rem;
    padding: .6rem 0;
    h5{
      font-size: 17px;
      color: $font-color-blue;
      font-weight: 600;
    }
    .qrcode{
      width: 172px;
      height: 172px;
      margin: .5rem 0 .5rem 0;
    }
    p{
      color: $color-primary;
      padding: .1rem;
    }
  }
  .link{
    width: 100%;
    left: 0;
    text-align: center;
    font-size: 15px;
    position: fixed;
    top: calc(100% - 43px);
    span{
      color: #fff;
      letter-spacing: 0.5px;
    }
  }
}
</style>

<style lang="scss">
.receiveCodePage{
  background-position: center;
  background-size: cover;
  .layout-header{
    .van-nav-bar{
      background-color: transparent!important;
    }
  }
}
</style>
