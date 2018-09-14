<template>
  <already-bind
    v-if="isBind"
    :title="$t('setting.moneyPwd')"
    :loginName="this.isBind.payPw.value"
    :label="$t('setting.moneyPwd')"
    :buttonText="$t('setting.changeMoneyPwd')"
    @click="change"
    ></already-bind>
</template>

<script>
import alreadyBind from '../../components/already-bind'
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      isBind: 'setting/isBind'
    })
  },
  created () {
    if (!this.isBind) {
      this.$router.push('/setting/security')
    }
  },
  methods: {
    change () {
      this.$router.push('/setting/security/payPw')
    }
  },
  components: {
    alreadyBind
  }
}
</script>

<style lang="scss" scoped>

</style>
