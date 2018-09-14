<template>
  <w-back-layout
    class="setting-forget"
    :title="$t('setting.passwordPage.modify')">
    <div class="content">
      <w-card>
        <van-cell-group>
          <van-cell
            is-link
            v-link="'/setting/security/forget/verify?type=note'">
            <span class="title">
              {{$t('setting.forgetPage.note')}}
            </span>
          </van-cell>
          <van-cell
            is-link
            v-link="'/setting/security/forget/verify?type=email'">
            <span class="title">
              {{$t('setting.forgetPage.email')}}
            </span>
          </van-cell>
        </van-cell-group>
      </w-card>
    </div>
  </w-back-layout>
</template>

<style lang="scss">
.setting-forget {
  .van-cell {
    font-size: 16px;
    color: #06115C;
    letter-spacing: 0.34px;
  }
}
</style>

<style lang="scss" scoped>
.setting-forget {

}
</style>
