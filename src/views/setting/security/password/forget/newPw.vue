<template>
  <w-back-layout
    class="setting-forget-newPw"
    :title="$t('setting.passwordPage.modify')">
    <div class="content">
      <w-card  class="setting-w-card">
        <van-cell-group>
          <van-field
            type="password"
            v-model="newPw"
            :placeholder="$t('setting.passwordPage.newPw')" />
        </van-cell-group>
      </w-card>

      <div class="setting-hint">
        {{$t('setting.passwordPage.pwHint')}}
      </div>

      <w-big-button
        @click="onClick"
        :title="$t('setting.passwordPage.modify2')"></w-big-button>
    </div>
  </w-back-layout>
</template>

<script>
import { forgetPw } from 'api/setting'
export default {
  data () {
    return {
      loginName: 'xxx',
      newPw: '',
      code: ''
    }
  },
  created () {
    this.code = this.$route.query.code
    if (!this.code) this.$router.go(-1)
  },
  methods: {
    onClick () {
      this._forgetPw()
    },
    async _forgetPw () {
      try {
        const resData = await forgetPw(this.loginName, this.code, this.newPw)
        if (resData.success) {
          if (resData.data) {
            this.$toast(this.$t('setting.modifyPw'))
            this.$router.push('/setting/security')
          } else this.$toast('error')
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
