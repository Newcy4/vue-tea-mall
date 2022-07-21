<template>
  <div class="search-index">
    <Header></Header>
    <section>
      <div class="search-history" v-if="searchArr.length">
        <h2>
          <i class="iconfont icon-shijian"></i>
          <span>历史搜索</span>
          <span @click="deleteStorage">清空历史记录</span>
        </h2>
        <ul>
          <li v-for="(item, index) in searchArr" :key="index" @click="goSearchList(item)">
            {{ item }}
          </li>
        </ul>
      </div>
      <div v-else>暂无搜索记录...</div>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Header from './Search-header'
import Tabbar from '@/components//Tabbar.vue'
import { MessageBox } from 'mint-ui'
export default {
  components: {
    Header,
    Tabbar
  },
  data() {
    return {
      searchArr: []
    }
  },
  created() {
    this.searchArr = JSON.parse(localStorage.getItem('searchList')) || []
    // console.log(this.searchArr)
  },
  methods: {
    async deleteStorage() {
      // MessageBox返回一个Promise对象，在点击取消或确定的时候会返回对应的东西
      let res = await MessageBox({
        title: '提示',
        message: '确定执行此操作?',
        showCancelButton: true
      })
      if (res === 'confirm') {
        // 删除本地存储
        localStorage.removeItem('searchList')
        // 清空数据，因为删除本地存储，页面依赖的渲染数据也没清空
        this.searchArr = []
      }
    },
    // 点击历史搜索，进入搜索界面
    goSearchList(item) {
      this.$router.push({
        name: 'list',
        query: {
          key: item
        }
      })
    }
  }
}
</script>

<style scoped>
.search-index {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
section {
  flex: 1;
  background-color: #f5f5f5;
  overflow: hidden;
}
.search-history h2 {
  position: relative;
  padding: 0.533333rem;
  font-weight: 400;
  font-size: 0.48rem;
}
.search-history h2 i {
  padding-right: 0.08rem;
  color: red;
  font-size: 0.48rem;
}
.search-history h2 span:last-child {
  position: absolute;
  right: 0.533333rem;
}
.search-history ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0 0.266666rem;
}
.search-history ul li {
  margin: 0.266666rem;
  padding: 0.08rem 0.16rem;
  font-size: 0.373333rem;
  border: 1px solid #ccc;
}
</style>
