<template>
<div class="loginPage">
  <div class="content">
    <w-header></w-header>
    <img class="logo" src="@/assets/images/logo.png" />
    <div class="form">
      <van-cell-group class="border">
        <van-field v-model="account" disabled />
      </van-cell-group>
      <div class="split"></div>
      <van-cell-group class="border">
        <van-field v-model="googleVerifyCode" type='number' :placeholder="$t('user.placeholder.googleVerify')" :error-message='googleVerifyCode_error' >
          <span class="paste" slot="button" @paste='paste'>{{$t('common.paste')}}</span>
        </van-field>
      </van-cell-group>
      <div class="submit" @click="submit">
        {{$t('user.login')}}
      </div>
    </div>
  </div>
</div>
</template>

<script>
import wSelectPhone from './components/selectPhone.vue'
import wHeader from './components/header.vue'
import { googleAuthLogin } from '@/api/user'
export default {
  name: 'login',
  data () {
    return {
      account: '18782973618',
      loginname: '',
      googleVerifyCode: '',
      googleVerifyCode_error: ''
    }
  },
  components: {
    wSelectPhone,
    wHeader
  },
  created () {
    if (this.$route.query.phone) {
      this.account = `+${this.$route.query.code} ${this.$route.query.phone}`
      this.loginname = `${this.$route.query.code}${this.$route.query.phone}`
    } else {
      this.account = this.$route.query.email
      this.loginname = this.$route.query.email
    }
  },
  methods: {
    paste () {
      // alert(1)
    },
    submit () {
      let error = ''
      if (this.googleVerifyCode === '') {
        error = '请输入google验证码'
      }
      if (error) {
        this.$toast({
          position: 'top',
          message: error
        })
      } else {
        googleAuthLogin({
          loginname: this.loginname,
          googleCode: this.googleVerifyCode
        }).then(res => {
          if (res.success && res.data.token) {
            this.$store.dispatch('user/SET_TOKEN', res.data.token)
            this.$router.push('/')
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/user";
.loginPage {
  height: 100%;
  .content {
    padding-top: 280px;
    height: 100%;
    position: relative;
    .logo {
      position: absolute;
      // top: 120px;
      top: 100px;
      left: 50%;
      transform: translateX(-50%);
      width: 110px;
    }
    .form {
      padding: 0 0.64rem;
      box-sizing: border-box;
      .split {
        height: 0.24rem;
      }
      .submit {
        background-color: $color-primary;
        border-radius: 0.88rem;
        line-height: 0.88rem;
        text-align: center;
        bottom: 2.14rem;
        margin-top: 50px;
        color: white;
        margin-bottom: 10px !important;
      }
    }
    .paste {
      font-family: $chinese-regular;
      font-size: 15px;
      color: $color-primary;
      letter-spacing: 0.17px;
      text-align: left;
    }
  }
}
</style>
