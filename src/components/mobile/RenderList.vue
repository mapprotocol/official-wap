<template>
  <div id='render-list'>
    <ul>
      <li
        v-for="(l,i) in $t('home.info.listA')"
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

<style scoped lang="less">
.flex() {
  display: flex;
  align-items: center;
  justify-content: center;
}
#render-list {
  padding: 30px 5%;
  ul {
    li {
      .flex();
      margin-top: 30px;
      flex-direction: column;
      img {
        width: 80px;
        height: 80px;
      }
      div {
        .flex();
        height: 100%;
        flex-direction: column;
        p {
          font-size: 12px;
          margin-top: 30px;
          font-weight: 400;
          line-height: 24px;
          font-family: PingFangSC;
          color: rgba(147, 147, 153, 1);
        }
      }
    }
  }
}
</style>
