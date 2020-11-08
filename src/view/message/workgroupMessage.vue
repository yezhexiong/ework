<template>
  <div class="ework-message">
    <div class="message-header">
      <span v-if="!searchVisible">
        <van-row
          type="flex"
          justify="center"
          align="center"
          style="height: 39px"
        >
          <van-col span="24">
            <van-nav-bar :title="$route.query.UserName" left-text="返回" left-arrow @click-left="$router.push({path: `/home/workgroup`,})">
              <template #right>
                <van-icon name="search" size="18" @click="searchVisible = true"/>
              </template>
            </van-nav-bar>
          </van-col>
        </van-row>
      </span>
      <span v-else>
        <van-row
          type="flex"
          justify="center"
          align="center"
          style="height: 39px"
        >
          <van-col span="24">
            <van-search
              v-model="searchKey"
              show-action
              placeholder="请输入搜索关键词"
              @search="onSearch"
              @cancel="searchVisible = false"
            />
          </van-col>
        </van-row>
      </span>
    </div>
    <topics-box>
    </topics-box>
  </div>
</template>
<script>
import { Search,Icon,Col,Row,Toast,NavBar } from "vant";

import TopicsBox from "@/view/message/topics";

export default {
  components: {
    [Search.name]: Search,
    [Icon.name]: Icon,
    [Col.name]: Col,
    [Row.name]: Row,
    [Toast.name]: Toast,
    [NavBar.name]: NavBar,

    TopicsBox,
  },
  data() {
    return {
      searchVisible: false,
      searchKey: "",
    };
  },
  created() {
    console.log('workgroupMessage > created')
  },
  mounted(){
    console.log('workgroupMessage > mounted')
    console.log('$route.params=',this.$route.params)
    console.log('$route.query=',this.$route.query)
  },
  destroyed() {
    console.log('workgroupMessage > destroyed')
  },
  methods: {
    onSearch() {
      Toast("onSearch");
      this.searchVisible = false;
    },
    onHidenSearch() {
      Toast("onHidenSearch");
      this.searchVisible = false;
    },
    onShowSearch() {
      this.searchVisible = true;
    },
  },
  //在页面离开时记录滚动位置
  beforeRouteLeave (to, from, next) {
    console.log('wrokgroupMessage -> beforeRouteLeave -> document.body.scrollHeight=',document.body.scrollHeight)
    next()
  },  
  //进入该页面时，用之前保存的滚动位置赋值
  beforeRouteEnter (to, from, next) {
    console.log('wrokgroupMessage -> beforeRouteEnter -> document.body.scrollHeight=',document.body.scrollHeight)
    next()
  }
};
</script>

<style lang="less">
.ework-message {
  .message-header {
    position: fixed;
    width: 100%;
    top: 0;
    height: 37px;
    z-index: 1;
    background: #eee;
    border-bottom: solid 1px #eee;
  }
  //覆盖原有控件样式
  .van-cell {
    padding: 0;
  }
  .van-search {
    padding: 0;
  }
  .van-nav-bar {
    height: 38px;
  }
}
</style>