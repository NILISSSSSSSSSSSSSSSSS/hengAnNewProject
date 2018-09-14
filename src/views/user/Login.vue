<template>
<div class="loginPage">
  <div class="content">
    <w-header></w-header>
    <img class="logo" src="@/assets/images/logo.png" />
    <div class="form">
      <w-select-phone class="border" :phone.sync='phone' :phoneCode.sync='phoneCode'  :error-message='phone_error'></w-select-phone>
      <div class="split"></div>
      <van-cell-group class="border">
        <van-field v-model="password" type='password' maxlength='18' :placeholder="$t('user.placeholder.inputPwd')" :error-message='password_error' />
      </van-cell-group>
      <router-link to="/user/findpassword" class="findPassword">{{$t('user.forgetPwd')}}</router-link>
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
import { login } from '@/api/user'
export default {
  name: 'login',
  data () {
    return {
      phone: '',
      phone_error: '',
      phoneCode: '',
      password: '',
      password_error: ''
    }
  },
  components: {
    wSelectPhone,
    wHeader
  },
  methods: {
    submit () {
      let error = ''
      if (this.phone === '') {
        error = '请输入手机号'
      } else if (!this.utils.phoneVerify(this.phone)) {
        error = '手机号格式不对'
      } else if (this.password === '') {
        error = '请输入手机号'
      } else if (!this.utils.pwVerify(this.password)) {
        error = '密码格式不对'
      }
      if (error) {
        this.$toast({
          position: 'top',
          message: error
        })
      } else {
        login(`${this.phoneCode}${this.phone}`, this.password).then(res => {
          if (res.success) {
            if (res.data != null && res.data.token) {
              this.$store.dispatch('user/SET_TOKEN', res.data.token)
              this.$router.push('/')
            } else {
              this.$router.push(`/user/googleverify?code=${this.phoneCode}&phone=${this.phone}`)
            }
          }
        })
      }

      /*
      if (this.phone === '') {
        this.phone_error = '请输入手机号'
      } else if (!this.utils.phoneVerify(this.phone)) {
        this.phone_error = '手机号格式不对'
      } else {
        this.phone_error = ''
      }
      if (this.password === '') {
        this.password_error = '请输入密码'
      } else if (!this.utils.pwVerify(this.password)) {
        this.password_error = '密码格式不对'
      } else {
        this.password_error = ''
      }
      if (this.phone_error === '' && this.password_error === '') {
        if (this.password === '123456') {
          this.$toast({
            position: 'top',
            message: '账号密码错误'
          })
        } else {
        }
      } */
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/user";
.loginPage {
  height: 100%;
  .content {
    // padding-top: 5.98rem;
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
      .split {
        height: 0.24rem;
      }
      .findPassword {
        float: right;
        font-family: PingFangSC-Regular;
        font-size: 11px;
        color: $color-primary;
        letter-spacing: 0;
        display: block;
        margin-top: 10px;
      }
      .submit {
        background-color: $color-primary;
        border-radius: 0.88rem;
        line-height: 0.88rem;
        text-align: center;
        bottom: 2.14rem;
        // margin-top: 2.32rem;
        margin-top: 100px;
        color: white;
        margin-bottom: 10px !important;
      }
    }
  }
}
</style>
