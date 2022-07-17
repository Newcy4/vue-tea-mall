<template>
  <header class="header">
    <img src="@/assets/images/logo.png" alt="茶七网" />
    <div class="search">
      <i class="iconfont icon-fangdajing"></i>
      <span>搜您喜欢的</span>
    </div>
    <i class="iconfont icon-kefu kefu"></i>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="less" scoped>
@import '@/assets/styles/var.less';

.header {
  height: 1.173333rem;
  width: 100%;
  z-index: 999;
  background-color: @default;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    height: 1.066667rem;
    width: 1.44rem;
    margin-right: 0.133333rem;
  }
  .kefu {
    color: @words-white;
    font-size: 0.64rem;
  }
  .search {
    height: 0.8rem;
    width: 6.56rem;
    background: #fff;
    border-radius: 0.32rem;
    display: flex;
    align-items: center;
    font-size: 0.373333rem;
    color: #ccc;
    i {
      padding: 0 0.16rem;
    }
  }
}
</style>
