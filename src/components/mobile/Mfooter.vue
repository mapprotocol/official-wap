<template>
  <div id='m-footer'>
    <img
      class='logo'
      src="../../assets/info/footer_logo.png"
      alt=""
    >
    <div class='fun'>
      <a
        v-for="(l,i) in $t('footer.fun')"
        :href="l.link"
        target='_blank'
        :key="i"
      >
        {{l.name}}
      </a>
    </div>
    <div class="title">{{$t('footer._title')}}</div>
    <div
      class='outer'
      :class='{
          animated :true,
          slideInLeft: isSelectFooter
        }'
    >
      <a
        v-for="l in $t('footer.icon')"
        :target="l.link ? '_blank' : null"
        :href="l.link || 'javascript:void(0)'"
        :key="l.i"
      >
        <img
          :src='require(`../../assets/icon/${l.i}.png`)'
          alt=""
        >
        <img
          class='hide'
          v-if="l.img"
          :src='require(`../../assets/icon/${l.img}.png`)'
          alt=""
        >
      </a>
    </div>
    <ul
      v-for="(l,i) in $t('footer.mSupport')"
      class='link'
      :key="i"
    >
      <li
        v-for="(al,ai) in l.list"
        :class='{
          animated :true,
          zoomInUp: isSelectFooter
        }'
        :key="ai"
      >
        <a
          :href="al.link.includes('@')?`mailto:${al.link}`:al.link"
          :target="al.link.includes('@')?'':'_blank'"
          v-if="al.link"
        >
          {{al.name}}
        </a>
      </li>
    </ul>
    <p class='copyright'>©️ 2020 MarcoPolo Network Foundation,All Rights Reseved</p>
    <a
      class='download'
      target='_blank'
      href="http://www.marcopolopay.org/download"
    >{{$t('footer.download._title')}}</a>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'isSelectFooter'
    ])
  }
}
</script>

<style scoped lang="less">
.flex() {
  display: flex;
  align-items: center;
  justify-content: center;
}
#m-footer {
  .flex();
  padding: 40px 5%;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(3, 3, 66, 1);
  .logo {
    width: 80%;
  }
  .fun {
    .flex();
    width: 80%;
    margin-top: 55px;
    justify-content: space-between;
    a {
      .flex();
      width: 45%;
      height: 50px;
      color: #fff;
      cursor: pointer;
      border-radius: 50px;
      border: 1px solid #fff;
    }
  }
  .title {
    font-size: 24px;
    margin-top: 60px;
    font-weight: 500;
    line-height: 33px;
    font-family: PingFangSC;
    color: rgba(255, 255, 255, 1);
  }
  .outer {
    .flex();
    margin-top: 40px;
    flex-direction: row;
    justify-content: unset;
    position: relative;
    z-index: 10;
    a {
      .flex();
      width: 33px;
      height: 33px;
      margin-left: 20px;
      position: relative;
      border-radius: 50%;
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        &:hover .hide {
          display: block;
        }
      }
      .hide {
        display: none;
        position: absolute;
        top: 45px;
        width: 100px;
        height: 100px;
      }
      img {
        width: 80%;
      }
    }
  }
  .link {
    margin-top: 40px;
    li {
      margin-top: 15px;
      a {
        color: #fff;
        font-size: 12px;
        font-weight: 400;
        line-height: 17px;
        font-family: PingFangSC;
      }
    }
  }
  .copyright {
    margin-top: 40px;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    font-family: PingFangSC;
    color: rgba(109, 119, 146, 1);
  }
  .download {
    .flex();
    width: 215px;
    height: 44px;
    color: #fff;
    font-size: 16px;
    margin-top: 40px;
    font-weight: 400;
    line-height: 22px;
    border-radius: 24px;
    border: 1px solid #fff;
  }
}
</style>
