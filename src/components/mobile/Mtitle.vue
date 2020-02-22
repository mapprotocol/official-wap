<template>
  <div id='title'>
    {{title}}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      require: true,
      type: String
    }
  }
}
</script>

<style scoped lang="less">
.flex() {
  display: flex;
  align-items: center;
  justify-content: center;
}
#title {
  .flex();
  text-align: center;
  position: relative;
  padding: 0 5%;
  font-size: 24px;
  font-weight: 500;
  line-height: 33px;
  font-family: PingFangSC;
  color: rgba(51, 51, 62, 1);
  &::after {
    content: "";
    position: absolute;
    width: 48px;
    height: 4px;
    left: calc(50% - 24px);
    bottom: -20px;
    background: rgba(3, 3, 66, 1);
    border-radius: 2px;
  }
}
</style>
