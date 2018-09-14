<template>
  <w-back-layout
    class="transferDetail"
    :left-text="$t('record.monthlyBill')">
    <div class="content">
        <section class="timeHeader">
            <div class="title-month">
                <span>{{ $t('record.dateFormat', {year: 2018, month: 7 }) }}</span>
                <!-- <i class="iconfont icon-triangle-bottom" @click="show = true"></i> -->
            </div>
            <div class="title-desc">
                <span>{{ $t('record.expend') }}：{{ monthlyAmount.toFixed(2) }}</span>
            </div>
        </section>
        <section class="assetsBg">
            <div class="assets-title borderBottom">
                <span class="assets-expend">{{ $t('record.expend') }}</span>
                <span class="assets-money">{{ monthlyAmount.toFixed(2) }}</span>
            </div>
            <div class="pie">
                <div class="echarts" ref="echarts"></div>
            </div>
            <div class="assets">
                <h3 class="title">{{ $t('record.capitalComposition') }}</h3>
                <div class="parts">
                    <ul class="lists">
                        <li class="list" v-for="(item ,index) in list" :key="index">
                            <span class="dot"></span>
                            <span class="type">{{ item.type }}</span>
                            <span class="dashed"></span>
                            <span class="amount">{{ item.amount.toFixed(2) }}</span>
                            <div class="number">{{ item.number.toFixed(6) }}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
  </w-back-layout>
</template>

<script>
import echarts from 'echarts'
import { getMonthlyBill } from '@/api/record'
export default {
  data () {
    return {
      loading: false,
      finished: false,
      list: [{
        type: 'BTC',
        amount: 0,
        number: 0}],
      monthlyAmount: 0,
      colorList: ['#2DB2FE', '#2B61FF', '#EEB328', '#F79954', '#00A294', '#E95E45', '#20B6AB', '#EF7340'],
      originalData: [{
        value: 100,
        name: '0.00'
      }]
    }
  },
  created () {
    this._getMonthlyBill()
  },
  methods: {
    circle () {
      const dom = this.$refs.echarts
      const myChart = echarts.init(dom)
      let that = this
      echarts.util.each(this.originalData, function (item, index) {
        item.itemStyle = {
          normal: {
            color: that.colorList[index]
          }
        }
      })
      const option = {
        series: [{
          hoverAnimation: false, // 设置饼图默认的展开样式
          radius: ['30%', '60%'],
          name: 'pie',
          type: 'pie',
          //   selectedMode: 'single',
          //   selectedOffset: 16, // 选中是扇区偏移量
          clockwise: true,
          startAngle: 90,
          labelLine: {
            show: true
          },
          label: {
            normal: {
              textStyle: {
                fontFamily: 'PingFangSC-Medium',
                fontSize: '11',
                color: 'rgba(6,17,92, 0.3)'
              }
            }
          },
          data: this.originalData
        }]
      }
      myChart.setOption(option)
    },
    _getMonthlyBill () {
      console.log(this.$route.params)
      getMonthlyBill({date: '2018-7'}).then((res) => {
        if (res.success) {
          this.list = res.data.monthlyBill
          this.monthlyAmount = res.data.monthlyAmount
          const oType = []
          this.originalData = []
          this.list.forEach((item) => {
            if (oType.indexOf(item.type) === -1) {
              oType.push(item.type)
              this.originalData.push({
                name: item.type,
                value: item.amount
              })
            } else {
              this.originalData.forEach(i => {
                if (i.name === item.type) {
                  i.value += item.amount
                }
              })
            }
          })
          this.originalData.forEach(i => {
            i.name = i.name + ' ' + (i.value / this.monthlyAmount * 100).toFixed(0) + '%'
          })
        }
        this.$nextTick()
          .then(() => {
            this.circle()
          })
      })
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/styles/variable.scss";
.transferDetail {
  .content{
    margin-top: -24px;
    padding-bottom: $distance-x2;
  }
  .timeHeader{
    padding: 0.4rem 0 2.4rem 0.4rem;
    background: $color-primary;
    margin-left: -$distance-x2;
    margin-right: -$distance-x2;
  }
  .title-month{
    font-family: $chinese-medium;
    font-size: 20px;
    color: #fff;
    letter-spacing: 0;
    text-align: left;
    line-height: 0.40rem;
    margin-bottom: 0.2rem;
  }
  .title-desc{
    font-family: $chinese-regular;
    font-size: 13px;
    color: #fff;
    letter-spacing: 0;
    line-height: 0.26rem;
    text-align: left;
  }
  .assetsBg{
    background: #FFFFFF;
    border-radius: 0.12rem;
    margin-top: -1.9rem;
  }
  .assets-title{
    height: 1.3rem;
    padding: 0.5rem 0.4rem 0.4rem 0.3rem;
  }
  .assets-title:before{
    display: inline-block;
    content: " ";
    background: $color-primary;
    width: 10px;
    height: 10px;
    position: relative;
    border-radius: 50%;
    left: -0.38rem;
    top: 0.54rem;
    z-index: 2;
  }
  .assets-money:after{
    display: inline-block;
    content: " ";
    background: $color-primary;
    width: 10px;
    height: 10px;
    position: relative;
    border-radius: 50%;
    top: 0.515rem;
    right: -0.485rem;
    z-index: 2;
  }
  .assets-expend{
    font-size: 20px;
    color: $w-text-color;
    letter-spacing: 0;
    text-align: left;
    font-family: $chinese-medium;
    line-height: 0.40rem;
  }
  .assets-money{
    font-size: 24px;
    color: $w-text-color;
    letter-spacing: 0;
    text-align: right;
    line-height: 0.40rem;
    float: right;
    font-family: $number-bold;
  }
  .pie{
    height: 5.55rem;
    .echarts{
        height: 5.55rem;
    }
  }
  .assets{
      .title{
        padding-left: 0.3rem;
        font-size: 20px;
        color: $w-text-color;
        letter-spacing: 0;
        text-align: left;
      }
      .lists .list{
        margin: 0.4rem 0;
        .dot{
            display: inline-block;
            width: 0.2rem;
            height: 0.2rem;
            border-radius: 50%;
            background: $w-fz-color1;
            margin-left: 0.2rem;
            margin-right: 0.16rem;
        }
        .type{
            opacity: 0.6;
            font-size: 15px;
            color: $w-text-color;
            font-family:$chinese-medium;
            letter-spacing: 0.0167rem;
            text-align: left;
        }
        .amount{
            font-size: 18px;
            color: $W-pie-color5;
            letter-spacing: 0;
            text-align: right;
            // line-height: 0.36rem;
            float: right;
            margin-right: 0.2rem;
            font-family: $number-bold;
        }
        .number{
            opacity: 0.6;
            font-family: DINAlternate-Bold;
            font-size: 15px;
            color: $w-text-color;
            letter-spacing: 0;
            text-align: right;
            line-height: 0.30rem;
            margin-right: 0.2rem;
            width: 100%;
            float: right;
            margin-bottom: 0.4rem;
            height: 15px;
        }
        .dashed{
            // width: 3rem;
            vertical-align: middle;
            display: inline-flex;
            margin-bottom: 4px;
            border-bottom: 1px dashed #E1E1E1;
            position: relative;
            left: 50%;
            transform: translateX(-3rem);
            width: 3rem;
        }
      }
      .lists .list:last-child{
        padding-bottom: $distance-x2;
        margin-bottom: 0px;
      }
  }
}
</style>
