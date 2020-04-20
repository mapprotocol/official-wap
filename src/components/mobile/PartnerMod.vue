<template>
  <section class="partner" id='partner'>
    <Mtitle :title='$t("home.partnerInfo.title")' />
    <div class="layout-partner">
      <a :href="item.link" target="_blank" v-for="(item, i) in $t('home.partnerInfo.list')" :key="i" :class="item.img"></a>
    </div>
  </section>
</template>

<script>
import Mtitle from './Mtitle'
export default {
  name: 'PartnerMod',
  components: {
    Mtitle
  }
}
</script>

<style scoped lang="less">
  /*合作伙伴*/
  .layout-partner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0 0 41px 5.1%;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 60px auto 0 auto;
  }
  a {
    width: 44%;
    height: 57px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-bottom: 8px;
    margin-right: auto;
    &.softBank {
      background-image: url("../../assets/partner/1@2x.png");
    }
    &.kuCoin {
      background-image: url("../../assets/partner/2@2x.png");
    }
    &.coinMarket {
      background-image: url("../../assets/partner/3@2x.png");
    }
    &.coinGecko {
      background-image: url("../../assets/partner/4@2x.png");
    }
    &.feiXiaoHao {
      background-image: url("../../assets/partner/5@2x.png");
    }
    &.reuters {
      background-image: url("../../assets/partner/6@2x.png");
    }
    &.crypto {
      background-image: url("../../assets/partner/7@2x.png");
    }
    &.haoDeLian {
      background-image: url("../../assets/partner/8@2x.png");
    }
    &.kSher {
      background-image: url("../../assets/partner/9@2x.png");
    }
    &.kidd {
      background-image: url("../../assets/partner/10@2x.png");
    }
    &.yahoo {
      background-image: url("../../assets/partner/11@2x.png");
    }
    &.zametki {
      background-image: url("../../assets/partner/12@2x.png");
    }
  }
</style>
