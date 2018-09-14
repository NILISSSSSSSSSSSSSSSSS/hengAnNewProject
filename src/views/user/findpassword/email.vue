<template>
<w-back-layout :title="$t('header.findLoginPwd')">
  <div class="contentPadding">
    <w-card>
      <van-cell-group>
        <van-field v-model.trim="email" :label="$t('user.label.emailAddress')" :placeholder="$t('user.placeholder.pleaseInputEmailAddress')" :error-message="email_error" />
        <van-field v-model.trim="code" :label="$t('user.label.emailVerifyCode')" :placeholder="$t('user.placeholder.pleaseInputEmailVerifyCode')" :error-message="code_error">
          <span class="sendEmail" v-if="countdown==0" slot="button" @click="sendEmail">{{$t('common.send')}}</span>
          <span slot="button" v-else>({{countdown}})s</span>
        </van-field>
      </van-cell-group>
    </w-card>
    <div class="form-tip">{{$t('user.notice.email')}}</div>
    <w-big-button :title="$t('user.btn.nextStep')" bgColor="#389FFB" color="#fff" @click="confirm"></w-big-button>
  </div>
</w-back-layout>
</template>

<script>

import { getFindPwdEmailVertifycode, checkFindPwdEmailVertifyCode } from '@/api/user'

export default {
  data () {
    return {
      email: '',
      code: '',
      email_error: '',
      code_error: '',
      countdown: 0
    }
  },
  methods: {
    confirm () {
      let error = ''
      if (this.email === '') {
        error = '请输入邮箱'
      } else if (!this.utils.emailVerify(this.email)) {
        error = '邮箱格式不对'
      } else if (this.code === '') {
        error = '请输入验证码'
      }
      if (error) {
        this.$toast({
          position: 'top',
          message: error
        })
      } else {
        checkFindPwdEmailVertifyCode({
          loginname: this.email,
          code: this.code
        }).then(res => {
          if (res.success) {
            this.$router.push(`/user/findpassword/setpassword?type=2&email=${this.email}&code=${this.code}`)
          }
        })
      }
    },
    sendEmail () {
      let error = ''
      if (this.email === '') {
        error = '请输入邮箱'
      } else if (!this.utils.emailVerify(this.email)) {
        error = '邮箱格式不对'
      }
      if (error) {
        this.$toast({
          position: 'top',
          message: error
        })
      } else {
        getFindPwdEmailVertifycode(this.email).then(res => {
          if (res.success) {
            this.countdown = 60
            let interval = setInterval(() => {
              this.countdown--
              if (this.countdown === 0) {
                clearInterval(interval)
              }
            }, 1000)
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/user";
.sendEmail {
  color: $color-primary;
}
</style>
