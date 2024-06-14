<template>
  <view class="me-page">
    <scroll-view class="scroll-me" scroll-y>
      <view v-for="v in list" class="box"></view>
    </scroll-view>
  </view>
</template>

<script setup>
import { ref } from "vue";
import { onLoad, onShow } from '@dcloudio/uni-app'


const list = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
onLoad(() => {
  console.log("me onLoad") // 页面生命周期，编写页面加载后的逻辑
})
onShow(() => {
  console.log("me onShow") // 页面生命周期，编写页面加载后的逻辑
})
</script>

<style lang="scss">
.me-page {
  height: 100%;
  .scroll-me{
    height: 100%;
  }
  .box {
    height: 200px;
    width: 100%;
    background: #1f75c5;
    margin-bottom: 10px;
  }
}
</style>