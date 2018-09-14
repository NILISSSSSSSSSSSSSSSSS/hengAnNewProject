<template>
<w-back-layout :title="$t('header.findLoginPwd')">
  <div class="contentPadding">
    <w-card>
      <van-cell-group>
      <van-cell :title="$t('user.btn.findPwdByPhone')" is-link arrow-direction="right" v-link="'/user/findpassword/phone'" />
      <van-cell :title="$t('user.btn.findPwdByEmail')" is-link arrow-direction="right" v-link="'/user/findpassword/email'" />
    </van-cell-group>
    </w-card>
  </div>
</w-back-layout>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
@import "~styles/user";
</style>
