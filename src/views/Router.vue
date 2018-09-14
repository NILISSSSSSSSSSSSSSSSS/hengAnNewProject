<template>
  <div class="wraper">
    <div v-for="(item,key) in config" :key="key" v-if="item.meta">{{item.meta.index}}-{{item.name}}</div>
  </div>
</template>
<script>
import config from '../router/router.js'

export default {
  data () {
    return {
      config: config
    }
  },
  created () {
    console.log(config)
  }
}
</script>
