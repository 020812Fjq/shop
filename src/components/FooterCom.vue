<template>
  <van-tabbar v-model="active" route placeholder>
    <van-tabbar-item  to="/" icon="wap-home-o">首页</van-tabbar-item>
    <van-tabbar-item  to="/categroy" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item  to="/cart" icon="shopping-cart-o" :badge="$store.state.cartList.length">购物车</van-tabbar-item>
    <van-tabbar-item  to="/my" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style></style>
