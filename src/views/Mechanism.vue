<template>
  <div id='mechanism'>
    <div class='page-title'>{{title}}</div>
    <div class='area'>
      <img
        v-for="l in $t('home.mechanism.list')"
        :key="l"
        :src="`https://qiniu.truescan.net/exchange/${l}.png`"
        alt=""
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'title': {
      type: String
    }
  }
}
</script>

<style scoped lang="less">
.flex() {
  display: flex;
  justify-content: center;
  align-items: center;
}
#mechanism {
  .flex();
  width: 100%;
  height: 60vh;
  flex-direction: column;
  .area {
    .flex();
    flex-wrap: wrap;
    max-width: 1000px;
    flex-direction: row;
    margin: 46px auto 0px;
    align-items: flex-start;
    img {
      width: 220px;
      height: 126px;
      margin: 8px;
      border-radius: 5px;
    }
  }
}
</style>
