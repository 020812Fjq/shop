<template>
<div>
  <van-address-edit
  :area-list="areaList"
  show-postal
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"

  @change-detail="onChangeDetail"
/>
</div>
</template>

<script>
import { Toast } from 'vant';
import { areaList } from '@vant/area-data';
export default {
    name:"newaddView",
  data() {
    return {
      areaList,
      searchResult: [],
    };
  },
  methods: {
    onSave() {
      Toast('save');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
};
</script>

<style>

</style>