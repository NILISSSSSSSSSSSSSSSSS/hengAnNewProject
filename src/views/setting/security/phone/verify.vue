<template>
  <w-back-layout
    class="setting-verify"
    :title="$t('setting.bindPhone')">
    <div class="content">
      <w-card class="card setting-w-card">
        <span class="state" v-html="$t('setting.phonePage.sendHint')"></span>
        <span class="phone">
          <span class="small">+{{phone.callingCode}}</span>
          {{phone.phone}}
        </span>
      </w-card>

      <!-- 密码输入框 -->
      <!-- <van-password-input
        :value="code"
        :length="4"
        @focus="showKeyboard = true"
        :error-info="errInfo"
      /> -->

      <phone-input
        @click="showKeyboard = true"
        :value="code"
        :error-info="errInfo"
        class="phone-input"></phone-input>

      <!-- 数字键盘 -->
      <van-number-keyboard
        :show="showKeyboard"
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard = false"
      />

      <div class="get">
        {{$t('setting.phonePage.none')}}
        <span
          @click="sendCode"
          :class="{ban: !canSend}"
          class="afresh">
          {{$t('setting.phonePage.two')}}
          <i v-if="!canSend">
            ({{countdown + 's'}})
          </i>
        </span>
      </div>
    </div>
  </w-back-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import phoneInput from './input'
import { bindLoginName, getCode } from 'api/setting'

export default {
  data () {
    return {
      showKeyboard: false,

      code: '',
      errInfo: '',
      countdown: 0
    }
  },
  computed: {
    ...mapGetters({
      phone: 'setting/phone'
    }),
    canSend () {
      return this.countdown <= 0
    }
  },
  created () {
    if (!this.phone.phone || !this.phone.callingCode) {
      this.$router.history.go(-1)
    }
    this._getCode()
  },
  watch: {
    code (val) {
      if (val.length === 4) {
        this.code = ''
        // this.errInfo = this.$t('setting.phonePage.noteErr')
        this._bindLoginName()
      }
    }
  },
  methods: {
    onInput (num) {
      if (this.code.length < 4) this.code += num
    },
    onDelete () {
      if (this.code.length > 0) this.code = this.code.slice(0, this.code.length - 1)
    },
    async _bindLoginName () {
      try {
        const resData = await bindLoginName(this.phone, this.code)
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
    async _getCode () {
      try {
        const resData = await getCode(this.phone)
        if (resData.success) {
          this.$toast(this.$t('setting.sendSuccess'))
          this._countdown()
        }
      } catch (e) {
        console.log(e)
      }
    },
    _countdown () {
      const end = Date.now() + 1000 * 60
      this.countdown = 60
      let coutdownInterval = setInterval(() => {
        this.countdown = Math.ceil((end - Date.now()) / 1000)
        if (this.countdown < 10) this.countdown = '0' + this.countdown
        if (this.countdown <= 0) {
          clearInterval(coutdownInterval)
        }
      }, 1000)
    },
    sendCode () {
      if (!this.canSend) return
      this._getCode()
    }
  },
  components: {
    phoneInput
  }
}
</script>

<style lang="scss" scoped>
  .setting-verify {
    text-align: center;
    font-size: 16px;
    .card {
      padding: 14px;
    }
    .strong {
      color: $w-text-color;
    }
    .phone {
      display: block;
      font-size: 20px;
      padding-top: 12px;
    }
    .small {
      font-size: 14px;
    }
    .get {
      margin-top: 24px;
      .afresh {
        color: $color-primary;
      }
      .ban {
        color: #999;
      }
    }
  }
</style>
