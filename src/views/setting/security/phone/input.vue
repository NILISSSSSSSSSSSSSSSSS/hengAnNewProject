<template>
  <div class="phone-input">
    <div class="box" @click="onClick">
      <div class="item">
        <span v-if="value.length >= 1">{{value.slice(0, 1)}}</span>
      </div>
      <div class="item">
        <span v-if="value.length >= 2">{{value.slice(1, 2)}}</span>
      </div>
      <div class="item">
        <span v-if="value.length >= 3">{{value.slice(2, 3)}}</span>
      </div>
      <div class="item">
        <span v-if="value.length >= 4">{{value.slice(3, 4)}}</span>
      </div>
    </div>
    <div class="error-Info" v-if="errorInfo">
      {{errorInfo}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    errorInfo: String
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/variable";

.phone-input {
  .box {
    display: flex;
    margin-left: $distance-x1;
    margin-right: $distance-x1;
    .item {
      flex: 1;
      margin: 0 8px;
      height: 48px;
      border-bottom: 1px solid #000;
      font-size: 20px;
      line-height: 48px;
    }
  }
  .error-Info {
    font-size: 12px;
    color: #E31A1A;
    letter-spacing: 0.34px;
    margin-top: 16px;
  }
}
</style>
