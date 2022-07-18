<template>
  <ul class="icons">
    <li v-for="(item, index) in iconsList" :key="index">
      <img :src="item.imgUrl" alt="" />
      <span>{{ item.title }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    iconsList: Array
  }
}
</script>

<style lang="less" scoped>
.icons {
  display: flex;
  justify-content: space-around;
  padding: 0.4rem 0;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 1.013333rem;
      height: 1.013333rem;
    }
    span {
      padding: 0.16rem 0;
      font-size: 0.426666rem;
    }
  }
}
</style>
