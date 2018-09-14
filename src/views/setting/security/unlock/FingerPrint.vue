<template>
  <backLayout backgroundColor='#F5F6F9' :title="$t('setting.touchId')" class="unlockPage">
    <openOff :title="$t('setting.touchId')" :des="$t('setting.touchIdPage.notice')" v-model="switchValue" :value="switchValue"></openOff>
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
