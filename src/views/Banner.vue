<template>
  <div id='content'>
    <Carousel
      class='carousel'
      arrow="never"
    >
      <CarouselItem
        v-for="l in 1"
        :key="l"
      >
        <img
          :src="require(`@/assets/b/${l}.jpg`)"
          class="demo-carousel"
          alt=""
        >
      </CarouselItem>
    </Carousel>
    <div class="t-area">
      <div class='title'>
        <h1>{{$t('home.banner._title')}}</h1>
        <p v-for="item in $t('home.banner.desc')" :key="item">{{item}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.flex() {
  display: flex;
  align-items: center;
  justify-content: center;
}
@height: 70vh;
#content {
  width: 100%;
  // height: @height;
  margin-top: -80px;
  position: relative;
  .carousel {
    .demo-carousel {
      .flex();
      width: 100%;
      color: red;
      font-size: 30px;
      // height: @height;
      object-fit: cover;
    }
  }
  .t-area {
    .flex();
    .title {
      position: absolute;
      top: 25%;
      left: 12%;
      width: 50%;
      color: #fff;
      h1 {
        font-size: 40px;
      }
      p {
        width: 90%;
        margin-top: 50px;
        font-size: 22px;
      }
      p:nth-last-child(2n+1) {
        margin-top: 0
      }
      @media screen and (max-width: 1100px) {
        width: 60%;
        h1 {
          font-size: 30px;
        }
        p {
          width: 100%;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
