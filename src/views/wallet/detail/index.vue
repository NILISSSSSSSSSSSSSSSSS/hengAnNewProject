<template>
  <div class="wallet-detail" :style="`background-image: url(${bacPng})`">
    <section class="header">
      <van-nav-bar
        :left-text="$t('wallet.wallet',{currency: walletName})"
        left-arrow
        @click-left="onClickLeft"
      >
        <span class="erweima iconfont icon-xiaoerweima" slot="right" @click="showQRcode"></span>
      </van-nav-bar>
    </section>

    <section class="infos-wraper">
      <div class="infos">
        <div class="currency">
          <div class="img-box">
            <img class="img" src="#" />
          </div>
          <span class="currency-name">{{walletName}}</span>
        </div>
        <div class="line borderBottom"></div>
        <div class="item total">
          <span class="name">{{$t('wallet.totalAmount')}}</span>
          <span class="val">{{totalAmount}}</span>
        </div>
        <div class="item amount">
          <span class="name">{{$t('wallet.amount')}}</span>
          <span class="val">{{totalCount}}</span>
        </div>
      </div>
    </section>

    <section class="charts">
      <div class="echarts" ref="myCharts" :style="{width:'100%',height: '4.54rem'}"></div>
    </section>

    <section class="most">
      <div class="list">
        <span class="name">{{$t('wallet.hightest')}}</span>
        <span class="val">{{hightest}}</span>
      </div>
      <div class="list">
        <span class="name">{{$t('wallet.lowest')}}</span>
        <span class="val">{{lowest}}</span>
      </div>
    </section>

    <section class="btn-box">
      <div class="btn pay" v-link="'/qrcode/pay'">{{$t('wallet.pay')}}</div>
      <div class="btn withdraw" v-link="`/wallet/withdraw/${currency}`" >{{$t('wallet.mentionMoney')}}</div>
    </section>

    <van-popup v-model="show" class="content-wraper"  >
      <div class="content" id="saveQrImg">
        <header class="head">
          <van-icon class="icon" name="arrow-left" @click="cancenPopup" ref="arrow" />
          <em>{{$t('wallet.walletAddress')}}</em>
        </header>
        <div class="line borderBottom"></div>
        <div class="pass-box">
          <div class="qrcode">
            <Qrcode :value="walletAddress" size="180" level="H"  style="width: 100%;height: 100%;" />
          </div>
        </div>
        <div class="forget" >
          <span>{{walletAddress}}</span>
        </div>
        <!-- <div class="borderBottom"></div>
        <div class="saveQr" @click="saveImg">
          <span>{{$t('wallet.saveQrImg')}}</span>
        </div> -->
      </div>
    </van-popup>
  </div>
