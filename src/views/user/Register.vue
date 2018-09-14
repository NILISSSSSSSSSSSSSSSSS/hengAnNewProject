<template>
<div class="registerPage">
  <w-header></w-header>
  <div class="content">
    <img class="logo" src="@/assets/images/logo.png" />
    <div class="form">
      <w-select-phone class="border" :phone.sync='phone' :phoneCode.sync='phoneCode'  :error-message='phone_error'></w-select-phone>
      <div class="split"></div>
      <van-field class="sms" v-model.trim="smsCode" :error-message='smsCode_error' type='number'  :placeholder="$t('user.placeholder.inputSMSVerfyCode')">
        <van-button slot="button" v-show="countdown==0" size="small" type="primary" @click="sendCode">{{$t('user.sendVerfiyCode')}}</van-button>
        <van-button slot="button" v-show="countdown>0" class="disabled" size="small" type="primary" @click="sendCode">({{countdown}})s</van-button>
      </van-field>
      <div class="split"></div>
      <van-cell-group class="border">
        <van-field v-model="password" type='password' maxlength='18' :error-message='password_error' :placeholder="$t('user.placeholder.inputPwd')" icon="question" @click-icon="$toast($t('user.placeholder.pwdFormat'))" />
      </van-cell-group>
      <div class="split"></div>
      <van-cell-group class="border">
        <van-field v-model="payPwd" type='password' maxlength='6' :error-message='password_error' :placeholder="$t('user.placeholder.payPwdFormat')" />
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
import { register, getRegisterPhoneVerfityCode } from '@/api/user'
export default {
  name: 'register',
  data () {
    return {
      phone: '',
      phone_error: '',
      phoneCode: '',
      smsCode: '',
      smsCode_error: '',
      password: '',
      password_error: '',
      countdown: 0,
      payPwd: ''
    }
  },
  components: {
    wSelectPhone,
    wHeader
  },
  methods: {
    sendCode () {
      let error = ''
      if (this.phone.length === 0) {
        error = '请输入手机号'
      } else if (!this.utils.phoneVerify(this.phone)) {
        error = '手机号格式不对'
      }
      if (error) {
        this.$toast({
          position: 'top',
          message: error
        })
      } else {
        getRegisterPhoneVerfityCode(this.phone).then(res => {
          if (res.success) {
            this.countdown = 60
            let coutdownInterval = setInterval(() => {
              this.countdown--
              if (this.countdown === 0) {
                clearInterval(coutdownInterval)
                this.smsCode = ''
              }
            }, 1000)
          }
        })
      }
    },
    submit () {
      let error = ''
      if (this.phone === '') {
        error = '请输入手机号'
      } else if (!this.utils.phoneVerify(this.phone)) {
        error = '手机号格式不对'
      } else if (this.smsCode === '') {
        error = '请输入验证码'
      } else if (this.password === '') {
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
  .content {
    padding-top: 280px;
    height: 100%;
    position: relative;
    .logo {
      position: absolute;
      // top: 2.7rem;
      top: 100px;
      left: 50%;
      transform: translateX(-50%);
      width: 110px;
    }
    .form {
      padding: 0 0.64rem;
      box-sizing: border-box;
      .sms {
        border: 1px solid #979797;
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
          color: $w-text-color1 !important;
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
        // margin-top: 1.2rem;
        margin-top: 60px;
        color: white;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
