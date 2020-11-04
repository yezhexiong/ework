<template>
  <div class="ework-index">
    <span v-show="curTabbar === 'message'">
      <message-box />
    </span>
    <!-- <span v-show="curTabbar === 'workgroup'"> -->
    <span v-if="curTabbar === 'workgroup'">
      <workgroup-box />
    </span>
    <span v-show="curTabbar === 'setting'">
      <setting-box />
    </span>
    <van-tabbar v-model="curTabbar">
      <van-tabbar-item icon="home-o" name="message">消息</van-tabbar-item>
      <van-tabbar-item icon="cluster-o" name="workgroup">工作组</van-tabbar-item>
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
      searchKey: "",
      searchVisible: true,
      curTabbar: "message",
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
