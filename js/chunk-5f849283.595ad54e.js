(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f849283"],{"28e1":function(e,o,t){},8442:function(e,o,t){"use strict";t.r(o);var a,n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"ework-message"},[t("div",{staticClass:"message-header"},[e.searchVisible?t("span",[t("van-row",{staticStyle:{height:"39px"},attrs:{type:"flex",justify:"center",align:"center"}},[t("van-col",{attrs:{span:"24"}},[t("van-search",{attrs:{"show-action":"",placeholder:"请输入搜索关键词"},on:{search:e.onSearch,cancel:function(o){e.searchVisible=!1}},model:{value:e.searchKey,callback:function(o){e.searchKey=o},expression:"searchKey"}})],1)],1)],1):t("span",[t("van-row",{staticStyle:{height:"39px"},attrs:{type:"flex",justify:"center",align:"center"}},[t("van-col",{attrs:{span:"5",offset:"1"}},[e._v("雁过留声")]),t("van-col",{attrs:{span:"12"}}),t("van-col",{attrs:{span:"3"}},[t("van-icon",{attrs:{name:"search",size:"20"},on:{click:function(o){e.searchVisible=!0}}})],1),t("van-col",{attrs:{span:"3"}},[t("van-icon",{attrs:{name:"filter-o",size:"20"},on:{click:function(o){return e.$router.push({path:"/indexProSearch"})}}})],1)],1)],1)]),t("topics-box")],1)},s=[],c=t("ade3"),r=(t("e7e5"),t("d399")),l=(t("4d48"),t("d1e1")),i=(t("81e6"),t("9ffb")),u=(t("c3a6"),t("ad06")),d=(t("5852"),t("d961")),h=t("9aea"),f={components:(a={},Object(c["a"])(a,d["a"].name,d["a"]),Object(c["a"])(a,u["a"].name,u["a"]),Object(c["a"])(a,i["a"].name,i["a"]),Object(c["a"])(a,l["a"].name,l["a"]),Object(c["a"])(a,r["a"].name,r["a"]),Object(c["a"])(a,"TopicsBox",h["a"]),a),data:function(){return{searchVisible:!1,searchKey:"",scrollTop:0}},created:function(){console.log("message > created")},mounted:function(){console.log("message > mounted")},destroyed:function(){console.log("message > destroyed")},methods:{onSearch:function(){Object(r["a"])("onSearch"),this.searchVisible=!1}},beforeRouteEnter:function(e,o,t){t((function(e){console.log("message -> index -> beforeRouteEnter -> vm.scrollTop=",e.scrollTop),console.log("message -> index -> beforeRouteEnter -> document.body.scrollHeight=",document.body.scrollHeight),document.body.scrollTop=e.scrollTop}))},beforeRouteLeave:function(e,o,t){this.scrollTop=document.documentElement.scrollTop||document.body.scrollTop,console.log("message -> index -> beforeRouteLeave -> this.scrollTop=",this.scrollTop),console.log("message -> index -> beforeRouteLeave -> document.body.scrollHeight=",document.body.scrollHeight),t()}},p=f,m=(t("f8e1"),t("2877")),b=Object(m["a"])(p,n,s,!1,null,null,null);o["default"]=b.exports},f8e1:function(e,o,t){"use strict";var a=t("28e1"),n=t.n(a);n.a}}]);
//# sourceMappingURL=chunk-5f849283.595ad54e.js.map