<template>
<div class="registerPage">
  <w-header></w-header>
  <div class="content">
    <img class="logo" src="@/assets/images/logo.png" />
    <div class="form">
      <van-cell-group class="border">
        <van-field v-model="email" type='tel' :placeholder="$t('user.email')" />
      </van-cell-group>
      <div class="split"></div>
      <van-field class="sms" v-model="emailCode" center clearable :placeholder="$t('user.placeholder.pleaseInputEmailVerifyCode')">
        <van-button slot="button" v-show="countdown==0" size="small" type="primary" @click="sendCode">{{$t('user.sendVerfiyCode')}}</van-button>
        <van-button slot="button" v-show="countdown>0" class="disabled" size="small" type="primary" @click="sendCode">({{countdown}})s</van-button>
      </van-field>
      <div class="split"></div>
      <van-cell-group class="border">
        <van-field v-model="password" type='password' maxlength='18' :error-message='password_error' :placeholder="$t('user.placeholder.inputPwd')" icon="question" @click-icon="$toast($t('user.placeholder.pwdFormat'))" />
      </van-cell-group>
      <div class="split"></div>
      <van-cell-group class="border">
        <van-field v-model="payPwd" type='password' maxlength='6' :placeholder="$t('user.placeholder.payPwdFormat')" />
      </van-cell-group>
      <div class="submit" @click="submit">
        {{$t('user.register')}}
      </div>
    </div>
  </div>
</div>
</template>

<script>
import wSelectPhone from './components/selectPhone.vue'
import wHeader from './components/header.vue'
import { register, getRegisterEmailVerfityCode } from '@/api/user'
export default {
  name: 'register',
  data () {
    return {
      email: '',
      email_error: '',
      emailCode: '',
      emailCode_Error: '',
      password: '',
      countdown: 0,
      payPwd: '',
      payPwd_Error: ''
    }
  },
  components: {
    wSelectPhone,
    wHeader
  },
  methods: {
    goBack () {
      this.$router.history.go(-1)
    },
    sendCode () {
      let error = ''
      if (this.email.length === 0) {
        error = '请输入邮箱'
      } else if (!this.utils.emailVerify(this.email)) {
        error = '邮箱格式不正确'
      }
      if (error) {
        this.$toast({
          position: 'top',
          message: error
        })
      } else {
        getRegisterEmailVerfityCode(this.email).then(res => {
          this.countdown = 60
          let coutdownInterval = setInterval(() => {
            this.countdown--
            if (this.countdown === 0) {
              clearInterval(coutdownInterval)
            }
          }, 1000)
        })
      }
    },
    submit () {
      let error = ''
      if (this.email.length === 0) {
        error = '请输入邮箱'
      } else if (!this.utils.emailVerify(this.email)) {
        error = '邮箱格式不正确'
      } else if (this.emailCode.length === 0) {
        error = '请输入邮箱验证码'
      } else if (this.password.length === 0) {
        error = '请输入密码'
      } else if (!this.utils.pwVerify(this.password)) {
        error = '密码格式不对'
      } else if (this.payPwd.length === 0) {
        error = '请输入资金密码'
      } else if (!this.utils.payPwdVerify(this.payPwd)) {
        error = '资金密码格式不对'
      }
      if (error) {
        this.$toast({
          position: 'top',
          message: error
        })
      } else {
        register({
          loginName: `${this.phoneCode}${this.phone}`,
          password: this.password,
          vertifyCode: this.vertifyCode,
          registerType: 2,
          payPassword: this.payPwd
        }).then(res => {
          if (res.success && res.data.token) {
            this.$store.dispatch('user/SET_TOKEN', res.data.token)
            this.$router.push('/')
          }
        })
      }
    }
  },
  computed: {}
}
</script>

<style lang="scss" scoped>
@import "~styles/user";
.registerPage {
  height: 100%;
  .header {
    position: fixed;
    left: 0;
    width: 100%;
    top: 0px;
    background-color: white;
    /deep/ .van-icon-arrow {
      color: $w-text-color;
    }
    /deep/ .van-nav-bar__text {
      color: $w-text-color;
    }
  }
  .content {
    padding-top: 280px;
    height: 100%;
    position: relative;
    .logo {
      position: absolute;
      // top: 120px;
      top: 127px;
      left: 50%;
      transform: translateX(-50%);
      width: 110px;
    }
    .form {
      padding: 0 0.64rem;
      box-sizing: border-box;
      .sms {
        height: 0.88rem;
        border: 1px solid #979797;
        padding: 5px 10px;
        /deep/ .van-field__body {
          font-size: 15px;
        }
        /deep/ .van-button {
          background-color: white;
          border-top: none;
          border-right: none;
          border-bottom: none;
          border-left: 1px solid #979797;
          border-radius: 0px;
          font-family: $chinese-regular;
          color: $w-text-color;
          font-size: 15px;
          letter-spacing: 0;
          padding: 0px 10px;
          width: 100px;
        }
        .disabled {
          color: $w-text-color !important;
        }
      }
      .split {
        height: 0.24rem;
      }
      .findPassword {
        float: right;
        font-family: $chinese-regular;
        font-size: 11px;
        color: $color-primary;
        letter-spacing: 0;
        display: block;
        margin-top: 10px;
      }
      .submit {
        background-color: $color-primary;
        border-radius: 100px;
        line-height: 0.88rem;
        text-align: center;
        bottom: 2.14rem;
        margin-top: 60px;
        color: white;
        text-align: center;
        margin-bottom: 10px !important;
      }
    }
  }
}
</style>
