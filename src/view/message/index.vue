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
                    <span>
                      <van-icon name="label-o" />
                      <van-tag plain type="warning">{{ topic.Tag }}</van-tag>
                    </span>
                    <span>
                      <van-icon name="friends-o" />
                      <van-tag plain type="success ">{{topic.Workgroup}}</van-tag>
                    </span>
                  </div>
                  <div class="right-content">
                    {{ topic.Memo }}
                  </div>
                  <div class="right-imgs">
                    <van-image fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                    <van-image fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                    <van-image fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                    <van-image fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                    <van-image fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                  </div>
                  <div class="right-reader">
                    <i class="van-icon" style="color: green">已读<div class="van-info-green">9</div></i>
                    <i class="van-icon" style="color: #f00">未读<div class="van-info">9</div></i>
                  </div>
                  <div class="right-replay-header">
                    <span>评论 2</span><span>
                      <van-button type="primary" @click="replayBoxVisible=true">+评论</van-button>
                      <!-- +评论 -->
                    </span>
                  </div>
                  <div class="right-replay">
                    <div class="replay-top">
                      <span>张三</span>
                      <span>2020-03-13</span>
                    </div>
                    <div class="right-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet  
                    </div>
                    <div class="right-content-imgs">
                      <van-image fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                      <van-image fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                      <van-image fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                    </div>
                  </div>
                  <div class="right-replay">
                    <div class="replay-top">
                      <span>张三</span>
                      <span>2020-03-13</span>
                    </div>
                    <div class="right-content">
                      已经通过验收
                    </div>
                                   
                  </div>
                </div>
              </div>
            </template>
          </van-cell>
        </van-list>
      </div>
    </van-pull-refresh>
    <van-popup
      v-model="replayBoxVisible"
      closeable
      position="bottom"
      :style="{ height: '50%',background:'#ccc'}"
    >
    <van-field
      v-model="message"
      rows="5"
      autosize
      label="留言"
      type="textarea"
      placeholder="请输入留言"
    />
    </van-popup>
  </div>
</template>
<script>
import { Cell } from "vant";
import { List } from "vant";
import { Search } from "vant";
import { Icon } from "vant";
import { Col, Row } from "vant";
import { PullRefresh } from "vant";
import { Popup } from 'vant';
import { Toast } from "vant";
import { Tag, Image,Field  } from "vant";
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
    [Tag.name]: Tag,
    [Image.name]: Image,
    [Field.name]: Field,
    [Popup.name]: Popup, 
  },
  data() {
    return {
      listTopic: [],
      loading: false,
      finished: false,
      searchKey: "yezhexiong",
      searchVisible: false,
      isLoading: false,
      replayBoxVisible: false,
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
    margin-top: 37px;
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
      .right-content {
        font-size: 14px;
      }
      .right-imgs {
        .van-image {
          border: solid 1px #eee;
          width: 80px;
          height: 80px;
          margin-right: 8px;
        }
      }
      .right-reader {
        i {
          padding-left: 12px;
        }
        .van-info-green {
          position: absolute;
          top: 0;
          right: 0;
          box-sizing: border-box;
          min-width: 16px;
          padding: 0 3px;
          color: #fff;
          font-weight: 500;
          font-size: 12px;
          font-family: -apple-system-font, Helvetica Neue, Arial, sans-serif;
          line-height: 1.2;
          text-align: center;
          background-color: green;
          border: 1px solid #fff;
          border-radius: 16px;
          -webkit-transform: translate(50%, -50%);
          transform: translate(50%, -50%);
          -webkit-transform-origin: 100%;
          transform-origin: 100%;
        }
      }
      .right-replay-header {
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
      .right-replay {
        padding:5px 0 0 0;
        .replay-top {
          height: 30px;
          display: flex;
          align-items: flex-end;
          span {
            padding-right: 9px;
          }
        }
        .right-content {
          padding-left: 40px;
          font-size: 13px;
        }
        .right-content-imgs {
          margin-left: 40px;
          .van-image {
            border: solid 1px #eee;
            width: 60px;
            height: 60px;
            margin-right: 8px;
          }
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