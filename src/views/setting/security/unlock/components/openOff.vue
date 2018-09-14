<template>
  <div class="card">
    <div class="left breakAll">
      <span class="title">{{title}}</span>
      <span class="des">{{des}}</span>
    </div>
    <van-switch v-model="switchValue" @change="emit" class="right"/>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    des: String,
    value: Boolean
  },
  data () {
    return {
      switchValue: false
    }
  },
  methods: {
    emit (val) {
      this.$emit('input', val)
    }
  },
  created () {
    this.switchValue = this.value
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variable.scss';
.card{
  // margin-top: .24rem;
  background-color: #fff;
  border-radius: .1rem;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.07);
  display: flex;
  justify-content: space-between;
  padding: 15px 15px;
  align-items: center;
  .left{
    display: flex;
    flex-direction: column;
    width: 3.44rem;
    .title{
      color: $font-color-blue;
      font-size: 14px;
      letter-spacing: 0.17px;
    }
    .des{
      font-size: 13px;
      color: $font-color-gray;
      margin-top: .24rem;
    }
  }
}
</style>
