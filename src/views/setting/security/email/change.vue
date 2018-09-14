<template>
  <already-bind
    v-if="isBind"
    :title="$t('setting.bindEmail')"
    :loginName="this.isBind.email.value"
    :label="$t('setting.email')"
    :buttonText="$t('setting.changeEmail')"
    :hint="$t('setting.emailPage.hint')"
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
      this.$router.push('/setting/security/email')
    }
  },
  components: {
    alreadyBind
  }
}
</script>

<style lang="scss" scoped>

</style>
