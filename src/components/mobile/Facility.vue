<template>
  <div id='facility'>
    <Mtitle :title='$t("home.info.mTitleD")' />
    <p class="desc">{{$t("home.info.descriptionD")}}</p>
    <ul>
      <li
        v-for="(l,i) in $t('home.info.listD')"
        :class='{
          animated :true,
          zoomIn: isSelectPP,
        }'
        :key="i"
      >
        <img
          :src="require(`@/assets/info/${l.mImg}.png`)"
          alt=""
        >
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
      'isSelectPP'
    ])
  },
  components: {
    Mtitle
  }
}
</script>

<style scoped lang="less">
.flex() {
  display: flex;
  align-items: center;
  justify-content: center;
}
#facility {
  padding: 30px 5%;
  background: rgba(249, 249, 255, 1);
  .desc {
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
    font-family: PingFangSC;
    color: rgba(51, 51, 62, 1);
    margin-top: 40px;
  }
  ul {
    .flex();
    margin-top: 30px;
    justify-content: space-between;
    li {
      .flex();
      width: 30%;
      flex-direction: column;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      p {
        font-size: 12px;
        margin-top: 15px;
        font-weight: 400;
        line-height: 17px;
        font-family: PingFangSC;
        color: rgba(51, 51, 62, 1);
      }
    }
  }
}
</style>
