(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-yisheng-add-or-update"],{"118c":function(e,r,i){"use strict";var t=i("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,i("a481"),i("c5f6"),i("f559"),i("ac6a"),i("28a5"),i("96cf");var n=t(i("3b8d")),a=t(i("e2b1")),o={data:function(){return{cross:"",ruleForm:{yishenggonghao:"",mima:"",yishengxingming:"",yishengxingbie:"",yishengzhaopian:"",yishengzhicheng:"",lianxidianhua:""},yishengxingbieOptions:[],yishengxingbieIndex:0,user:{},ro:{yishenggonghao:!1,mima:!1,yishengxingming:!1,yishengxingbie:!1,yishengzhaopian:!1,yishengzhicheng:!1,lianxidianhua:!1}}},components:{wPicker:a.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(r){var i,t,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(i);case 3:if(t=e.sent,this.user=t.data,this.yishengxingbieOptions="男,女".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=14;break}return this.ruleForm.id=r.id,e.next=12,this.$api.info("yisheng",this.ruleForm.id);case 12:t=e.sent,this.ruleForm=t.data;case 14:if(this.cross=r.cross,!r.cross){e.next=50;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 18:if((e.t1=e.t0()).done){e.next=50;break}if(a=e.t1.value,"yishenggonghao"!=a){e.next=24;break}return this.ruleForm.yishenggonghao=n[a],this.ro.yishenggonghao=!0,e.abrupt("continue",18);case 24:if("mima"!=a){e.next=28;break}return this.ruleForm.mima=n[a],this.ro.mima=!0,e.abrupt("continue",18);case 28:if("yishengxingming"!=a){e.next=32;break}return this.ruleForm.yishengxingming=n[a],this.ro.yishengxingming=!0,e.abrupt("continue",18);case 32:if("yishengxingbie"!=a){e.next=36;break}return this.ruleForm.yishengxingbie=n[a],this.ro.yishengxingbie=!0,e.abrupt("continue",18);case 36:if("yishengzhaopian"!=a){e.next=40;break}return this.ruleForm.yishengzhaopian=n[a],this.ro.yishengzhaopian=!0,e.abrupt("continue",18);case 40:if("yishengzhicheng"!=a){e.next=44;break}return this.ruleForm.yishengzhicheng=n[a],this.ro.yishengzhicheng=!0,e.abrupt("continue",18);case 44:if("lianxidianhua"!=a){e.next=48;break}return this.ruleForm.lianxidianhua=n[a],this.ro.lianxidianhua=!0,e.abrupt("continue",18);case 48:e.next=18;break;case 50:this.styleChange();case 51:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},yishengxingbieChange:function(e){this.yishengxingbieIndex=e.target.value,this.ruleForm.yishengxingbie=this.yishengxingbieOptions[this.yishengxingbieIndex]},yishengzhaopianTap:function(){var e=this;this.$api.upload((function(r){e.ruleForm.yishengzhaopian="upload/"+r.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var r,i,t,n,a,o,s,u,g,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.yishenggonghao){e.next=3;break}return this.$utils.msg("医生工号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.mima){e.next=6;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if(this.ruleForm.yishengxingming){e.next=9;break}return this.$utils.msg("医生姓名不能为空"),e.abrupt("return");case 9:if(!this.ruleForm.lianxidianhua||this.$validate.isMobile(this.ruleForm.lianxidianhua)){e.next=12;break}return this.$utils.msg("联系电话应输入手机格式"),e.abrupt("return");case 12:if(!this.cross){e.next=28;break}if(n=uni.getStorageSync("statusColumnName"),a=uni.getStorageSync("statusColumnValue"),""==n){e.next=28;break}if(o=uni.getStorageSync("crossObj"),n.startsWith("[")){e.next=24;break}for(s in o)s==n&&(o[s]=a);return u=uni.getStorageSync("crossTable"),e.next=22,this.$api.update("".concat(u),o);case 22:e.next=28;break;case 24:r=Number(uni.getStorageSync("userid")),i=o["id"],t=uni.getStorageSync("statusColumnName"),t=t.replace(/\[/,"").replace(/\]/,"");case 28:if(!i||!r){e.next=50;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=i,g={page:1,limit:10,crossuserid:r,crossrefid:i},e.next=34,this.$api.list("yisheng",g);case 34:if(l=e.sent,!(l.data.total>=t)){e.next=40;break}return this.$utils.msg(uni.getStorageSync("tips")),e.abrupt("return",!1);case 40:if(!this.ruleForm.id){e.next=45;break}return e.next=43,this.$api.update("yisheng",this.ruleForm);case 43:e.next=47;break;case 45:return e.next=47,this.$api.add("yisheng",this.ruleForm);case 47:this.$utils.msgBack("提交成功");case 48:e.next=58;break;case 50:if(!this.ruleForm.id){e.next=55;break}return e.next=53,this.$api.update("yisheng",this.ruleForm);case 53:e.next=57;break;case 55:return e.next=57,this.$api.add("yisheng",this.ruleForm);case 57:this.$utils.msgBack("提交成功");case 58:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,i=r.getFullYear(),t=r.getMonth()+1,n=r.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),t=t>9?t:"0"+t,n=n>9?n:"0"+n,"".concat(i,"-").concat(t,"-").concat(n)},toggleTab:function(e){this.$refs[e].show()}}};r.default=o},"20cc":function(e,r,i){"use strict";i.r(r);var t=i("bc71"),n=i("bee7");for(var a in n)"default"!==a&&function(e){i.d(r,e,(function(){return n[e]}))}(a);i("6780");var o,s=i("f0c5"),u=Object(s["a"])(n["default"],t["b"],t["c"],!1,null,"01da3546",null,!1,t["a"],o);r["default"]=u.exports},"5a1d":function(e,r,i){var t=i("24fb");r=t(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-01da3546]{padding:%?20?%}.content[data-v-01da3546]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-01da3546]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-01da3546]{width:%?180?%}.avator[data-v-01da3546]{width:%?150?%;height:%?60?%}.right-input[data-v-01da3546]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-01da3546]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-01da3546]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-01da3546]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-01da3546]{border:0}.cu-form-group uni-input[data-v-01da3546]{padding:0 %?30?%}.uni-input[data-v-01da3546]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-01da3546]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-01da3546]::after{line-height:%?80?%}.select .uni-input[data-v-01da3546]{line-height:%?80?%}.input .right-input[data-v-01da3546]{line-height:%?80?%}',""]),e.exports=r},6780:function(e,r,i){"use strict";var t=i("d592"),n=i.n(t);n.a},bc71:function(e,r,i){"use strict";var t,n=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("v-uni-view",{staticClass:"content"},[i("v-uni-form",{staticClass:"app-update-pv"},[i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 107, 19, 0.1)",borderColor:"rgba(245, 245, 245, 1)",margin:"0",borderWidth:"0 0 2rpx",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"200rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"right"}},[e._v("医生工号")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(255, 170, 51, 1)",borderRadius:"8rpx",color:"rgba(51, 51, 51, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"80rpx"},attrs:{disabled:e.ro.yishenggonghao,placeholder:"医生工号"},model:{value:e.ruleForm.yishenggonghao,callback:function(r){e.$set(e.ruleForm,"yishenggonghao",r)},expression:"ruleForm.yishenggonghao"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 107, 19, 0.1)",borderColor:"rgba(245, 245, 245, 1)",margin:"0",borderWidth:"0 0 2rpx",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"200rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"right"}},[e._v("密码")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(255, 170, 51, 1)",borderRadius:"8rpx",color:"rgba(51, 51, 51, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"80rpx"},attrs:{disabled:e.ro.mima,placeholder:"密码"},model:{value:e.ruleForm.mima,callback:function(r){e.$set(e.ruleForm,"mima",r)},expression:"ruleForm.mima"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 107, 19, 0.1)",borderColor:"rgba(245, 245, 245, 1)",margin:"0",borderWidth:"0 0 2rpx",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"200rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"right"}},[e._v("医生姓名")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(255, 170, 51, 1)",borderRadius:"8rpx",color:"rgba(51, 51, 51, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"80rpx"},attrs:{disabled:e.ro.yishengxingming,placeholder:"医生姓名"},model:{value:e.ruleForm.yishengxingming,callback:function(r){e.$set(e.ruleForm,"yishengxingming",r)},expression:"ruleForm.yishengxingming"}})],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 107, 19, 0.1)",borderColor:"rgba(245, 245, 245, 1)",margin:"0",borderWidth:"0 0 2rpx",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"200rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"right"}},[e._v("医生性别")]),i("v-uni-picker",{attrs:{value:e.yishengxingbieIndex,range:e.yishengxingbieOptions},on:{change:function(r){arguments[0]=r=e.$handleEvent(r),e.yishengxingbieChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(255, 170, 51, 1)",borderRadius:"8rpx",color:"rgba(51, 51, 51, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"80rpx"}},[e._v(e._s(e.ruleForm.yishengxingbie?e.ruleForm.yishengxingbie:"请选择医生性别"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group",class:"left"==e.left?"":"active",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 107, 19, 0.1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"140rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.yishengzhaopianTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"title",style:{width:"200rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"right"}},[e._v("医生照片")]),i("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[e.ruleForm.yishengzhaopian?i("v-uni-image",{staticClass:"avator",style:{width:"120rpx",boxShadow:"0 0 8rpx rgba(0,0,0,.3)",borderRadius:"50%",textAlign:"left",height:"120rpx"},attrs:{src:e.baseUrl+e.ruleForm.yishengzhaopian,mode:"aspectFill"}}):i("v-uni-image",{staticClass:"avator",style:{width:"120rpx",boxShadow:"0 0 8rpx rgba(0,0,0,.3)",borderRadius:"50%",textAlign:"left",height:"120rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 107, 19, 0.1)",borderColor:"rgba(245, 245, 245, 1)",margin:"0",borderWidth:"0 0 2rpx",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"200rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"right"}},[e._v("医生职称")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(255, 170, 51, 1)",borderRadius:"8rpx",color:"rgba(51, 51, 51, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"80rpx"},attrs:{disabled:e.ro.yishengzhicheng,placeholder:"医生职称"},model:{value:e.ruleForm.yishengzhicheng,callback:function(r){e.$set(e.ruleForm,"yishengzhicheng",r)},expression:"ruleForm.yishengzhicheng"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 107, 19, 0.1)",borderColor:"rgba(245, 245, 245, 1)",margin:"0",borderWidth:"0 0 2rpx",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"200rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"right"}},[e._v("联系电话")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(255, 170, 51, 1)",borderRadius:"8rpx",color:"rgba(51, 51, 51, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"80rpx"},attrs:{disabled:e.ro.lianxidianhua,placeholder:"联系电话"},model:{value:e.ruleForm.lianxidianhua,callback:function(r){e.$set(e.ruleForm,"lianxidianhua",r)},expression:"ruleForm.lianxidianhua"}})],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 0px rgba(0,0,0,0) inset",backgroundColor:"rgba(255, 107, 19, 1)",borderColor:"rgba(255, 107, 19, 1)",borderRadius:"20rpx",color:"#fff",borderWidth:"0",width:"100%",fontSize:"32rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)},a=[];i.d(r,"b",(function(){return n})),i.d(r,"c",(function(){return a})),i.d(r,"a",(function(){return t}))},bee7:function(e,r,i){"use strict";i.r(r);var t=i("118c"),n=i.n(t);for(var a in t)"default"!==a&&function(e){i.d(r,e,(function(){return t[e]}))}(a);r["default"]=n.a},d592:function(e,r,i){var t=i("5a1d");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var n=i("4f06").default;n("1361ffa9",t,!0,{sourceMap:!1,shadowMode:!1})}}]);