<template>
  <div class="detail">
    <img :src="goodsDetail.goodsCoverImg" />
    <h3>{{ goodsDetail.goodsName }}</h3>
    <p>{{ goodsDetail.goodsIntro }}</p>
    <span>{{ goodsDetail.tag }}</span>
    <b>￥{{ goodsDetail.sellingPrice }}</b>
    <van-goods-action>
      <van-goods-action-button
        color="#6bd8d8"
        type="warning"
        text="加入购物车"
        @click="addCart"
      />
      <van-goods-action-button
        color="#0dc3c3"
        type="danger"
        text="立即购买"
        @click="clickBuy"
      />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  name: "DetailView",
  data() {
    return {
      goodsDetail: null,
    };
  },
  methods: {
    addCart() {
      //取出原有数据
      var oldCart = this.$store.state.cartList;
      //添加数据之前判断
      for (var i = 0; i < oldCart.length; i++) {
        if (oldCart[i].goodsId == this.goodsDetail.goodsId) {
          oldCart[i].num += 1;
          this.$router.push({ path: "/cart" });
          return;
        }
      }

      this.goodsDetail.num = 1;
      //将当前商品数据加到购物车
      oldCart.push(this.goodsDetail);
      console.log(oldCart);
      this.$store.commit("mutationsCartList", oldCart);
      //跳转
      this.$router.push({ path: "/cart" });
    },
    clickBuy() {
      this.$dialog
        .confirm({
          title: "提示",
          message: "弹宁要付款了哦",
        })
        .then(() => {
          var arr = this.$store.state.orderList;
          this.goodsDetail.num=1
          arr.push(this.goodsDetail);

          this.$store.commit("mutationsOrderList",arr);
          this.$router.push({ path: "/order" });
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    },
  },
  created() {
    console.log(this.$route.query);
    this.goodsDetail = this.$route.query;
  },
};
</script>

<style lang="less" scoped>
.detail {
  padding: 0 20px;
  img {
    display: block;
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }
  h3 {
    font-size: 18px;
    color: #333333;
    margin: 30px 0;
  }
  p {
    font-size: 14px;
    color: #333333;
  }
  span {
    display: block;
    font-size: 14px;
    color: #999999;
    margin: 10px;
  }

  b {
    font-size: 22px;
    color: #f63515;
  }
}
</style>
