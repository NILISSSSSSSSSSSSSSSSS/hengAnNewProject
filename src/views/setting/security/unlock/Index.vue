<template>
  <backLayout backgroundColor='#fff' :title="title" class="unlockPage">

  </backLayout>
</template>

<script>
import backLayout from '@/components/backLayout/'
export default {
  components: {
    backLayout
  },
  props: {
    title: {
      type: String
    }
  },
  created () {
  }
}
</script>
