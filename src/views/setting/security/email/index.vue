<template>
  <w-back-layout
    class="setting-email"
    :title="$t('setting.bindEmail')"
    :leftPath="'/setting/security'">
    <div class="content">
      <w-card class="setting-w-card">
        <van-cell-group>
          <w-get-code-input
            :label="$t('setting.emailPage.address')"
            :placeholder="$t('setting.emailPage.address2')"
            :errorMessage="emailError"
            @input="_emailVerify"></w-get-code-input>
          <van-field
            type="number"
            v-model="code"
            :label="$t('setting.emailPage.code')"
            :placeholder="$t('setting.emailPage.code2')"
            :error-message="codeError"
          />
        </van-cell-group>
      </w-card>

      <div class="setting-hint">
        {{$t('setting.emailPage.hint')}}
      </div>

      <w-big-button
        @click="send"
        :title="$t('setting.emailPage.send')"
        bgColor="#389FFB"
        color="#fff"></w-big-button>
    </div>
  </w-back-layout>
</template>

<script>
import { bindLoginName } from 'api/setting'
export default {
  data () {
    return {
      email: '',
      code: '',

      emailError: '',
      codeError: ''
    }
  },
  methods: {
    _emailVerify (email) {
      this.email = email
      if (!this.utils.emailVerify(this.email)) {
        this.emailError = this.$t('setting.emailPage.err2')
      } else {
        this.emailError = ''
      }
    },
    async _bindLoginName () {
      try {
        const resData = await bindLoginName(this.email, this.code)
        if (resData.success) {
          if (resData.data) {
            this.$toast(this.$t('setting.bindSuccess'))
            this.$router.push('/setting/security')
          }
        }
      } catch (e) {
        console.log(e)
      }
    },
    send () {
      this._bindLoginName()
    }
  }
}
</script>

<style lang="scss">
.setting-email {
  .setting-w-card {
    .van-cell-group {
      .van-cell__title {
        color:$w-text-color;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.setting-email {
  .send {
    font-size: 15px;
    color: #389FFB;
    letter-spacing: 0.34px;
  }
  .ban {
    color: #999;
  }
}
</style>
