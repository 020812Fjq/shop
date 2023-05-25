<template>
  <div class="home">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#39a9ed">
      <van-swipe-item v-for="(item, index) in swiperList" :key="index">
        <img :src="item.imgurl" />
      </van-swipe-item>
    </van-swipe>
    <van-grid :column-num="5" class="nav-list">
      <van-grid-item
        v-for="(item, index) in navList"
        :key="index"
        :url="item.href"
      >
        <van-image :src="item.imgUrl" />
        <span>{{ item.name }}</span>
      </van-grid-item>
    </van-grid>
    <GoodsCom :list="newGoodses" title="新品上线"/>
    <GoodsCom :list="hotGoodses" title="热门商品"/>
    <GoodsCom :list="recommendGoodses" title="最新推荐"/>
  </div>
</template>

<script>
import GoodsCom from '../components/GoodsCom.vue';

export default {
  components: { 
    GoodsCom
   },

  name: "HomeView",
  data() {
    return {
      swiperList: [],
      navList:[],
      newGoodses:[],
      hotGoodses:[],
      recommendGoodses:[]
    };
  },
  created() {
    //=使用axios请求data.json
    this.axios.get("/data").then((res) => {
      console.log(res.data);
      this.swiperList = res.data.swiperList
      this.navList = res.data.navList
      this.newGoodses=res.data.newGoodses
      this.hotGoodses=res.data.hotGoodses
      this.recommendGoodses=res.data.recommendGoodses
    });
  },
};
</script>
<style lang="less" scoped>
.my-swipe {
  .van-swipe-item {
    img {
      width: 100%;
    }
  }
}
.nav-list {
  ::v-deep .van-grid-item__content { 
    padding-left: 0;
    padding-right: 0;
  }
  .van-image {
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
  }
  span {
    font-size: 16px;
  }
}

</style>
