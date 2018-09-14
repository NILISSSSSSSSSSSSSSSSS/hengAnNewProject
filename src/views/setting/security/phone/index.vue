<template>
  <w-back-layout
    class="setting-phone"
    :title="$t('setting.bindPhone')"
    :leftPath="'/setting/security'">
    <div class="content">
      <w-card class="setting-w-card">
        <van-cell-group>
          <van-cell is-link @click="selectCountry = true">
            <span class="title">
              {{$t('setting.address')}}
              <span class="right">
                {{country}}
              </span>
            </span>
          </van-cell>
          <van-field
            type="number"
            v-model="phone"
            clearable
            :label="'+ ' + callingCode"
            :placeholder="$t('setting.inputPhone')"
            :error-message="phoneError"
            @input="_phoneVerify"
          />
        </van-cell-group>
      </w-card>
    <div class="setting-hint">
      {{$t('setting.phonePage.phoneHint')}}
    </div>

      <w-big-button
        bgColor="#389FFB"
        color="#fff"
        :title="$t('setting.next')"
        @click="onClickNext"></w-big-button>

      <!-- 选择国家 -->
      <van-popup v-model="selectCountry" position="bottom" :overlay="false">
        <van-picker :columns="countryArr"
          @confirm="onChangeCountry"
          show-toolbar
          @cancel="selectCountry = false" />
      </van-popup>
    </div>
  </w-back-layout>
</template>

<script>
import countryData from 'config/country.json'
export default {
  data () {
    return {
      countryArr: [],
      selectCountry: false,
      phoneError: '',

      phone: '',
      callingCode: '',
      selectCountryText: '',
      country: ''
    }
  },
  created () {
    this.getCountryArr()
    this.onChangeCountry('China')
  },
  methods: {
    // 获取国家数据
    getCountryArr () {
      this.countryArr = countryData.map(obj => {
        return obj.name
      })
    },
    onChangeCountry (country) {
      for (let x of countryData) {
        if (x.name === country) {
          this.country = country
          this.callingCode = x.callingCode
          this.selectCountryText = `${x.code} +${x.callingCode}`
          break
        }
      }
      this.selectCountry = false
    },
    // 验证手机号
    _phoneVerify () {
      if (!this.utils.phoneVerify(this.phone)) {
        this.phoneError = this.$t('setting.phonePage.hint1')
      } else {
        this.phoneError = ''
      }
    },
    onClickNext () {
      if (!this.phone || !this.callingCode) {
        this.phoneError = this.$t('setting.phonePage.hint2')
        return
      }

      this.$store.commit('setting/setPhone', {
        phone: this.phone,
        callingCode: this.callingCode
      })
      this.$router.push('/setting/security/phone/verify')
    }
  }
}
</script>

<style lang="scss">
.setting-phone {
  .setting-w-card {
    .van-cell-group {
      .van-cell__title {
        color:$w-text-color;
      }
      .van-cell__value {
        color:$w-text-color;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.setting-phone {
  position: relative;
  font-size: 16px;

  .right {
    float: right;
  }
}
</style>
