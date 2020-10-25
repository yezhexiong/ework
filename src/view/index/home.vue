<template>
  <div class="ework-workbench-index">
    <span v-show="curTabbar === 'workbench'">
      <workbench-box />
    </span>
    <span v-show="curTabbar === 'app'">
      <app-box />
    </span>
    <sapn v-show="curTabbar === 'setting'">
      <setting-box />
    </sapn>
    <van-tabbar v-model="curTabbar">
      <van-tabbar-item icon="home-o" name="workbench">工作台</van-tabbar-item>
      <van-tabbar-item icon="cluster-o" name="app">应用</van-tabbar-item>
      <van-tabbar-item icon="setting-o" name="setting">管理</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
import WorkbenchBox from "@/view/workbench";
import AppBox from "@/view/app";
import SettingBox from "@/view/setting";
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    WorkbenchBox,
    AppBox,
    SettingBox,
  },
  data() {
    return {
      active: 0,
      list: [],
      loading: false,
      finished: false,
      searchKey: "yezhexiong",
      searchVisible: true,
      curTabbar: "workbench",
    };
  },
  methods: {},
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
