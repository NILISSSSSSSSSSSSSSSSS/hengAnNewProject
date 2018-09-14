<template>
  <div class="google-state">
    <div class="item">
      {{$t('setting.googlePage.state1')}}
    </div>
    <div class="item">
      {{$t('setting.googlePage.state2')}}
    </div>
    <div class="item">
      {{$t('setting.googlePage.state3')}}
    </div>
    <div class="item">
      {{$t('setting.googlePage.state4')}}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.google-state {
  margin: 0 16px;
  opacity: 0.6;
  font-size: 12px;
  color: $w-text-color;
  letter-spacing: 0.42px;
  .item {
    margin-bottom: 12px;
  }
}
</style>
