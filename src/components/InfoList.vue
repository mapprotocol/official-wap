<template>
  <div id='info-list'>
    <ul>
      <li
        v-for="(l,i) in list"
        :key="i"
      >
        <img
          :src="require(`@/assets/info/${l.img}.png`)"
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
export default {
  props: {
    list: {
      type: Array
    }
  },
  data () {
    return {

    }
  },
  mounted () {

  }
}
</script>

<style scoped lang="less">
.flex() {
  display: flex;
  align-items: center;
  justify-content: center;
}
#info-list {
  .flex();
  width: 100%;
  height: 80vh;
  padding: 200px 0;
  ul {
    .flex();
    width: 80%;
    height: 100%;
    justify-content: space-between;
    li {
      .flex();
      width: 20%;
      height: 100%;
      text-align: center;
      border-radius: 10px;
      flex-direction: column;
      justify-content: flex-start;
      img {
        width: 180px;
        height: 180px;
        border-radius: 50%;
        border: 1px solid #6dd6f1;
      }
      div {
        .flex();
        height: 100%;
        flex-direction: column;
        p {
          font-size: 18px;
          margin-top: 10px;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
