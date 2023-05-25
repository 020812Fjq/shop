<template>

<div class="empty" v-if="list.length == 0">
  <div class="toast">
  <p>地址空空如也！</p>
  </div>
  <van-address-list
  v-model="chosenAddressId"
  :list="list"
  default-tag-text="默认"
  
  @add="onAdd"
  @edit="onEdit"
/>
  
</div>
  <div class="addressView" v-else>
    
<van-address-list
  v-model="chosenAddressId"
  :list="list"
  default-tag-text="默认"
  
  @add="onAdd"
  @edit="onEdit"
/>
<button></button>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    name: "addressView",
    data() {
    return {
      chosenAddressId: '1',
      list: [
       
      ],
    };
  },
  methods: {
    onAdd() {
      Toast('新增地址');
      this.$router.push({path:"/newadd"})
    },
    onEdit(item, index) {
      Toast('编辑地址:' + index);
    },
  },
};
</script>

<style lang="less" scoped>
.empty{
    
  .toast{
    display: block;
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
    text-align: center;
    p{
    font-size: 18px;
    color: #c3c3c3;
    font-weight: bold;
  }
  }
  
}
</style>