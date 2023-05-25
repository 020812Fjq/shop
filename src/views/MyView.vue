<template>
  <div class="my">
      <div class="card">
        <img src="http://s.weituibao.com/1583583975067/user-graduate%20(1).png" >
        <h3>登录名:admin</h3>
      </div>
      <van-cell title="我的订单" is-link to="/order"/>
      <van-cell title="关于我们" is-link to="/about"/>
      <van-cell title="退出登录" is-link to="/login"/>
      <van-cell title="地址管理" is-link to="/address"/>
  </div>
</template>

<script>
export default {
    name:"myView"
};
</script>

<style lang="less" scoped>
.my{
  padding: 20px;
  .card{
    width: 100%;
    background-color: #51c7c7;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 30px 20px;
    box-sizing: border-box;
    margin-bottom: 10px;
    img{
        width: 60px;
        height: 60px;
    }
    h3{
        font-size: 14px;
        color: white;
        margin: 20px;
        font-weight: normal;
    }
  }
}
</style>