<template>
  <van-nav-bar
    :title="$route.meta.title"
    :left-text="$route.meta.requiresAuth ? '返回' : ''"
    :left-arrow="$route.meta.requiresAuth"
    fixed
    placeholder
    @click-left="onClickLeft"
    
  />
</template>

<script>


export default {
  methods: {
    onClickLeft() {
   this.$router.back()
    },
  },
};
</script>

<style></style>
