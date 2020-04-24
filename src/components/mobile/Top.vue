<template>
  <div id='top'>
    <div class='logo' />
    <h1 :class="$i18n.locale">{{$t('home.banner._title')}}</h1>
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
    text-align: center;
    margin-top: 30px;
    margin-bottom: 28px;
    width: 90%;
    height: auto;
    font-size:24px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(108,80,251,1);
    line-height:28px;
    letter-spacing: unset;

    &.en, &.ko {

    }
  }
  p {
    .text();
    margin-top: 30px;
    font-size: 14px;
    font-weight: 400;
    line-height: 28px;
  }
  p:nth-last-child(2n+1) {
    margin-top: 0
  }
}
</style>
