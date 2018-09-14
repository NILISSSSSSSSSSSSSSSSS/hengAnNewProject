<template>
 <van-cell-group class="phone">
    <van-field type='tel' v-model.trim="phoneValue" :clearable="clearable" :placeholder="$t('user.placeholder.pleaseInputPhoneNumber')" :error-message='errorMessage'>
      <div slot="label" size="small" type="primary" class="countryBtn" @click="showSelect">{{defaultAreaCode}}</div>
    </van-field>
    <van-popup v-model="show" position="bottom" :overlay="true">
        <van-picker :columns="columns" :show-toolbar='true' @cancel="onCancel" @confirm="onConfirm" />
    </van-popup>
  </van-cell-group>
</template>

<script>
import countryData from '@/config/country.json'
export default {
  name: 'wSelectPhone',
  props: {
    errorMessage: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      columns: [],
      show: false,
      phoneValue: '',
      defaultAreaCode: '+86'
    }
  },
  created () {
    this.columns = countryData.map(x => {
      return {
        text: `${x.name}-${x.callingCode}`,
        callingCode: x.callingCode
      }
    })
  },
  methods: {
    showSelect () {
      this.show = true
    },
    onConfirm (item) {
      this.areaCode = item.callingCode
      this.$emit('update:phoneCode', item.callingCode)
      this.defaultAreaCode = `+${item.callingCode}`
      this.show = false
    },
    onCancel (item) {
      this.show = false
    }
  },
  watch: {
    phoneValue (value) {
      this.$emit('update:phone', value)
    }
  }
}
</script>

<style lang="scss" scoped>

.phone {
  /deep/ .van-cell__title{
    max-width: 60px !important;
  }
  .countryBtn {
    width: 60px;
    text-align: center;
    border-right: 1px solid;
    margin-left: -10px;
  }
  .country {
    position: fixed;
    bottom: 0px;
    width: 100%;
    text-align: center;
    left: 0;
  }
}
</style>
