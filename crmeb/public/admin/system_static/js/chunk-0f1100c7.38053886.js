(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0f1100c7"],{"204a":function(t,e,a){},"277f":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return l})),a.d(e,"c",(function(){return o})),a.d(e,"d",(function(){return r})),a("99af");var s=a("6b6c");function i(t){return Object(s.a)({url:"setting/notification/index?type=".concat(t),method:"get"})}function l(t,e){return Object(s.a)({url:"setting/notification/info?id=".concat(t,"&type=").concat(e),method:"get"})}function o(t){return Object(s.a)({url:"setting/notification/save",method:"post",data:t})}function r(t,e,a){return Object(s.a)({url:"setting/notification/set_status/".concat(t,"/").concat(e,"/").concat(a),method:"put"})}},"9d9f":function(t,e,a){"use strict";a.r(e),a("d81d"),a("14d9");var s=a("277f"),i={data:function(){return{tabs:[{title:"系统通知",slot:"is_system"},{title:"短信通知",slot:"is_sms"},{title:"微信模板消息",slot:"is_wechat"},{title:"微信小程序提醒",slot:"is_routine"},{title:"企业微信",slot:"is_ent_wechat"}],tabsList:[],formData:{},id:0,loading:!0,tagName:"is_system",ruleValidate:{name:[{required:!0,message:"请输入通知场景",trigger:"blur"}],title:[{required:!0,message:"请输入通知场景",trigger:"blur"}],content:[{required:!0,message:"请输入通知内容",trigger:"blur"}]}}},created:function(){this.id=this.$route.query.id,this.getData(this.id,this.tagName,1)},methods:{changeTabs:function(){this.getData(this.id,this.tagName)},getData:function(t,e,a){var i=this;this.loading=!0,this.formData={},Object(s.a)(t,e).then((function(s){i.tabsList.length||i.tabs.map((function(t){s.data[t.slot]&&i.tabsList.push(t)})),a&&(i.tagName=i.tabsList[0].slot),i.formData=s.data,i.formData.type=e,i.formData.id=t,i.loading=!1})).catch((function(t){i.$message.error(t.msg)}))},handleSubmit:function(t){var e=this;Object(s.c)(this.formData).then((function(t){e.$message.success("设置成功")})).catch((function(t){e.$message.error(t)}))},handleReset:function(t){this.$emit("close")}}};a("dd53"),a=a("2877"),a=Object(a.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"edit"},[e("pages-header",{ref:"pageHeader",attrs:{title:t.$route.meta.title,backUrl:t.$routeProStr+"/setting/notification/index"}}),e("div",{staticClass:"tabs mt16"},[e("el-row",{attrs:{gutter:32}},[e("el-col",{staticClass:"demo-tabs-style1",staticStyle:{padding:"16px"},attrs:{span:32}},[e("el-tabs",{on:{"tab-click":t.changeTabs},model:{value:t.tagName,callback:function(e){t.tagName=e},expression:"tagName"}},t._l(t.tabsList,(function(a,s){return e("el-tab-pane",{key:s,attrs:{name:a.slot,label:a.title}},[e("el-form",{ref:"formData",refInFor:!0,staticClass:"form-sty",attrs:{model:t.formData,rules:t.ruleValidate,"label-width":"85px"}},["is_system"!==a.slot||t.loading?t._e():e("div",[e("el-form-item",{attrs:{label:"通知标题："}},[e("el-input",{staticStyle:{width:"500px"},attrs:{placeholder:"请输入通知标题"},model:{value:t.formData.system_title,callback:function(e){t.$set(t.formData,"system_title",e)},expression:"formData.system_title"}})],1),e("el-form-item",{attrs:{label:"通知内容："}},[e("div",{staticClass:"content"},[e("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",autosize:{minRows:5,maxRows:8},placeholder:"请输入通知内容"},model:{value:t.formData.system_text,callback:function(e){t.$set(t.formData,"system_text",e)},expression:"formData.system_text"}}),e("div",{staticClass:"trip"},[e("div",[t._v("请输入模板消息详细内容对应的变量。关键字个数需与已添加的模板一致。 可以使用如下变量：")]),t._l(t.formData.variable.split(","),(function(a,s){return e("div",{key:s},[t._v("\n                        "+t._s(a)+"\n                      ")])}))],2)],1)]),e("el-form-item",{attrs:{label:"状态：",prop:"is_system"}},[e("el-radio-group",{model:{value:t.formData.is_system,callback:function(e){t.$set(t.formData,"is_system",e)},expression:"formData.is_system"}},[e("el-radio",{attrs:{label:1}},[t._v("开启")]),e("el-radio",{attrs:{label:2}},[t._v("关闭")])],1)],1)],1),"is_sms"!==a.slot||t.loading?"is_wechat"!==a.slot||t.loading?"is_routine"!==a.slot||t.loading?"is_ent_wechat"!==a.slot||t.loading?t._e():e("div",[e("el-form-item",{attrs:{label:"通知内容："}},[e("div",{staticClass:"content"},[e("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",autosize:{minRows:5,maxRows:8},placeholder:"请输入通知内容"},model:{value:t.formData.ent_wechat_text,callback:function(e){t.$set(t.formData,"ent_wechat_text",e)},expression:"formData.ent_wechat_text"}}),e("div",{staticClass:"trip"},[e("div",[t._v("请输入模板消息详细内容对应的变量。关键字个数需与已添加的模板一致。 可以使用如下变量：")]),t._l(t.formData.variable.split(","),(function(a,s){return e("div",{key:s},[t._v("\n                        "+t._s(a)+"\n                      ")])}))],2)],1)]),e("el-form-item",{attrs:{label:"机器人链接："}},[e("div",{staticClass:"content"},[e("el-input",{staticStyle:{width:"500px"},attrs:{placeholder:"请输入机器人链接"},model:{value:t.formData.url,callback:function(e){t.$set(t.formData,"url",e)},expression:"formData.url"}}),e("div",{staticClass:"trip"},[t._v("企业微信群机器人链接")])],1)]),e("el-form-item",{attrs:{label:"状态：",prop:"is_ent_wechat"}},[e("el-radio-group",{model:{value:t.formData.is_ent_wechat,callback:function(e){t.$set(t.formData,"is_ent_wechat",e)},expression:"formData.is_ent_wechat"}},[e("el-radio",{attrs:{label:1}},[t._v("开启")]),e("el-radio",{attrs:{label:2}},[t._v("关闭")])],1)],1)],1):e("div",[e("el-form-item",{attrs:{label:"模板编号："}},[e("el-input",{staticStyle:{width:"500px"},attrs:{disabled:"",placeholder:"请输入通模板编号"},model:{value:t.formData.tempkey,callback:function(e){t.$set(t.formData,"tempkey",e)},expression:"formData.tempkey"}})],1),e("el-form-item",{attrs:{label:"模板："}},[e("el-input",{staticStyle:{width:"500px"},attrs:{disabled:"",type:"textarea",autosize:{minRows:5,maxRows:8},placeholder:"请输入模板"},model:{value:t.formData.content,callback:function(e){t.$set(t.formData,"content",e)},expression:"formData.content"}})],1),e("el-form-item",{attrs:{label:"模板ID："}},[e("el-input",{staticStyle:{width:"500px"},attrs:{placeholder:"请输入模板ID"},model:{value:t.formData.tempid,callback:function(e){t.$set(t.formData,"tempid",e)},expression:"formData.tempid"}})],1),e("el-form-item",{attrs:{label:"状态：",prop:"is_routine"}},[e("el-radio-group",{model:{value:t.formData.is_routine,callback:function(e){t.$set(t.formData,"is_routine",e)},expression:"formData.is_routine"}},[e("el-radio",{attrs:{label:1}},[t._v("开启")]),e("el-radio",{attrs:{label:2}},[t._v("关闭")])],1)],1)],1):e("div",[e("el-form-item",{attrs:{label:"模板编号："}},[e("el-input",{staticStyle:{width:"500px"},attrs:{disabled:"",placeholder:"请输入通模板编号"},model:{value:t.formData.tempkey,callback:function(e){t.$set(t.formData,"tempkey",e)},expression:"formData.tempkey"}})],1),e("el-form-item",{attrs:{label:"模板："}},[e("el-input",{staticStyle:{width:"500px"},attrs:{disabled:"",type:"textarea",autosize:{minRows:5,maxRows:8},placeholder:"请输入模板"},model:{value:t.formData.content,callback:function(e){t.$set(t.formData,"content",e)},expression:"formData.content"}})],1),e("el-form-item",{attrs:{label:"模板ID："}},[e("el-input",{staticStyle:{width:"500px"},attrs:{placeholder:"请输入模板ID"},model:{value:t.formData.tempid,callback:function(e){t.$set(t.formData,"tempid",e)},expression:"formData.tempid"}})],1),e("el-form-item",{attrs:{label:"状态：",prop:"is_wechat"}},[e("el-radio-group",{model:{value:t.formData.is_wechat,callback:function(e){t.$set(t.formData,"is_wechat",e)},expression:"formData.is_wechat"}},[e("el-radio",{attrs:{label:1}},[t._v("开启")]),e("el-radio",{attrs:{label:2}},[t._v("关闭")])],1)],1)],1):e("div",[e("el-form-item",{attrs:{label:"短信模版ID："}},[e("el-input",{staticStyle:{width:"500px"},attrs:{placeholder:"短信模版ID"},model:{value:t.formData.sms_id,callback:function(e){t.$set(t.formData,"sms_id",e)},expression:"formData.sms_id"}})],1),e("el-form-item",{attrs:{label:"通知内容："}},[e("div",{staticClass:"content"},[e("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",disabled:"",autosize:{minRows:5,maxRows:8},placeholder:"请输入通知内容"},model:{value:t.formData.content,callback:function(e){t.$set(t.formData,"content",e)},expression:"formData.content"}})],1)]),e("el-form-item",{attrs:{label:"状态：",prop:"is_sms"}},[e("el-radio-group",{model:{value:t.formData.is_sms,callback:function(e){t.$set(t.formData,"is_sms",e)},expression:"formData.is_sms"}},[e("el-radio",{attrs:{label:1}},[t._v("开启")]),e("el-radio",{attrs:{label:2}},[t._v("关闭")])],1)],1)],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("formData")}}},[t._v("提交")])],1)],1)],1)})),1)],1)],1)],1)],1)}),[],!1,null,"d21bc87a",null);e.default=a.exports},dd53:function(t,e,a){"use strict";a("204a")}}]);