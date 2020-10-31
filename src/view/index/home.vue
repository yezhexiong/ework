<template>
  <div class="ework-workbench-index">
    <span v-show="curTabbar === 'workbench'">
      <message-box />
    </span>
    <span v-show="curTabbar === 'app'">
      <workgroup-box />
    </span>
    <span v-show="curTabbar === 'setting'">
      <setting-box />
    </span>
    <van-tabbar v-model="curTabbar">
      <van-tabbar-item icon="home-o" name="workbench">消息</van-tabbar-item>
      <van-tabbar-item icon="cluster-o" name="app">工作组</van-tabbar-item>
      <van-tabbar-item icon="setting-o" name="setting">管理</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
import MessageBox from "@/view/message";
import WorkgroupBox from "@/view/workgroup";
import SettingBox from "@/view/setting";
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    MessageBox,
    WorkgroupBox,
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
  .van-tabbar {
    border-top: solid 1px #eee;
  }
}
</style>
