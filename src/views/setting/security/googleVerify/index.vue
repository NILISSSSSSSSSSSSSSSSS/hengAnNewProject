<template>
  <w-back-layout
    class="setting-google"
    :title="$t('setting.secondValidation')"
    :leftPath="'/setting/security'">
    <div class="content">
      <w-card class="setting-w-card">
        <van-cell-group>
          <van-field
            v-model="key"
            :label="$t('setting.googlePage.key')"
            :placeholder="$t('setting.googlePage.user')"
            disabled
          >
            <span
              slot="button" class="slot"
              v-clipboard:copy="key"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError">
                {{$t('setting.googlePage.copy')}}
              </span>
          </van-field>

          <van-field
            v-model="googleCode"
            :label="$t('setting.googlePage.google')"
            :placeholder="$t('setting.googlePage.pw')"
            :error-message="googleError"
          >
            <span slot="button" class="slot">
              {{$t('setting.googlePage.zt')}}
            </span>
          </van-field>

          <!-- <van-field
            v-model="noteCode"
            :label="$t('setting.forgetPage.noteCode')"
            :placeholder="$t('setting.googlePage.user')"
            :error-message="noteError"
          >
            <span slot="button" class="slot">
              {{$t('setting.send')}}
            </span>
          </van-field> -->

          <van-field
            v-model="paypw"
            :label="$t('setting.moneyPwd')"
            :placeholder="$t('setting.googlePage.pw')"
            :error-message="paypwError"
          />
        </van-cell-group>
      </w-card>

      <google-state></google-state>

      <w-big-button
        @click="send"
        :title="$t('setting.googlePage.open')"></w-big-button>
    </div>
  </w-back-layout>
</template>

<script>
import googleState from './state'
import { getGoogle, openGoogle } from 'api/setting'
export default {
  data () {
    return {
      key: 'DSNFJERJE3DF30G',
      googleCode: '',
      noteCode: '',
      paypw: '',

      googleError: '',
      noteError: '',
      paypwError: ''
    }
  },
  created () {
    this._getGoogle()
  },
  methods: {
    onCopy () {
      this.$toast(this.$t('setting.copyOk'))
    },
    onError () {
      this.$toast.fail(this.$t('setting.copyErr'))
    },
    async _getGoogle () {
      try {
        const resData = await getGoogle()
        if (resData.success) {
          this.key = resData.data
        }
      } catch (e) {
        console.log(e)
      }
    },
    async _openGoogle () {
      try {
        const resData = await openGoogle(this.googleCode, this.paypw)
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
      this._openGoogle()
    }
  },
  components: {
    googleState
  }
}
</script>

<style lang="scss">
.setting-google {
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
.setting-google {
  .slot {
    font-size: 12px;
    color: $color-primary;
    letter-spacing: 0.27px;
  }
}
</style>
