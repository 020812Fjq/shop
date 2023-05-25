<template>
  <div class="goods-list">
  <h3>{{title}}</h3>
  <van-grid :column-num="2">
      <van-grid-item
        v-for="(item, index) in list"
        :key="index"
        :to="{path:'/detail', query: item}"
      >
        <van-image :src="item.goodsCoverImg" />
        <p>{{ item.goodsName }}</p>
        <span>￥{{item.sellingPrice}}</span>
      </van-grid-item>
    </van-grid>
</div>
</template>

<script>
export default {
    name:"GoodCom",
    props:["list","title"]
}
</script>

<style lang="less" scoped>
.goods-list{
  h3{
    font-size: 16px;
    color: #1baeae;
    text-align: center;
    font-weight: none;
    background-color: #f9f9f9;
    padding: 15px 0;
  }
  .van-image{
    width:120px ;
    height: 120px;
  }
  span{
    font-size: 14px;
    color: #1baeae;
  }
  p{
    font-size: 14px;
    color: #222333;
  }
}
</style>