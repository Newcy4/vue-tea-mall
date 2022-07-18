<template>
  <header>
    <div class="search-return" @click="goBack">
      <i class="iconfont icon-fanhui"></i>
    </div>
    <div class="search-main">
      <i class="iconfont icon-fangdajing"></i>
      <form action="" onsubmit="return false" @keyup.enter="goSearchList">
        <input type="search" placeholder="搜索您喜欢的产品..." v-model="searchVal" />
      </form>
    </div>
    <div class="serach-btn" @click="goSearchList">搜索</div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchVal: ''
    }
  },
  methods: {
    goBack() {
      this.$router.back()
    },
    goSearchList() {
      if (!this.searchVal) return
      console.log(this.searchVal)

      // this.$router.push({ name: 'list' })
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1.173333rem;
  color: #fff;
  background-color: #b0352f;
}
.search-return,
.serach-btn {
  padding: 0 0.266666rem;
}
.search-return i {
  font-size: 0.746666rem;
}
.search-main {
  display: flex;
  align-items: center;
  width: 6.933333rem;
  height: 0.8rem;
  border-radius: 12px;
  background-color: #ffffff;
}
.search-main i {
  padding: 0 0.266666rem;
  color: #666666;
}
.search-main form {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.search-main form input {
  width: 95%;
  border: none;
  outline: none;
  background: none;
}

.search-main form input:focus {
  border: none;
}

.serach-btn {
  font-size: 0.426666rem;
}
</style>
