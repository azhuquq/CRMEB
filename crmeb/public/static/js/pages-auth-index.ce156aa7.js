(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-auth-index"],{"07e9":function(e,t,n){"use strict";n.r(t);var a=n("9550"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},"0849":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* crmeb颜色变量 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-728ee2de]{background-color:#fff!important}.ChangePassword .phone[data-v-728ee2de]{font-size:%?32?%;font-weight:700;text-align:center;margin-top:%?55?%}.ChangePassword .list[data-v-728ee2de]{width:%?580?%;margin:%?53?% auto 0 auto}.ChangePassword .list .item[data-v-728ee2de]{width:100%;height:%?110?%;border-bottom:%?2?% solid #f0f0f0}.ChangePassword .list .item uni-input[data-v-728ee2de]{width:100%;height:100%;font-size:%?32?%}.ChangePassword .list .item .placeholder[data-v-728ee2de]{color:#b9b9bc}.ChangePassword .list .item uni-input.codeIput[data-v-728ee2de]{width:%?340?%}.ChangePassword .list .item .code[data-v-728ee2de]{font-size:%?32?%;background-color:#fff}.ChangePassword .list .item .code.on[data-v-728ee2de]{color:#b9b9bc!important}.ChangePassword .confirmBnt[data-v-728ee2de]{font-size:%?32?%;width:%?580?%;height:%?90?%;border-radius:%?45?%;color:#fff;margin:%?92?% auto 0 auto;text-align:center;line-height:%?90?%}.lottie-bg[data-v-728ee2de]{position:fixed;left:0;top:0;background-color:#fff;width:100%;height:100%;z-index:999;display:flex;align-items:center;justify-content:center}#lottie[data-v-728ee2de]{display:block;width:100%;height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);margin:auto}#lottie uni-image[data-v-728ee2de]{width:%?200?%;height:%?200?%}body.?%PAGE?%[data-v-728ee2de]{background-color:#fff!important}',""]),e.exports=t},"2aac":function(e,t,n){var a=n("0849");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("21812e36",a,!0,{sourceMap:!1,shadowMode:!1})},"5d16":function(e,t,n){"use strict";n.r(t);var a=n("6868"),i=n("07e9");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("e5ef");var r,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"728ee2de",null,!1,a["a"],r);t["default"]=c.exports},6868:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.bindPhone?n("v-uni-view",[n("v-uni-form",{attrs:{"report-submit":"true"},on:{submit:function(t){arguments[0]=t=e.$handleEvent(t),e.editPwd.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"ChangePassword"},[n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{staticClass:"item"},[n("v-uni-input",{attrs:{type:"number",placeholder:"填写手机号码","placeholder-class":"placeholder"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-input",{staticClass:"codeIput",attrs:{type:"number",placeholder:"填写验证码","placeholder-class":"placeholder"},model:{value:e.captcha,callback:function(t){e.captcha=t},expression:"captcha"}}),n("v-uni-button",{staticClass:"code font-color",class:!0===e.disabled?"on":"",attrs:{disabled:e.disabled},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.code.apply(void 0,arguments)}}},[e._v(e._s(e.text))])],1)],1),n("v-uni-button",{staticClass:"confirmBnt bg-color",attrs:{"form-type":"submit"}},[e._v("确认绑定")])],1)],1)],1):n("v-uni-view",{staticClass:"lottie-bg"},[n("v-uni-view",{attrs:{id:"lottie"}})],1)},o=[]},9550:function(e,t,n){"use strict";var a=n("4ea4");n("c975"),n("e25e"),n("ac1f"),n("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("124b")),o=a(n("e7b8")),r=n("b79f"),s=n("e377"),c=n("f37e"),d=n("c159"),u={name:"Auth",mixins:[o.default],data:function(){return{phone:"",captcha:"",key:"",authKey:"",scope:"",bindPhone:!1}},mounted:function(){},onLoad:function(e){var t=this,n=this,a=e.code,o=e.state,d=e.scope;if("snsapi_base"===d){this.url=e.url||e.back_url||"";var u=this.$Cache.get("spread"),l=this.$Cache.get(s.LOGINTYPE);(0,c.silenceAuth)({code:e.code||"",spread:u}).then((function(n){void 0!==n.data.key?(t.bindPhone=!0,t.authKey=n.data.key):(t.$store.commit("LOGIN",{token:n.data.token,time:parseInt(n.data.expires_time)-t.$Cache.time()}),t.$Cache.set(s.WX_AUTH,e.code),t.$Cache.clear(s.STATE_KEY),l&&t.$Cache.clear(s.LOGINTYPE),location.href=decodeURIComponent(decodeURIComponent(e.back_url)))}))}else i.default.auth(a,o).then((function(){location.href=decodeURIComponent(decodeURIComponent(e.back_url)),(0,r.getUserInfo)().then((function(e){n.$store.commit("SETUID",e.data.uid)}))})).catch((function(){location.replace("/")}))},methods:{editPwd:function(){var e=this,t=this;return t.phone?/^1(3|4|5|7|8|9|6)\d{9}$/i.test(t.phone)?t.captcha?void(0,d.bindingPhone)({phone:t.phone,captcha:t.captcha,key:this.authKey}).then((function(n){var a=n.data.expires_time-e.$Cache.time();if(e.$store.commit("LOGIN",{token:n.data.token,time:a}),!e.url||-1===e.url.indexOf("http"))return t.$util.Tips({title:"绑定成功！",icon:"success"},{tab:4,url:"/pages/index/index"});location.href=e.url})).catch((function(e){return t.$util.Tips({title:e})})):t.$util.Tips({title:"请填写验证码"}):t.$util.Tips({title:"请输入正确的手机号码！"}):t.$util.Tips({title:"请填写手机号码！"})},code:function(){var e=this;return e.phone?/^1(3|4|5|7|8|9|6)\d{9}$/i.test(e.phone)?void(0,d.verifyCode)().then((function(t){(0,d.registerVerify)(e.phone,"reset",t.data.key,e.captcha).then((function(t){e.$util.Tips({title:t.msg}),e.sendCode()})).catch((function(t){return e.$util.Tips({title:t})}))})):e.$util.Tips({title:"请输入正确的手机号码！"}):e.$util.Tips({title:"请填写手机号码！"})}}};t.default=u},e5ef:function(e,t,n){"use strict";var a=n("2aac"),i=n.n(a);i.a},e7b8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{disabled:!1,text:"获取验证码"}},methods:{sendCode:function(){var e=this;if(!this.disabled){this.disabled=!0;var t=60;this.text="剩余 "+t+"s";var n=setInterval((function(){t-=1,t<0&&clearInterval(n),e.text="剩余 "+t+"s",e.text<"剩余 0s"&&(e.disabled=!1,e.text="重新获取")}),1e3)}}}};t.default=a}}]);