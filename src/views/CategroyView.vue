<template>
  <div class="categroy">
    <!-- 左侧导航 -->
    <van-sidebar v-model="activeKey" @change="changeSidebar">
      <van-sidebar-item
        v-for="item in cateList"
        :key="item.goodsId"
        :title="item.goodsName"
      />
    </van-sidebar>
    <!-- 右侧商品分类 -->
    <div class="cate-right" v-if="cateObj">
      <div v-for="item in cateObj.secondLevelCategoryVOS" :key="item.goodsId" >
        <h3>{{item.goodsName}}</h3>
        <van-grid :column-num="3">
          <van-grid-item 
          v-for="product in item.thirdLevelCategoryVOS"
           :key="product.goodsId"
           :to="{path:'/detail',query:product}">
           <van-image :src="product.goodsCoverImg" />
          <span>{{product.goodsName}}</span>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "categroyView",
  data() {
    return {
      activeKey: 0,
      cateList: [],
      cateObj:null
    };
  },
  methods:{
    changeSidebar(index){
      console.log(index)
      this.cateObj=this.cateList[index]
      console.log(this.cateObj)
    }
  },
  created() {
    this.axios.get("/category").then((res) => {
      console.log(res.data);
      this.cateList = res.data.data;
      this.cateObj=res.data.data[0]
    });
  },
};
</script>

<style lang="less" scoped>
.van-sidebar {
  width: 120px;
  position: fixed;
  left: 0;
  top: 46px;
}
.cate-right{
  position: absolute;
  right: 0;
  top: 46px;
  width: 255px;
  padding-bottom: 50px;
  h3{
    font-size: 16px;
    margin: 16px;
  }
  .van-image{
    width: 50px;
    height: 50px;
  }
  span{
    font-size: 12px;
    margin-top: 10px;
  }
}
</style>
