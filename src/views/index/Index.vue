<template>
   <div class="index">
     <!-- <div class="bg-wraper"> -->
      <section class="header fixed" ref="header">
        <div class="portrait">
          <span class="icon iconfont icon-person" @click="showAsideHandle"></span>
        </div>
        <div class="operate" ref="operate">
          <span class="icon iconfont icon-saoyisao-xiao" @click="scan"></span>
          <span class="icon iconfont icon-fukuanma-xiao" v-link="'/qrcode/pay'"></span>
          <span class="icon iconfont icon-shoukuanma-xiao" v-link="'/qrcode/receive'"></span>
        </div>
      </section>
      <section class="all-assets" ref="allAssets">
        <div  :style="`width: 100%;height: calc(100% - 0.9rem);position:absolute;z-index:0;top: 0.9rem;left:0;`"><Waves></Waves></div>
        <div class="name">{{$t('index.totalAmount')}}</div>
        <div class="price">{{totalAssets}}</div>
      </section>
     <!-- </div> -->

     <section class="handle-wraper" ref="handle">
       <div class="handle">
         <div class="item">
          <span class="icon iconfont icon-saoyisao" @click="scan"></span>
          <em class="name">{{$t('index.qrCode')}}</em>
         </div>
         <div class="item" v-link="'/qrcode/pay'">
          <span class="icon iconfont icon-fukuanma"></span>
          <em class="name">{{$t('index.payCode')}}</em>
         </div>
         <div class="item" v-link="'/qrcode/receive'">
          <span class="icon iconfont icon-shoukuanma"></span>
          <em class="name">{{$t('index.receivingCode')}}</em>
         </div>
       </div>
     </section>

     <section class="assets">
       <h3 class="title">{{$t('index.moneyCompose')}}</h3>
       <div class="parts">
         <ul class="lists">
           <li class="list" v-for="(item, index ) in piesArr" :key="index">
             <div style="display: flex;overflow: hidden;width: 70%;justify-content: flex-start;height: 100%;align-items: center">
              <span class="dot"></span>
              <span class="currency" >{{item.name}}</span>
             </div>
             <span class="percent">{{item.percent}}</span>
           </li>
           <!-- <li class="list">
             <span class="dot"></span>
             <span class="currency">BTC</span>
             <span class="percent">34%</span>
           </li>
           <li class="list">
             <span class="dot"></span>
             <span class="currency">BTC</span>
             <span class="percent">34%</span>
           </li>
           <li class="list">
             <span class="dot"></span>
             <span class="currency">BTC</span>
             <span class="percent">34%</span>
           </li>
           <li class="list">
             <span class="dot"></span>
             <span class="currency">BTC</span>
             <span class="percent">34%</span>
           </li>
           <li class="list">
             <span class="dot"></span>
             <span class="currency">BTC</span>
             <span class="percent">34%</span>
           </li> -->
         </ul>

         <div class="echarts" ref="echarts">

         </div>
       </div>
     </section>

     <section class="line borderBottom"></section>

     <section class="wallets assets">
       <h3 class="title">{{$t('index.moneyClassify')}}</h3>
       <ul class="wallet-lists">
         <li class="wallet-list borderBottom" v-link="`/wallet/detail/${item.name}`" v-for="(item ,index) in wallets" :key="index">
           <div class="currency">
             <div class="image-box">
               <img src="#" alt="">
               <!-- <span class="icon iconfont icon-btc"></span> -->
             </div>
             <span class="coin">{{item.name}}</span>
           </div>
           <div class="infos">
             <div class="total">
              <em class="price">{{item.value}}</em>
              <em class="name">{{$t('index.assetsTotalAmount')}}</em>
             </div>
             <div class="amount">
               <em class="num ">{{item.count}}</em>
               <em class="name">{{$t('index.amountUnit')}}</em>
             </div>
             <div class="arrow">
               <van-icon name="arrow"></van-icon>
             </div>
           </div>
         </li>
       </ul>
     </section>

     <unlockSetPop :show="showSet"></unlockSetPop>
     <SideBar :showAside="showAside"></SideBar>
     <barCode :showBarcode="showBarcode"></barCode>
   </div>
</template>

<script>
import unlockSetPop from './components/unlockSetPop.vue'
import SideBar from './components/SideBar.vue'
import echarts from 'echarts'
import Waves from '@/components/waves/'
import {getWalletsInfo} from '@/api/wallet'
import barCode from '@/components/barCode/'
const WPIECOLORS = ['#2DB2FE', '#2B61FF', '#EEB328', '#F79954', '#00A294', '#E95E45', '#20B6AB', '#EF7340']

