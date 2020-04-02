<template>
  <div id='download'>
    <div class='area'>
      <div class='inter'>
        <div class='logo'></div>
        <h2>MarcoPolo</h2>
        <p>A New Peer-to-Peer Electronic Cash System</p>
      </div>
      <div v-if="isAndroid">
        <a
          class='btn'
          href="https://files.marcopolo.link/app/MarcoPay.apk"
        >
          Download APK
        </a>
        <a
          class='btn'
          href="https://play.google.com/store/apps/details?id=com.marcopay"
        >Google Play
        </a>
      </div>
      <div v-else>
        <div
          class='btn'
          @click='download'
        >
          Download
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isAndroid: false,
      isIOS: true
    }
  },
  mounted () {
    this.getOs()
  },
  methods: {
    getOs () {
      const u = navigator.userAgent
      const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
      const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
      this.isAndroid = isAndroid
      this.isIOS = isIOS
    },
    download () {
      const { isIOS } = this
      isIOS ? window.open('https://testflight.apple.com/join/LpZbwecg') : alert('Please open this link using your mobile phone. ')
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
#download {
  .flex();
  width: 100%;
  height: 100vh;
  background-size: 100% 100%;
  background-image: url('../assets/download/bg.png');
  .area {
    .flex();
    width: 80%;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    .inter {
      .flex();
      flex-direction: column;
      .logo {
        width: 123px;
        height: 114px;
        background-size: 100% 100%;
        background-image: url('../assets/download/logo.png');
      }
      h2 {
        color: #fff;
        font-size: 24px;
        margin-top: 43px;
        line-height: 24px;
        font-family: Arual;
      }
      p {
        color: #fff;
        font-size: 16px;
        font-weight: 300;
        margin-top: 10px;
        line-height: 22px;
        text-align: center;
        font-family: PingFangSC;
      }
    }
    .btn {
      .flex();
      width: 215px;
      height: 48px;
      color: #fff;
      cursor: pointer;
      font-size: 19px;
      margin-top: 20px;
      font-weight: 400;
      line-height: 26px;
      border-radius: 28px;
      font-family: PingFangSC;
      background: rgba(0, 136, 255, 1);
      box-shadow: 1px 3px 1px rgba(0, 136, 255, 0.5);
    }
  }
}
</style>
