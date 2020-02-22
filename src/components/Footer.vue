<template>
  <div id='footer'>
    <div class='main'>
      <img
        src="@/assets/logo.png"
        class='logo'
        alt="LOGO"
      >
      <ul
        v-for="(l,i) in $t('footer.support')"
        :key="i"
      >
        <li
          v-for="(al,ai) in l.list"
          :key="ai"
        >
          <a
            :href="al.link.includes('@')?`mailto:${al.link}`:al.link"
            :target="al.link.includes('@')?'':'_blank'"
            v-if="al.link"
          >
            {{al.name}}
          </a>
          <p v-else>
            {{al.name}}
          </p>
        </li>
      </ul>
    </div>
    <div class='outer'>
      <a
        v-for="l in $t('footer.icon')"
        target="_blank"
        :href="l.link"
        :key="l.i"
      >
        <img
          style="width: 55px;height: 55px;margin-left: 20px"
          :src='require(`../assets/icon/${l.i}.png`)'
          alt=""
        >
      </a>
    </div>
    <p class='copyright'>©️ 2019 MarcoPoloFoundation,All Rights Reseved</p>
  </div>
</template>

<script>
export default {
  props: {

  }
}
</script>

<style scoped lang="less">
.flex() {
  display: flex;
  align-items: center;
  justify-content: center;
}
#footer {
  .flex();
  width: 100%;
  flex-direction: column;
  padding: 50px 0;
  background: url("../assets/f/fbg.png") no-repeat;
  .main {
    .flex();
    width: 80%;
    max-height: 300px;
    align-items: unset;
    justify-content: flex-start;
    // justify-content: space-around;
    .logo {
      width: 90px;
      height: 90px;
    }
    ul {
      margin-left: 10%;
      :nth-child(1) {
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      li {
        margin-top: 10px;
        a {
          color: #fff;
          font-size: 14px !important;
          &:hover {
            color: #6dd6f1;
          }
        }
      }
    }
  }
  .outer {
    .flex();
    width: 80%;
    margin-top: 30px;
    flex-direction: row;
    img {
      width: 50px;
      height: 50px;
      padding: 10px;
      margin-left: 10px;
      border-radius: 50%;
      box-shadow: 1px 1px 3px #fff;
    }
  }
  .copyright {
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    margin-top: 30px;
  }
}
</style>
