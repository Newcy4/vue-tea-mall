<template>
  <div class="home">
    <div class="headers">
      <Header></Header>
      <LyTabs v-model="value" activeColor="#b0352f" @change="changeTab">
        <LyTabItem v-for="item in topBar" :key="item.id" :name="item.id" :title="item.label"></LyTabItem>
      </LyTabs>
    </div>
    <section ref="wrapper">
      <div>
        <div v-for="item in pageData" :key="item.id">
          <Swiper v-if="item.type === 'swiperList'" :swiperList="item.data"></Swiper>
          <Icons v-if="item.type === 'iconsList'" :iconsList="item.data"></Icons>
          <Recommend v-if="item.type === 'recommendList'" :recommendList="item.data"></Recommend>
          <Ad v-if="item.type === 'adList'" :adList="item.data"></Ad>
          <Like v-if="item.type === 'likeList'" :likeList="item.data"></Like>
        </div>
      </div>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'
import Header from './Header.vue'
import Swiper from './Swiper.vue'
import Icons from './Icons.vue'
import Recommend from './Recommend.vue'
import Like from './Like.vue'
import Ad from './Ad.vue'
import { LyTabs, LyTabItem } from 'ly-tab'
// 引入插件
import BetterScroll from 'better-scroll'
import axios from 'axios'
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
    Ad,
    Tabbar
  },
  data() {
    return {
      value: '0',
      topBar: [],
      pageData: []
    }
  },
  methods: {
    changeTab(item) {
      this.addData(item)
    },
    // 获取首页推荐数据
    async getData() {
      const res = await axios({
        url: '/api/index_list/0/data/1'
      })
      this.topBar = Object.freeze(res.data.data.topBar) // 性能优化
      this.pageData = Object.freeze(res.data.data.data)
      // console.log(res)

      // 当页面中的DOM都加载完之后再加载better-scroll
      this.$nextTick(() => {
        new BetterScroll(this.$refs.wrapper, {
          movable: true,
          zoom: true
        })
      })
    },
    // 点击topBar切换页面后重新获取数据
    async addData(index) {
      const res = await axios({
        url: `/api/index_list/${index}/data/1`
      })
      if (res.data.data.constructor !== Array) {
        this.pageData = res.data.data.data
      } else {
        this.pageData = res.data.data
      }
    }
  },
  created() {
    this.getData()
  }
}
</script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
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
