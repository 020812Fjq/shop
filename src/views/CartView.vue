<template>
  <div class="cart">
    <div class="toast" v-if="list.length == 0">
      <van-icon name="smile-o" />
      <p>购物车空空如也</p>
      <van-button type="primary" color="#1baeae" to="/">前往首页</van-button>
    </div>
    <div class="cart-list" v-else>
      <van-checkbox-group v-model="result" ref="checkboxGroup">
        <van-swipe-cell v-for="(item, index) in list" :key="item.goodsId">
          <van-checkbox :name="item.goodsId" @click="clickBox"></van-checkbox>
          <van-card
            :num="item.num"
            :price="item.sellingPrice"
            :desc="item.goodsIntro"
            :title="item.goodsName"
            class="goods-card"
            :thumb="item.goodsCoverImg"
          >
            <template #footer>
              <van-stepper
                v-model="item.num"
                theme="round"
                button-size="22"
                disable-input
              />
            </template>
          </van-card>
          <template #right>
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
              @click="del(index)"
            />
          </template>
        </van-swipe-cell>
      </van-checkbox-group>
      <van-submit-bar
        :price="sumPice * 100"
        button-text="提交订单"
        @submit="onSubmit"
      >
        <van-checkbox v-model="allCheckbox" @click="allSelect"
          >全选</van-checkbox
        >
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: "cartView",
  data() {
    return {
      result: [],
      list: [],
      allCheckbox: false,
    };
  },
  methods: {
    allSelect() {
      this.$refs.checkboxGroup.toggleAll(this.allCheckbox);
    },
    onSubmit() {
      //判断是否选中
      if (this.result.length == 0) {
        this.$toast("请选择商品进行提交订单");
      } else {
        this.$dialog.confirm({
          title: "标题",
          message: "宁确认购买该商品吗？",
        })
          .then(() => {
            let selectList = this.list.filter((item) => {
          return this.result.includes(item.goodsId);
        });
        this.$store.commit("mutationsOrderList", selectList);
        console.log(this.$store.state.orderList);
        //从后往前默认最后一个元素不删
        // this.list.forEach((item ,index)=>{
        // selectList.forEach((item2)=>{
        //   if(item.goodsId==item2.goodsId){
        //     this.list.splice(index,1)
        //   }
        // })
        // })
        for (var i = this.list.length - 1; i >= 0; i--) {
          var item = this.list[i];
          console.log(item);
          for (var y = 0; y < selectList.length; y++) {
            var item2 = selectList[y];
            if (item.goodsId == item2.goodsId) {
              this.list.splice(i, 1);
            }
          }
        }
        this.$store.commit("mutationsCartList", this.list);

        this.$router.push({path:"/order"})
      })
      
            // on confirm
  
          .catch(() => {
            // on cancel
          });

  }
},



   

    clickBox() {
      console.log(this.result);
      if (this.result.length == this.list.length) {
        this.allCheckbox = true;
      } else {
        this.allCheckbox = false;
      }
    },
    del(index) {
      this.list.splice(index, 1);
      this.$store.commit("mutationsCartList", this.list);
    },
  },
  computed: {
    sumPice() {
      var sum = 0;
      //把选中复选框的商品进行合计价格   单价*数量
      let selectList = this.list.filter((item) => {
        return this.result.includes(item.goodsId);
      });
      console.log(selectList);
      selectList.forEach((item) => {
        sum += item.num * item.sellingPrice;
      });
      return sum;
    },
  },
  created() {
    console.log(this.$store.state.cartList);
    var arr = JSON.stringify(this.$store.state.cartList);
    this.list = JSON.parse(arr);
    //this.list=this.$store.state.cartList
    console.log(this.list);
  },
};
</script>

<style lang="less" scoped>
.cart {
  .toast {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  p {
    font-size: 16px;
    margin-bottom: 10px;
  }
  .van-button {
    width: 150px;
  }
  .goods-card {
    margin: 0;
    background-color: white;
  }
  ::v-deep .van-swipe-cell__wrapper {
    display: flex;
    padding-left: 10px;
  }
  .delete-button {
    height: 100%;
  }
  .van-card {
    flex: 1;
  }
  .van-submit-bar {
    bottom: 50px;
  }
}
</style>
