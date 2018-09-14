<template>
<w-back-layout :title="$t('header.findLoginPwd')">
  <div class="contentPadding">
    <w-card>
      <van-cell-group>
        <van-cell :title="$t('user.label.countrySelect')" is-link arrow-direction="right" :value="countryName" @click="showCountry=true" />
        <van-field :error-message='phone_error' v-model="phone" type="tel" :label="'+'+phoneCode" :placeholder="$t('user.placeholder.pleaseInputPhoneNumber')" />
      </van-cell-group>
    </w-card>
    <div class="form-tip">{{$t('user.notice.pwdFormat')}}</div>
    <div class="country" v-show="showCountry">
      <van-picker :columns="columns" :show-toolbar='true' @confirm="onCofirmCountry" @cancel="showCountry=false" />
    </div>
  </div>
  <div class="bottomButton">
    <div class="button" @click="goNext">{{$t('user.btn.nextStep')}}</div>
  </div>
</w-back-layout>
</template>

<script>
import countryData from '@/config/country.json'
export default {
  data () {
    return {
      phone: '',
      phone_error: '',
      phoneCode: '86',
      countryName: '中国大陆',
      columns: [],
      showCountry: false
    }
  },
  methods: {
    onCofirmCountry (item) {
      this.phoneCode = item.callingCode
      this.showCountry = false
      this.countryName = item.name
    },
    goNext () {
      let error = ''
      if (this.phone === '') {
        error = '请输入手机号'
      } else if (!this.utils.phoneVerify(this.phone)) {
        error = '手机号格式不对'
      }
      if (!error) {
        this.$router.push(`/user/findpassword/phone/nextstep?phoneCode=${this.phoneCode}&phone=${this.phone}`)
      } else {
        this.$toast({
          position: 'top',
          message: error
        })
      }
    }
  },
  created () {
    // this.countryName = countryData.find(x => x.callingCode === 86).name
    this.columns = countryData.map(x => {
      return {
        text: `${x.name}-${x.callingCode}`,
        callingCode: x.callingCode,
        name: x.name
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/user";
.country {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  z-index: 999;
}
</style>
