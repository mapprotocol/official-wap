<template>
  <div id='header'>
    <div class='logoArea'>
      <img
        src="@/assets/logo.png"
        class='logo'
        alt="logo"
      >
      <div>
        <p class='logoT'>MarcoPolo</p>
      </div>
    </div>

    <ul class='menu'>
      <!-- <li
        v-for="(l,i) in $t('nav')"
        :key="i"
      >
        <router-link
          :to='l.path'
          tag='a'
        >
          {{l.name}}
        </router-link>
      </li> -->
      <li style="margin-left: 40px;color: #fff">{{$t('nav2.name1')}}</li>
      <li style="margin-left: 40px;color: #fff" @click="pathChange">{{$t('nav2.name2')}}</li>
      <li style="margin-left: 40px;color: #fff" @click="routerChange">{{$t('nav2.name3')}}</li>
      <li style="margin-left: 40px;">
      <li>
        <Dropdown
          style="margin-left: 20px;"
          @on-click="changeLanguage"
        >
          <Button>
            {{$t('language._title')}}
            <Icon type="ios-arrow-down"></Icon>
          </Button>
          <DropdownMenu slot="list">
            <DropdownItem
              v-for="item in $t('language.langs')"
              :name='item.tag'
              :key="item.tag"
            >
              {{item.name}}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </li>
    </ul>
  </div>
</template>

<script>
import { setStore } from '@/libs/util'
export default {
  data () {
    return {
    }
  },
  methods: {
    changeLanguage (lang) {
      setStore('marcoLang', lang)
      location.reload()
    },
    pathChange () {
      this.$emit('pathChange')
    },
    routerChange () {
      this.$emit('routerChange')
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
#header {
  .flex();
  position: relative;
  z-index: 10;
  width: 80%;
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  .logoArea {
    .flex();
    .logo {
      width: 90px;
      height: 90px;
    }
    .logoT {
      font-size: 20px;
      color: #fff;
    }
  }
  .menu {
    .flex();
    li {
      font-size: 17px;
      cursor: pointer;
      a {
        font-size: 17px;
        color: #fff;
      }
    }
  }
}
</style>
