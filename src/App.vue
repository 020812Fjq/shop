<template>
  <div id="app">
    <HeaderCom />
    <router-view />
    <FooterCom v-show="FooterBoolean" />
  </div>
</template>
<script>
import FooterCom from "./components/FooterCom.vue";

import HeaderCom from "./components/HeaderCom.vue";

export default {
  name: "App",
  components: {
    HeaderCom,
    FooterCom,
  },
  data() {
    return {
      FooterBoolean: true,
    };
  },
  watch: {
    //监听vue中data的变化
    "$route.path": function (newVal, oldVal) {
      console.log(newVal, oldVal);
      switch (newVal) {
        case "/":
          this.FooterBoolean = true;
          break;
        case "/categroy":
          this.FooterBoolean = true;
          break;
        case "/cart":
          this.FooterBoolean = true;
          break;
        case "/my":
          this.FooterBoolean = true;
          break;
        default:
          this.FooterBoolean = false;
          break;
      }
    },
  },
};
</script>
<style lang="less"></style>
