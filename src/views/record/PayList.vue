<template>
  <w-back-layout
    class="paylist"
    icon="iconfont icon-bingzhuangtu"
    :rightRouter="'/record/transfer/detail'+monthlyDate"
    :left-text="$t('record.payBills')">
    <div class="content">
      <div class="waves" :style="{backgroundImage: 'url('+ require('@/assets/img/bgsmall.png') +')'}">

      </div>
      <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
      >
        <section class="firstHeader" ref="firstHeader">
          <div class="title-month">
            <span>{{ $t('record.dateFormat', {year: 2018, month: monthlyDate }) }}</span>
            <i class="iconfont icon-sanjiaoxing" @click="show = true"></i>
          </div>
          <div class="title-desc">
            <span>{{ $t('record.expend') }}￥761.88</span>
          </div>
        </section>
        <div v-for="(items, i) in list" :key="i"  ref="dateHeader" :data-date="items.index">
          <section class="timeHeader"  v-show="items.index!=1">
            <div class="title-month">
              <span>{{ $t('record.dateFormat', {year: 2018, month: items.index }) }}</span>
            </div>
            <div class="title-desc">
              <span>{{ $t('record.expend') }}￥761.88</span>
            </div>
          </section>
          <section class="cardBg">
            <van-card v-for="(item, j) in items.data" :key="j"  class="borderBottom">
              <div slot="thumb">
                <img src="../../assets/img/btc.png" alt="iconPic">
              </div>
                <div slot="tags" class="van-card__row">
                  <span class="oneL row-left">{{item.title}}</span>
                  <span class="oneR row-right">{{item.money}}</span>
                </div>
                <div slot="tags" class="van-card__row">
                  <span class="twoL row-left">{{item.time}}</span>
                  <span class="twoR row-right">{{item.number}}</span>
                </div>
            </van-card>
          </section>
        </div>
      </van-list>
    </div>
    <van-popup v-model="show" position="bottom" :overlay="true">
      <van-datetime-picker
        v-model="currentDate"
        type="year-month"
        @cancel="show = false"
        @confirm="show = false"
      />
    </van-popup>
  </w-back-layout>
</template>

