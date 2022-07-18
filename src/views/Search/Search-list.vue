<template>
  <div class="search-list">
    <div class="headers">
      <Header></Header>
      <ul>
        <li>
          <div>综合</div>
        </li>
        <li>
          <div>价格</div>
          <div class="search-filter">
            <i class="iconfont icon-arrow_up_fat"></i>
            <i class="iconfont icon-arrow_down_fat"></i>
          </div>
        </li>
        <li>
          <div>销量</div>
          <div class="search-filter">
            <i class="iconfont icon-arrow_up_fat"></i>
            <i class="iconfont icon-arrow_down_fat"></i>
          </div>
        </li>
      </ul>
    </div>
    <section>
      <ul>
        <li>
          <img src="" alt="" />
          <h3>赛事茶-第三届武夷山茶叶交易会暨仙店杯-优质奖肉桂160g</h3>
          <div class="price">
            <div>
              <span>¥</span>
              <b>238</b>
            </div>
            <div>立即购买</div>
          </div>
        </li>
        <li>
          <img src="" alt="" />
          <h3>赛事茶-第三届武夷山茶叶交易会暨仙店杯-优质奖肉桂160g</h3>
          <div class="price">
            <div>
              <span>¥</span>
              <b>238</b>
            </div>
            <div>立即购买</div>
          </div>
        </li>
        <li>
          <img src="" alt="" />
          <h3>赛事茶-第三届武夷山茶叶交易会暨仙店杯-优质奖肉桂160g</h3>
          <div class="price">
            <div>
              <span>¥</span>
              <b>238</b>
            </div>
            <div>立即购买</div>
          </div>
        </li>
      </ul>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Header from './Search-header.vue'
import Tabbar from '@/components/Tabbar.vue'
export default {
  components: {
    Header,
    Tabbar
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
</style>
