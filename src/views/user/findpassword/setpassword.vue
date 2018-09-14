<template>
<w-back-layout :title="$t('header.findLoginPwd')">
  <div class="contentPadding">
    <w-card>
      <van-cell-group>
      <van-field  type="text" :disabled='true'  :label="accountLabel" v-model="account" />
      <van-field v-model="password" maxlength='18' :error-message='password_error'  type="password" :label="$t('user.label.newPwd')" :placeholder="$t('user.placeholder.pleaseInputNewPwd')" />
      <van-field v-model="confirmPassword" maxlength='18' :error-message='confirmPassword_error' type="password" :label="$t('user.label.confirmPwd')" :placeholder="$t('user.placeholder.pleaseInputConfirmPwd')" />
    </van-cell-group>
    </w-card>
    <div class="form-tip">
      {{$t('user.notice.pwdFormat')}}
    </div>
  </div>
  <div class="bottomButton">
    <div class="button" @click="submit">
      {{$t('user.btn.edit')}}
    </div>
  </div>
</w-back-layout>
</template>

<script>
import { editpwd } from '@/api/user'
export default {
  data () {
    return {
      password: '',
      confirmPassword: '',
      confirmPassword_error: '',
      password_error: '',
      account: '',
      accountLabel: '',
      type: '',
      loginname: ''
    }
  },
  created () {
    this.type = this.$route.query.type
    this.accountLabel =
      this.type === '1'
        ? this.$t('user.label.phone')
        : this.$t('user.label.email')
    if (this.type === '1') {
      this.account = `+${this.$route.query.phoneCode} ${
        this.$route.query.phone
      }`
      this.loginname = `${this.$route.query.phoneCode} ${
        this.$route.query.phone
      }`
    } else {
      this.account = this.$route.query.email
      this.loginname = this.$route.query.email
    }
  },
  methods: {
    submit () {
      this.password_error = this.confirmPassword_error = ''
      if (this.password === '') {
        this.password_error = '请输入密码'
      } else if (!this.utils.pwVerify(this.password)) {
        this.password_error = '密码格式不正确'
      } else if (this.confirmPassword === '') {
        this.confirmPassword_error = '请输入确认密码'
      } else if (this.confirmPassword !== this.password) {
        this.confirmPassword_error = '密码不一致'
      }
      if (this.password_error === '' && this.confirmPassword_error === '') {
        editpwd({
          loginname: this.loginname,
          password: this.password,
          verfityCode: this.$route.query.verfityCode
        }).then(res => {
          if (res.success) {
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
</style>
