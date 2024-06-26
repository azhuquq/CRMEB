<?php
// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2023 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------
use think\facade\Route;

/**
 * 应用模块 相关路由
 */
Route::group('app', function () {

    /** 公众号 */
    Route::group(function () {
        //菜单值
        Route::get('wechat/menu', 'v1.application.wechat.menus/index')->option(['real_name' => '微信公众号菜单列表']);
        //保存菜单
        Route::post('wechat/menu', 'v1.application.wechat.menus/save')->option(['real_name' => '保存微信公众号菜单']);
        //图文列表
        Route::get('wechat/news', 'v1.application.wechat.WechatNewsCategory/index')->option(['real_name' => '图文列表']);
        //详情
        Route::get('wechat/news/:id', 'v1.application.wechat.WechatNewsCategory/read')->option(['real_name' => '图文详情']);
        //保存图文
        Route::post('wechat/news', 'v1.application.wechat.WechatNewsCategory/save')->option(['real_name' => '保存图文']);
        //删除图文
        Route::delete('wechat/news/:id', 'v1.application.wechat.WechatNewsCategory/delete')->option(['real_name' => '删除图文']);
        //发送图文消息
        Route::post('wechat/push', 'v1.application.wechat.WechatNewsCategory/push')->option(['real_name' => '发送图文消息']);
        //关注回复
        Route::get('wechat/reply', 'v1.application.wechat.Reply/reply')->option(['real_name' => '关注回复']);
        //获取关注回复二维码
        Route::get('wechat/code_reply/:id', 'v1.application.wechat.Reply/code_reply')->option(['real_name' => '获取关注回复二维码']);
        //关键字回复列表
        Route::get('wechat/keyword', 'v1.application.wechat.Reply/index')->option(['real_name' => '关键字回复列表']);
        //关键字详情
        Route::get('wechat/keyword/:id', 'v1.application.wechat.Reply/read')->option(['real_name' => '关键字回复详情']);
        //保存关键字修改
        Route::post('wechat/keyword/:id', 'v1.application.wechat.Reply/save')->option(['real_name' => '保存关键字回复']);
        //删除关键字
        Route::delete('wechat/keyword/:id', 'v1.application.wechat.Reply/delete')->option(['real_name' => '删除关键字回复']);
        //修改关键字状态
        Route::put('wechat/keyword/set_status/:id/:status', 'v1.application.wechat.Reply/set_status')->option(['real_name' => '修改关键字回复状态']);
        //一键同步微信模版消息消息
        Route::get('wechat/syncSubscribe', 'v1.application.wechat.WechatTemplate/syncSubscribe')->name('syncSubscribe')->option(['real_name' => '一键同步模版消息']);
    })->option(['parent' => 'app', 'cate_name' => '公众号']);

    /** 小程序 */
    Route::group(function () {
        //一键同步订阅消息
        Route::get('routine/syncSubscribe', 'v1.application.routine.RoutineTemplate/syncSubscribe')->name('syncSubscribe')->option(['real_name' => '一键同步订阅消息']);
        //下载小程序模版页面数据
        Route::get('routine/info', 'v1.application.routine.RoutineTemplate/getDownloadInfo')->option(['real_name' => '下载小程序页面数据']);
        //下载小程序模版
        Route::post('routine/download', 'v1.application.routine.RoutineTemplate/downloadTemp')->option(['real_name' => '下载小程序模版']);

        Route::get('routine/scheme_list', 'v1.application.routine.RoutineScheme/schemeList')->name('schemeList')->option(['real_name' => '小程序外链列表']);
        Route::get('routine/scheme_form/:id', 'v1.application.routine.RoutineScheme/schemeForm')->name('schemeForm')->option(['real_name' => '小程序外链添加修改表单']);
        Route::post('routine/scheme_save/:id', 'v1.application.routine.RoutineScheme/schemeSave')->name('schemeSave')->option(['real_name' => '小程序外链添加修改保存']);
        Route::delete('routine/scheme_del/:id', 'v1.application.routine.RoutineScheme/schemeDel')->name('schemeDel')->option(['real_name' => '小程序外链删除']);


    })->option(['parent' => 'app', 'cate_name' => '小程序']);

    /** 公众号渠道码 */
    Route::group(function () {
        Route::get('wechat_qrcode/cate/list', 'v1.application.wechat.WechatQrcode/getCateList')->option(['real_name' => '渠道码分类列表']);
        Route::get('wechat_qrcode/cate/create/:id', 'v1.application.wechat.WechatQrcode/createForm')->option(['real_name' => '渠道码分类添加编辑表单']);
        Route::post('wechat_qrcode/cate/save', 'v1.application.wechat.WechatQrcode/saveCate')->option(['real_name' => '渠道码分类保存']);
        Route::delete('wechat_qrcode/cate/del/:id', 'v1.application.wechat.WechatQrcode/delCate')->option(['real_name' => '渠道码分类删除']);
        Route::post('wechat_qrcode/save/:id', 'v1.application.wechat.WechatQrcode/saveQrcode')->option(['real_name' => '保存渠道码']);
        Route::get('wechat_qrcode/info/:id', 'v1.application.wechat.WechatQrcode/qrcodeInfo')->option(['real_name' => '渠道码详情']);
        Route::get('wechat_qrcode/list', 'v1.application.wechat.WechatQrcode/qrcodeList')->option(['real_name' => '渠道码列表']);
        Route::delete('wechat_qrcode/del/:id', 'v1.application.wechat.WechatQrcode/delQrcode')->option(['real_name' => '删除渠道码']);
        Route::put('wechat_qrcode/set_status/:id/:status', 'v1.application.wechat.WechatQrcode/setStatus')->option(['real_name' => '切换渠道码状态']);
        Route::get('wechat_qrcode/user_list/:qid', 'v1.application.wechat.WechatQrcode/userList')->option(['real_name' => '渠道码用户列表']);
        Route::get('wechat_qrcode/statistic/:qid', 'v1.application.wechat.WechatQrcode/qrcodeStatistic')->option(['real_name' => '渠道码统计']);
    })->option(['parent' => 'app', 'cate_name' => '公众号渠道码']);

    /** 客服相关 */
    Route::group(function () {
        //客服反馈接口
        Route::resource('feedback', 'v1.kefu.StoreServiceFeedback')->only(['index', 'delete', 'update', 'edit'])->option([
            'real_name' => [
                'index' => '获取用户反馈列表',
                'edit' => '获取修改用户反馈表单',
                'update' => '修改用户反馈',
                'delete' => '删除用户反馈'
            ]
        ]);
        //话术接口
        Route::resource('wechat/speechcraft', 'v1.kefu.StoreServiceSpeechcraft')->except(['read'])->option([
            'real_name' => [
                'index' => '获取客服话术列表',
                'create' => '获取客服话术表单',
                'save' => '保存客服话术',
                'edit' => '获取修改客服话术表单',
                'update' => '修改客服话术',
                'delete' => '删除客服话术'
            ]
        ]);
        //话术分类接口
        Route::resource('wechat/speechcraftcate', 'v1.kefu.StoreServiceSpeechcraftCate')->except(['read'])->option([
            'real_name' => [
                'index' => '获取客服话术分类列表',
                'create' => '获取客服话术分类表单',
                'save' => '保存客服话术分类',
                'edit' => '获取修改客服话术分类表单',
                'update' => '修改客服话术分类',
                'delete' => '删除客服话术分类'
            ]
        ]);
        //客服列表
        Route::get('wechat/kefu', 'v1.kefu.StoreService/index')->option(['real_name' => '客服列表']);
        //客服登录
        Route::get('wechat/kefu/login/:id', 'v1.kefu.StoreService/keufLogin')->option(['real_name' => '客服登录']);
        //新增客服选择用户列表
        Route::get('wechat/kefu/create', 'v1.kefu.StoreService/create')->option(['real_name' => '新增客服选择用户列表']);
        //新增客服表单
        Route::get('wechat/kefu/add', 'v1.kefu.StoreService/add')->option(['real_name' => '添加客服表单']);
        //保存新建的数据
        Route::post('wechat/kefu', 'v1.kefu.StoreService/save')->option(['real_name' => '添加客服']);
        //编辑客服表单
        Route::get('wechat/kefu/:id/edit', 'v1.kefu.StoreService/edit')->option(['real_name' => '修改客服表单']);
        //保存编辑的数据
        Route::put('wechat/kefu/:id', 'v1.kefu.StoreService/update')->option(['real_name' => '修改客服']);
        //删除
        Route::delete('wechat/kefu/:id', 'v1.kefu.StoreService/delete')->option(['real_name' => '删除客服']);
        //修改状态
        Route::put('wechat/kefu/set_status/:id/:status', 'v1.kefu.StoreService/set_status')->option(['real_name' => '修改客服状态']);
        //聊天记录
        Route::get('wechat/kefu/record/:id', 'v1.kefu.StoreService/chat_user')->option(['real_name' => '聊天记录']);
        //查看对话
        Route::get('wechat/kefu/chat_list', 'v1.kefu.StoreService/chat_list')->option(['real_name' => '查看对话']);

        //客服自动回复列表
        Route::get('kefu/auto_reply/list', 'v1.kefu.StoreServiceAutoReply/autoReplyList')->option(['real_name' => '客服自动回复列表']);
        //客服自动回复添加修改表单
        Route::get('kefu/auto_reply/form/:id', 'v1.kefu.StoreServiceAutoReply/autoReplyForm')->option(['real_name' => '客服自动回复添加修改表单']);
        //客服自动回复添加修改保存
        Route::post('kefu/auto_reply/save/:id', 'v1.kefu.StoreServiceAutoReply/autoReplySave')->option(['real_name' => '客服自动回复添加修改保存']);
        //客服自动回复修改状态
        Route::put('kefu/auto_reply/status/:id/:status', 'v1.kefu.StoreServiceAutoReply/autoReplyStatus')->option(['real_name' => '客服自动回复修改状态']);
        //客服自动回复删除
        Route::delete('kefu/auto_reply/del/:id', 'v1.kefu.StoreServiceAutoReply/autoReplyDel')->option(['real_name' => '客服自动回复删除']);

    })->option(['parent' => 'app', 'cate_name' => '客服相关']);

})->middleware([
    \app\http\middleware\AllowOriginMiddleware::class,
    \app\adminapi\middleware\AdminAuthTokenMiddleware::class,
    \app\adminapi\middleware\AdminCheckRoleMiddleware::class,
    \app\adminapi\middleware\AdminLogMiddleware::class
])->option(['mark' => 'app', 'mark_name' => '应用模块']);