<script>
import { Popup, DatetimePicker } from 'vant'
import wWaves from '@/components/waves/'
export default {
  components: {
    Popup,
    DatetimePicker,
    wWaves
  },
  data () {
    return {
      show: false,
      list: [
        {
          index: '1',
          data: [{
            index: '1',
            title: 'BTC',
            money: '-￥121233',
            time: '今天12:12',
            number: '-0.0123'
          },
          {
            index: '2',
            title: 'BTC',
            money: '-￥121233',
            time: '今天12:12',
            number: '-0.0123'
          },
          {
            index: '3',
            title: 'BTC',
            money: '-￥121233',
            time: '今天12:12',
            number: '-0.0123'
          }]
        },
        {
          index: '2',
          data: [{
            index: '2',
            title: 'BTC',
            money: '-￥121233',
            time: '今天12:12',
            number: '-0.0123'
          },
          {
            index: '2',
            title: 'BTC',
            money: '-￥121233',
            time: '今天12:12',
            number: '-0.0123'
          },
          {
            index: '2',
            title: 'BTC',
            money: '-￥121233',
            time: '今天12:12',
            number: '-0.0123'
          },
          {
            index: '2',
            title: 'BTC',
            money: '-￥121233',
            time: '今天12:12',
            number: '-0.0123'
          },
          {
            index: '2',
            title: 'BTC',
            money: '-￥121233',
            time: '今天12:12',
            number: '-0.0123'
          },
          {
            index: '2',
            title: 'BTC',
            money: '-￥121233',
            time: '今天12:12',
            number: '-0.0123'
          },
          {
            index: '2',
            title: 'BTC',
            money: '-￥121233',
            time: '今天12:12',
            number: '-0.0123'
          },
          {
            index: '2',
            title: 'BTC',
            money: '-￥121233',
            time: '今天12:12',
            number: '-0.0123'
          },
          {
            index: '2',
            title: 'BTC',
            money: '-￥121233',
            time: '今天12:12',
            number: '-0.0123'
          },
          {
            index: '2',
            title: 'BTC',
            money: '-￥121233',
            time: '今天12:12',
            number: '-0.0123'
          }]
        },
        {
          index: '3',
          data: [{
            index: '3',
            title: 'BTC',
            money: '-￥121233',
            time: '今天12:12',
            number: '-0.0123'
          }]
        },
        {
          index: '9',
          data: [{
            index: '3',
            title: 'BTC',
            money: '-￥121233',
            time: '今天12:12',
            number: '-0.0123'
          }]
        },
        {
          index: '4',
          data: [{
            index: '3',
            title: 'BTC',
            money: '-￥121233',
            time: '今天12:12',
            number: '-0.0123'
          }]
        },
        {
          index: '5',
          data: [{
            index: '3',
            title: 'BTC',
            money: '-￥121233',
            time: '今天12:12',
            number: '-0.0123'
          }]
        },
        {
          index: '6',
          data: [{
            index: '3',
            title: 'BTC',
            money: '-￥121233',
            time: '今天12:12',
            number: '-0.0123'
          }]
        },
        {
          index: '7',
          data: [{
            index: '3',
            title: 'BTC',
            money: '-￥121233',
            time: '今天12:12',
            number: '-0.0123'
          }]
        },
        {
          index: '8',
          data: [{
            index: '3',
            title: 'BTC',
            money: '-￥121233',
            time: '今天12:12',
            number: '-0.0123'
          }]
        }],
      loading: false,
      finished: false,
      currentDate: new Date(),
      monthlyDate: 7,
      currentMonth: 7,
      timmer: null
    }
  },
  mounted () {
    this.$nextTick()
      .then(() => {
        window.addEventListener('scroll', this.handleScroll)
      })
  },
  methods: {
    handleScroll () {
      if (this.timmer) {
        clearTimeout(this.timmer)
      }
      this.timmer = setTimeout(() => {
        let dateHeaders = this.$refs.dateHeader
        let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
        if (scrollTop < 100) {
          this.monthlyDate = this.currentMonth
        }
        dateHeaders.forEach((item, index) => {
          if (index !== 0) {
            let itemTop = item.offsetTop - scrollTop
            // alert(item.offsetTop)
            if (itemTop <= 100) {
            // console.log(item.dataset.date)
              this.monthlyDate = item.dataset.date
            }
          }
        })
      }, 0)
    },
    onLoad () {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push({
            index: '3',
            data: [{
              index: '3',
              title: 'BTC',
              money: '-￥121233',
              time: '今天12:12',
              number: '-0.0123'
            }]
          })
        }
        this.$nextTick().then(() => {
          console.log('---------------------')
          // console.log(11)
        })
        this.loading = false
      }, 500)
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss">
@import "../../assets/styles/variable.scss";
.paylist {
  .content{
      margin-top: -24px;
  }
  .van-card{
    background: #FFFFFF;
    overflow: hidden;
    height: 1.5rem;
    // border-top: 1px solid #D8D8D8;
    margin-left: 0.3rem;
    padding: 0.34rem 0.3rem 0.34rem 45px;
  }
  .cardBg{
    margin: 0.1rem 0;
    background: #FFFFFF;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.07);
    .van-card:last-child{
      border-radius: 0 0 $radius 0;
    }
    .van-card:first-child{
      border: 0px;
      border-radius: 0 $radius $radius 0;
    }
    .van-card:last-child:after{
      height: 0;
      border-radius: 0 $radius $radius 0;
    }
    border-radius: $radius;
  }
  .van-card__thumb{
    width: 0.64rem;
    height: 0.64rem;
    margin-top: 0.43rem;
    margin-left: -0.3rem;
  }
  .van-card:not(:first-child) {
    margin-top: 0px;
  }
  .row-left{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    min-width: 80px;
    // line-height: 20px;
    text-align: left;
  }
  .oneL{
    font-family: $chinese-regular;
    font-size: 15px;
    color: $w-text-color;
    letter-spacing: 0;
    line-height: 0.36rem;
  }
  .twoL{
    opacity: 0.3;
    font-family: $chinese-regular;
    font-size: 11px;
    color: $w-text-color;
    letter-spacing: 0;
    line-height: 0.22rem;
  }
  .oneR{
    font-family: $number-bold;
    font-size: 18px;
    color: $W-pie-color5;
    letter-spacing: 0;
    text-align: right;
    line-height: 0.36rem;
  }
  .twoR{
    opacity: 0.6;
    font-family: $number-bold;
    font-size: 15px;
    color: $w-text-color;
    letter-spacing: 0;
    text-align: right;
    line-height: 0.30rem;
  }
  .row-right{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    min-width: 80px;
    // line-height: 20px;
    text-align: right;
  }
  .van-card__row:first-child{
    margin-bottom: 0.16rem;
  }
  .timeHeader{
    padding: 0.4rem 0 0.3rem 0rem;
  }
  .title-month{
    font-family: $chinese-medium;
    font-size: 20px;
    color: $w-text-color;
    letter-spacing: 0;
    text-align: left;
    line-height: 0.40rem;
    margin-bottom: 0.2rem;
  }
  .title-desc{
    opacity: 0.6;
    font-family: $chinese-regular;
    font-size: 13px;
    color: $w-text-color;
    letter-spacing: 0;
    line-height: 0.26rem;
    text-align: left;
    span:first-child{
      margin-right: 0.4rem;
    }
  }
  .firstHeader {
    position: fixed;
    z-index: 999;
    top: 81px;
    .timeHeader{
      padding-bottom: 0.5rem;
      padding-top: 0.5rem;
      padding-left: 0.4rem;
      margin-left: -$distance-x2;
      margin-right: -$distance-x2;
      position: fixed;
      top: 52px;
      height: 2rem;
      z-index: 2;
    }
    .title-month{
      font-family: $chinese-medium;
      font-size: 22px;
      color: #FFFFFF;
      letter-spacing: 0;
      text-align: left;
      line-height: 0.44rem;
      width: 145px;
      .iconfont{
        position: relative;
        top: -3px;
      }
    }
    .title-desc{
      font-family: $chinese-regular;
      font-size: 13px;
      color: #FFFFFF;
      letter-spacing: 0;
      text-align: left;
      line-height: 0.26rem;
      opacity: 1;
    }
  }
  // .van-list div:nth-child(1) {
  //   .timeHeader{
  //     padding-bottom: 0.5rem;
  //     padding-top: 0.5rem;
  //     padding-left: 0.4rem;
  //     margin-left: -$distance-x2;
  //     margin-right: -$distance-x2;
  //     position: fixed;
  //     top: 52px;
  //     height: 2rem;
  //     z-index: 2;
  //   }
  //   .title-month{
  //     font-family: $chinese-medium;
  //     font-size: 22px;
  //     color: #FFFFFF;
  //     letter-spacing: 0;
  //     text-align: left;
  //     line-height: 0.44rem;
  //     width: 145px;
  //     .iconfont{
  //       position: absolute;
  //       right: 14px;
  //     }
  //   }
  //   .title-desc{
  //     font-family: $chinese-regular;
  //     font-size: 13px;
  //     color: #FFFFFF;
  //     letter-spacing: 0;
  //     text-align: left;
  //     line-height: 0.26rem;
  //     opacity: 1;
  //   }
  // }
  .waves{
    height: 153px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    background-color: $color-primary;
    background-position: center;
    background-size: cover;
  }
  .van-list{
    padding-top: 114px;
    margin-top: $distance-x2;
  }
}
</style>
