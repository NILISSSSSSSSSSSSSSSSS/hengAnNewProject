<template>
  <div class="wpasswordinput" :class="{'show':show}">
    <NavBar left-arrow @click-left="closeInput" title="请输入支付密码">
    </NavBar>
    <PasswordInput :value="value" v-show="true"></PasswordInput>
    <div style="height:50px"/>
    <NumberKeyboard
        :show="true"
        @input="onInput"
        @delete="onDelete">
     </NumberKeyboard>
  </div>
</template>
<script>
import { PasswordInput, NumberKeyboard, Icon, NavBar } from 'vant'
export default {
  name: 'wPasswordInput',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      value: ''
    }
  },
  components: {
    PasswordInput,
    NumberKeyboard,
    Icon,
    NavBar
  },
  methods: {
    closeInput () {
      this.value = ''
      this.$emit('update:show', false)
      this.$emit('close')
    },
    onInput (key) {
      this.value = (this.value + key).slice(0, 6)
      if (this.value.length === 6) {
        this.$emit('checkPassword', this.value)
      }
    },
    onDelete () {
      this.value = this.value.slice(0, this.value.length - 1)
    }
  }
}
</script>
<style lang="scss" scoped>
.wpasswordinput {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.85);
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background-color: white;
  z-index: 1000;
  transform: translateX(101%);
  transition: all 0.5s;
  &.show{
    transform: translateX(0);
  }
  .van-number-keyboard {
    position: relative;
  }
  .van-password-input {
    margin: 0px;
    background-color: white;
    border:1px solid #e8e8e8;
  }
}
</style>
