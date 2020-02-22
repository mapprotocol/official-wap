<template>
  <div id='economic-model'>
    <Mtitle :title='$t("home.info.mTitleC")' />
    <p class='desc'>
      {{$t("home.info.descriptionC")}}
    </p>
    <ul>
      <li
        v-for="(l,i) in $t('home.info.listC')"
        :class='{
          animated :true,
          rotateInDownLeft: isSelectModel
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
  data () {
    return {
    }
  },
  mounted () {
  },
  components: {
    Mtitle
  },
  computed: {
    ...mapState([
      'isSelectModel'
    ])
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.flex() {
  display: flex;
  align-items: center;
  justify-content: center;
}
#economic-model {
  padding: 30px 5%;
  .desc {
    font-size: 12px;
    font-weight: 400;
    margin-top: 40px;
    line-height: 24px;
    font-family: PingFangSC;
    color: rgba(51, 51, 62, 1);
  }
  ul {
    .flex();
    width: 100%;
    margin-top: 30px;
    align-items: unset;
    flex-direction: column;
    justify-content: space-between;
    li {
      .flex();
      margin-top: 30px;
      padding: 20px;
      text-align: center;
      justify-content: unset;
      flex-direction: column;
      box-shadow: 0px 2px 10px 0px rgba(3, 3, 61, 0.25);
      img {
        width: 80px;
        height: 80px;
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
