<template>
  <w-back-layout
    class="setting-forget-email"
    :title="$t('setting.passwordPage.modify')">
    <div class="content">
      <div class="setting-hint">{{$t('setting.forgetPage.noteHint', {phone: '123*****'})}}</div>

      <w-card>
        <van-cell-group>
          <van-field v-model="phoneCode" :placeholder="$t('setting.forgetPage.noteCode')">
            <span slot="button" class="send">{{$t('setting.send')}}</span>
          </van-field>
        </van-cell-group>
      </w-card>

      <w-big-button
        @click="onClick"
        :title="$t('common.ok')"></w-big-button>
    </div>
  </w-back-layout>
</template>

<script>
export default {
  data () {
    return {
      phoneCode: ''
    }
  },
  methods: {
    onClick () {
      this.$router.push('/setting/security/forget/newPw')
    }
  }
}
</script>

<style lang="scss" scoped>
.setting-forget-email {
  .setting-hint {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .send {
    font-size: 15px;
    color: #389FFB;
    letter-spacing: 0.34px;
  }
}
</style>
