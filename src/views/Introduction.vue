<template>
  <div id='introduction'>
    <ul class='content'>
      <li
        v-for="l in 3"
        :key="l"
      >
        {{l}}
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
#introduction {
  .flex();
  width: 80%;
  position: relative;
  z-index: 10;
  height: 300px;
  margin-top: -100px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px #6dd6f1;
  .content {
    .flex();
    width: 100%;
    height: 100%;
    li {
      width: 30%;
      height: 80%;
      margin-left: 20px;
      border: 1px solid blue;
    }
  }
}
</style>
