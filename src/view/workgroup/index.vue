<template>
  <div class='ework-workgroup'>
    <div class='workgroup-header'>
      <van-row type="flex" justify="center" align="center" style="height: 37px">
        <van-col span="5" offset="1">工作组</van-col>
        <van-col span="18"></van-col>
      </van-row>
    </div>
    <div class='workgroup-content'>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          ref="workgroupList"
          v-model="loading"
          :finished="finished"
          offset="50"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell v-for="item in list" :key="item" :title="item" />
        </van-list>
      </van-pull-refresh>
    </div>
    <!-- 相关配套组件 -->
  </div>
</template>
<script>
import { Grid, GridItem,Col, Row,List,Cell,PullRefresh } from "vant";
export default {
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Col.name]: Col,
    [Row.name]: Row,
    [List.name]: List,
    [Cell.name]: Cell,
    [PullRefresh.name]: PullRefresh,
     
  },
  props: {
    checkScroll2:Boolean,
  },
  data() {
    return {
      list: [],
      refreshing: false,
      loading: false,
      finished: false,
    };
  },
  created() {
    console.log('workgroup > created')
  },
  mounted(){
    // console.log('workgroup > mounted')
    console.log('workgroup > mounted')
  },
  destroyed() {
    console.log('workgroup > destroyed')
  },
  methods: {
    onLoad() {
      console.log('workgroup > methods > onLoad')
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 5; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      console.log('workgroup > methods > onRefresh')
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    /** 检查当前的滚动位置，若已滚动至底部，则会触发 load 事件 */
    checkScroll(){
      this.$refs.workgroupList.check()
    },
  },
};
</script>

<style lang="less">
.ework-workgroup{
  .workgroup-header{
    position: fixed;
    width: 100%;
    top: 0;
    height: 37px;
    z-index: 1;
    background: #eee;
    border-bottom: solid 1px #eee;
  }
  .workgroup-content{
    margin: 37px 0 37px 0;
  }
}
</style>
