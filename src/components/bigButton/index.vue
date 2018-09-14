<template>
  <div class="w-button">
    <van-button
      @click="onClick"
      :style="contentStyles">{{title}}</van-button>
  </div>
</template>

<script>
export default {
  name: 'w-big-button',
  props: {
    title: String,
    bgColor: {
      type: String,
      default: '#389FFB'
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  computed: {
    contentStyles () {
      return {
        'background-color': this.bgColor,
        'color': this.color
      }
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
.w-button {
  .van-button {
    width: 100%;
    border-radius: 100px;
  }
}
</style>

<style lang="scss" scoped>
.w-button {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
}
</style>
