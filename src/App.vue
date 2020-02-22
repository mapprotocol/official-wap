<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  // created () {
  //   const clientWidth = document.body.clientWidth
  //   if (clientWidth < 750) {
  //     this.$router.push({ name: 'mobile' })
  //   }
  // }
}
</script>
<style lang="less">
.flex() {
  display: flex;
  align-items: center;
  justify-content: center;
}
#app {
  .flex();
  // .ivu-carousel-dots-inside {
  //   bottom: 110px !important;
  // }
  .page-title {
    font-size: 30px;
    font-weight: bold;
    position: relative;
    padding-bottom: -20px;
    color: #6dd6f1;
    text-align: center;
    &:after {
      content: "";
      width: 60px;
      height: 4px;
      background: #6dd6f1;
      border-radius: 2px;
      position: absolute;
      left: 50%;
      bottom: -10px;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
