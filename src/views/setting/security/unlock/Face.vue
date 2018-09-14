<template>
  <backLayout backgroundColor='#F5F6F9' :title="$t('setting.faceId')" class="unlockPage">
    <openOff :title="$t('setting.faceId')" :des="$t('setting.faceIdPage.notice')" v-model="switchValue" :value="switchValue"></openOff>
  </backLayout>
</template>

<script>
import backLayout from '@/components/backLayout/'
import openOff from './components/openOff.vue'
export default {
  components: {
    backLayout,
    openOff
  },
  data () {
    return {
      switchValue: true
    }
  },
  destroyed () {
    console.log('des')
  }
}
</script>
