<template>
  <div class="swiper-main">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in swiperList" :key="index">
        <img :src="item.imgUrl" :alt="item.title" />
      </swiper-slide>
    </swiper>
    <!-- 轮播图点点 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'Swiper',
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperList: [
        {
          id: 1,
          imgUrl: './images/swiper1.jpeg'
        },
        {
          id: 2,
          imgUrl: './images/swiper2.jpeg'
        },
        {
          id: 3,
          imgUrl: './images/swiper3.jpeg'
        }
      ],
      swiperOption: {
        // swiper3
        autoplay: 3000,
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
@import '@/assets/styles/var.less';
.swiper-slide {
  touch-action: none;
}
.swiper-main {
  width: 100%;
  height: 4.4rem;
  position: relative;
  img {
    width: 100%;
    height: 4.4rem;
  }
  .swiper-pagination {
    width: 100%;
    position: absolute;
    bottom: 0.133333rem;
  }
}

::v-deep .swiper-pagination-bullet {
  margin: 0.08rem;
}
::v-deep .swiper-pagination-bullet-active {
  background-color: @default;
}
</style>
