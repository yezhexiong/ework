<template>
  <div class="ework-index">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <van-tabbar route>
      <van-tabbar-item icon="home-o" name="message" replace to="/home/message">消息</van-tabbar-item>
      <van-tabbar-item icon="cluster-o" name="workgroup" replace to="/home/workgroup">工作组</van-tabbar-item>
      <van-tabbar-item icon="setting-o" name="setting" replace to="/home/setting">管理</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  data() {
    return {
    };
  },
  methods: {},
};
</script>

<style lang="less">
.ework-index {  
  .van-tabbar {
    border-top: solid 1px #eee;
  }
}
</style>
