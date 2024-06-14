<template>
  <view class="home-page">
    <uni-card>
      <text>这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。</text>
    </uni-card>
  </view>
</template>

<script setup>
import { login } from '@/api/login'
import { onLoad, onShow } from '@dcloudio/uni-app'
import { ref } from "vue";

const count = ref(0)
onLoad(async () => {
  console.log("home onLoad") // 页面生命周期，编写页面加载后的逻辑
  console.log('发起请求')
  let res = await login();
  console.log(res);
})
onShow(() => {
  console.log("home onShow") // 页面生命周期，编写页面加载后的逻辑
})

</script>

<style lang="scss">
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
