<template>
  <w-back-layout
    class="setting-forget-email"
    :title="$t('setting.passwordPage.modify')">
    <div class="content">
      <div class="setting-hint">{{ hint }}</div>

      <w-card>
        <van-cell-group>
          <w-get-code-input
            type="number"
            :placeholder="codeText"
            @input="change"></w-get-code-input>
        </van-cell-group>
      </w-card>

      <w-big-button
        @click="onClick"
        :title="$t('common.ok')"></w-big-button>
    </div>
  </w-back-layout>
</template>

<script>
import { verifyCode } from 'api/setting'
export default {
  data () {
    return {
      loginName: '123*****',
      code: '',

      countdown: 0,
      type: '',
      typeText: ''
    }
  },
  computed: {
    hint () {
      return this.$t('setting.forgetPage.hint', { loginType: this.typeText, loginName: this.loginName })
    },
    codeText () {
      const typeText = this.type === 'note' ? this.$t('setting.forgetPage.noteText')
        : this.$t('setting.forgetPage.loginEmail')
      return this.$t('setting.forgetPage.codeText', { loginType: typeText })
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.type = this.$route.query.type
      if (!this.type) this.$router.go(-1)
      this.typeText = this.type === 'note' ? this.$t('setting.forgetPage.loginPhone')
        : this.$t('setting.forgetPage.loginEmail')
    },
    onClick () {
      this._verifyCode()
    },
    async _verifyCode () {
      try {
        const resData = await verifyCode(this.loginName, this.code)
        if (resData.success) {
          if (resData.data) this.$router.push(`/setting/security/forget/newPw?code=${this.code}`)
          else this.$toast(this.$t('setting.codeErr'))
        }
      } catch (e) {
        console.log(e)
      }
    },
    change (loginName) {
      this.code = loginName
    }
  }
}
</script>

<style lang="scss" scoped>
.setting-forget-email {
  .setting-hint {
    margin-top: 8px;
    margin-bottom: 0px;
  }
}
</style>
