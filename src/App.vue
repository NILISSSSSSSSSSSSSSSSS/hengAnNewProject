<template>
  <div id='app'>
    <!--<div @click='handle()'>{{cbData}}CLICK</div>
    <span style="position:fixed;top:10px;" v-animation="{distance: distance, time: '0.5s'}">指令</span>
    <button @click="distance='-10px, -10px'">left</button>
    <button @click="distance='10px'">right</button>
    <button @click="distance='0px'">还原</button>
    <router-link to="/about">ABOUT</router-link>
    <router-link to="/">首页</router-link>
    <button @click="scan">扫描</button>
    <router-link to="/login">登录</router-link>
    {{transitionName}}-->
    <transition :name="transitionName">
      <keep-alive :include='include'>
          <router-view class="child-view"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import config from './router/router'
export default {
  name: 'App',
  data () {
    return {
      cbData: '',
      transitionName: '',
      distance: '0px',
      include: ''
    }
  },
  watch: {
    $route (to, from) {
      // console.log(`${to.name}-${to.meta.index}`)
      if (to.meta.index > from.meta.index) {
        this.transitionName = 'slide-left'
      } else if (to.meta.index < from.meta.index) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-none'
      }
    }
  },
  methods: {
    ...mapActions('common', ['GET_COMMON']),
    requestPermission () {
      let permissions = window.cordova.plugins.permissions
      let _this = this
      permissions.checkPermission(permissions.CAMERA, function (s) {
        if (!s.hasPermission) {
          permissions.requestPermission(permissions.CAMERA, function (s) {
            if (s.hasPermission) {
              _this.scan()
            } else {
              console.log('权限申请失败')
            }
          })
        } else {
          _this.scan()
        }
      }, function (err) {
        console.log('权限检查失败', err)
      })
    },
    scan () {
      window.cordova.plugins.barcodeScanner.scan(
        function (result) {
          alert('We got a barcode\n' +
                'Result: ' + result.text + '\n' +
                'Format: ' + result.format + '\n' +
                'Cancelled: ' + result.cancelled)
        },
        function (error) {
          alert('Scanning failed: ' + error)
        },
        {
          preferFrontCamera: true, // iOS and Android
          showFlipCameraButton: true, // iOS and Android
          showTorchButton: true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt: 'Place a barcode inside the scan area', // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats: 'QR_CODE,PDF_417', // default: all but PDF_417 and RSS_EXPANDED
          orientation: 'landscape', // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations: true, // iOS
          disableSuccessBeep: false // iOS and Android
        }
      )
    },
    /**
     * 点击事件绑定函数
     */
    handle () {
      console.log(this.utils)
      // function fun () {
      //   console.log('zz')
      // }
      this.utils.debounce(() => {
        console.log('sss')
      })
    }
  },
  mounted () {
    const that = this
    window.addEventListener('deviceready', function () {
      console.log('is app')
      that.requestPermission()
      that.scan()
    }, false)
  },
  created () {
    console.log(this)
    let includeRoute = []
    config.forEach(route => {
      if (route.meta && route.meta.cache) {
        includeRoute.push(route.name)
      }
    })
    this.include = includeRoute.length > 0 ? includeRoute.join(',') : 'nocacheroute'
    // this.GET_COMMON(() => {
    //   this.cbData = 'CBDATA'
    // })
  }
}
</script>

<style lang='scss'>
@import "./assets/styles/index.scss";
#app {
  position: relative;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.child-view {
  width: 100%;
  height: 100%;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}

.slide-none-leave-active {
  opacity: 0;
  display: none;
}
.slide-none-enter {
  display: inline;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.slide-right-enter,
.slide-left-leave-active {
  opacity: 0;
  transform: translate(-100%, 0);
  -webkit-transform: translate(-100%, 0);
}
</style>
