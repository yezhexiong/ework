<template>
  <div class="ework-message">
    <div class="message-header">
      <span v-if="!searchVisible">
        <van-row
          type="flex"
          justify="center"
          align="center"
          style="height:39px"
        >
          <van-col span="5" offset="1">雁过留声</van-col>
          <van-col span="12"></van-col>
          <van-col span="3"><van-icon name="search" size="20" @click="searchVisible = true"/></van-col>
          <van-col span="3"><van-icon name="filter-o" size="20" @click="$router.push({path: `/indexProSearch`,})" /></van-col>
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
    <!-- 相关配套组件 -->
  </div>
</template>
<script>
import { Search,Icon,Col,Row, Toast} from "vant";

import TopicsBox from "@/view/message/topics";
// import IndexSearchBox from "@/view/message/indexSearch";

export default {
  components: {
    [Search.name]: Search,
    [Icon.name]: Icon,
    [Col.name]: Col,
    [Row.name]: Row,
    [Toast.name]: Toast,
    TopicsBox,
    // IndexSearchBox,
  },
  data() {
    return {
      searchVisible: false,
      searchKey: "",
      scrollTop:0,
    };
  },
  created() {
    console.log('message > created')
  },
  mounted(){
    console.log('message > mounted')
  },
  destroyed() {
    console.log('message > destroyed')
  },
  methods: {
    onSearch() {
      Toast("onSearch");
      this.searchVisible = false;
    },
  },  
  //进入该页面时，用之前保存的滚动位置赋值
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log('message -> index -> beforeRouteEnter -> vm.scrollTop=',vm.scrollTop)
      console.log('message -> index -> beforeRouteEnter -> document.body.scrollHeight=',document.body.scrollHeight)
      document.body.scrollTop = vm.scrollTop
    })
  },
  //在页面离开时记录滚动位置
  beforeRouteLeave (to, from, next) {
    this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    console.log('message -> index -> beforeRouteLeave -> this.scrollTop=',this.scrollTop)
    console.log('message -> index -> beforeRouteLeave -> document.body.scrollHeight=',document.body.scrollHeight)
    next()
  },
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
}
</style>