<template>
  <backLayout backgroundColor='#F5F6F9' :title="$t('setting.pin')" class="unlockPage">
    <openOff :title="$t('setting.pin')" :des="$t('setting.faceIdPage.notice')" v-model="switchValue" :value="switchValue"></openOff>
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
  }
}
</script>
