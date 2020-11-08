<template>
<div class="ework-message">
   <div class="message-header">
      <span v-if="!searchVisible">
        <van-row
          type="flex"
          justify="center"
          align="center"
          style="height: 139px"
        >
        <van-col span="24">
          <van-nav-bar
            title="标题"
            left-text="返回"
            right-text="按钮"
            left-arrow
          />
          <van-nav-bar title="标题" left-text="返回" left-arrow>
            <template #right>
              <van-icon name="search" size="18" />
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
              show-action
              placeholder="请输入搜索关键词"
            />
          </van-col>
        </van-row>
      </span>
    </div>
</div>
</template>
<script>
import { NavBar } from "vant";
import { Icon } from "vant";
import { Row } from "vant";
import { Col } from "vant";
export default {
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: NavBar,
    [Row.name]: Row,
    [Col.name]: Col,
  },
  data() {
    return {
      searchVisible: false,
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
  //覆盖原有控件样式
  .van-cell {
    padding: 0;
  }
  .van-search {
    padding: 0;
  }
}
</style>
