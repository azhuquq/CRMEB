(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/goods_combination_status/index"],{"19e5e":function(t,e,i){"use strict";var o=i("5704"),n=i.n(o);n.a},"2c45":function(t,e,i){"use strict";i.r(e);var o=i("683e"),n=i("9a94");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("19e5e");var r,a=i("f0c5"),c=Object(a["a"])(n["default"],o["b"],o["c"],!1,null,"6cb1f435",null,!1,o["a"],r);e["default"]=c.exports},"52ae":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(i("b2c5")),n=i("c6cd"),s=i("26cb"),r=i("4f72"),a=i("f15c"),c=u(i("c83f"));function u(t){return t&&t.__esModule?t:{default:t}}var h=function(){i.e("components/countDown/index").then(function(){return resolve(i("2a88"))}.bind(null,i)).catch(i.oe)},d=function(){i.e("components/productWindow/index").then(function(){return resolve(i("1ae3"))}.bind(null,i)).catch(i.oe)},l=function(){i.e("components/Authorize").then(function(){return resolve(i("420f"))}.bind(null,i)).catch(i.oe)},p=function(){Promise.all([i.e("common/vendor"),i.e("components/home/index")]).then(function(){return resolve(i("f497"))}.bind(null,i)).catch(i.oe)},m="GroupRule",_=getApp(),f={name:m,components:{CountDown:h,ProductWindow:d,home:p,authorize:l},props:{},mixins:[c.default],data:function(){return{currentPinkOrder:"",isOk:0,pinkBool:0,userBool:0,pinkAll:[],pinkT:[],storeCombination:[],storeCombinationHost:[],pinkId:0,count:0,iShidden:!1,isOpen:!1,attr:{cartAttr:!1,productSelect:{image:"",store_name:"",price:"",quota:0,unique:"",cart_num:1,quota_show:0,product_stock:0,num:0},productAttr:[]},cart_num:"",userInfo:{},posters:!1,weixinStatus:!1,H5ShareBox:!1,isAuto:!1,isShowAuth:!1,attrTxt:"请选择",attrValue:""}},computed:(0,s.mapGetters)({isLogin:"isLogin",userData:"userInfo"}),watch:{isLogin:{handler:function(t,e){t?this.getCombinationPink():(0,n.toLogin)()},deep:!0},userData:{handler:function(t,e){t&&(this.userInfo=t,_.globalData.openPages="/pages/activity/goods_combination_status/index?id="+this.pinkId)},deep:!0}},onLoad:function(t){var e=this;if(t.scene){var i=o.default.getUrlParams(decodeURIComponent(t.scene));"object"===typeof i&&(i.id&&(t.id=i.id),i.pid&&(_.globalData.spid=i.pid))}t.id&&(e.pinkId=t.id),0==e.isLogin&&(this.$Cache.set("login_back_url","/pages/activity/goods_combination_status/index?id=".concat(t.id)),(0,n.toLogin)())},onShareAppMessage:function(){var t=this;return{title:"您的好友"+t.userInfo.nickname+"邀请您参团"+t.storeCombination.title,path:_.globalData.openPages,imageUrl:t.storeCombination.image}},mounted:function(){this.getCombinationPink()},methods:{authColse:function(t){this.isShowAuth=t},onLoadFun:function(t){this.userInfo=t,_.globalData.openPages="/pages/activity/goods_combination_status/index?id="+this.pinkId,this.getCombinationPink()},listenerActionSheet:function(){0==this.isLogin?(0,n.toLogin)():this.posters=!0},listenerActionClose:function(){this.posters=!1},goFriend:function(){this.posters=!1},iptCartNum:function(t){this.$set(this.attr.productSelect,"cart_num",t),this.$set(this,"cart_num",t)},attrVal:function(t){this.attr.productAttr[t.indexw].index=this.attr.productAttr[t.indexw].attr_values[t.indexn]},onMyEvent:function(){this.$set(this.attr,"cartAttr",!1),this.$set(this,"isOpen",!1)},ChangeAttr:function(t){this.$set(this,"cart_num",1);var e=this.productValue[t];e?(this.$set(this.attr.productSelect,"image",e.image),this.$set(this.attr.productSelect,"price",e.price),this.$set(this.attr.productSelect,"quota",e.quota),this.$set(this.attr.productSelect,"unique",e.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"product_stock",e.product_stock),this.$set(this.attr.productSelect,"quota_show",e.quota_show),this.$set(this,"attrValue",t),this.$set(this,"attrTxt","已选择")):(this.$set(this.attr.productSelect,"image",this.storeCombination.image),this.$set(this.attr.productSelect,"price",this.storeCombination.price),this.$set(this.attr.productSelect,"quota",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this.attr.productSelect,"quota_show",0),this.$set(this.attr.productSelect,"product_stock",0),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择"))},ChangeCartNum:function(t){var e=this.productValue[this.attrValue];if(this.cart_num&&(e.cart_num=this.cart_num,this.attr.productSelect.cart_num=this.cart_num),void 0!==e||this.attr.productAttr.length||(e=this.attr.productSelect),void 0!==e){e.stock,e.quota_show;var i=e.quota||0,o=e.product_stock||0,n=this.attr.productSelect,s=this.storeCombination.num||0;if(void 0==e.cart_num&&(e.cart_num=1),t){n.cart_num++;var r=[];r.push(s),r.push(i),r.push(o);var a=Math.min.apply(null,r);n.cart_num>=a&&(this.$set(this.attr.productSelect,"cart_num",a||1),this.$set(this,"cart_num",a||1)),this.$set(this,"cart_num",n.cart_num),this.$set(this.attr.productSelect,"cart_num",n.cart_num)}else n.cart_num--,n.cart_num<1&&(this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"cart_num",1)),this.$set(this,"cart_num",n.cart_num),this.$set(this.attr.productSelect,"cart_num",n.cart_num)}},DefaultSelect:function(){var t=this.attr.productAttr,e=[];for(var i in this.productValue)if(this.productValue[i].quota>0){e=this.attr.productAttr.length?i.split(","):[];break}for(var o=0;o<t.length;o++)this.$set(t[o],"index",e[o]);var n=this.productValue[e.join(",")];n&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeCombination.title),this.$set(this.attr.productSelect,"image",n.image),this.$set(this.attr.productSelect,"price",n.price),this.$set(this.attr.productSelect,"quota",n.quota),this.$set(this.attr.productSelect,"unique",n.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"product_stock",n.product_stock),this.$set(this.attr.productSelect,"quota_show",n.quota_show),this.$set(this,"attrValue",e.join(",")),this.attrValue=e.join(","),this.$set(this,"attrTxt","已选择")):!n&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeCombination.title),this.$set(this.attr.productSelect,"image",this.storeCombination.image),this.$set(this.attr.productSelect,"price",this.storeCombination.price),this.$set(this.attr.productSelect,"quota",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this.attr.productSelect,"product_stock",0),this.$set(this.attr.productSelect,"quota_show",0),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择")):n||t.length||(this.$set(this.attr.productSelect,"store_name",this.storeCombination.title),this.$set(this.attr.productSelect,"image",this.storeCombination.image),this.$set(this.attr.productSelect,"price",this.storeCombination.price),this.$set(this.attr.productSelect,"quota",0),this.$set(this.attr.productSelect,"unique",this.storeCombination.unique||""),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"quota_show",0),this.$set(this.attr.productSelect,"product_stock",0),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择"))},setProductSelect:function(){var t=this,e=t.attr;e.productSelect.image=t.storeCombination.image,e.productSelect.store_name=t.storeCombination.title,e.productSelect.price=t.storeCombination.price,e.productSelect.quota=0,e.productSelect.quota_show=0,e.productSelect.product_stock=0,e.cartAttr=!1,t.$set(t,"attr",e)},pay:function(){var t=this;t.attr.cartAttr=!0,t.isOpen=!0},goPay:function(){var e=this,i={};i.productId=e.storeCombination.product_id,i.cartNum=e.attr.productSelect.cart_num,i.uniqueId=e.attr.productSelect.unique,i.combinationId=e.storeCombination.id,i.new=1,(0,a.postCartAdd)(i).then((function(i){t.navigateTo({url:"/pages/users/order_confirm/index?new=1&cartId="+i.data.cartId+"&pinkId="+e.pinkId})})).catch((function(t){e.$util.Tips({title:t})}))},goPoster:function(){var e=this;e.posters=!1,t.navigateTo({url:"/pages/activity/poster-poster/index?type=2&id="+e.pinkId})},goOrder:function(){var e=this;t.navigateTo({url:"/pages/users/order_details/index?order_id="+e.currentPinkOrder})},goList:function(){t.navigateTo({url:"/pages/activity/goods_combination/index"})},goDetail:function(e){this.pinkId=e,t.navigateTo({url:"/pages/activity/goods_combination_details/index?id="+e})},getCombinationPink:function(){var e=this,i=this;(0,r.getCombinationPink)(i.pinkId).then((function(o){if(i.$set(i,"storeCombinationHost",o.data.store_combination_host),o.data.pinkT.stop_time=parseInt(o.data.pinkT.stop_time),i.$set(i,"storeCombination",o.data.store_combination),i.$set(i.attr.productSelect,"num",o.data.store_combination.num),i.$set(i,"pinkT",o.data.pinkT),i.$set(i,"pinkAll",o.data.pinkAll),i.$set(i,"count",o.data.count),i.$set(i,"userBool",o.data.userBool),i.$set(i,"pinkBool",o.data.pinkBool),i.$set(i,"isOk",o.data.is_ok),i.$set(i,"currentPinkOrder",o.data.current_pink_order),i.$set(i,"userInfo",o.data.userInfo),i.attr.productAttr=o.data.store_combination.productAttr,i.productValue=o.data.store_combination.productValue,i.setProductSelect(),0!=i.attr.productAttr&&i.DefaultSelect(),1==o.data.is_ok&&0==o.data.userBool)return e.$util.Tips({title:"你不是该团的成员"},(function(){t.navigateTo({url:"/pages/activity/goods_combination/index"})}))})).catch((function(i){return e.$util.Tips({title:i},(function(){t.navigateBack()}))}))},getCombinationRemove:function(){var t=this;(0,r.postCombinationRemove)({id:t.pinkId,cid:t.storeCombination.id}).then((function(e){t.$util.Tips({title:e.msg},{tab:3})})).catch((function(e){t.$util.Tips({title:e})}))},lookAll:function(){this.iShidden=!this.iShidden}}};e.default=f}).call(this,i("543d")["default"])},5704:function(t,e,i){},"683e":function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return o}));var n=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.H5ShareBox=!1})},s=[]},"9a94":function(t,e,i){"use strict";i.r(e);var o=i("52ae"),n=i.n(o);for(var s in o)"default"!==s&&function(t){i.d(e,t,(function(){return o[t]}))}(s);e["default"]=n.a},de35:function(t,e,i){"use strict";(function(t){i("6e38");o(i("66fd"));var e=o(i("2c45"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])}},[["de35","common/runtime","common/vendor"]]]);