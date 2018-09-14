<template>
  <already-bind
    v-if="isBind"
    :title="$t('setting.secondValidation')"
    :loginName="this.isBind.google.value"
    :label="$t('setting.googlePage.key')"
    :buttonText="$t('setting.googlePage.change')"
    :hint="$t('setting.googlePage.hint')"
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
      this.$router.push('/setting/security/google')
    }
  },
  components: {
    alreadyBind
  }
}
</script>

<style lang="scss" scoped>

</style>
