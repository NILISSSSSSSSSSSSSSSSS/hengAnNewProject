<template>
<div class="startPage">
  <img class="logo" src="@/assets/images/logo.png">
  <div class="buttons">
    <div class="button left" @click="toggleLogin">
      {{$t('user.login')}}
    </div>
    <div class="button right" @click="toggleRegister">
      {{$t('user.register')}}
    </div>
  </div>
  <div class="waves">
    <w-waves :speed='2.5'></w-waves>
  </div>
  <van-actionsheet v-show="showLogin" :overlay='showLogin' :actions="loginActions" :cancel-text="$t('common.cancel')" @cancel='toggleLogin' />
  <van-actionsheet v-show="showRegister" :overlay='showRegister' :actions="registerActions" @cancel='toggleRegister' :cancel-text="$t('common.cancel')" />
</div>
</template>

<script>
import wWaves from '@/components/waves/'
export default {
  name: 'home',
  components: {
    wWaves
  },
  data () {
    return {
      showLogin: false,
      showRegister: false,
      loginActions: [{
        name: this.$t('user.phoneLogin'),
        url: '/user/login',
        callback: this.selectAction
      },
      {
        name: this.$t('user.emailLogin'),
        url: '/user/emaillogin',
        callback: this.selectAction
      }
      ],
      registerActions: [{
        name: this.$t('user.phoneRegister'),
        url: '/user/register',
        callback: this.selectAction
      },
      {
        name: this.$t('user.emailRegister'),
        url: '/user/emailregister',
        callback: this.selectAction
      }
      ]
    }
  },
  methods: {
    toggleLogin () {
      this.showLogin = !this.showLogin
    },
    toggleRegister () {
      this.showRegister = !this.showRegister
    },
    selectAction (item) {
      this.$router.push(item.url)
    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
.startPage {
  position: relative;
  .logo {
    top: 2.8rem;
    width: 110px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: black;
    z-index: 999;
  }
  .button {
    font-family: $chinese-regular;
    font-size: 15px;
    background-color: white;
    letter-spacing: 0;
    text-shadow: 0 1px 1px rgba(158, 93, 29, 0.5);
    line-height: 0.88rem;
    color: $color-primary;
    position: absolute;
    bottom: 0.59rem;
    width: 3rem;
    border-radius: 0.88rem;
    text-align: center;
    z-index: 999;
    &.left {
      left: 0.5rem;
    }
    &.right {
      right: 0.5rem;
    }
  }
  .waves {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 250px;
    /deep/ .wave-xp {
      background-color: white;
    }
  }
}
</style>
