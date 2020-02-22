<template>
  <div id='routemap'>
    <div class='page-title'>{{title}}</div>
    <ul
      class="roadmap-box"
      :style="{
      'width': `${col * 180}px`
    }"
    >
      <li
        v-for="(type, i) in road"
        :key="i"
        :class="[
        !(Math.floor(i / col) % 2) ? 'fl' : 'rl',
        'node-' + type
      ]"
      >
        <div class="text">
          <p
            style="font-weight: bold;color: #6dd6f1;padding-bottom: 10px;font-size: 16px"
            v-for="(item,index) in $t(`home.roadmap.content1[${i+1}]`)"
            :key="index"
          >{{item}}</p>
          <p
            v-for="(item,index) in $t(`home.roadmap.content[${i+1}]`)"
            :key="((index+1)*2)+index"
            style="padding-top: 5px;overflow: auto;"
          >{{ item }}</p>
        </div>
        <span class="point" />
      </li>
    </ul>
    <div style="clear: both;"></div>
  </div>
</template>

<script>
const road = []
road.push(...new Array(1).fill('finished'))
road.push(...new Array(3).fill('future'))

export default {
  props: {
    'title': {
      type: String
    }
  },
  data () {
    return {
      col: 6,
      road
    }
  },
  mounted () {
    this.col = Math.min(6, Math.floor((window.innerWidth - 160) / 180)) || 1
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onResize () {
      this.col = Math.min(6, Math.floor((window.innerWidth - 160) / 180)) || 1
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>

<style scoped lang="less">
.flex() {
  display: flex;
  align-items: center;
  justify-content: center;
}
#routemap {
  .flex();
  width: 100%;
  height: 100vh;
  padding: 5% 0;
  flex-direction: column;
  background-color: #f5fafd;
  .roadmap-box {
    width: 80%;
    margin: 10% auto;
    padding: 0 60px;
    font-size: 14px;
    position: relative;
    box-sizing: content-box;
    .fl {
      float: left;
      &:nth-child(even) {
        .text {
          top: 180px;
          &:after {
            top: -30px;
          }
        }
      }
      &:nth-child(odd) {
        .text {
          bottom: 180px;
          &:after {
            bottom: -30px;
          }
        }
      }
      // &:last-of-type:after {
      //   content: "";
      //   position: absolute;
      //   top: 148px;
      //   right: -12px;
      //   width: 4px;
      //   height: 4px;
      //   background-color: #6dd6f1;
      //   border-radius: 50%;
      //   box-shadow: 12px 0 0 #6dd6f1, 24px 0 0 #6dd6f1;
      // }
    }
    li {
      flex: 0 0 180px;
      width: 180px;
      height: 300px;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        top: 149px;
        left: 0;
        height: 2px;
        width: 180px;
        background-color: #6dd6f1;
      }
      &:last-child:before {
        width: 300px;
      }
      .point {
        position: absolute;
        width: 20px;
        height: 20px;
        border: solid 2px #6dd6f1;
        top: 150px;
        left: 90px;
        border-radius: 10px;
        background-color: #fff;
        z-index: 10;
        transform: translate3d(-50%, -50%, 0);
      }
      .text {
        position: absolute;
        width: 330px;
        min-height: 60px;
        border-radius: 10px;
        line-height: 18px;
        padding: 20px;
        top: 0;
        left: 89px;
        display: flex;
        flex-direction: column;
        z-index: 5;
        &:after {
          content: "";
          position: absolute;
          left: 0px;
          width: 2px;
          height: 150px;
          background-color: #6dd6f1;
        }
        &:first-child {
          p {
            &:last-child {
              min-height: 80px;
            }
          }
        }
      }
    }
    .node-finished {
      .point {
        background-color: #6dd6f1;
        &:after {
          content: "";
          border-color: #fff;
        }
      }
    }
    .node-future {
      &:before {
        content: "";
        position: absolute;
        top: 149px;
        height: 2px;
        width: 180px;
        background-color: #ccc;
      }
      .text {
        &:after {
          content: "";
          position: absolute;
          left: 0px;
          width: 2px;
          height: 150px;
          background-color: #ccc;
        }
      }
      .point {
        border: solid 2px #ccc;
        &:after {
          content: "";
          border-color: #ccc;
        }
      }
    }
  }
}
</style>
