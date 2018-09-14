<template>
  <already-bind
    v-if="isBind"
    :title="$t('setting.bindPhone')"
    :loginName="this.isBind.phone.value"
    :label="$t('setting.phone')"
    :buttonText="$t('setting.changePhone')"
    :hint="$t('setting.phonePage.phoneHint')"
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
      this.$router.push('/setting/security/phone')
    }
  },
  components: {
    alreadyBind
  }
}
</script>

<style lang="scss" scoped>

</style>
