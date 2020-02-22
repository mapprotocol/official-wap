<template>
  <div
    id='m_h'
    :class="{ 'select': isSelect,'noSelect': !isSelect, 'showBg':show }"
    :style="{
      width: isSpc ? '60% !important': '',
      left: isSpc ? '20% !important': ''
    }"
  >
    <div :class="{'changeLogo': show}" />
    <div class='t-r'>
      <ul
        class='menu'
        :class="show ? 'rotate': 'rotate-none'"
        @click="setShow"
      >
        <li
          v-for="l in 3"
          :key="l"
        />
      </ul>
    </div>

    <transition
      name="fade"
      mode="out-in"
    >
      <ul
        class='menu-list'
        v-if="show"
        :style="{
          width: isSpc ? '60% !important': '',
          left: isSpc ? '20% !important': ''
        }"
      >
        <li
          v-for="(l,i) in $t('nav')"
          :key="i"
          @click="anchor(l)"
        >
          {{l.name}}
        </li>
        <li>
          <span
            v-for="(l,i) in $t('language.langs')"
            :key="((i+1)*2)+i"
            class='langItem'
            @click="changeLang(l)"
          >
            {{l.name}}
            <span>/</span>
          </span>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setStore } from '../libs/util'
export default {
  data () {
    return {
      show: false,
      sLang: false
    }
  },
  computed: {
    ...mapState([
      'isSelect',
      'isSpc'
    ])
  },
  methods: {
    anchor (l) {
      const { path } = l
      this.show = !this.show
      path.includes('://') ? window.open(path) : this.$emit('anchor', l)
    },
    setShow () {
      this.show = !this.show
    },
    changeLang (l) {
      this.sLang = !this.sLang
      setStore('marcoLang', l.tag)
      this.$i18n.locale = l.tag
      this.setShow()
      this.$router.go(0)
    },
    resize () {
      const clientWidth = document.body.clientWidth
      if (clientWidth > 750) {
        this.isSpc = true
      } else {
        this.isSpc = false
      }
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
#m_h {
  .flex();
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  padding: 0 30px;
  background: transparent;
  justify-content: space-between;
  div {
    &:nth-child(1) {
      width: 49px;
      height: 49px;
      /*background-size: 100% 100%;
      background-image: url("~@/assets/mlogot.png");*/
    }
  }
  // .logo {
  //   width: 49px;
  //   height: 49px;
  //   background-size: 100% 100%;
  //   background-image: url("~@/assets/mlogot.png");
  // }
  .t-r {
    .flex();
    div {
      color: #fff;
      margin-right: 20px;
    }
    .menu {
      .flex();
      width: 27px;
      height: 22px;
      align-items: unset;
      flex-direction: column;
      justify-content: space-between;
      li {
        height: 2px;
        background: #fff;
      }
    }
  }
  .rotate {
    transition: 1s;
    transform: rotate(90deg);
    li {
      background: #000 !important;
    }
  }
  .rotate-none {
    transition: 1s;
    transform: rotate(0deg);
  }
  .menu-list {
    position: fixed;
    z-index: 10;
    top: 90px;
    left: 0;
    width: 100%;
    background: #fff;
    li {
      .flex();
      height: 50px;
      cursor: pointer;
      justify-content: center;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      .langItem {
        // border: 1px solid red;
        &:last-child {
          span {
            display: none;
          }
        }
      }
    }
  }
}
.select {
  background: #030342 !important;
  transition: 1s;
}
.noSelect {
  background: transparent !important;
}
.showBg {
  background: #fff !important;
  transition: 0s;
}
.changeLogo {
  width: 49px;
  height: 49px;
  /*background-size: 100% 100%;
  background-image: url("~@/assets/mlogot_1.png") !important;*/
}
</style>
