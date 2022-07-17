<template>
  <div class="home">
    <div class="headers">
      <Header></Header>
      <LyTabs v-model="value" activeColor="#b0352f">
        <LyTabItem name="1" title="推荐"></LyTabItem>
        <LyTabItem name="2" title="大红袍"></LyTabItem>
        <LyTabItem name="3" title="绿茶"></LyTabItem>
        <LyTabItem name="4" title="铁观音"></LyTabItem>
        <LyTabItem name="5" title="普洱"></LyTabItem>
        <LyTabItem name="6" title="茶具"></LyTabItem>
        <LyTabItem name="7" title="花茶"></LyTabItem>
      </LyTabs>
    </div>
    <section class="wrapper">
      <div>
        <Swiper></Swiper>
        <Icons></Icons>
        <Recommend></Recommend>
        <Like></Like>
      </div>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/common/Tabbar.vue'
import Header from '@/components/common/Header.vue'
import Swiper from './Swiper.vue'
import Icons from './Icons.vue'
import Recommend from './Recommend.vue'
import Like from './Like.vue'
import { LyTabs, LyTabItem } from 'ly-tab'
// 引入插件
import BetterScroll from 'better-scroll'
export default {
  name: 'Home',
  components: {
    Header,
    LyTabs,
    LyTabItem,
    Swiper,
    Icons,
    Recommend,
    Like,
    Tabbar
  },
  data() {
    return {
      value: '1'
    }
  },
  mounted() {
    new BetterScroll('.wrapper', {
      movable: true,
      zoom: true
    })
  }
}
</script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}

section {
  flex: 1;
  z-index: -1;
  padding-top: 2.24rem;
  padding-bottom: 1.6rem;
}

.headers {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
}
</style>
