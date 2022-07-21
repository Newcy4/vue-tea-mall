<template>
  <div class="search-list">
    <div class="headers">
      <Header></Header>
      <ul>
        <li v-for="(item, index) in searchList.data" :key="index" @click="chengeTab(index)">
          <div :class="searchList.currentIndex === index ? 'active' : ''">
            {{ item.name }}
          </div>
          <div class="search-filter" v-if="index !== 0">
            <i class="iconfont icon-arrow_up_fat" :class="item.status === 1 ? 'active' : ''"></i>
            <i class="iconfont icon-arrow_down_fat" :class="item.status === 2 ? 'active' : ''"></i>
          </div>
        </li>
      </ul>
    </div>
    <section>
      <ul v-if="goodsList.length">
        <li v-for="(item, index) in goodsList" :key="index">
          <img v-lazy="item.imgUrl" alt="" />
          <h3>{{ item.name }}</h3>
          <div class="price">
            <div>
              <span>¥</span>
              <b>{{ item.price }}</b>
            </div>
            <div>立即购买</div>
          </div>
        </li>
      </ul>
      <h2 v-else>暂无数据</h2>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Header from './Search-header.vue'
import Tabbar from '@/components/Tabbar.vue'
import http from '@/common/api/request.js'
export default {
  components: {
    Header,
    Tabbar
  },
  data() {
    return {
      goodsList: [],
      searchList: {
        currentIndex: 0,
        data: [
          /**
          status: 0 都不亮
          status: 1 上箭头亮
          status: 2 下箭头亮
           */
          { name: '综合', key: 'zonghe' },
          { name: '价格', status: 0, key: 'price' },
          { name: '销量', status: 0, key: 'num' }
        ]
      }
    }
  },
  computed: {
    orderBy() {
      // 知道当前是哪一个对象
      let obj = this.searchList.data[this.searchList.currentIndex]
      // 针对状态，判断圣墟还是降序
      let val = obj.status == '1' ? 'asc' : 'desc'
      return {
        [obj.key]: val
      }
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      let res = await http.$axios({
        url: '/api/goods/shopList',
        params: {
          searchName: this.$route.query.key,
          ...this.orderBy // 如："price": asc
        }
      })
      this.goodsList = res
      // console.log(res)
    },
    chengeTab(index) {
      this.searchList.currentIndex = index
      // 点击的下标对应数据的哪一个
      let item = this.searchList.data[index]
      // 取消所有状态的状态值
      this.searchList.data.forEach((v, i) => {
        if (i !== index) {
          v.status = 0
          // console.log(i)
          // console.log(index)
          // console.log(item.status)
        }
      })
      // 当前点击的改变状态
      if (index === this.searchList.currentIndex) {
        item.status = item.status == 1 ? 2 : 1
      }
      // 发送请求进行数据排序
      this.getData()
    }
  },
  watch: {
    $route() {
      // 监听路由是否发生改变，发生改变再次请求
      this.getData()
    }
  }
}
</script>

<style scoped>
.search-list {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.headers ul {
  display: flex;
  justify-content: space-around;
  padding: 0.533333rem 0;
  font-size: 0.426666rem;
}
.headers ul li {
  display: flex;
  align-items: center;
}
.headers ul li > div {
  padding: 0 0.08rem;
}
.headers ul li .search-filter {
  display: flex;
  flex-direction: column;
}
section {
  flex: 1;
  overflow: hidden;
}
section ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
section ul li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 50%;
  padding: 0.266666rem;
}
section ul li img {
  width: 4.533333rem;
  height: 4.533333rem;
}
section ul li h3 {
  width: 100%;
  font-size: 0.373333rem;
  color: #222;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
section ul li .price {
  display: flex;
  justify-content: space-between;
  padding: 0.266666rem 0;
  width: 100%;
  font-size: 14px;
}
section ul li .price div:first-child span {
  font-size: 0.32rem;
  color: #b0352f;
}
section ul li .price div:first-child b {
  color: #b0352f;
  font-size: 0.426666rem;
}
section ul li .price div:last-child {
  padding: 0.08rem 0.16rem;
  color: #fff;
  background-color: #b0352f;
  border-radius: 0.16rem;
}

.active {
  color: red;
}

.like img[lazy='loading'] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
