<template>
  <van-popup v-model="selectShow.boo" class="selectPop">
    <van-nav-bar
      :title="$t('pay.selectWallet')"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <div class="cell-list">
      <cell v-for="(item, index) in walletList" :key="index" @click.native="selectCurHandle(index, item)" :class="{selectCur: index === selectIndex}">
        <span slot="left" class="cell-title">
          <i :class="item.icon" style="color: #FF8500;font-size: 30px"></i>
          <span class="name">{{item.name}}</span>
        </span>
        <i slot="right" class="iconfont icon-check" v-if="index === selectIndex"></i>
      </cell>
    </div>
    <!-- <van-cell-group>

      <van-cell v-for="(item, index) in currencyList" :key="index" @click="selectCurHandle(index, item)" :class="{selectCur: index === selectIndex}">
        <span slot="title" class="cell-title"><span class="name">{{item.name}}</span>
        </span>
        <i :class="item.icon" slot="icon" style="color: #FF8500;font-size: 30px"></i>
        <i class="iconfont icon-check" v-if="index === selectIndex"></i>
      </van-cell>
    </van-cell-group> -->
  </van-popup>
</template>

<script>
import cell from '@/components/cell/'
import {getWalletsInfo} from '@/api/wallet'
export default {
  components: {
    cell
  },
  props: {
    selectShow: Object
  },
  data () {
    return {
      selectIndex: 0,
      walletList: []
    }
  },
  methods: {
    //  点击选择币种
    selectCurHandle (index, item) {
      this.selectIndex = index
      this.selectShow.boo = false
      this.$emit('getCurrency', item)
    },
    selectShowHandle () {
      this.selectShow.boo = true
    },
    onClickLeft () {
      this.selectShow.boo = false
    },
    _getWalletsInfo () {
      getWalletsInfo().then(res => {
        this.walletList = res.data.wallets
        this.$emit('defaultCurrency', this.walletList[0])
      })
    }
  },
  created () {
    this._getWalletsInfo()
    console.log('dsadsa')
  }
}
</script>

<style lang='scss' scoped>
.selectPop{
  width: 93.6%;
  max-height: 58.2%;
  border-radius: $radius;
  position: absolute;
  overflow-y: hidden;
  .van-nav-bar{
    background-color: transparent;
  }
  .selectCur{
    background-color: $w-b-gray;
  }
  .icon-check{
    color: $color-primary;
    font-size: 18px;
    font-weight: 600;
  }
  .cell-title{
    .name{
      color: $w-text-color;
      margin-left: 10px;
    }
    .label{
      margin-left: 5px;
      color: $w-text-color1;
      font-size: 12px;
    }
  }
}
</style>

<style lang="scss">
.selectPop{
  .van-nav-bar{
    border-bottom: 1px solid $w-split-line;
    .van-nav-bar__left{
      i{
        color: rgba(6,17,92,0.6);
      }
    }
  }
  .van-nav-bar__title{
    color: #06115C;
    font-size: 16px;
  }
  .van-cell__title{
    text-align: left;
    margin-left: .1rem;
  }
  .cell-list{
    margin-top: 46px;
    overflow-y: scroll;
    max-height: 300px;
    .cell{
      padding: 15px;
    }
    .cell-title{
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
}
</style>
