<template>
  <div id='home'>
    <Header
      @pathChange="pathChange"
      @routerChange="routerChange"
    />
    <Banner />
    <!-- <Introduction /> -->
    <img
      src="../assets/icon-top.png"
      id="homeTop"
      v-if="btnFlag"
      @click="backTop"
    >
    <!-- <Info
      id="info"
      :mTitle='$t("home.info.mTitleA")'
      :vTitle='$t("home.info.vTitleA")'
      :description='$t("home.info.descriptionA")'
      :list='$t("home.info.listA")'
    /> -->
    <InfoList :list='$t("home.info.listA")' />
    <Info
      bg
      :mTitle='$t("home.info.mTitleB")'
      :description='$t("home.info.descriptionB")'
      :list='$t("home.info.listB")'
    />
    <Info
      right
      :mTitle='$t("home.info.mTitleC")'
      :description='$t("home.info.descriptionC")'
      :list='$t("home.info.listC")'
    />
    <Info
      bg
      :mTitle='$t("home.info.mTitleD")'
      :description='$t("home.info.descriptionD")'
      :list='$t("home.info.listD")'
    />
    <Info
      right
      :mTitle='$t("home.info.mTitleE")'
      :description='$t("home.info.descriptionE")'
      :list='$t("home.info.listE")'
    />
    <div
      id="route"
      style="width: 100%"
    >
      <RouteMap :title='$t("home.roadmap._title")' />
    </div>
    <!-- <Mechanism :title='$t("home.mechanism._title")' /> -->
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InfoList from '@/components/InfoList'
import Info from '@/components/Info'
import Banner from './Banner'
// import Introduction from './Introduction'
import RouteMap from './RouteMap'
import Mechanism from './Mechanism'
export default {
  name: 'home',
  components: {
    Header, Banner, Info, InfoList, RouteMap, Mechanism, Footer
  },
  data () {
    return {
      scrollToTop: '',
      btnFlag: false
    }
  },
  methods: {
    pathChange () {
      document.querySelector('#info').scrollIntoView(true)
    },
    routerChange () {
      document.querySelector('#route').scrollIntoView(true)
    },
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop () {
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        console.log(ispeed)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollToTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },
    handleScroll () { // 改变元素#searchBar的top值
      this.scrollToTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

      if (this.scrollToTop >= 600) {
        this.btnFlag = true
      } else {
        this.btnFlag = false
      }
    }

  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="less" scoped>
.flex() {
  display: flex;
  align-items: center;
  justify-content: center;
}
#home {
  .flex();
  width: 100%;
  flex-direction: column;
  justify-content: unset;
  position: relative;
}
#homeTop {
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 100px;
  cursor: pointer;
  // top: 300px;/*开始处于距离顶部300px的位置，之后随着滚动条滚动top值改变，然后在top==100时停止*/
  left: 90%;
  box-sizing: border-box;
  z-index: 2;
}
</style>
