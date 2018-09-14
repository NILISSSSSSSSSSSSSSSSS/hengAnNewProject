<template>
<div class="loginPage">
  <div class="content">
    <w-header></w-header>
    <img class="logo" src="@/assets/images/logo.png" />
    <div class="form">
      <van-cell-group class="border">
        <van-field v-model.trim="email" type='email' :error-message='email_error' :placeholder="$t('user.login')" />
      </van-cell-group>
      <div class="split"></div>
      <van-cell-group class="border">
        <van-field type='password' v-model.trim="password" maxlength='18' :error-message='password_error' :placeholder="$t('user.email')" />
      </van-cell-group>
      <router-link to="/user/findpassword" class="findPassword">{{$t('user.btn.forgetPwd')}}</router-link>
      <div class="submit" @click="submit">
        {{$t('user.login')}}
      </div>
    </div>
  </div>
</div>
</template>

<script>
import wHeader from './components/header.vue'
import { login } from '@/api/user'
export default {
  name: 'emaillogin',
  data () {
    return {
      email: '',
      email_error: '',
      password: '',
      password_error: ''
    }
  },
  components: {
    wHeader
  },
  methods: {
    submit () {
      let error = ''
      if (this.email.length === 0) {
        error = '邮箱不能为空'
      } else if (!this.utils.emailVerify(this.email)) {
        error = '邮箱格式不正确'
      } else if (this.password === '') {
        error = '密码不能为空'
      } else if (!this.utils.pwVerify(this.password)) {
        error = '密码格式不对'
      }
      if (error) {
        this.$toast({
          position: 'top',
          message: error
        })
      } else {
        login(this.email, this.password).then(res => {
          if (res.success) {
            if (res.data && res.token) {
              this.$store.dispatch('user/SET_TOKEN', res.data.token)
              this.$router.push('/')
            } else {
              this.$router.push(`/user/googleverify?email=${this.email}`)
            }
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
        font-family: $chinese-regular;
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
        margin-top: 2.32rem;
        color: white;
        text-align: center;
        margin-bottom: 10px !important;
      }
    }
  }
}
</style>
