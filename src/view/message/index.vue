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
          <van-col span="5" offset="1">雁过留声</van-col>
          <van-col span="12"></van-col>
          <van-col span="3"
            ><van-icon name="search" size="30" @click="onShowSearch"
          /></van-col>
          <van-col span="3"><van-icon name="filter-o" size="30" /></van-col>
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
              @cancel="onHidenSearch"
            />
          </van-col>
        </van-row>
      </span>
    </div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="message-topics">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell v-for="topic in listTopic" :key="topic.id">
            <template>
              <div class="message-topic">
                <div class="topic-left">
                  <div class="left-user-avatar">
                    {{ topic.UserName.left(2) }}
                  </div>
                </div>
                <div class="topic-right">
                  <div class="right-top">
                    <span>{{ topic.UserName }}</span>
                    <span>{{ topic.CreateTime }}</span>
                    <span>{{ topic.Tag }}</span>
                    <span>{{ topic.Workgroup }}</span>
                  </div>
                  <div class="right-body">
                    {{ topic.Memo }}
                  </div>
                  <div class="right-bottom">
                    <span>评论 2</span><span>+评论</span>
                  </div>
                  <div></div>
                </div>
              </div>
            </template>
          </van-cell>
        </van-list>
      </div>
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
      listTopic: [],
      loading: false,
      finished: false,
      searchKey: "yezhexiong",
      searchVisible: false,
      isLoading: false,
      // addeEventButtomVisible: false,
    };
  },
  mounted() {},
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      let step = 1;
      setTimeout(() => {
        ++step;
        console.log("step=", step);
        for (let i = 0; i < 5; ++i) {
          this.listTopic.push({
            id: `topic_${step}_${i}`,
            UserName: `叶浙雄${i}`,
            Tag: `面料检验`,
            CreatTime: `2020年12月31日`,
            Workgroup: `检验组`,
            Memo: `后道封样5件/领角不方正、压线起纽返止口5件/挂面里布吃势不均匀/门襟下角套里布未做0.5活动量5件/袖叉拉筒起纽未包实5件。尺寸正常`,
          });
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.listTopic.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
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
  .message-topic {
    margin-top: 3px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    .topic-left {
      margin: 5px;
      .left-user-avatar {
        background: #fde3cf;
        color: #f56a00;
        font-weight: bold;
        float: right;
        border-radius: 40px;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .topic-right {
      .right-top {
        height: 30px;
        display: flex;
        align-items: flex-end;
        font-size: 16px;
        span {
          padding-right: 9px;
        }
      }
      .right-body {
        font-size: 14px;
      }
      .right-bottom {
        display: flex;
        justify-content: space-between;
        border-top: solid 1px #eee;
        width: 100%;
        padding-top: 5px;
        margin-top: 5px;
        span {
          padding: 0 9px 0 9px;
        }
      }
    }
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