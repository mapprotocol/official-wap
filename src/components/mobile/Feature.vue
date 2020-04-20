<template>
  <div id='feature'>
    <Mtitlt :title='$t("home.info.mTitleB")' />
   <!-- <p class='desc'>
      {{$t("home.info.descriptionB")}}
    </p>-->
    <ul>
      <li
        v-for="(l,i) in $t('home.info.listB')"
        :class='{
          animated :true,
          zoomIn: isSelectFeature,
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
import Mtitlt from './Mtitle'
export default {
  computed: {
    ...mapState([
      'isSelectFeature'
    ])
  },
  components: {
    Mtitlt
  }
}
</script>

<style scoped lang="less">
.flex() {
  display: flex;
  align-items: center;
  justify-content: center;
}
#feature {
  padding: 60px 5%;
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
    width: 100%;
    flex-wrap: wrap;
    margin-top: 30px;
    align-items: unset;
    justify-content: space-between;
    li {
      .flex();
      width: 30%;
      margin-top: 30px;
      text-align: center;
      justify-content: unset;
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
