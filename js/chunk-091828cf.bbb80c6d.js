(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-091828cf"],{"38d5":function(t,e,n){"use strict";n("68ef")},"772a":function(t,e,n){"use strict";var i=n("d282"),a=n("db85"),r=Object(i["a"])("form"),o=r[0],s=r[1];e["a"]=o({props:{colon:Boolean,labelWidth:[Number,String],labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,errorMessageAlign:String,submitOnEnter:{type:Boolean,default:!0},validateTrigger:{type:String,default:"onBlur"},showError:{type:Boolean,default:!0},showErrorMessage:{type:Boolean,default:!0}},provide:function(){return{vanForm:this}},data:function(){return{fields:[]}},methods:{validateSeq:function(){var t=this;return new Promise((function(e,n){var i=[];t.fields.reduce((function(t,e){return t.then((function(){if(!i.length)return e.validate().then((function(t){t&&i.push(t)}))}))}),Promise.resolve()).then((function(){i.length?n(i):e()}))}))},validateAll:function(){var t=this;return new Promise((function(e,n){Promise.all(t.fields.map((function(t){return t.validate()}))).then((function(t){t=t.filter((function(t){return t})),t.length?n(t):e()}))}))},validate:function(t){return t?this.validateField(t):this.validateFirst?this.validateSeq():this.validateAll()},validateField:function(t){var e=this.fields.filter((function(e){return e.name===t}));return e.length?new Promise((function(t,n){e[0].validate().then((function(e){e?n(e):t()}))})):Promise.reject()},resetValidation:function(t){this.fields.forEach((function(e){t&&e.name!==t||e.resetValidation()}))},scrollToField:function(t,e){this.fields.some((function(n){return n.name===t&&(n.$el.scrollIntoView(e),!0)}))},addField:function(t){this.fields.push(t),Object(a["a"])(this.fields,this)},removeField:function(t){this.fields=this.fields.filter((function(e){return e!==t}))},getValues:function(){return this.fields.reduce((function(t,e){return t[e.name]=e.formValue,t}),{})},onSubmit:function(t){t.preventDefault(),this.submit()},submit:function(){var t=this,e=this.getValues();this.validate().then((function(){t.$emit("submit",e)})).catch((function(n){t.$emit("failed",{values:e,errors:n}),t.scrollToError&&t.scrollToField(n[0].name)}))}},render:function(){var t=arguments[0];return t("form",{class:s(),on:{submit:this.onSubmit}},[this.slots()])}})},"847d":function(t,e,n){"use strict";n.r(e);var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("van-form",{on:{submit:t.onSubmit}},[n("div",{staticStyle:{margin:"16px"}},[n("van-field",{attrs:{name:"用户名",label:"用户名",placeholder:"admin",rules:[{required:!0,message:"请填写用户名"}]},model:{value:t.formData.UserName,callback:function(e){t.$set(t.formData,"UserName",e)},expression:"formData.UserName"}}),n("van-field",{attrs:{type:"password",name:"密码",label:"密码",placeholder:"123",rules:[{required:!0,message:"请填写密码"}]},model:{value:t.formData.Password,callback:function(e){t.$set(t.formData,"Password",e)},expression:"formData.Password"}})],1),n("div",{staticStyle:{margin:"16px"}},[n("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v(" 提交 ")])],1)])],1)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"text-align":"center","padding-top":"60px"}},[i("img",{attrs:{src:n("cf05"),alt:""}})])}],o=n("ade3"),s=(n("e7e5"),n("d399")),l=(n("be7f"),n("565f")),u=(n("66b9"),n("b650")),c=(n("38d5"),n("772a")),f={components:(i={},Object(o["a"])(i,c["a"].name,c["a"]),Object(o["a"])(i,u["a"].name,u["a"]),Object(o["a"])(i,l["a"].name,l["a"]),Object(o["a"])(i,s["a"].name,s["a"]),i),data:function(){return{formData:{UserName:"",Password:""}}},methods:{onSubmit:function(t){"admin"===this.formData.UserName&&"123"===this.formData.Password?(this.$toast("登录成功"),console.log("values:",t),this.$router.push("/")):this.$toast("用户名密码错误")}}},d=f,m=n("2877"),h=Object(m["a"])(d,a,r,!1,null,null,null);e["default"]=h.exports},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}}]);
//# sourceMappingURL=chunk-091828cf.bbb80c6d.js.map