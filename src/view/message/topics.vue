<template>
  <div class="ework-workbench-index">
    <div class="ework-head-fixed">
      <span v-if="!searchVisible">
        <van-row
          type="flex"
          justify="center"
          align="center"
          style="height: 53px"
        >
          <van-col span="5" offset="1">燕过留声</van-col>
          <van-col span="12"></van-col>
          <van-col span="3"><van-icon name="search" size="30" @click="onShowSearch"/></van-col>
          <van-col span="3"><van-icon name="filter-o" size="30"/></van-col>
        </van-row>
      </span>
      <span v-else>
        <van-row
          type="flex"
          justify="center"
          align="center"
          style="height: 53px"
        >
          <van-col span="24">
            <van-search
              v-model="searchKey"
              show-action
              placeholder="请输入搜索关键词"
              @search="onSearch"
              @cancel="onHidenSearch"
            />
          </van-col>
        </van-row>
      </span>
    </div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        style="margin: 50px 0 50px 0"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>
    </van-pull-refresh>
    <!-- <van-popup
      v-model="addeEventButtomVisible"
      closeable
      position="bottom"
      :style="{ height: '50%' }"
    >
    添加事件区域
    </van-popup> -->
  </div>
</template>
<script>
import { Cell } from "vant";
import { List } from "vant";
import { Search } from "vant";
import { Icon } from "vant";
import { Col, Row } from "vant";
import { PullRefresh } from "vant";
// import { Popup } from 'vant';
import { Toast } from "vant";
export default {
  components: {
    [List.name]: List,
    [Cell.name]: Cell,
    // [NavBar.name]: NavBar,
    [Search.name]: Search,
    [Icon.name]: Icon,
    [Col.name]: Col,
    [Row.name]: Row,
    [PullRefresh.name]: PullRefresh,
    [Toast.name]: Toast,
    // [Popup.name]: Popup,
  },
  data() {
    return {
      active: 0,
      list: [],
      loading: false,
      finished: false,
      searchKey: "",
      searchVisible: false,
      isLoading: false,
      // addeEventButtomVisible: false,
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onSearch() {
      Toast('onSearch');
      this.searchVisible = false;
    },
    onHidenSearch() {
      Toast('onHidenSearch');
      this.searchVisible = false;
    },
    onShowSearch() {
      this.searchVisible = true;
    },
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    // onClickLeft() {
    //   Toast("返回");
    // },
    // onClickRight() {
    //   Toast("按钮");
    // },
  },
};
</script>

<style lang="less">
// .ework-workbench-index {
//   .ework-head-fixed {
//     position: fixed;
//     width: 100%;
//     top: 0;
//     height: 54px;
//     z-index: 1;
//     background: #eee;
//     border-bottom: solid 1px #eee;
//   }
//   .van-tabbar {
//     border-top: solid 1px #eee;
//   }
// }
</style>
