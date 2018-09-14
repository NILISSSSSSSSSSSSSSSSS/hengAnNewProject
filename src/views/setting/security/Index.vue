<template>
  <w-back-layout
    class="setting-security"
    :title="$t('setting.security')">
    <div class="content">
      <w-card class="setting-w-card">
        <van-cell-group>
          <van-cell is-link v-link="'/setting/security/password'">
            <span class="title">
              <i slot="left-icon" class="iconfont icon-xiugaimima"></i>
              {{$t('setting.password')}}
            </span>
          </van-cell>
        </van-cell-group>
      </w-card>

      <w-card class="setting-w-card">
        <van-cell-group>
          <van-cell is-link @click="clickPhone">
            <span class="title">
              <i slot="left-icon" class="iconfont icon-shouji"></i>
              {{$t('setting.bindPhone')}}
            </span>
          </van-cell>
          <van-cell is-link @click="clickEmail">
            <span class="title">
              <i slot="left-icon" class="iconfont icon-youxiang"></i>
              {{$t('setting.bindEmail')}}
            </span>
          </van-cell>
          <van-cell is-link @click="clickGoogle">
            <span class="title">
              <i slot="left-icon" class="iconfont icon-gugeyanzheng"></i>
              {{$t('setting.secondValidation')}}
            </span>
          </van-cell>
        </van-cell-group>
      </w-card>

      <w-card class="setting-w-card">
        <van-cell-group>
          <van-cell is-link v-link="'/setting/security/unlock/face'">
            <span class="title">
              <i slot="left-icon" class="iconfont icon-renlianjiesuo"></i>
              {{$t('setting.faceId')}}
            </span>
          </van-cell>
          <van-cell is-link v-link="'/setting/security/unlock/finger'">
            <span class="title">
              <i slot="left-icon" class="iconfont icon-zhiwenjiesuo"></i>
              {{$t('setting.touchId')}}
            </span>
          </van-cell>
          <van-cell is-link v-link="'/setting/security/unlock/pin'">
            <span class="title">
              <i slot="left-icon" class="iconfont icon-PINma"></i>
              {{$t('setting.pin')}}
            </span>
          </van-cell>
        </van-cell-group>
      </w-card>

      <w-card>
        <van-cell-group>
          <van-cell is-link @click="clickPayPw">
            <span class="title">
              <i slot="left-icon" class="iconfont icon-zijinmima"></i>
              {{$t('setting.moneyPwd')}}
            </span>
          </van-cell>
        </van-cell-group>
      </w-card>
    </div>
  </w-back-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import { isBind } from 'api/setting'
export default {
  computed: {
    ...mapGetters({
      isBind: 'setting/isBind'
    }),
    toPhone () {
      if (!this.isBind || !this.isBind.phone.bind) {
        return '/setting/security/phone'
      }
      return '/setting/security/phone/change'
    },
    toEmail () {
      if (!this.isBind || !this.isBind.email.bind) {
        return '/setting/security/email'
      }
      return '/setting/security/email/change'
    },
    toGoogle () {
      if (!this.isBind || !this.isBind.google.bind) {
        return '/setting/security/google'
      }
      return '/setting/security/google/change'
    },
    toPayPw () {
      if (!this.isBind || !this.isBind.payPw.bind) {
        return '/setting/security/payPw'
      }
      return '/setting/security/payPw/change'
    }
  },
  created () {
    this._isBind()
  },
  methods: {
    async _isBind () {
      try {
        const resData = await isBind()
        if (resData.success) {
          this.$store.commit('setting/setIsBind', resData.data)
        }
      } catch (e) {
        console.log(e)
      }
    },
    clickPhone () {
      this.$router.push(this.toPhone)
    },
    clickEmail () {
      this.$router.push(this.toEmail)
    },
    clickGoogle () {
      this.$router.push(this.toGoogle)
    },
    clickPayPw () {
      this.$router.push(this.toPayPw)
    }
  }
}
</script>

<style lang="scss" scoped>
.setting-security {
  .title {
    font-size: 16px;
    color:$w-text-color;
    letter-spacing: 0.34px;

    i {
      margin-right: $distance-icon;
    }
  }
  .iconfont {
    font-size: 22px;
    vertical-align: middle;
  }
}
</style>
