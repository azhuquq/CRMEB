(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-30857213"],{"74dc4":function(e,t,n){},a752:function(e,t,n){"use strict";n("74dc4")},ec81:function(e,t,n){"use strict";n.r(t);var i=n("a069"),a=n("c24f");i={components:{WangEditor:i.a},data:function(){return{ueConfig:{autoHeightEnabled:!1,initialFrameHeight:500,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/UEditor/",serverUrl:""},agreement:{content:"",id:0},spinShow:!1}},created:function(){this.memberAgreement()},methods:{getEditorContent:function(e){this.agreement.content=e},memberAgreement:function(){var e=this;this.spinShow=!0,Object(a.a)().then((function(t){e.spinShow=!1;t=t.data;var n=(t.title,t.content);t.status,t=t.id;e.agreement.content=n,e.agreement.id=t||0})).catch((function(t){e.$message.error(t.msg),e.spinShow=!1}))},memberAgreementSave:function(){var e=this;Object(a.b)(this.agreement).then((function(t){e.$message.success("保存成功"),e.memberAgreement()})).catch((function(t){e.$message.error(t.msg)}))}}},n("a752"),n=n("2877"),n=Object(n.a)(i,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"i-layout-page-header header-title"},[t("span",{staticClass:"ivu-page-header-title"},[e._v(e._s(e.$route.meta.title))])]),t("el-card",{staticClass:"ivu-mt",attrs:{bordered:!1,shadow:"never"}},[t("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.spinShow,expression:"spinShow"}],attrs:{"label-width":"85px"},nativeOn:{submit:function(e){e.preventDefault()}}},[t("el-form-item",{attrs:{label:"协议内容："}},[t("WangEditor",{attrs:{content:e.agreement.content},on:{editorContent:e.getEditorContent}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.memberAgreementSave}},[e._v("保存")])],1)],1)],1)],1)}),[],!1,null,"400862b0",null);t.default=n.exports}}]);