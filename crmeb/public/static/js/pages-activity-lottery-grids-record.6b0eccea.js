(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activity-lottery-grids-record"],{"193e":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("fd65")),r=i("7f3a"),s=n(i("31db")),o=n(i("e972")),c=n(i("c83f")),d={components:{emptyPage:o.default,userAddress:s.default},mixins:[c.default],data:function(){return{loading:!1,addressModel:!1,where:{page:1,limit:20},lotteryList:[],loadTitle:""}},onLoad:function(){this.getLotteryList()},filters:{typeName:function(t){return 2==t?"积分":3==t?"余额":4==t?"红包":5==t?"优惠券":6==t?"商品":void 0}},onReady:function(){this.$nextTick((function(){var t=this,e=new a.default(".copy-data");e.on("success",(function(){t.$util.Tips({title:"复制成功"})}))}))},methods:{getAddress:function(t){var e=this,i=t;i.id=this.addid,i.address=t.address.province+t.address.city+t.address.district+t.detail,(0,r.receiveLottery)(i).then((function(t){e.$util.Tips({title:"领取成功"}),e.addressModel=!1})).catch((function(t){e.$util.Tips({title:t})}))},fromAddress:function(t){this.addid=t.id,this.addressModel=!0},getLotteryList:function(){var t=this;this.loadend||this.loading||(this.loading=!0,this.loadTitle="",(0,r.getLotteryList)(this.where).then((function(e){var i=e.data,n=t.$util.SplitArray(i,t.lotteryList),a=i.length<t.where.limit;t.loadend=a,t.loading=!1,t.loadTitle=a?"已全部加载":"加载更多",t.$set(t,"lotteryList",n),t.$set(t.where,"page",t.where.page+1)})).catch((function(t){that.loading=!1,that.loadTitle="加载更多"})))}},onReachBottom:function(){this.lotteryList.length,this.getLotteryList()}};e.default=d},"19a6":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.empty-box[data-v-6b1a6701]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:%?200?%}.empty-box uni-image[data-v-6b1a6701]{width:%?414?%;height:%?240?%}.empty-box .txt[data-v-6b1a6701]{font-size:%?26?%;color:#999}',""]),t.exports=e},2178:function(t,e,i){"use strict";i.r(e);var n=i("5d8f"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"21af":function(t,e,i){"use strict";var n=i("9627"),a=i.n(n);a.a},"24b4":function(t,e,i){"use strict";var n=i("bfb3"),a=i.n(n);a.a},"2a17":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".pictrueBox[data-v-a68dde36]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-a68dde36]{position:fixed;color:#fff;text-align:center;z-index:999;right:%?15?%;display:flex}.home .homeCon[data-v-a68dde36]{border-radius:%?50?%;opacity:0;height:0;color:var(--view-theme);width:0}.home .homeCon.on[data-v-a68dde36]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:var(--view-theme)!important}.home .homeCon .iconfont[data-v-a68dde36]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-a68dde36]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:var(--view-theme)}.home .pictrue .image[data-v-a68dde36]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},"31db":function(t,e,i){"use strict";i.r(e);var n=i("9035"),a=i("ef1d");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("b57c");var s,o=i("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"a0350c1e",null,!1,n["a"],s);e["default"]=c.exports},4272:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.colorStyle},[t.lotteryList.length?i("v-uni-view",{staticClass:"record"},[t._l(t.lotteryList,(function(e){return i("v-uni-view",{key:e.id,staticClass:"record-list"},[i("v-uni-image",{staticClass:"goods-img",attrs:{src:e.prize.image,mode:""}}),i("v-uni-view",{staticClass:"right-data"},[i("v-uni-view",{staticClass:"title line1"},[t._v(t._s(e.prize.name))]),i("v-uni-view",{staticClass:"goods-msg"},[t._v("奖品类型："),i("v-uni-text",{staticClass:"num"},[t._v(t._s(t._f("typeName")(e.prize.type)))])],1),6!=e.type||e.receive_time?i("v-uni-view",{staticClass:"goods-msg"},[t._v("兑换时间：\n\t\t\t\t\t"+t._s(e.receive_time||"--"))]):i("v-uni-view",{staticClass:"goods-msg exchange",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fromAddress(e)}}},[t._v("立即兑换")]),e.deliver_info.deliver_name?i("v-uni-view",{staticClass:"goods-msg"},[t._v("物流公司：\n\t\t\t\t\t"+t._s(e.deliver_info.deliver_name||"--"))]):t._e(),e.deliver_info.deliver_number?i("v-uni-view",{staticClass:"goods-msg"},[t._v("物流单号：\n\t\t\t\t\t"+t._s(e.deliver_info.deliver_number||"--")),e.deliver_info.deliver_number?i("v-uni-view",{staticClass:"copy copy-data",attrs:{"data-clipboard-text":e.deliver_info.deliver_number}},[t._v("复制")]):t._e()],1):t._e()],1)],1)})),t.lotteryList.length>0?i("v-uni-view",{staticClass:"loadingicon acea-row row-center-wrapper"},[i("v-uni-text",{staticClass:"loading iconfont icon-jiazai",attrs:{hidden:0==t.loading}}),t._v(t._s(t.loadTitle))],1):t._e()],2):t._e(),0!==t.lotteryList.length||t.loading?t._e():[i("emptyPage",{attrs:{title:"暂无中奖记录～"}})],i("userAddress",{attrs:{aleartStatus:t.addressModel},on:{getAddress:function(e){arguments[0]=e=t.$handleEvent(e),t.getAddress.apply(void 0,arguments)},close:function(e){arguments[0]=e=t.$handleEvent(e),function(){t.addressModel=!1}.apply(void 0,arguments)}}}),t.addressModel?i("v-uni-view",{staticClass:"mask",on:{close:function(e){arguments[0]=e=t.$handleEvent(e),function(){t.addressModel=!1}.apply(void 0,arguments)}}}):t._e()],2)},r=[]},"5d8f":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("26cb"),r=n(i("c83f")),s={name:"Home",props:{},mixins:[r.default],data:function(){return{top:"545"}},computed:(0,a.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){},beforeDestroy:function(){this.$store.commit("CLOSE_HOME")}};e.default=s},"676c":function(t,e,i){"use strict";i.r(e);var n=i("887b"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"7f3a":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getLotteryData=r,e.startLottery=s,e.receiveLottery=o,e.getLotteryList=c;var a=n(i("9011"));function r(t){return a.default.get("v2/lottery/info/".concat(t))}function s(t){return a.default.post("v2/lottery",t)}function o(t){return a.default.post("v2/lottery/receive",t)}function c(t){return a.default.get("v2/lottery/record",t)}},"887b":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{title:{type:String,default:"暂无记录"}}};e.default=n},"8c5c":function(t,e,i){var n=i("2a17");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("f58c1430",n,!0,{sourceMap:!1,shadowMode:!1})},9035:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.aleartStatus?n("v-uni-view",{staticClass:"aleart"},[n("v-uni-image",{staticClass:"close",attrs:{src:i("ad0a")},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.posterImageClose.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"title"},[n("v-uni-image",{staticClass:"title-img",attrs:{src:i("a69c"),mode:""}})],1),n("v-uni-view",{staticClass:"aleart-body"},[n("v-uni-form",{staticClass:"form-data",on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"addAddress"},[n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-input",{attrs:{type:"text",placeholder:"请输入姓名",name:"name",value:t.userAddress.name,"placeholder-class":"placeholder"}})],1),n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-input",{attrs:{type:"number",placeholder:"请输入联系电话",name:"phone",value:t.userAddress.phone,"placeholder-class":"placeholder",pattern:"\\d*"}})],1),n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-view",{staticClass:"address"},[n("v-uni-picker",{attrs:{mode:"multiSelector",value:t.valueRegion,range:t.multiArray},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindRegionChange.apply(void 0,arguments)},columnchange:function(e){arguments[0]=e=t.$handleEvent(e),t.bindMultiPickerColumnChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"acea-row"},[n("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.region[0])+"，"+t._s(t.region[1])+"，"+t._s(t.region[2]))])],1)],1)],1)],1),n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-input",{attrs:{type:"text",placeholder:"请填写具体地址",name:"detail","placeholder-class":"placeholder",value:t.userAddress.detail}})],1)],1),n("v-uni-button",{staticClass:"keepBnt",attrs:{"form-type":"submit"}},[t._v("提交")])],1)],1)],1)],1):t._e()},r=[]},9627:function(t,e,i){var n=i("d244");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("69ba84a5",n,!0,{sourceMap:!1,shadowMode:!1})},a212:function(t,e,i){"use strict";var n=i("4ea4");i("4160"),i("d81d"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("3474"),r=i("7fe6"),s=i("c6cd3"),o=i("26cb"),c=n(i("f497")),d={components:{home:c.default},props:{aleartStatus:{type:Boolean,default:!1}},data:function(){return{regionDval:["浙江省","杭州市","滨江区"],id:0,userAddress:{is_default:!1},region:["省","市","区"],valueRegion:[0,0,0],isAuto:!1,isShowAuth:!1,district:[],multiArray:[],multiIndex:[0,0,0],cityId:0,defaultRegion:["广东省","广州市","番禺区"],defaultRegionCode:"110101"}},computed:(0,o.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&this.getUserAddress()},deep:!0}},created:function(t){this.isLogin?(this.getCityList(),this.getUserAddress()):(0,s.toLogin)()},methods:{getCityList:function(){var t=this,e=this;(0,r.getCity)().then((function(i){t.district=i.data,e.initialize()}))},initialize:function(){var t=this,e=[],i=[],n=[];if(t.district.length){var a=t.district[0].c||[],r=a.length&&a[0].c||[];t.district.forEach((function(t){e.push(t.n)})),a.forEach((function(t){i.push(t.n)})),r.forEach((function(t){n.push(t.n)})),this.multiArray=[e,i,n]}},bindRegionChange:function(t){var e=this.multiIndex,i=this.district[e[0]]||{c:[]},n=i.c[e[1]]||{v:0},a=this.multiArray,r=t.detail.value;this.region=[a[0][r[0]],a[1][r[1]],a[2][r[2]]],this.cityId=n.v,this.valueRegion=[0,0,0],this.initialize()},bindMultiPickerColumnChange:function(t){var e=this,i=t.detail.column,n=t.detail.value,a=this.district[n]||{c:[]},r=e.multiArray,s=e.multiIndex;switch(s[i]=n,i){case 0:var o=a.c[0]||{c:[]};r[1]=a.c.map((function(t){return t.n})),r[2]=o.c.map((function(t){return t.n}));break;case 1:var c=e.district[s[0]].c[s[1]].c||[];r[2]=c.map((function(t){return t.n}));break;case 2:break}this.multiArray=r,this.multiIndex=s},onLoadFun:function(){this.getUserAddress()},authColse:function(t){this.isShowAuth=t},toggleTab:function(t){this.$refs[t].show()},onConfirm:function(t){this.region=t.checkArr[0]+"-"+t.checkArr[1]+"-"+t.checkArr[2]},getUserAddress:function(){if(!this.id)return!1;var t=this;(0,a.getAddressDetail)(this.id).then((function(e){var i=[e.data.province,e.data.city,e.data.district];t.$set(t,"userAddress",e.data),t.$set(t,"region",i),t.cityId=e.data.city_id}))},getWxAddress:function(){var t=this;uni.authorize({scope:"scope.address",success:function(e){uni.chooseAddress({success:function(e){var i={};i.province=e.provinceName,i.city=e.cityName,i.district=e.countyName,(0,a.editAddress)({address:i,is_default:1,real_name:e.userName,post_code:e.postalCode,phone:e.telNumber,detail:e.detailInfo,id:0,type:1}).then((function(e){return setTimeout((function(){if(t.cartId){t.cartId,t.pinkId,t.couponId;t.cartId="",t.pinkId="",t.couponId="",uni.navigateTo({url:t.id})}else uni.navigateBack({delta:1})}),1e3),t.$util.Tips({title:"添加成功",icon:"success"})})).catch((function(e){return t.$util.Tips({title:e})}))},fail:function(e){if("chooseAddress:cancel"==e.errMsg)return t.$util.Tips({title:"取消选择"})}})},fail:function(e){uni.showModal({title:"您已拒绝导入微信地址权限",content:"是否进入权限管理，调整授权？",success:function(e){if(e.confirm)uni.openSetting({success:function(t){}});else if(e.cancel)return t.$util.Tips({title:"已取消！"})}})}})},getAddress:function(){var t=this,e=this;e.$wechat.openAddress().then((function(i){(0,a.editAddress)({id:t.id,real_name:i.userName,phone:i.telNumber,address:{province:i.provinceName,city:i.cityName,district:i.countryName},detail:i.detailInfo,is_default:1,post_code:i.postalCode,type:1}).then((function(){setTimeout((function(){uni.navigateTo({url:e.id})}),1e3),e.$util.Tips({title:"添加成功",icon:"success"})})).catch((function(t){return e.$util.Tips({title:t||"添加失败"})}))})).catch((function(t){}))},formSubmit:function(t){var e=this,i=t.detail.value;if(!i.name)return e.$util.Tips({title:"请填写收货人姓名"});if(!i.phone)return e.$util.Tips({title:"请填写联系电话"});if(!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(i.phone))return e.$util.Tips({title:"请输入正确的手机号码"});if("省"==e.region[0])return e.$util.Tips({title:"请选择所在地区"});if(!i.detail)return e.$util.Tips({title:"请填写详细地址"});var n=e.region;i.address={province:n[0],city:n[1],district:n[2],city_id:e.cityId},this.$emit("getAddress",i)},posterImageClose:function(){this.$emit("close",!1)}}};e.default=d},a69c:function(t,e,i){t.exports=i.p+"static/img/address-aleart-header.cf1d5133.png"},a871:function(t,e,i){"use strict";i.r(e);var n=i("4272"),a=i("fc8a");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("21af");var s,o=i("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"b4f5b7c4",null,!1,n["a"],s);e["default"]=c.exports},ad0a:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAABLCAYAAAAPgLXeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxMmU5NDE3MS1jZGVmLWZjNDgtOTgwOS00ODlmMTQ2YTIwNzgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qjg4MEU5RkZGOTA5MTFFOEIwNkM4N0JBODI3MDBBRkMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qjg4MEU5RkVGOTA5MTFFOEIwNkM4N0JBODI3MDBBRkMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODQyM2UwYzQtNTFiNi01MjRiLTk5ZGItM2I2YjMxMjMyZDQzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEyZTk0MTcxLWNkZWYtZmM0OC05ODA5LTQ4OWYxNDZhMjA3OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj8UPccAAARySURBVHja7JlXaFRBFIb3JhHbGiM2LKCosYEYe0ui0YhGBCsi0YgVRAIi6IMN8UFEQWwvIgoaFPXJgL6oJDYUEdEIQWKJDQvGGCwxajRe/wPnysl1Nzv37uxuhDnwsbtTzvw7M3fKuVZAo9m2nYqP/iANBDn5M6gBjyzLqtPVlhWl0E74mA1yQSboEaHKU3ANXALn8Ee+BOJpEDwJnAU/bf/2FRSBjJj3OBoZgY89YKIrqwyUgLugAlSBWs5L5ZGgKTQKTOXv0orBeoxApe4ebgUOgAbRY2/BFtDbh7/BYDf4KPx9B5tBsi7R6aBMNFAD1oCWGny3B1tBnfBfArpE63g0eC+cnuQHUveI9galop0noK9fZ2P5ASKrB6ti/MAng+1C/GvP4lFhEKhmBzSM0+K4Yi0TzxL1fFfVikFQIXo6NxBnY/FyzierVDomKhUEEmRoe5vQsSVS4RxR+EgggYb2k8BFsVSmN1WwXDwY7QIJNmjoJRaI8+EKzRO9nR9oJsabkmPDQhW4xZkPqPcVHNK0OgT6+BAzHBwGQxQXixrWdirU8ufYCsXGb3L5V6CfB9FjwCeue0Kxzk4u/412W5mxXWSkKjpbINZbJfEu0bQ/TFBsa4Do2CUy4wYnFnsc8kWq4kOInuyxrfJGo4QvbcAvTlzrY75GFB+taPaxj+u/dBIyxDCM8fnkhxWvQzT7yRc6U5256liHKJatf8TrEu1cYoTOkZRQyD9qNay5UnwV+KJDNPvuKoTnpYjbeNTCcfWi8zp9LQKdOfk7mIm80ijdS31B2mick1eDps3uCfjhavClBr9SX3KS+CdBDVOFHu6LoDWopyRAN6YrXjapMCb11ZLwauc2DudtNYimDewbyAN0LP7Nt/xoxXcT32uc5Sr8Icb7Nt7oQfSySUVoQx4CO1FCmkhYqVO0TvGos4PrV8vE+14OPX42l2jFi9NrsUzcy4kfVOMlHLrwtLmEEN9Xsa1uol6hzBgnpstcRWfX/WwuLvHHFets4PJUr7s78zFnXlV0tpKHb5KP+UrHjNtghkLZFDpYsbYLoQqsFr2e04yubsuFrunhAptvuAA9rCnNQDTFFt+xptuR5p9jm5qB8KNCz/imClocObL5cpGdQNEFnmI89NTykdTmSO3ABIjO5vuvzeHAoGrFKRw3dNbbAXEUnSn2B/oc7NXBQjFU1PNZcRA9XwT563y3yeLrxZzfGIvVBj5bg/2ioz752R/cTnNFrNzm1ypZmgTTYjAHPBP+K8FQXT3SE1x2ve6j8/Us0MKHPwqJLAb3XD5PN4pUaeydJfy2zXbNf4qpL6VYYKhDGl1Q6KzPu/MZcYl27HHIXTEG87GQhzSUNXCQ8jl44Xol6Lb7vOmlxHOttXjpOijCY5GM/tQdsMvvG+W/EQWNf6QjPgYBenNAgaU9nLUOfAAPQYVlWZ91tGdxHCQmg6K7c6QlBf5TM8KNcCPcCDfCjXAj3Ag3wo1wI9wIN8KNcCPcCDfCjXAjPKb2R4ABAP1fyHzQ0oCyAAAAAElFTkSuQmCC"},b57c:function(t,e,i){"use strict";var n=i("f354"),a=i.n(n);a.a},bfb3:function(t,e,i){var n=i("19a6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("d466477a",n,!0,{sourceMap:!1,shadowMode:!1})},d244:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.record[data-v-b4f5b7c4]{background-color:#eee}.record-list[data-v-b4f5b7c4]{display:flex;align-items:center;background-color:#fff;padding:%?30?%;border-bottom:1px solid #eee;height:100%}.record-list .goods-img[data-v-b4f5b7c4]{width:%?170?%;height:%?170?%;border-radius:%?6?%;margin-right:%?15?%}.record-list .right-data[data-v-b4f5b7c4]{display:flex;flex-direction:column;justify-content:space-between;min-height:%?170?%}.record-list .right-data .title[data-v-b4f5b7c4]{font-size:%?28?%}.record-list .right-data .goods-msg[data-v-b4f5b7c4]{font-size:%?24?%;color:#999}.record-list .right-data .goods-msg .num[data-v-b4f5b7c4]{color:var(--view-theme)}.record-list .right-data .goods-msg .copy[data-v-b4f5b7c4]{display:-webkit-inline-box;display:-webkit-inline-flex;width:%?60?%;margin-left:%?10?%;padding:%?0?% %?4?%;border:%?2?% solid}.record-list .right-data .exchange[data-v-b4f5b7c4]{color:#fff;background-color:var(--view-theme);border-radius:%?30?%;text-align:center;padding:%?4?% 0}.record-list .mask[data-v-b4f5b7c4]{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.8);z-index:9}',""]),t.exports=e},e067:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.aleart[data-v-a0350c1e]{width:%?500?%;position:fixed;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);z-index:999;top:50%;margin-top:%?-357?%;border-radius:%?12?%}.aleart .title[data-v-a0350c1e]{padding:0;margin:0;height:%?110?%}.aleart .title .title-img[data-v-a0350c1e]{width:100%;height:100%}.aleart .aleart-body[data-v-a0350c1e]{display:flex;align-items:center;justify-content:center;flex-direction:column;background-color:#fdf7e7}.aleart .aleart-body .form-data[data-v-a0350c1e]{width:100%}.aleart .aleart-body .goods-img[data-v-a0350c1e]{width:%?150?%;height:%?150?%}.aleart .aleart-body .msg[data-v-a0350c1e]{font-size:%?30?%;color:#282828}.aleart .close[data-v-a0350c1e]{width:%?46?%;height:%?75?%;position:fixed;right:%?20?%;top:%?-73?%;display:block}.addAddress[data-v-a0350c1e]{width:100%;padding:%?30?% %?30?%}.addAddress .list[data-v-a0350c1e]{background-color:#fdf7e7}.addAddress .list .item[data-v-a0350c1e]{border:%?1?% solid #a05644;margin-bottom:%?24?%;padding:%?10?%;border-radius:%?6?%}.addAddress .list .item .name[data-v-a0350c1e]{width:%?195?%;font-size:%?30?%;color:#333}.addAddress .list .item .address[data-v-a0350c1e]{flex:1;margin-left:%?20?%}.addAddress .list .item uni-input[data-v-a0350c1e]{font-size:%?30?%}.addAddress .list .item .placeholder[data-v-a0350c1e]{color:#ccc}.addAddress .list .item uni-picker .picker[data-v-a0350c1e]{font-size:%?30?%}.addAddress .list .item uni-picker .iconfont[data-v-a0350c1e]{font-size:%?43?%}.addAddress .default[data-v-a0350c1e]{padding:0 %?30?%;height:%?90?%;background-color:#fff;margin-top:%?23?%}.addAddress .default uni-checkbox[data-v-a0350c1e]{margin-right:%?15?%}.addAddress .keepBnt[data-v-a0350c1e]{width:100%;height:%?86?%;border-radius:%?6?%;text-align:center;line-height:%?86?%;font-size:%?32?%;color:#452015;font-weight:700;background:#eebe6b;box-shadow:0 5px 9px 0 rgba(220,166,72,.24)}.addAddress .wechatAddress[data-v-a0350c1e]{height:%?86?%;border-radius:%?6?%;text-align:center;line-height:%?86?%;margin:0 auto;font-size:%?32?%;color:#fe960f;border:1px solid #fe960f}',""]),t.exports=e},e972:function(t,e,i){"use strict";i.r(e);var n=i("eca9"),a=i("676c");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("24b4");var s,o=i("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"6b1a6701",null,!1,n["a"],s);e["default"]=c.exports},eca9:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"empty-box"},[i("v-uni-image",{attrs:{src:"/static/images/empty-box.png"}}),i("v-uni-view",{staticClass:"txt"},[t._v(t._s(t.title))])],1)},r=[]},ef1d:function(t,e,i){"use strict";i.r(e);var n=i("a212"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},f354:function(t,e,i){var n=i("e067");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("4cbdbc4a",n,!0,{sourceMap:!1,shadowMode:!1})},f497:function(t,e,i){"use strict";i.r(e);var n=i("f51e"),a=i("2178");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("f969");var s,o=i("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"a68dde36",null,!1,n["a"],s);e["default"]=c.exports},f51e:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.colorStyle},[i("v-uni-view",{staticStyle:{"touch-action":"none"}},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?i("v-uni-view",{staticClass:"homeCon bg-color",class:!0===t.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/index/index"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/order_addcart/order_addcart"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/user/index"}})],1):t._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?"/static/images/close.gif":"/static/images/open.gif"}})],1)],1)],1)],1)],1)},r=[]},f969:function(t,e,i){"use strict";var n=i("8c5c"),a=i.n(n);a.a},fc8a:function(t,e,i){"use strict";i.r(e);var n=i("193e"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a}}]);