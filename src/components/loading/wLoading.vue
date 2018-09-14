<template>
  <div>
    <div class="wallet-loading">
       <Loading size="40px" />
       <div class="mesage">
         {{message}}
        </div>
    </div>
    <div class="cover"></div>
  </div>
</template>
<script>
import { Loading } from 'vant'
export default {
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  components: {
    Loading
  }
}
</script>
<style lang="scss" scoped>
.wallet-loading {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3001;
  /deep/ circle{
    stroke: dodgerblue !important;
  }
  .mesage{
    margin-top: 10px;
    color: white;
  }
  z-index: 3001;
}
.cover {
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 3000;
}
</style>
