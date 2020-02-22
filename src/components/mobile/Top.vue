<template>
  <div id='top'>
    <div class='logo' />
    <h1>{{$t('home.banner._title')}}</h1>
    <p v-for="item in $t('home.banner.desc')" :key="item">{{item}}</p>
  </div>
</template>

<style scoped lang="less">
.flex() {
  display: flex;
  align-items: center;
  justify-content: center;
}
.text {
  color: #fff;
  font-family: PingFangSC;
}
#top {
  .flex();
  color: #fff;
  padding: 90px 5%;
  flex-direction: column;
  background-size: 100% 100%;
  justify-content: space-around;
  background-image: url("~@/assets/mobile/tbg.png");
  .logo {
    width: 170px;
    height: 170px;
    background-size: 100% 100%;
    background-image: url("~@/assets/mlogo.png");
  }
  h1 {
    .text();
    font-size: 18px;
    font-weight: 500;
    line-height: 25px;
    text-align: center;
    margin-top: 30px;
  }
  p {
    .text();
    margin-top: 30px;
    font-size: 12px;
    font-weight: 400;
    line-height: 28px;
  }
  p:nth-last-child(2n+1) {
    margin-top: 0
  }
}
</style>
