<template>
  <div id='productVideo'>
    <Mtitle :title='"Marcopolo Protocol Introduction"' />
   <!-- <div class="video_box">
      <video  poster="https://files.marcopolo.link/image/product-media.png" controls controlslist="nodownload" style="object-fit: fill; width: 100%; height: 100%">
        <source src="https://files.marcopolo.link/video/marcopolo.mp4" type="video/mp4">
        <source src="https://files.marcopolo.link/video/marcopolo.ogg" type="video/ogg">
        <p>Your browser does not support the HTML5 video tag.</p>
      </video>
    </div>-->
    <div class="video_box">
      <video id="video" controls  controlslist="nodownload" style="object-fit: fill; width: 100%; height: 100%" poster="https://files.marcopolo.link/image/product-media.png" src="https://files.marcopolo.link/video/marcopolo.mp4">
        <p>Your browser does not support the HTML5 video tag.</p>
      </video>
    </div>
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
#productVideo {
  padding: 40px 0;
  .video_box {
    width: 100%;
    margin: 62px auto 0 auto;
  }
  .video_box video {
    width: 100%;
  }
}
</style>
