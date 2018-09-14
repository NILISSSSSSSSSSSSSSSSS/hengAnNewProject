<template>
  <div class="get-code-input">
    <van-field
      v-model="loginName"
      :type="type"
      :label="label"
      :placeholder="placeholder"
      :error-message="errorMessage"
      @input="change">
      <span
        @click="sendCode"
        :class="{ban: !canSend}"
        slot="button" class="send">
        {{$t('setting.send')}}
        <i v-if="!canSend">
          ({{countdown + 's'}})
        </i>
      </span>
    </van-field>
  </div>
</template>

<script>
import { getCode } from 'api/setting'
export default {
  name: 'w-get-code-input',
  props: {
    label: String,
    placeholder: String,
    errorMessage: String,
    type: String
  },
  data () {
    return {
      loginName: '',
      countdown: 0
    }
  },
  computed: {
    canSend () {
      return this.countdown <= 0
    }
  },
  methods: {
    change () {
      this.$emit('input', this.loginName)
    },
    sendCode () {
      if (!this.canSend) return
      this._getCode()
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
    async _getCode () {
      try {
        const resData = await getCode(this.loginName)
        if (resData.success) {
          this.$toast(this.$t('setting.sendSuccess'))
          this._countdown()
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.get-code-input {
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
