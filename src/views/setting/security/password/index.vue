<template>
  <w-back-layout
   class="setting-password"
   :title="$t('setting.passwordPage.modify')">
    <div class="content">
      <w-card class="setting-w-card">
        <van-cell-group>
          <van-field
            v-model="account"
            :label="$t('setting.account')"
            disabled
          />

          <van-field
            v-model="oldPw"
            :label="$t('setting.passwordPage.oldPw')"
            :placeholder="$t('setting.passwordPage.oldPw2')"
            :error-message="oldPwError"
            @input="_pwVerify('oldPw')"
            type="password"
          />

          <van-field
            v-model="newPw"
            :label="$t('setting.passwordPage.newPw')"
            :placeholder="$t('setting.passwordPage.newPw2')"
            :error-message="newPwError"
            @input="_pwVerify('newPw')"
            type="password"
          />

          <van-field
            v-model="newPw2 "
            :label="$t('setting.passwordPage.confirmPw')"
            :placeholder="$t('setting.passwordPage.confirmPw2')"
            :error-message="newPw2Error"
            @input="_pwVerify('newPw2')"
            type="password"
          />
        </van-cell-group>
      </w-card>

      <div class="hint">
        <div class="setting-hint">{{$t('setting.passwordPage.pwHint')}}</div>
        <div
          class="forget"
          @click="() => this.$router.push('/setting/security/forget')">{{$t('setting.passwordPage.forget')}}</div>
      </div>

      <w-big-button
        @click="submit"
        :title="$t('setting.passwordPage.modify2')"></w-big-button>
    </div>
  </w-back-layout>
</template>

<script>
import { settingPassword } from 'api/setting'
export default {
  data () {
    return {
      account: '18650174210',
      oldPw: '',
      newPw: '',
      newPw2: '',

      oldPwError: '',
      newPwError: '',
      newPw2Error: ''
    }
  },
  methods: {
    _pwVerify (key) {
      const error = key + 'Error'
      if (!this.utils.pwVerify(this[key])) {
        this[error] = this.$t('setting.passwordPage.pwErr')
      } else {
        this[error] = ''
      }
    },
    async  _settingPassword () {
      try {
        const resData = await settingPassword(this.account, this.oldPw, this.newPw, this.newPw2)
        if (resData.success) {
          const data = resData.data
          if (data) {
            this.$toast(this.$t('setting.modifyPw'))
            this.$router.push('/setting/security')
          }
        }
      } catch (e) {
        console.log(e)
      }
    },
    submit () {
      this._settingPassword()
    }
  }
}
</script>

<style lang="scss">
.setting-password {
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
.setting-password {
  .hint {
    .forget {
      margin-top: 6px;
      font-size: 12px;
      color: $color-primary;
      letter-spacing: 0.42px;
    }
  }
}
</style>
