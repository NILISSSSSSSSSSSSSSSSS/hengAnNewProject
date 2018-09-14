<template>
<w-back-layout :title="$t('header.findLoginPwd')">
  <div class="contentPadding">
    <w-card>
      <van-cell-group>
        <div class="cell" v-html="$t('user.notice.haveSendSMSCode')"></div>
        <div class="cell">
          <span class="small">
          +{{$route.query.phoneCode}}
        </span>
          <span class="big">
          {{this.phone}}
        </span>
        </div>
      </van-cell-group>
    </w-card>
    <div style="height:50px"></div>
    <w-phone-input :errorInfo='errorInfo' :value="code" @click="showKeyboard=true"></w-phone-input>
    <div class="tip">
      {{$t('user.notice.noSMSVerify')}}
      <span class="btn" @click='getSmsCode'>{{$t('user.btn.reget')}}</span>
    </div>
    <van-number-keyboard :show="showKeyboard" @input="onInput" @delete="onDelete" @blur="showKeyboard = false" />
  </div>
</w-back-layout>
</template>

<script>
import wPhoneInput from '../components/phoneInput.vue'
import { checkFindPwdPhoneVertifyCode, getFindPwdPhoneVertifycode } from '@/api/user'
export default {
  data () {
    return {
      showKeyboard: false,
      code: '',
      errorInfo: '',
      phone: ''
    }
  },
  components: {
    wPhoneInput
  },
  methods: {
    onInput (data) {
      this.code += data
    },
    onDelete () {
      this.code = this.code.substr(0, this.code.length - 1)
    },
    getSmsCode () {
      getFindPwdPhoneVertifycode(this.phone)
    }
  },
  created () {
    this.phone = this.$route.query.phone
    this.getSmsCode()
  },
  watch: {
    code (value) {
      if (value.length === 4) {
        if (value === '0000') {
          this.errorInfo = '密码错误'
        } else {
          checkFindPwdPhoneVertifyCode({
            loginname: `${this.phoneCode}${this.phone}`,
            code: value
          }).then(res => {
            if (res.success) {
              this.$router.push(
                `/user/findpassword/setpassword?type=1&phone=${
                  this.phone
                }&phoneCode=${this.code}&verfityCode=${this.smsCode}`
              )
            }
          })
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/user";
.contentPadding {
  /deep/ .cell {
    padding: 10px;
    font-family: $chinese-regular;
    font-size: 20px;
    color: $font-color-gray;
    letter-spacing: 0.0037rem;
    text-align: left;
    text-align: center;
    strong {
      font-weight: bold;
      margin: 0 5px;
      color: $font-color-blue;
    }
    .small {
      font-size: 15px;
      font-weight: bold;
      color: $font-color-blue;
    }
    .big {
      font-weight: bold;
      color: $font-color-blue;
    }
  }
  .tip {
    text-align: center;
    margin-top: 50px;
    color: $font-color-gray;
    .btn {
      font-family: $chinese-regular;
      font-size: 15px;
      color: $color-primary;
      letter-spacing: 0.17px;
      text-align: left;
    }
  }
}
</style>
