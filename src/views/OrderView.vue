<template>
  <div class="order">
    <van-tabs v-model="active" color="#1baeae" title-active-color="#1baeae" @change="changeTab">
      <van-tab title="全部"> </van-tab>

      <van-tab title="待付款"> </van-tab>

      <van-tab title="交易完成"> </van-tab>
    </van-tabs>
    <!-- 商品列表 -->
    <van-card
      v-for="(item, index) in list"
      :key="index"
      :num="item.num"
      :price="item.sellingPrice"
      :desc="item.goodsIntro"
      :title="item.goodsName"
      :thumb="item.goodsCoverImg"
    />
  </div>
</template>

<script>
export default {
  name: "OrderView",
  data() {
    return {
      active: 0,
      list:[],

    };
  },
  methods:{
    changeTab(index){
        console.log(index)
        if(index == 0){
           this.list=this.$store.state.cartList.concat(this.$store.state.orderList)
        }else if(index==1){
            this.list=this.$store.state.cartList
        }else if (index==2){
            this.list=this.$store.state.orderList
        }
    }
  },
  created(){
    //购物车的数据
    this.list=this.$store.state.cartList.concat(this.$store.state.orderList)
    //订单的数据
    
  }
};
</script>

<style lang="less" scoped></style>