</template>
<script>
import echarts from 'echarts'
import {getWalletDetail} from '@/api/wallet'
import domtoimage from 'dom-to-image'
// import QrcodeVue from 'qrcode.vue';
const BACPNG = require('../../../assets/img/bac.png')
export default {
  data () {
    return {
      show: false,
      bacPng: BACPNG,
      totalCount: 0,
      totalAmount: 0,
      hightest: 0,
      lowest: 0,
      trendChart: [],
      walletName: '',
      walletAddress: '',
      currency: 'ETH'
    }
  },
  mounted () {
    // this.drawLine()
  },
  created () {
    // this.currency = this.$route.params.currency
    // if (!this.currency) {
    //   this.$router.push('/')
    // }
    console.log(this.$route)
    this._getWalletDetail()
  },
  methods: {
    _getWalletDetail () {
      getWalletDetail({type: this.currency}).then((res) => {
        if (res.success) {
          console.log(res.data)
          let data = res.data
          this.totalCount = data.count || 0
          this.totalAmount = data.totalAmount || 0
          this.hightest = data.hightest || 0
          this.lowest = data.lowest || 0
          this.trendChart = data.trendChart || []
          this.walletAddress = data.walletAddress || ''
          this.walletName = data.type || ''
          this.drawLine()
        }
      })
    },
    saveImg () {
      // const that = this
      // domtoimage.toBlob(document.getElementById('saveQrImg'))
      //   .then(function (blob) {
      //     window.saveAs(blob, 'qrcode.png')
      //   })
      domtoimage.toJpeg(document.getElementById('saveQrImg'), {
        // filter: () => {
        //   return that.$refs.arrow
        // },
        quality: 0.95
        // bgcolor: '#fff'
      })
        .then(function (dataUrl) {
          var link = document.createElement('a')
          link.download = 'my-image-name.jpeg'
          link.href = dataUrl
          link.click()
        })
    },
    onClickLeft () {
      this.$router.push('/')
    },
    showQRcode () {
      this.show = true
    },
    cancenPopup () {
      this.show = false
    },
    drawLine () {
      let time = new Date()
      let hour = time.getHours()
      // console.log(hour)
      let xData = []
      for (let i = 8; i >= 0; i--) {
        let tmp = hour - i
        if (tmp > 12) {
          tmp = tmp - 12
          xData.push(tmp + 'AM')
        } else if (tmp < 0) {
          tmp = tmp + 12
          xData.push(tmp + 'AM')
        } else {
          xData.push(tmp + 'PM')
        }
      }
      console.log(xData)
      const yData = ['820', '932', '901', '934', '1290', '1330', '1220', '934', '1290', '1330']
      // const yData = this.trendChart
      let option = {
        grid: {
          left: '4%',
          right: '0%',
          bottom: '3%',
          top: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          scale: true,
          data: xData,
          axisLine: {
            lineStyle: {
              color: '#fff',
              opacity: 0.5
            },
            symbol: 'none'
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false,
            interval: 0
          },
          axisLabel: {
            interval: 0
          }
          // minInterval: 1
          // axisPointer: {
          //   snap: true,
          //   lineStyle: {
          //     color: '#fff',
          //     width: 2,
          //     opacity: 0.5
          //   },
          //   label: {
          //     show: true
          //   },
          //   handle: {
          //     // show: true
          //   }
          // },
        },
        yAxis: {
          type: 'value',
          axisLabel: false,
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#fff',
              opacity: 0.5
            },
            symbol: 'none'
          },
          splitLine: {
            show: false
          }
        },
        color: '#fff',
        // tooltip: {
        //   show: true,
        //   trigger: 'axis',
        //   axisPointer: {
        //     animation: false,
        //     type: 'line',
        //     label: {
        //       backgroundColor: '#6a7985'
        //     }
        //   }
        // },
        series: [
          {
            data: yData,
            type: 'line',
            smooth: true,
            symbol: 'none',
            markPoint: {
              symbol: 'circle',
              symbolSize: 10,
              label: {
                show: true,
                position: 'top',
                distance: 5,
                borderWidth: 2
                // formatter: '最高最低'
              },
              data: [
                {
                  type: 'max',
                  itemStyle: {
                    borderType: 'solid',
                    borderWidth: 1
                  },
                  label: {
                    show: true,
                    formatter: '$1330'
                  }
                },
                {
                  type: 'min',
                  formatter: '最高',
                  label: {
                    show: true,
                    formatter: `$${yData[0]}`
                  }
                }
              ]
            },
            markLine: {
              label: {
                show: false
              },
              symbol: 'none',
              lineStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: '#fff' // 0% 处的颜色
                  }, {
                    offset: 1, color: 'rgba(255,255,255,0)' // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                },
                type: 'solid'
              },
              data: [
                [
                  {
                    coord: [xData[5], 0]
                  },
                  {
                    // coord: [xData[5], 1290]
                    type: 'max'
                  }
                ],
                [
                  {
                    coord: [xData[0], 0]
                  },
                  {
                    // coord: [xData[0], 820]
                    type: 'min'
                  }
                ]
              ]
            }
          }
        ]
      }
      let myCharts = echarts.init(this.$refs.myCharts)
      myCharts.setOption(option)
    }
  },
  components: {
    // QrcodeVue
  }
}
</script>
<style lang="scss" scoped>
.wallet-detail {
  // background-color: #46b0fb;
  background-color: $color-primary;
  background-size: cover;
  overflow: auto;
  .header {
    background-color: $color-primary;
    color: #fff;
    padding-bottom: 0.3rem;
    .erweima{
      font-size: 26px;
    }
  }
  .infos-wraper{
    width: 100%;
    padding: 0.24rem;
    box-sizing: border-box;
  }
  .infos {
    // width: 7.03rem;
    width: 100%;
    height: 3.2rem;
    background: #fff;
    margin: 0 auto;
    border-radius: $radius;
    padding: 0.44rem 0.3rem 0 0.3rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.25rem;
    .currency {
      height: 0.8rem;
      line-height: 0.8rem;
      margin-bottom: 0.2rem;
      display: flex;
      .img-box{
        width: 0.8rem;
        height: 0.8rem;
        margin-right: 0.2rem;
        border-radius: 50%;
        background-color: #ccc;
      }
      .currency-name{
        font-size: 20px;
      }
    }
    .line {
      // height: 1px;
      // background-color: #e1e1e1;
      margin-bottom: 0.3rem;
    }
    .item{
      display: flex;
      text-align: left;
      height: 0.48rem;
      line-height: 0.48rem;
      margin-bottom: 0.1rem;
      color: $w-text-color;
      .name{
        width: 1.36rem;
        opacity: 0.6;
        font-size: 12px;
        margin-right: 0.25rem;
      }
      .val{
        flex: 1;
        // font-weight: bold;
        // font-weight: 500;
        font-family: $number-bold;
      }
    }
    .total{
      .val{
        font-size: 24px;
      }
    }
    .amount{
      .val{
        font-size: 15px;
      }
    }
  }
  .charts{
    width: 100%;
    height: 4.54rem;
    margin-bottom: 0.4rem;
  }
  .most{
    // display: flex;
    margin: 0 0.24rem;
    .list{
      display: flex;
      margin-bottom: 0.2rem;
      font-size: 15px;
      color: #fff;
      .name{
        width: 1.4rem;
        margin-right: 0.3rem;
      }
    }
  }

  .btn-box{
    width: 100%;
    display: flex;
    // justify-content: space-around;
    padding: 0.2rem 0.24rem;
    justify-content: center;
    // padding-bottom: 0.1rem;
    .btn{
      width: 3rem;
      height: 0.88rem;
      line-height: 0.88rem;
      border-radius: 1rem;
      text-align: center;
      font-size: 15px;
      color: $w-text-color;
      margin: 0 0.25rem;
    }
    .pay{
      background-color: #fff;
    }
    .withdraw{
      color: #fff;
      background-color: $w-fz-color1;
    }
  }

  .content-wraper{
    width: 100%;
    box-sizing: border-box;
    background-color: transparent;
    padding: 0 0.24rem;
    z-index: 9999999 !important;
    .content{
      min-height: 3.62rem;
      padding-bottom: 0.2rem;
      width: 100%;
      background-color: #fff;
      border-radius: $radius;
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
      .pass-box{
        .qrcode{
          width: 180px;
          height: 180px;
          // background: #ccc;
          margin: auto;
          margin-bottom: 0.5rem;
        }
      }
      .forget{
        // text-align: right;
        // margin-top: -0.3rem;
        margin: 0 0.3rem;
        margin-bottom: 0.6rem;
        box-sizing: border-box;
        background-color: #F0F1F2;
        border-radius: $radius;
        padding: 0.2rem;
        span{
          opacity: 0.6;
          font-family: $chinese-regular;
          font-size: 12px;
          color: $w-text-color;
          word-break: break-all;
          line-height: 0;
        }
      }
      .saveQr{
        font-family: $chinese-regular;
        font-size: 15px;
        // color: #389FFB;
        color: $color-primary;
        letter-spacing: 0;
        text-align: center;
        line-height: 0.88rem;
        height: 0.78rem;
      }
    }
  }
}
</style>
<style lang="scss">
.wallet-detail {
  .van-nav-bar {
    background-color: $color-primary;
    // background-image: linear-gradient(-180deg, #1A8BFD 0%, #2B61FF 100%);
  }
  .van-nav-bar__left, .van-nav-bar__right{
    font-size: 17px;
    display: flex;
    align-items: center;
  }
  .van-nav-bar .van-icon,.van-nav-bar__text{
    color: #fff;
    font-size: 17px;
  }
  .van-hairline--bottom::after{
    border:none;
  }
}
</style>
