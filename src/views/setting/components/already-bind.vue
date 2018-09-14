<template>
  <w-back-layout
    class="already-bind"
    :title="title">
    <div class="content">
      <w-card>
        <van-cell-group>
          <van-field
            disabled
            v-model="loginName"
            :label="label"
          />
        </van-cell-group>
      </w-card>

      <w-big-button
        :title="buttonText"
        @click="onClickNext"></w-big-button>
    </div>
  </w-back-layout>
</template>

<script>
export default {
  props: {
    title: String,
    loginName: String,
    label: String,
    hint: String,
    buttonText: String
  },
  methods: {
    onClickNext () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
.already-bind {
  .van-cell__value {
    color: #666;
  }
}
</style>
