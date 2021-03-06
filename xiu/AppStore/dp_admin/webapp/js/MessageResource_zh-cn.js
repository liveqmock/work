var Lang = {
	validte_required:"不许为空！",
		
	news_newsKeyword_len_255 : "资讯摘要长度不能超过255个字符！",
	news_newsKeyword_notEmpty : "资讯摘要不能为空！",
	news_newsTitle_notEmpty : "资讯标题不能为空！",
	news_newsTitle_lenLess128 : "资讯标题长度不能超过128个字符！",
	news_newsTitle_special : "资讯标题只允许中文、英文、数字、%@&()_部分特殊符号！",
	news_newsType_notEmpty : "资讯类型不能为空！",
	news_newsContent_notEmpty : "资讯内容不能为空！",
	news_newsSourceURL_special : "资讯来源URL不符合规范！",
	news_newsSourceURL_lenLess128 : "资讯来源URl长度不能超过128个字符!",
	news_newsSource_lenLess128 : "资讯来源长度不能超过128个字符!",
	download_docSource_lenLess128 : "文档来源长度不能超过128个字符!",
	download_docSourceURL_special : "文档来源URL不符合规范！",
	download_docContent_notEmpty : "文档正文内容不能为空！",
	download_downloadName_notEmpty : "下载名称不能为空！",
	download_downloadtype_notEmpty : "下载类型不能为空！",
	download_upload_length_is0 : "不能上传空文件",
	download_downloadName_lenlessthan_100 : "下载名称长度不能超过100个字符！",
	download_downloadName_special : "下载名称只允许中文、英文、数字、%@&()_部分特殊符号!",
	download_downloadDesc_lenlessthan300000 : "文件描述长度不能超过300000个字符！",
	download_downloadDesc_lenless: "文件描述不能为空且描述长度不能超过300000个字符！",
	download_downloadFile_notEmpty : "上传的文件包不能为空！",
	download_downloadFile_select : "只能选择doc,xls,ppt,pdf,exe,txt,rar,zip,war!",
	type_typeName_notEmpty : "分类名称不能为空！",
	type_typeName_special : "分类名称只允许中文、英文、数字、%@&()_部分特殊符号!",
	type_typeName_lenless32 : "分类名称不能超过32个字符",
	type_typeDesc_lenless255 : "描述不能超过255个字符",
	dp_audit_remake_notEmpty : "请填写备注",
	dp_audit_remake_lenLess200 : "备注长度不能超过200个字符",
	app_price_notEmpty : "请填写相关信息",
	app_price_isnumber : "应用价格必须是数字",
	app_price_gt0 : "必须是大于0的数",
	app_livel_check : "推荐指数只能是1-5的正整数",
	login_username_notEmpty : "用户名不能为空！",
	login_password_notEmpty : "密码不能为空！",
	login_vcode_notEmpty : "验证码不能为空！",
	login_username_len64 : "用户名长度不能超过64个字符",
	login_password_len64 : "密码长度不能超过64个字符",

	message : "提示信息",
	forward_Page : "请输入跳转页码！",
	beginTime_NotBigEnd : "开始时间不能比结束时间大！",
	file_NotDownload : "文件不存在，或者文件已删除！",
	file_khs : "【",
	file_khe : "】",
	dp_commend_remake_lenLess256 : "推荐意见不能大于256个字符",

	servaddr_name_notEmpty : "同步名称不能为空",
	servaddr_name_special : "同步名称只允许中文、英文、数字、%@&()_部分特殊符号!",
	servaddr_name_leng : "同步名称的长度不能超过64个字符",
	servaddr_url_empty : "同步地址不能为空",
	servaddr_url_special : "同步地址为wsdl地址：格式如http://localhost:8080/usp_ws/service?wsdl",
	servaddr_url_leng64 : "同步地址的长度不能超过64个字符",
	servaddr_desc_leng : "同步描述的长度不能超过512个字符",
	subjectName_notEmpty : "专题名称不许为空",
	subjectName_special : "专题名称不符合规范",
	subjectName_lenLess128 : "专题名称长度不许超过128",
	appAttachment_required : "专题图片不许为空",
	appAttachment_filter : "请选择正确格式的图片",
	appSubject_desc_required : "专题描述不许为空",
	appSubject_desc_limit : "专题描述不许超过255个字符",
	dp_type_icon_allow:"分类图标只允许jpg,gif,png格式",
	icon_allow:"分类图标只允许jpg,gif,png格式",
	certificate_name_notEmpty: "证书名称不许为空",
	certificate_name_leng: "证书名称长度不能超过128个字符",
	certificate_name_special: "证书名称只允许中文、英文、数字、%@&()_部分特殊符号！",
	certificate_file_notEmpty:"证书文件不能为空",
	certificate_signed_file_allow:"证书文件只允许cer,pem格式",
	certificate_privateKey_file_allow:"证书私钥文件只允许pk8格式",
	certificate_revoke_file_allow:"证书吊销列表文件只允许crl格式",
	certificateDesc_leng:"证书描述不许超过500个字符",
	type_typeName_unique:"分类名称已存在",

	dp_appName_require:"请填写应用名称",
	dp_appName_limit:"应用名称长度不超过100个字符",
	dp_appName_regexp:"应用名称格式不对，请重新输入",
	dp_appId_required:"请填写appId",
	dp_appId_limit:"appId不能超过255个字符",
	dp_appId_regexp:"appId格式不正确，请重新输入",
	dp_appTypeId_required:"请选择应用分类",
	dp_system_required:"请填写系统要求",
	dp_version_required:"请填写版本号",
	dp_appDesc_required:"请填写应用简介",
	dp_appDesc_limit:"应用简介不能超过500个字符",
	dp_price_required:"价格不能为空",
	dp_price_limit:"价格不能超过999999999",
	dp_price_low:"收费应用价格必须为正数",	
	dp_developer_limit:"开发商不能超过255个字符",
	dp_version_limit:"版本号不能超过32个字符",
	dp_system_limit:"系统要求不能超过255个字符",
	dp_language_required:"请选择语言分类",
	appStoreClient_appName_notEmpty:"应用客户端名称不许为空",
	appStoreClient_appName_special : "应用客户端名称只能由字母、数字、汉字或及其组合!",
	appStoreClient_appName_lenlessthan_100:"应用客户端名称不能超过100个字符",
	appStoreClientPackage_notEmpty : "应用客户端安装包不能为空!",
	appStoreClientPackage_select : "只能选择apk!",
	appStoreClient_system_required:"客户端运行最小系统版本要求",
	implicitApp_appName_notEmpty:"隐式应用名称不许为空",
	implicitApp_apkPackage_notEmpty:"隐式应用包名不许为空",
	implicitApp_apkPackage_lenlessthan_100:"包名长度不能超过100个字符",
	implicitApp_appName_special : "隐式应用名称只能由字母、数字、汉字或及其组合!",
	implicitApp_appName_lenlessthan_100:"隐式应用名称不能超过100个字符",
	implicitAppPackage_notEmpty : "隐式应用安装包不能为空!",
	implicitAppPackage_select : "只能选择apk!",
	dp_sort_required:"填写的排名次序不能为空",
	dp_sort_regexp:"填写的内容必须为正整数",
	dp_panelName__notEmpty:"版块名称不能为空",
	dp_panelName_lenlessthan_100:"版块名称不能超过100个字符",
	dp_sortNum_isNum:"显示顺序只能为数字",
	dp_itemName__notEmpty:"元素名称不能为空",
	dp_itemName_lenlessthan_100:"元素名称不能超过100个字符",
	dp_itemTypeValue__notEmpty:"元素类型值不能为空",
	dp_handAvgScore_check:"只能是0-5的正数",
	
	only_natural_int:"请输入非负整数",
	plan_desc_limit:"方案简介不能超过255个字符",
	desc_limit:"不能超过255个字符",
	

};