<template>
  <div>
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
                    <div v-for="(img, index) in topic.Imgs" :key="img.id" @click="showImagePreview(topic.Imgs,index)">
                      <van-image fit="contain" :src="img.Url" />
                    </div>
                    <!-- <van-image fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg"/> -->
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
                  <div class="right-replay" v-for="(reply, index) in topic.Replys" :key="reply.id">
                    <div class="replay-top">
                      <span>{{index}}楼</span>
                      <span>{{reply.UserName}}</span>
                      <span>{{reply.CreateTime}}</span>
                    </div>
                    <div class="right-content">
                      {{reply.Memo}} 
                    </div>
                    <div class="right-content-imgs">
                      <div v-for="(img, index) in reply.Imgs" :key="img.id" @click="showImagePreview(reply.Imgs,index)">
                        <van-image fit="contain" :src="img.Url" />
                      </div>
                    </div>
                  </div>
                  <!-- <div class="right-replay">
                    <div class="replay-top">
                      <span>张三</span>
                      <span>2020-03-13</span>
                    </div>
                    <div class="right-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet  
                    </div>
                    <div class="right-content-imgs">
                      <van-image fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                    </div>
                  </div> -->
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
      :style="{ height: '380px',background:'#ccc'}"
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
      <div style="float:right; margin-right:15px; height:30px;"><span>@</span><span>+</span></div>
      <div style="margin:8px;">
        <van-uploader v-model="fileList" :after-read="afterRead" :max-count="8" :max-size="500 * 1024" @oversize="onOversize" />
      </div>
    </van-popup>
  </div>
</template>
<script>
import { Cell } from "vant";
import { List } from "vant";
import { Icon } from "vant";
import { Col, Row } from "vant";
import { PullRefresh } from "vant";
import { Popup } from 'vant';
import { Toast } from "vant";
import { Tag, Image,Field,Button } from "vant";
import { Uploader } from "vant";
import { ImagePreview } from "vant";
 
 
export default {
  components: {
    [List.name]: List,
    [Cell.name]: Cell,
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
    [Uploader.name]: Uploader, 
    [ImagePreview.Component.name]: ImagePreview.Component,
    
  },
  data() {
    return {
      listTopic: [],
      refreshing: false,
      loading: false,
      finished: false,

      replayBoxVisible: false,
      replayMessage:'',
      fileList: [
        {
          url: 'https://img.yzcdn.cn/vant/leaf.jpg',
          status: 'uploading',
          message: '上传中...',
        },
        {
          url: 'https://img.yzcdn.cn/vant/leaf.jpg',
          status: 'uploading',
          message: '上传中...',
        },
        {
          url: 'https://img.yzcdn.cn/vant/leaf.jpg',
          status: 'uploading',
          message: '上传中...',
        },
        {
          url: 'https://img.yzcdn.cn/vant/leaf.jpg',
          status: 'uploading',
          message: '上传中...',
        },
        {
          url: 'https://img.yzcdn.cn/vant/leaf.jpg',
          status: 'uploading',
          message: '上传中...',
        },
        {
          url: 'https://img.yzcdn.cn/vant/tree.jpg',
          status: 'failed',
          message: '上传失败',
        },
      ],
    };
  },
  created() {
    console.log('topics > created')
  },
  mounted(){
    console.log('topics > mounted')
  },
  destroyed() {
    console.log('topics > destroyed')
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
          let topic = {
            id: `topic_${this.listTopic.length+1}_${i}`,
            UserName: `叶浙雄${i}`,
            Tag: `面料检验`,
            CreatTime: `2020年12月31日`,
            Workgroup: `检验组`,
            Imgs:[
              {Id:`img_${this.listTopic.length+1}_${i}_1`,Name:'',Url:'https://img.yzcdn.cn/vant/apple-1.jpg'},
              {Id:`img_${this.listTopic.length+1}_${i}_2`,Name:'',Url:'https://img.yzcdn.cn/vant/apple-2.jpg'},
              {Id:`img_${this.listTopic.length+1}_${i}_3`,Name:'',Url:'https://img.yzcdn.cn/vant/apple-3.jpg'},
              {Id:`img_${this.listTopic.length+1}_${i}_4`,Name:'',Url:'https://img.yzcdn.cn/vant/apple-4.jpg'},
              {Id:`img_${this.listTopic.length+1}_${i}_4`,Name:'',Url:'https://img.yzcdn.cn/vant/cat.jpeg'},
            ],
            Memo: `后道封样5件/领角不方正、压线起纽返止口5件/挂面里布吃势不均匀/门襟下角套里布未做0.5活动量5件/袖叉拉筒起纽未包实5件。尺寸正常`,            
          }
          topic.Replys=[]
          for(let j=0;j<2;++j){
            topic.Replys.push(
              {
                id: `reply_${this.listTopic.length+1}_${i}_${j}`,
                UserName: `叶浙雄${i}_${j}`,
                CreatTime: `2020年12月31日`,
                Imgs:[
                  {Id:`img_${this.listTopic.length+1}_${i}_1`,Name:'',Url:'https://img.yzcdn.cn/vant/apple-1.jpg'},
                  {Id:`img_${this.listTopic.length+1}_${i}_2`,Name:'',Url:'https://img.yzcdn.cn/vant/apple-2.jpg'},
                  {Id:`img_${this.listTopic.length+1}_${i}_3`,Name:'',Url:'https://img.yzcdn.cn/vant/apple-3.jpg'},
                  {Id:`img_${this.listTopic.length+1}_${i}_4`,Name:'',Url:'https://img.yzcdn.cn/vant/apple-4.jpg'},
                  {Id:`img_${this.listTopic.length+1}_${i}_4`,Name:'',Url:'https://img.yzcdn.cn/vant/cat.jpeg'},
                ],
                Memo: `后道封样5件/领角不方正、压线起纽返止口5件/挂面里布吃势不均匀/门襟下角套里布未做0.5活动量5件/袖叉拉筒起纽未包实5件。尺寸正常`,
              }
            )
          }
          this.listTopic.push(topic);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.listTopic.length >= 5) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      console.log('topics > methods > onRefresh')
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
    afterRead(file) {
      file.status = 'uploading';
      file.message = '上传中...';

      setTimeout(() => {
        file.status = 'failed';
        file.message = '上传失败';
      }, 1000);
    },
    onOversize(file) {
      console.log(file);
      Toast('文件大小不能超过 500kb');
    },
    showImagePreview(imgs,index){
      let _imgs = imgs.map(element => {
        return element.Url
      });
      ImagePreview({
        images: _imgs,
        startPosition: index,
        closeable: true,
        showIndex: true,    //是否显示页码         默认 true
        showIndicators: true, //是否显示轮播指示器 默认 false
      });

    },
  },
};
</script>


<style lang="less">
.ework-message {
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
        display: flex;
        flex-wrap:wrap;
        .van-image {
          border: solid 1px #eee;
          border-radius: 5px;
          width:27vw;
          height:30vw;
          margin-right: 5px;
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
          display: flex;
          flex-wrap:wrap;
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
}
</style>
