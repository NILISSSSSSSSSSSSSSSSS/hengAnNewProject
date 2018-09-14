<template>
  <div class="cell">
    <slot name="left"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang='scss' scoped>
.cell{
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: .15rem 0;
  &:after{
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    transform: scaleY(0.5);
    background-color: #E1E1E1;
  }
}
</style>
