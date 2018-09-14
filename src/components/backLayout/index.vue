<template>
<div class="layout" :style="{backgroundImage: 'url('+ bgImage +')'}">
  <div class="layout-header">
    <van-nav-bar
      :title="title"
      :left-text="leftText"
      :left-arrow="leftArrow"
      @click-left="onClickLeft"
      @click-right="onClickRight" >
        <span slot="right">{{rightText}}</span>
        <!-- <van-icon :name="icon" slot="right" /> -->
        <i :class="icon" slot="right"></i>
      </van-nav-bar>
  </div>
  <div class="layout-content" :style="contentStyles">
    <slot></slot>
  </div>
</div>
</template>

<script>
import { Icon } from 'vant'
const bgImage = require('@/assets/img/index.png')
export default {
  name: 'wBackLayout',
  components: {
    Icon
  },
  data () {
    return {
      bgImage: ''
    }
  },
  props: {
    title: String,
    leftArrow: {
      type: Boolean,
      default: true
    },
    rightText: String,
    leftText: String,
    rightRouter: String,
    backgroundColor: {
      type: String,
      default: '#f8f8f8'
    },
    icon: String,
    leftPath: String
  },
  methods: {
    onClickLeft () {
      if (this.leftPath) {
        return this.$router.push(this.leftPath)
      }
      this.$router.history.go(-1)
    },
    onClickRight () {
      if (this.rightRouter) {
        this.$router.push(this.rightRouter)
      }
    }
  },
  computed: {
    contentStyles () {
      return {
        'background-color': this.backgroundColor
      }
    }
  },
  created () {
    this.bgImage = bgImage
  }
}
</script>

<style lang="scss">
.layout {
  .layout-header {
    .van-nav-bar {
      background-color: $color-primary;
      color: #fff;
    }
    .van-icon {
      color: #fff;
    }
    // .van-nav-bar__text {
    //   color: white;
    //   // line-height: 16px;
    //   position: relative;
    //   top: 1.5px;
    // }
    .van-nav-bar__right {
      right: 20px;
      .iconfont {
        font-size: 26px;
        position: relative;
        top: 3.8px;
      }
    }
  }
}
.van-hairline--bottom::after {
    border: 0;
}
</style>

<style lang="scss" scoped>
.layout {
  width: 100%;
  .layout-header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    div{
      color: white;
    }
  }
  .layout-content {
    width: 100%;
    min-height: 100%;
    padding: $distance-x3 $distance-x2 0 $distance-x2;
  }
}
</style>
<style lang='scss'>
.van-nav-bar__text{
  font-size: 16px;
}
</style>
