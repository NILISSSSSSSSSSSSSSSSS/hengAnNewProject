<template>
  <div class="asidePage">
    <van-popup v-model="showAside.boo" position="left">
      <div class="content">
        <img src="http://cms-bucket.nosdn.127.net/1a47fcc17d2e46b5b0d3e0f160d98a0320180123163519.jpeg?imageView&thumbnail=550x0" alt="" @click="$router.push('/user/edit/avatar')">

        <p class="name"><span class="ellipsis">{{nickname}}</span><i class="iconfont icon-edit" v-link="'/user/edit/nickname'"></i></p>
        <ul class="btns">
          <li v-for="(item, index) in setArr"
          :key="index"
          :class="{'backg': selectIndex === index}"
          @click="selectHandle(index)"
          v-link="item.link">
            <i class="iconfont" :class="item.icon"></i>
            <span>{{item.name}}</span>
          </li>
        </ul>
        <div class="setting" v-link="'/setting/common'">
          <i class="iconfont icon-shezhi"></i>
          <span>{{$t('sideBar.setting')}}</span>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  props: {
    showAside: Object
  },
  data () {
    return {
      nickname: '恒安金链',
      selectIndex: '',
      setArr: [
        {icon: 'icon-anquanshezhi', name: this.$t('sideBar.security'), link: '/setting/security'},
        {icon: 'icon-zhifuzhangdan', name: this.$t('sideBar.payList'), link: '/record/paylist'},
        {icon: 'icon-zhuanzhangjilu', name: this.$t('sideBar.transferRecord'), link: '/record/transfer'},
        {icon: 'icon-tibijilu', name: this.$t('sideBar.rechargeRecord'), link: '/record/rechangew'}
      ]
    }
  },
  methods: {
    selectHandle (index) {
      this.selectIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variable.scss";
.asidePage {
  background-color: #fff;
  .van-popup {
    width: 60%;
    height: 100%;
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: $font-color-blue;
      .name {
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 20px;
        letter-spacing: 1.25px;
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        span{
          max-width: 60%;
          display: inline-block;
        }
        .iconfont{
          color: $w-text-color;
          margin-left: 5px;
          font-size: 28px;
        }
      }
      img {
        width: 75px;
        height: 75px;
        border-radius: 50%;
        margin-top: 0.87rem;
      }
      .btns{
        margin-top: 20px;
        width: 100%;
        li{
          font-size: 15px;
          padding: 10px 0;
          display: flex;
          align-items: center;
          text-align: left;
          width: 100%;
          padding-left: 40px;
          .iconfont{
            font-size: 22px;
            margin-right: 15px;
          }
          .icon-zhangdan{
            font-size: 18px;
          }
          .icon-zhuanzhang{
            font-size: 18px;
          }
          span{
            letter-spacing: 1px;
          }
        }
        .backg{
          background-color: #F0F1F2;
        }
      }
      .setting{
        position: fixed;
        top: calc(100% - 60px);
        width: 100%;
        display: flex;
        align-items: center;
        padding-left: 40px;
        font-size: 15px;
        .iconfont{
          font-size: 20px;
          margin-right: 15px;
        }
      }
    }
  }
}
</style>
