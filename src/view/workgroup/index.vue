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
          <van-cell v-for="item in listWorkgroup" :key="item.Id">
            <template>
              <!-- <div class="content-item" @click="$router.push({name:`workgroupMessage`,params:{Id:item.Id,UserName:item.WorkgroupName}})"> -->
              <div class="content-item" @click="$router.push({path:`/workgroupMessage`,query:{Id:item.Id,UserName:item.WorkgroupName}})">
                <div class="item-left">
                  <span v-for="user in item.Users" :key="user.UserName">
                    {{user.UserName}}
                  </span>
                  <!-- <span>法</span> -->
                </div>
                <div class="item-right">
                  <div class="right-line1">
                    <div class="line1-left">{{item.WorkgroupName}}</div>
                    <div class="line1-right">
                      <van-tag v-for="tag in item.Tags" :key="tag" type="primary">{{tag}}</van-tag>
                    </div>
                  </div>
                  <div class="right-line2"><span>帖子数量{{item.MessageNum}}万</span><span>未读{{item.UnreadNum}}</span><span>人员{{item.PersonsNum}}人</span></div>
                  
                </div>
              </div>
            </template>
          </van-cell>
        </van-list>
      </van-pull-refresh>
    </div>
    <!-- 相关配套组件 -->
  </div>
</template>
<script>
import { Col,Row,Tag,Image,List,Cell,PullRefresh } from "vant";
export default {
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [Tag.name]: Tag,
    [Image.name]: Image,
    [List.name]: List,
    [Cell.name]: Cell,
    [PullRefresh.name]: PullRefresh,
     
  },
  props: {
  },
  data() {
    return {
      refreshing: false,
      loading: false,
      finished: false,
      listWorkgroup: [],
      scrollTop:0,
    };
  },
  created() {
    console.log('workgroup > created')
  },
  mounted(){
    console.log('workgroup > mounted')
    this.onLoad()
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
          this.listWorkgroup.push({
            Id:i,
            // HeadUrl:"https://img.yzcdn.cn/vant/cat.jpeg",
            Users:[
              {UserName:"陈法勇"},
              {UserName:"陈嘉松"},
              {UserName:"叶浙雄"},
            ],
            WorkgroupName:`工作组${i}`,
            MessageNum:199,
            UnreadNum:102,
            PersonsNum:5,
            Tags:["标签A","标签B"]
          });
        }
        this.loading = false;
        if (this.listWorkgroup.length >= 15) {
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
  },
  
  //进入该页面时，用之前保存的滚动位置赋值
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log('workgroup -> index -> beforeRouteEnter -> vm.scrollTop=',vm.scrollTop)
      console.log('workgroup -> index -> beforeRouteEnter -> document.body.scrollHeight=',document.body.scrollHeight)
      document.body.scrollTop = vm.scrollTop
    })
  },
  //在页面离开时记录滚动位置
  beforeRouteLeave (to, from, next) {
    this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    console.log('workgroup -> index -> beforeRouteLeave -> this.scrollTop=',this.scrollTop)
    console.log('workgroup -> index -> beforeRouteLeave -> document.body.scrollHeight=',document.body.scrollHeight)
    next()
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
    margin: 38px 0 38px 0;
    .content-item{
      display: flex;
      justify-content: flex-start;
      .item-right{
        margin-left:5px;
        width:100%;
        .right-line1{
          display: flex;
          justify-content:space-between;
          align-content:space-between;
          .line1-left{
            font-size:18px;
          }
          .line1-right{
            display: flex;
            justify-content: flex-start;
            span{ margin-right:10px; }
          }
        }
        .right-line2{
          span{ margin-right:10px; }
        }
      }
      .item-left{
        display: flex;
        justify-content:space-around;
        width:46px;
        height:40px;
        flex-wrap:wrap;
        background-color: #eee;
        border:solid 1px #ccc;
        border-radius: 5px;
        padding:2px;
        overflow: hidden;
        span{
          width:18px;
          height:18px;
          line-height:18px;
          color:#fff;
          background-color:#f97;
          text-align: center;
          border-radius: 5px;
          overflow: hidden;
        }
      } 
    }
  }
}
</style>
