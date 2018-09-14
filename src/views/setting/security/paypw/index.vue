<template>
  <w-back-layout
    class="setting-paypw"
    :title="$t('setting.moneyPwd')"
    :leftPath="'/setting/security'">
    <div class="content">
      <w-card class="setting-w-card">
        <div class="item item-1 borderBottom">{{ $t('setting.moneyPwdPage.text', {phone: '176****9949'}) }}</div>
        <div class="item item-2">{{ $t('setting.moneyPwdPage.notice') }}</div>
      </w-card>

      <!-- 密码输入框 -->
      <van-password-input
        :value="password"
        @focus="showKeyboard = true"
      />

      <!-- 数字键盘 -->
      <van-number-keyboard
        :show="showKeyboard"
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard = false"
      />

      <div class="setting-hint">{{ $t('setting.moneyPwdPage.pwdFormat') }}</div>

      <w-big-button
        @click="send"
        :title="$t('setting.committed')"></w-big-button>
    </div>
  </w-back-layout>
</template>

<script>
import { setPayPw } from 'api/setting'
export default {
  data () {
    return {
      password: '',
      showKeyboard: false
    }
  },
  methods: {
    onInput (num) {
      if (this.password.length < 6) this.password += num
    },
    onDelete () {
      if (this.password.length > 0) this.password = this.password.slice(0, this.password.length - 1)
    },
    async _setPayPw () {
      try {
        const resData = await setPayPw(this.password)
        if (resData.success) {
          if (resData.data) {
            this.$toast(this.$t('setting.settingSuccess'))
            this.$router.push('/setting/security')
          }
        }
      } catch (e) {
        console.log(e)
      }
    },
    send () {
      this._setPayPw()
    }
  }
}
</script>

<style lang="scss" scoped>
.setting-paypw {
  font-size: 16px;
  text-align: center;
  .item {
    padding: 12px 0;
  }
  .item-2 {
    color: $w-text-color;
  }
  .setting-hint {
    margin-top: 16px;
    text-align: center;
    color: $w-text-color;
  }
}
</style>
