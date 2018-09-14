<template>
  <w-back-layout
    class="setting"
    :title="$t('setting.common')">
    <div class="content">
      <w-card>
        <van-cell-group>
          <van-cell class="qiehuan">
            <span class="title">
              <i slot="left-icon" class="iconfont icon-xiaoxitongzhi"></i>
              {{$t('setting.commonPage.notice')}}
            </span>
            <van-switch
              @change="_switchInform"
              slot="right-icon" v-model="inform" />
          </van-cell>
          <van-cell is-link @click="goLink('/')">
            <span class="title">
              <i slot="left-icon" class="iconfont icon-jianchagengxin"></i>
              {{$t('setting.commonPage.checkUpdate')}}
            </span>
          </van-cell>
          <van-cell>
            <span class="title">
              <i slot="left-icon" class="iconfont icon-banbenhao"></i>
              {{$t('setting.commonPage.version')}}
            </span>
            <span slot="right-icon" class="version">{{version}}</span>
          </van-cell>
        </van-cell-group>
      </w-card>

      <w-big-button
        :title="$t('setting.exit')"
        @click="goLink('/setting/security')"></w-big-button>
    </div>
  </w-back-layout>
</template>

<script>
import { getSetting, switchInform } from 'api/setting'
export default {
  data () {
    return {
      inform: true,
      version: '---'
    }
  },
  created () {
    this._getSetting()
  },
  watch: {
  },
  methods: {
    goLink (path) {
      this.$router.push(path)
    },
    async _getSetting () {
      try {
        const resData = await getSetting()
        if (resData.success) {
          const data = resData.data
          this.inform = data.inform
          this.version = data.version
        }
      } catch (e) {
        console.log(e)
      }
    },
    async _switchInform () {
      try {
        const resData = await switchInform(this.inform)
        if (resData.success) {
          const data = resData.data
          this.inform = data.inform
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss">
</style>

<style lang="scss" scoped>
  .setting {
    .version {
      opacity: 0.42;
      color: $w-text-color;
      letter-spacing: 0.25px;
    }
    .qiehuan{
      display: flex;
      align-items: center;
    }
    .title {
      font-size: 16px;
      color: $w-text-color;
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
<style lang="scss">
</style>
