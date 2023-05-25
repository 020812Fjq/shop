<template>
  <div class="zhuce">
    <van-icon name="shopping-cart" color="#1989FA" size="100" />
    <van-form @submit="onSubmit">
      <van-field class="username"
        v-model="username"
        name="Username"
        label="用户名"
        placeholder="用户名"
      />
      <van-field class="password"
        v-model="password"
        type="Password"
        name="password"
        label="密码"
        placeholder="密码"
      />
      <van-cell title="已有帐户登录"  to="/login"  />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
        color="#51c7c7"  >注册</van-button
        > 
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit(values) {
      console.log(this.$router.push('submit'), values);
      this.$router.push({path:"/login"})
      

      
    },
  },
};
</script>

<style lang="less" scoped>
.zhuce {
  text-align: center;
  padding-top: 30px;
  a{
    display: block;
    font-size: 14px;
    color: skyblue;
    text-align: left;
    padding-top: 10px;
    padding-left: 15px;
  }
  .van-cell{
    color: #1989FA;
    text-align: left;
  }
}
</style>
