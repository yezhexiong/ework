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
    <div class="message-topics">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          offset="50"
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
                      <span @click="replayBoxVisible=true">+评论</span>
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
                </div>
              </div>
            </template>
          </van-cell>
        </van-list>
      </van-pull-refresh>
    </div>
    <!-- 相关配套组件 -->
    <van-popup
      v-model="replayBoxVisible"
      position="bottom"
      :style="{ height: '188px',background:'#ccc'}"
    >
      <div style="display:flex; justify-content:space-between; margin:8px;"><span @click="replayBoxVisible=false">取消</span><span @click="handlReplay">提交</span></div>
      <div style="margin:8px;">
        <van-field
          v-model="replayMessage"
          rows="5"
          type="textarea"
          placeholder="请输入留言"
        />
      </div>
      <div style="float:right; margin-right:15px;"><span>@</span><span>+</span></div>
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
import { Tag, Image,Field,Button } from "vant";
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
    [Button.name]: Button, 
  },
  data() {
    return {
      searchVisible: false,
      searchKey: "",

      listTopic: [],
      refreshing: false,
      loading: false,
      finished: false,

      replayBoxVisible: false,
      replayMessage:'',
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
    onLoad() {
      console.log('message > methods > onLoad')
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        if (this.refreshing) {
          this.listTopic = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 1; ++i) {
          this.listTopic.push({
            id: `topic_${this.listTopic.length+1}_${i}`,
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
        if (this.listTopic.length >= 5) {
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
      console.log('message > methods > onRefresh')
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    handlReplay(){
      this.replayBoxVisible=false
      Toast("留言成功"+this.replayMessage);
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
  .message-topics {
    margin: 37px 0 37px 0;
  }
  .message-topic {
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