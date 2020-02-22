<template>
  <div
    id='info'
    :class='bg ? "bg" : ""'
  >
    <div
      class='main'
      :class='right ? "reverse" : ""'
    >
      <div class='m-l'>
        <h2>{{ mTitle }}</h2>
        <h2>{{ vTitle }}</h2>
        <p>
          {{ description }}
        </p>
      </div>
      <ul
        class='m-r'
        :style="{
          'min-width': `${list.length > 4 ? '620px':list.length === 4 ? '850px':''}`,
          'max-width': `${list.length >= 4 ? '620px':''}`,
          }"
      >
        <!-- :style="{
          'flex-wrap': `${list.length>4?'wrap':'unset'}`
          }" -->
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
  </div>
</template>

<script>
export default {
  props: {
    mTitle: {
      type: String,
      default: ''
    },
    vTitle: {
      type: String,
      default: ''
    },
    description: {
      type: String
    },
    right: {
      type: Boolean
    },
    bg: {
      type: Boolean
    },
    list: {
      type: Array
    }
  }
}
</script>

<style scoped lang="less">
.flex() {
  display: flex;
  align-items: center;
  justify-content: center;
}
#info {
  .flex();
  width: 100%;
  padding: 200px 0;
  .main {
    .flex();
    width: 80%;
    height: 100%;
    justify-content: space-around;
    .m-l {
      .flex();
      width: 30%;
      height: 50%;
      align-items: unset;
      flex-direction: column;
      h2 {
        font-size: 28px;
        font-weight: bold;
        &:nth-child(2) {
          margin-top: 20px;
          color: #627792;
          font-size: 15px;
          font-weight: unset;
        }
      }
      p {
        margin-top: 5px;
      }
    }
    .m-r {
      display: flex;
      flex-wrap: wrap;
      li {
        max-width: 180px;
        height: 350px;
        border-radius: 10px;
        margin: 10px 0 0 20px;
        border: 1px solid #6dd6f1;
        img {
          width: 100%;
          height: 130px;
          border-radius: 10px 10px 0 0;
        }
        div {
          .flex();
          height: 220px;
          overflow: auto;
          margin-top: -5px;
          padding-top: 5px;
          align-items: unset;
          flex-direction: column;
          p {
            margin-top: 5px;
            text-align: center;
          }
        }
      }
    }
  }
  .reverse {
    flex-direction: row-reverse;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    color: rgba(98, 119, 146, 1);
  }
}
.bg {
  background-color: #f5fafd;
}
</style>
