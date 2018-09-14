<template>
  <div class="home">HOME
      <button @click="showLoading">Show Loading</button>
      <button @click="hideLoading">Hide Loading</button>
      <button @click="showPasswordInput">Show PasswordInput</button>
      <wPasswordInput :show.sync="showInput" @checkPassword="checkPassword" @close="showClose"></wPasswordInput>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      showInput: false
    }
  },
  methods: {
    showLoading () {
      this.$loading.show()
    },
    hideLoading () {
      this.$loading.hide()
    },
    showPasswordInput () {
      this.$set(this.$data, 'showInput', true)
    },
    checkPassword (password) {
      console.log(`密码:${password}`)
      // alert(password)
    },
    showClose () {
      // alert('输入密码操作取消')
      console.log('输入密码操作取消')
    }
  }
}
</script>