export default {
  components: {
    unlockSetPop,
    SideBar,
    Waves,
    barCode
  },
  data () {
    return {
      showSet: {
        boo: false
      },
      showBarcode: {
        boo: false
      },
      totalAssets: 0,
      wallets: [],
      piesArr: [],
      data: [
        {name: 'LRC', value: 1233, price: 100000},
        {name: 'EOS', value: 1234, price: 100000},
        {name: 'BTM', value: 523, price: 100000},
        {name: 'AE', value: 192, price: 100000},
        {name: 'ETH', value: 125, price: 100000},
        {name: 'BTC', value: 124, price: 100000}
      ],
      height: 0,
      assetsHeight: '20%',
      showAside: {
        boo: false
      }
    }
  },
  created () {
    this._getWalletsInfo()
  },
  mounted () {
    // this.assetsHeight = this.$refs.allAssets.clientHeight
    // + this.$refs.handle.clientHeight - 150    +
    // window.addEventListener('scroll', this.utils.debounce(() => {
    //   console.log('eeee')
    //   this.myScroll()
    // }, 500))
    this.$nextTick()
      .then(() => {
        this.height = this.$refs.allAssets.clientHeight - this.$refs.header.clientHeight
        window.addEventListener('scroll', this.myScroll)
      })
  },
  methods: {
    //  扫一扫点击事件
    scan () {
      this.showBarcode.boo = true
    },
    _getWalletsInfo () {
      this.$loading.show('加载中...')
      getWalletsInfo().then((res) => {
        if (res.success) {
          this.$loading.hide()
          console.log(res.data)
          this.totalAssets = res.data.totalAmount
          let wallets = res.data.wallets || []
          this.wallets = wallets
          if (wallets.length > 8) {
            wallets.forEach((item, index) => {
              // item.name = item.type
              // item.value = item.amount
              if (index >= 7) {
                wallets[7].name = '其他'
                wallets[7].value += item.value
                wallets[7].count += item.count
                wallets[7].percent += item.percent
              }
            })
            this.piesArr = wallets.slice(0, 7)
          } else {
            this.piesArr = wallets
          }
          this.circle()
          console.log(this.piesArr)
        }
      })
    },
    myScroll () {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      let height = this.height
      let operateDom = this.$refs.operate
      if (!operateDom) {
        return
      }
      // console.log(scrollTop, height)
      let percent = (scrollTop - height) / height
      if (percent > 0) {
        if (percent > 1) {
          percent = 1
        }
        this.$refs.operate.style.opacity = percent
      } else {
        this.$refs.operate.style.opacity = 0
      }
    },
    debounce (fn, interval = 300) {
      let timeout = null
      return function () {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          fn.apply(this, arguments)
        }, interval)
      }
    },
    showAsideHandle () {
      this.$set(this.showAside, 'boo', true)
    },
    circle () {
      const dom = this.$refs.echarts
      const myChart = echarts.init(dom)
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        color: WPIECOLORS, // 有顺序
        grid: {
          left: '0%',
          right: '0%',
          bottom: '0%',
          top: '0%',
          containLabel: true
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '14',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.data
          }
        ]
      }
      myChart.setOption(option)
    },
    gotoWallet () {
      this.$router.push('/wallet/detail')
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../assets/styles/variable.scss";
.index {
  // padding-left: 0.4rem;
  .header {
    display: flex;
    width: 100%;
    height: 0.9rem;
    line-height: 0.9rem; //0.9rem
    width: 100%;
    box-sizing: border-box;
    padding: 0 0.4rem;
    background-color: $color-primary;
    color: #fff;
    .portrait {
      width: 0.48rem;
      height: 0.48rem;
      .icon {
        font-size: 26px;
      }
    }
    .operate {
      // display: none;
      opacity: 0;
      flex: 1;
      text-align: right;
      .icon {
        margin-left: 0.5rem;
        font-size: 24px;
      }
    }
  }
  .fixed{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 30;
  }
  .bg-wraper{
    background-image: $linear-gradient;
  }
  .all-assets {
    position: relative;
    // height: 2.7rem;
    line-height: 0.6rem;
    // width: 100%;
    // padding: 0.25rem 0 0 0.4rem;
    // padding-left: 0.4rem;
    // padding-bottom: 1rem;
    // padding-top: 0.9rem;
    padding: 0.9rem 0 1rem 0.4rem;
    // background-color: #1A8BFD;
    background-image: linear-gradient(-180deg, $color-primary 20%, #1A8BFD 100%);
    color: #fff;
    text-align: left;
    .name {
      position: relative;
      z-index: 2;
      font-size: 13px;
      font-family: $chinese-regular;
      // margin-bottom: 0.1rem;
      line-height: 0.4rem;
      margin-top: .2rem;
    }
    .price {
      position: relative;
      z-index: 2;
      // display: inline;
      line-height: 1rem;
      font-family: $number-bold;
      font-size: 40px;
      width: 100%;
      // overflow: hidden;
      word-wrap:break-word;
    }
  }
  .handle-wraper {
    position: relative;
    z-index: 2;
    width: 100%;
    box-sizing: border-box;
    padding: 0 0.3rem;
    margin-top: -0.56rem;
    .handle {
      height: 2.3rem;
      width: 100%;
      background-color: #fff;
      box-shadow: 0 7px 15px 0 rgba(0, 0, 0, 0.04),
        0 15px 30px 0 rgba(38, 67, 81, 0.04);
      border-radius: $radius;
      // margin-bottom: 0.65rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .item {
        flex: 1;
        min-width: 0.99rem;
        height: 1.25rem;
        line-height: 1;
        text-align: center;
        .icon {
          font-size: 34px;
          line-height: 0.82rem;
        }
        .name {
          font-family: $chinese-medium;
          font-size: 13px;
          // color: #040f60;
          color: $w-text-color;
          letter-spacing: 1px;
          display: block;
          word-break: break-all;
          word-wrap:break-word;
        }
      }
    }
  }

  .assets {
    padding: 0.65rem 0 0 0.4rem;
    .title {
      font-family: $chinese-medium;
      font-size: 20px;
      // color: #021d4e;
      color: $w-text-color;
      height: 0.4rem;
      position: relative;
      letter-spacing: 1px;
      padding-left: 0.22rem;
      font-weight: 500;
      margin: 0 0 0.55rem 0;
      &::before {
        content: "";
        display: block;
        position: absolute;
        width: 0.07rem;
        height: 0.4rem;
        left: 0;
        top: 0.02rem;
        z-index: 1;
        background-color: $w-text-color;
      }
    }
    .parts {
      display: flex;
      .lists {
        // max-width: 4.9rem;
        // width: 4.6rem;
        display: flex;
        width: 65%;
        flex-direction: column;
        height: 2rem;
        flex-wrap: wrap;
        padding-top: 0.1rem;
        box-sizing: border-box;
        .list {
          width: 49%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          // flex-wrap: nowrap;
          line-height: 0.44rem;
          height: 0.44rem;
          margin-right: 1%;
          span {
            display: block;
            opacity: 0.6;
            font-family: $chinese-medium;
            font-size: 12px;
            color: $w-text-color;
            letter-spacing: 1.22px;
          }
          .dot {
            width: 0.2rem;
            height: 0.2rem;
            border-radius: 50%;
            background-color: $w-fz-color1;
            margin-right: 0.16rem;
          }
          .percent{
            width: 30%;
            padding-right: 5% ;
            overflow: hidden;
          }
          .currency {
            // margin-right: 0.16rem;
            word-break: break-all;
            word-wrap:break-word;
            flex: 1;
            height: 100%;
            overflow: hidden;
          }
          &:nth-of-type(1) .dot{
            background-color: #2DB2FE
          }
          &:nth-of-type(2) .dot{
            // background-color: #2B61FF
            background-color: $W-pie-color8
          }
          &:nth-of-type(3) .dot{
            // background-color: #EEB328
            background-color: $W-pie-color4
          }
          &:nth-of-type(4) .dot{
            // background-color: #F79954
            background-color: $W-pie-color3
          }
          &:nth-of-type(5) .dot{
            // background-color: #00A294
            background-color: $W-pie-color5
          }
          &:nth-of-type(6) .dot{
            // background-color: #E95E45
            background-color: $W-pie-color2
          }
          &:nth-of-type(7) .dot{
            // background-color: #20B6AB
            background-color: $W-pie-color6
          }
          &:nth-of-type(8) .dot{
            // background-color: #EF7340
            background-color: $W-pie-color1
          }
        }
      }
      .echarts {
        width: 35%;
        // width: 3rem;
        height: 3rem;
        margin-top: -0.5rem;
      }
    }
  }

  .line {
    // padding: 0.1rem;
    // border-bottom: 1px solid $w-split-line;
    width: 100%;
    // margin-bottom: 0.5rem;
  }

  .wallets {
    .title{
      margin-bottom: 0.2rem;
    }
    .wallet-lists {
      padding-bottom: 0.25rem;
      .wallet-list {
        padding: 0.4rem 0;
        .currency {
          display: flex;
          height: 0.4rem;
          line-height: 0.4rem;
          margin-bottom: 0.3rem;
          .image-box {
            width: 0.4rem;
            height: 0.4rem;
            border-radius: 50%;
            overflow: hidden;
            margin-right: 0.12rem;
            background: $w-fz-color2;
            .icon{
              color: $w-fz-color2;
              font-size: 24px;
            }
          }
          .coin {
            font-family: $number-bold;
            font-size: 15px;
          }
        }
        .infos {
          display: flex;
          .name {
            opacity: 0.3;
            font-family: $chinese-medium;
            font-size: 12px;
            color: $w-text-color;
          }
          .total {
            width: 50%;
            .price {
              font-family: $number-bold;
              font-size: 24px;
              color: $w-fz-color2;
              display: block;
              line-height: 0.62rem;
            }
          }
          .amount {
            width: 30%;
            .num {
              line-height: 0.6rem;
              display: block;
              font-family: $number-bold;
              font-size: 15px;
            }
          }
          .arrow {
            flex: 1;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-right: 0.35rem;
          }
        }
      }
    }
  }
}
</style>
