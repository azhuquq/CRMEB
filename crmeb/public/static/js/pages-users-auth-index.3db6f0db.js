(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-auth-index"],{3132:function(t,e,i){"use strict";i.r(e);var n=i("6e7c"),a=i("8493");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("e63ba");var c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"3b3bdc7c",null,!1,n["a"],void 0);e["default"]=s.exports},"3d00":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("ac1f"),i("5319"),i("00b4"),i("c975");var a=n(i("5998")),o=n(i("dc9d")),c=i("d1ea"),s=i("4cfb"),r=(i("4e39"),i("5743")),d=i("d1ea"),u=n(i("aa1e")),l={name:"Auth",components:{Verify:u.default},mixins:[o.default],data:function(){return{phone:"",captcha:"",key:"",authKey:"",scope:"",bindPhone:!1}},mounted:function(){},onLoad:function(t){var e=this,i=t.code,n=t.state,o=t.scope;if("snsapi_base"===o){this.url=t.url||t.back_url||"";this.$Cache.get("spread"),this.$Cache.get(s.LOGINTYPE)}else a.default.auth(i,n).then((function(){location.href=decodeURIComponent(decodeURIComponent(t.back_url)),(0,c.getUserInfo)().then((function(t){e.$store.commit("SETUID",t.data.uid)}))})).catch((function(){location.replace("/")}))},methods:{editPwd:function(){var t=this,e=this;return e.phone?/^1(3|4|5|7|8|9|6)\d{9}$/i.test(e.phone)?e.captcha?void(0,r.bindingPhone)({phone:e.phone,captcha:e.captcha,key:e.authKey}).then((function(i){var n=i.data.expires_time-t.$Cache.time();if(t.$store.commit("LOGIN",{token:i.data.token,time:n}),!t.url||-1===t.url.indexOf("http"))return e.$util.Tips({title:t.$t("绑定成功"),icon:"success"},{tab:4,url:"/pages/index/index"});location.href=t.url})).catch((function(t){return e.$util.Tips({title:t})})):e.$util.Tips({title:e.$t("填写验证码")}):e.$util.Tips({title:e.$t("请输入正确的手机号码")}):e.$util.Tips({title:e.$t("请输入手机号")})},code:function(){return this.phone?/^1(3|4|5|7|8|9|6)\d{9}$/i.test(this.phone)?void this.$refs.verify.show():this.$util.Tips({title:this.$t("请输入正确的手机号码")}):this.$util.Tips({title:this.$t("请输入手机号")})},success:function(t){var e=this;this.$refs.verify.hide(),(0,r.verifyCode)().then((function(i){(0,d.registerVerify)({phone:that.phone,type:"reset",key:i.data.key,captchaType:e.captchaType,captchaVerification:t.captchaVerification}).then((function(t){e.sendCode(),that.$util.Tips({title:t.msg})})).catch((function(t){return that.$util.Tips({title:t})}))}))}}};e.default=l},"6e7c":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.bindPhone?i("v-uni-view",[i("v-uni-form",{attrs:{"report-submit":"true"},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.editPwd.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"ChangePassword"},[i("v-uni-view",{staticClass:"list"},[i("v-uni-view",{staticClass:"item"},[i("v-uni-input",{attrs:{type:"number",placeholder:t.$t("请输入手机号"),"placeholder-class":"placeholder"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-input",{staticClass:"codeIput",attrs:{type:"number",placeholder:t.$t("填写验证码"),"placeholder-class":"placeholder"},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}}),i("v-uni-button",{staticClass:"code font-color",class:!0===t.disabled?"on":"",attrs:{disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.code.apply(void 0,arguments)}}},[t._v(t._s(t.text))])],1)],1),i("v-uni-button",{staticClass:"confirmBnt bg-color",attrs:{"form-type":"submit"}},[t._v(t._s(t.$t("确认绑定")))])],1)],1),i("Verify",{ref:"verify",attrs:{captchaType:t.captchaType,imgSize:{width:"330px",height:"155px"}},on:{success:function(e){arguments[0]=e=t.$handleEvent(e),t.success.apply(void 0,arguments)}}})],1):i("v-uni-view",{staticClass:"lottie-bg"},[i("v-uni-view",{attrs:{id:"lottie"}})],1)},a=[]},8493:function(t,e,i){"use strict";i.r(e);var n=i("3d00"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"994a":function(t,e,i){var n=i("a5d2");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("ffcbf492",n,!0,{sourceMap:!1,shadowMode:!1})},a5d2:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-3b3bdc7c]{background-color:#fff!important}body.?%PAGE?%[data-v-3b3bdc7c]{background-color:#fff!important}.ChangePassword .phone[data-v-3b3bdc7c]{font-size:%?32?%;font-weight:700;text-align:center;margin-top:%?55?%}.ChangePassword .list[data-v-3b3bdc7c]{width:%?580?%;margin:%?53?% auto 0 auto}.ChangePassword .list .item[data-v-3b3bdc7c]{width:100%;height:%?110?%;border-bottom:%?2?% solid #f0f0f0}.ChangePassword .list .item uni-input[data-v-3b3bdc7c]{width:100%;height:100%;font-size:%?32?%}.ChangePassword .list .item .placeholder[data-v-3b3bdc7c]{color:#b9b9bc}.ChangePassword .list .item uni-input.codeIput[data-v-3b3bdc7c]{width:%?340?%}.ChangePassword .list .item .code[data-v-3b3bdc7c]{font-size:%?32?%;background-color:#fff}.ChangePassword .list .item .code.on[data-v-3b3bdc7c]{color:#b9b9bc!important}.ChangePassword .confirmBnt[data-v-3b3bdc7c]{font-size:%?32?%;width:%?580?%;height:%?90?%;border-radius:%?45?%;color:#fff;margin:%?92?% auto 0 auto;text-align:center;line-height:%?90?%}.lottie-bg[data-v-3b3bdc7c]{position:fixed;left:0;top:0;background-color:#fff;width:100%;height:100%;z-index:999;display:flex;align-items:center;justify-content:center}#lottie[data-v-3b3bdc7c]{display:block;width:100%;height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);margin:auto}#lottie uni-image[data-v-3b3bdc7c]{width:%?200?%;height:%?200?%}',""]),t.exports=e},e63ba:function(t,e,i){"use strict";var n=i("994a"),a=i.n(n);a.a}}]);