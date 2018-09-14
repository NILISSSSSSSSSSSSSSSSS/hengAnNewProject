<template>
  <div class="editNicknamPage">
    <van-nav-bar
      left-arrow
      title="修改昵称"
      right-text="完成"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="content"><input type="text" class="input" v-model="nickname" ref="input"></div>
  </div>
</template>

<script>
import backLayout from '@/components/backLayout/'
export default {
  components: {
    backLayout
  },
  data () {
    return {
      nickname: '恒安金链'
    }
  },
  mounted () {
    this.$refs.input.focus()
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onClickRight () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

<style lang='scss'>
.editNicknamPage{
  .content{
    background-color: #eee;
    margin-top: 24px;

    padding: 0 $distance-x2;
  }
  input{
    background-color: transparent;
    width: 100%;
    padding: 10px 0;
    border: 0;
  }
  .van-nav-bar__title{
    font-size: 16px;
    color: #fff;
  }
  .van-nav-bar__right{
    .van-nav-bar__text{
      font-size: 14px;
    }
  }
}
</style>
