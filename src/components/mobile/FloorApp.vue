<template>
  <div id='floor-app'>
    <Mtitle :title='$t("home.info.mTitleE")' />
    <p class="desc">{{$t("home.info.descriptionE")}}</p>
    <ul>
      <li
        v-for="(l,i) in $t('home.info.listE')"
        :key="i"
        :class='{
          animated :true,
          slideInLeft: isSelectApp && (i%2),
          zoomInUp: isSelectApp && !(i%2),
        }'
        :style="{
          backgroundImage: 'url('+require(`../../assets/info/${l.mImg}.png`)+')',
          backgroundSize: '100%'
          }"
      >
        <!-- <img
          :src="require(`@/assets/info/${l.mImg}.png`)"
          alt=""
        > -->
        <div>
          <p
            v-for="item in l.desc"
            :key="item"
          >
            {{item}}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Mtitle from './Mtitle'
export default {
  computed: {
    ...mapState([
      'isSelectApp'
    ])
  },
  components: {
    Mtitle
  }
}
</script>

<style scoped lang="less">
.felx() {
  display: flex;
  align-items: center;
  justify-content: center;
}
#floor-app {
  padding: 50px 5%;
  .desc {
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
    font-family: PingFangSC;
    color: rgba(51, 51, 62, 1);
    margin-top: 40px;
  }
  ul {
    margin-top: 40px;
    li {
      .felx();
      flex-direction: column;
      margin-top: 40px;
      min-height: 163px;
      div {
        width: 90%;
        padding: 10px 20px;
        p {
          font-size: 12px;
          font-weight: 400;
          line-height: 24px;
          font-family: PingFangSC;
          color: rgba(147, 147, 153, 1);
          &:first-child {
            font-size: 18px;
            font-weight: 500;
            line-height: 25px;
            font-family: PingFangSC;
            color: rgba(51, 51, 62, 1);
          }
        }
      }
    }
    :nth-child(2) {
      div {
        p {
          color: #fff !important;
        }
      }
    }
  }
}
</style>
