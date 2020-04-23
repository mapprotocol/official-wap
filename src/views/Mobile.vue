<template>
  <div :id='isSpc?"isSpc":"mobile"'>
    <Mheader @anchor='anchor' />
    <Top />
   <!-- <RenderList />-->
    <Feature />
    <EconomicModel />
   <!-- <Facility />-->
  <!--  <FloorApp />-->
    <RoadMap />
   <!-- <ProductVideo />-->
  <!--  <PartnerMod />-->
    <Mfooter />
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import Mheader from '@/components/Mheader'
import Top from '@/components/mobile/Top'
import Feature from '@/components/mobile/Feature'
import EconomicModel from '@/components/mobile/EconomicModel'
import Mfooter from '../components/mobile/Mfooter'
import RoadMap from '../components/mobile/RoadMap'
import PartnerMod from '../components/mobile/PartnerMod'
import { setMeta } from '@/libs/util'
const { keyword, description, description2 } = setMeta()

export default {
  metaInfo: {
    meta: [
      { name: 'keyword', content: keyword },
      { name: 'description', content: description },
      { name: 'description2', content: description2 }
    ]
  },
  created () {
    // const clientWidth = document.body.clientWidth
    // if (clientWidth > 750) {
    //   this.$router.push({ name: 'home' })
    // }
  },
  computed: {
    ...mapState([
      'isSpc'
    ])
  },
  mounted () {
    window.onscroll = this.onScrool
    this.resize()
    window.onresize = this.resize
  },
  methods: {
    ...mapMutations({
      setScroolTop: 'setScroolTop',
      setIsSpc: 'setIsSpc'
    }),
    onScrool (e) {
      const { scrollTop } = e.target.scrollingElement
      this.setScroolTop(scrollTop)
    },
    anchor (l) {
      document.querySelector(`#${l.path}`).scrollIntoView(true)
    },
    resize () {
      const clientWidth = document.body.clientWidth
      if (clientWidth > 750) {
        this.setIsSpc(true)
      } else {
        this.setIsSpc(false)
      }
    }
  },
  components: {
    Mheader,
    Top,
    Feature,
    EconomicModel,
    Mfooter,
    RoadMap,
    PartnerMod
  }
}
</script>
<style lang="less" scoped>
#mobile {
  width: 100%;
  box-sizing: border-box;
}
#isSpc {
  width: 60%;
  box-sizing: border-box;
}
</style>
