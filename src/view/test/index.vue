<template>
  <div class="view-test-index">
    <div class="van-head-fixed">
    van-head-fixed
    </div>
    <div class="van-body">
      <div style="height:1200px;">123123123</div>
    </div>
    <div class="van-bottom-fixed">
     van-bottom-fixed
    </div>
  </div>
</template>
<script>
import { Cell } from "vant";
import { List } from "vant";
import { Search } from "vant";
import { Icon } from "vant";
import { Col, Row } from 'vant';
// import { NavBar } from "vant";
// import { Toast } from "vant";
import { Tabbar, TabbarItem } from "vant";
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [List.name]: List,
    [Cell.name]: Cell,
    // [NavBar.name]: NavBar,
    [Search.name]: Search,
    [Icon.name]: Icon,
    [Col.name]: Col,
    [Row.name]: Row,
  },
  data() {
    return {
      active: 0,
      icon: {
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png",
      },
      list: [],
      loading: false,
      finished: false,
      value: "yezhexiong",
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

.view-test-index {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  height: 100%;
  border:solid 1px red;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  .van-head-fixed{
    width: 100%;
    height:50px;
    border:solid 1px green;
  }
  .van-bottom-fixed{
    width: 100%;
    height:50px;
    border:solid 1px green;
  }
  .van-body{
    width: 100%;
    height: 100%;
    border:solid 1px green;
    overflow:auto;
  }
}
.van-head-fixed1 {
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;
  //     z-index: 1;
  // display: -webkit-box;
  // display: -webkit-flex;
  // display: flex;
  // box-sizing: content-box;
  // width: 100%;
  // height: 50px;
  // padding-bottom: constant(safe-area-inset-bottom);
  // padding-bottom: env(safe-area-inset-bottom);
  // background-color: #fff;

  // position: fixed;
  // bottom: 0;
  // left: 0;

  // display: -webkit-box;
  // display: -webkit-flex;
  // display: flex;
  // -webkit-box-flex: 1;
  // -webkit-flex: 1;
  // flex: 1;
  // -webkit-box-orient: vertical;
  // -webkit-box-direction: normal;
  // -webkit-flex-direction: column;
  // flex-direction: column;
  // -webkit-box-align: center;
  // -webkit-align-items: center;
  // align-items: center;
  // -webkit-box-pack: center;
  // -webkit-justify-content: center;
  // justify-content: center;
  // color: #646566;
  // font-size: 12px;
  // line-height: 1;
}
</style>
