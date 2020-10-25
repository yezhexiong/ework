<template>
  <div class="ework-workbench-index">
    <router-view> </router-view>
    <van-tabbar v-model="active" @change="handlerTabbarChange">
      <van-tabbar-item icon="home-o" key='workbench' to="/home/workbench">工作台</van-tabbar-item>
      <van-tabbar-item icon="cluster-o" key='app' to="/home/app">应用</van-tabbar-item>
      <van-tabbar-item icon="setting-o" key='setting' to="/home/setting">管理</van-tabbar-item>
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
      active: 0,
      list: [],
      loading: false,
      finished: false,
      searchKey: "yezhexiong",
      searchVisible: true,
    };
  },
  methods: {
    handlerTabbarChange(val){
      console.log('handlerTabbarChange.val=',val)
    }
  }
};
</script>

<style lang="less">
.ework-workbench-index {
  .ework-head-fixed {
    position: fixed;
    width: 100%;
    top: 0;
    height: 54px;
    z-index: 1;
    background: #eee;
    border-bottom: solid 1px #eee;
  }
  .van-tabbar {
    border-top: solid 1px #eee;
  }
}
</style>
