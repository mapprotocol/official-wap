<template>
  <div id='mroadmap'>
    <Mtitle :title='$t("home.roadmap._title")' />
    <ul>
      <li
        v-for="(l,i) in $t('home.roadmap.mcont')"
        :key="i"
      >
        <p class="head">{{l.stage}}</p>
        <h2>{{l.intr}}</h2>
        <p
          class="desc"
          v-for="(item,index) in l.desc"
          :key="((index+1)*2)+index"
        >
          {{item}}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import Mtitle from './Mtitle'
export default {
  components: {
    Mtitle
  }
}
</script>

<style scoped lang="less">
#mroadmap {
  padding: 40px 5%;
  ul {
    margin-top: 50px;
    border-radius: 2px;
    padding: 30px 10px 30px 30px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 10px 0px rgba(3, 3, 61, 0.25);
    li {
      border-left: 1px solid #030342;
      padding: 0 20px;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: -5px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #030342;
      }
      .head {
        font-size: 12px;
        font-weight: 400;
        font-family: PingFangSC;
        color: rgba(147, 147, 153, 1);
      }
      h2 {
        margin-top: 10px;
        font-size: 18px;
        font-weight: 500;
        line-height: 25px;
        font-family: PingFangSC;
        color: rgba(51, 51, 62, 1);
      }
      .desc {
        margin-top: 10px;
        font-size: 12px;
        font-weight: 400;
        line-height: 24px;
        font-family: PingFangSC;
        color: rgba(51, 51, 62, 1);
      }
      &:last-child {
        border-left: 0;
      }
    }
  }
}
</style>
