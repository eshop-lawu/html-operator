var upload_Type_enum = { IMG: "IMG", VIDEO: "VIDEO", OTHER: "OTHER" };
var ie = !!window.ActiveXObject || "ActiveXObject" in window;
/**
 * 请求路径
*/
/* 订单模块请求路径 */
var request_url_shopping_order_selectPage = request_url + "shoppingOrder/selectPage";
var request_url_shopping_order_get = request_url + "shoppingOrder/get/";
var request_url_shopping_order_updateInformation = request_url + "shoppingOrder/updateInformation/";
var request_url_shopping_order_cancelOrder = request_url + "shoppingOrder/cancelOrder/";
var request_url_shopping_order_selectRefundPage = request_url + "shoppingOrder/selectRefundPage/";

/* 购物订单退款请求路径 */
var request_url_shopping_refund_detail_agreeToRefund = request_url + "shoppingRefundDetail/agreeToRefund/";
var request_url_shopping_refund_detail_revokeRefundRequest = request_url + "shoppingRefundDetail/revokeRefundRequest/";
var request_url_shopping_refund_detail = request_url + "shoppingRefundDetail/{shoppingOrderItemId}";

/* 快递公司模块请求路径 */
var request_url_express_company_list = request_url + "expressCompany/list/";

/* 统计模块请求路径 */
var request_url_report_sales_list = request_url +  "reportSales/list";
var request_url_report_user_income_expenditure_page = request_url +  "reportUserIncomeExpenditure/page";

// 工单列表的请求路径
var request_url_workOrder_selectPage = request_url + "workOrder/selectWorkOrder";
// 处理工单的请求路径
var request_url_update_workOrder = request_url + "workOrder/updateWorkOrder";

/* 地区控件数据请求路径 */
var request_url_get_region_selector_data = request_url + "region/getRegionSelectorData";

/* 抢购活动请求路径 */
var request_url_seckill_activity_page = request_url + "seckillActivity/page";
var request_url_seckill_activity_down = request_url + "seckillActivity/down/{id}";
var request_url_seckill_activity_audit = request_url + "seckillActivity/audit/{id}";
var request_url_seckill_activity_release = request_url + "seckillActivity/release/{id}";
var request_url_seckill_activity = request_url + "seckillActivity/{id}";
var request_url_seckill_activity_save = request_url + "seckillActivity/";

/* 抢购活动商品请求路径  */
var request_url_seckill_activity_product_page_search = request_url + "seckillActivityProduct/pageSearch/{id}";
var request_url_seckill_activity_product_not_passed = request_url + "seckillActivityProduct/notPassed/{id}";
var request_url_seckill_activity_product_audit = request_url + "seckillActivityProduct/audit/{id}";

/* 助力红包活动请求路径  */
var request_url_help_redpacket_activity_detail = request_url + "helpRedpacketActivity/detail/{id}";
var request_url_help_redpacket_activity_save = request_url + "helpRedpacketActivity/save";
var request_url_help_redpacket_activity_update = request_url + "helpRedpacketActivity/update/{id}";
var request_url_help_redpacket_activity_generate_large_redpacket = request_url + "helpRedpacketActivity/generateLargeRedpacket/{id}";
var request_url_help_redpacket_activity_save_large_redpacket = request_url + "helpRedpacketActivity/saveLargeRedpacket/{id}";
var request_url_help_redpacket_activity_generate_normal_redpacket = request_url + "helpRedpacketActivity/generateNormalRedpacket/{id}";
var request_url_help_redpacket_activity_get_normal_redpacket_total_amount = request_url + "helpRedpacketActivity/getNormalRedpacketTotalAmount/{id}";
var request_url_help_redpacket_activity_again_generate_normal_redpacket = request_url + "helpRedpacketActivity/againGenerateNormalRedpacket/{id}";
var request_url_help_redpacket_activity_coutine_generate_normal_redpacket = request_url + "helpRedpacketActivity/continueGenerateNormalRedpacket/{id}";
var request_url_help_redpacket_activity_list = request_url + "helpRedpacketActivity/list";

/* 异常账户管理请求路径 */
var request_url_abnormal_get_abnormal_record = request_url + "abnormal/getAbnormalRecord";
var request_url_abnormal_not_processed = request_url + "abnormal/notProcessed/{id}";
var request_url_abnormal_freeze_by_id = request_url + "abnormal/freeze/{id}";
var request_url_abnormal_freeze = request_url + "abnormal/freeze";
var request_url_abnormal_thaw = request_url + "abnormal/thaw/{id}";

var request_url_point_lottery_activity_record_page =  request_url +"pointLotteryActivityRecord/page/{pointLotteryActivityId}";

/*账号管理*/
var request_url_member_forced_exit = request_url + "member/forcedExit";

/* 积分夺宝管理请求路径 */
var request_url_point_lottery_activity_generate_basic_number = request_url + "pointLotteryActivity/generateBasicNumber/{id}";
var request_url_point_lottery_activity_save_winning_number = request_url + "pointLotteryActivity/saveWinningNumber/{id}";
var request_url_point_lottery_activity_record_page = request_url + "pointLotteryActivityRecord/page/{pointLotteryActivityId}";

/* 上传路径 */
var request_url_upload = request_url + "upload/uploadFile";

/**
 * 睡眠
 * @param {Object} n 睡眠时间（单位毫秒）
 */
function sleep(n) {
	var start = new Date().getTime();
	while(true) {
		if(new Date().getTime() - start > n) break;
	}
}

/**获取html页面之间跳转的参数**/
function getUrlVars() {
	var vars = [],
		hash;
	var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	for(var i = 0; i < hashes.length; i++) {
		hash = hashes[i].split('=');
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}
	return vars;
}

/*弹出层*/
var layer_default_option = {
	type: 2,
	width: 1000,
	height: 900,
	title: false,
	url: "/view/error/404.html",
	content: {},
	full: true,
};

/*
	参数解释：
	title	标题
	url		请求的url
	id		需要操作的数据id
	w		弹出层宽度（缺省调默认值）
	h		弹出层高度（缺省调默认值）
*/
function layer_extend_show(option) {
	var options = $.extend(layer_default_option, typeof option === 'object' && option);
	var content = {};
	if (options.type == 2) {
		content = rootPath + options.url;
	} else if (options.type == 1) {
		content = options.content;
	}
	var index = layer.open({
		type: options.type,
		area: [options.width + 'px', options.height + 'px'],
		fix: false, //不固定
		maxmin: true,
		shade: 0.4,
		title: options.title,
		content: content
	});
	if(options.full) {
		layer.full(index);
	}
	return index;
}

/*关闭弹出框口*/
function layer_extend_close() {
	var index = parent.layer.getFrameIndex(window.name);
	parent.layer.close(index);
}

(function($, window) {
	/*弹出层*/
	var ajax_default_option = {
		url: null,
		type: "GET",
		contentType: "application/x-www-form-urlencoded",//application/json; charset=utf-8
		async: true,
		success: function() {},
	};
	$.ajaxExtend = function(option) {
		var options = {};
		var options = $.extend(options, ajax_default_option);
		var options = $.extend(options, typeof option === 'object' && option);
		var layer_load_index = null;
		$.ajax({
			url: options.url,
			type: options.type,
			contentType: options.contentType,
			cache: false,
			dataType: "json",
			data : options.data,
			async : options.async,
			beforeSend: function() {
				layer_load_index = layer.load(1);
			},
			success: function(data, resCode, res) {
				if (!isNull(data)) {
					var obj = eval(data);
					if(obj.ret == '1000') {
						options.success(obj);
					} else {
						layer.msg("操作失败!! " + obj.msg, {
							icon: 5,
							time: 1000
						});
					};
				} else {
					options.success();
				}
			},
			error: function(data) {
				layer.msg('操作失败！！', {
					icon: 5,
					time: 1000
				});
				if(data.status == 401) {
					top.location.href = rootPath + "/view/login.html";
				}    　
			},
			complete: function() {
				layer.close(layer_load_index);
			}
		});
	};
	$.ajaxfileUploadExtend = function(options) {
		/*
			回现预留
			var reader = new FileReader();
			reader.readAsDataURL(img)
			reader.onload = function(e){
			}
		*/
		options = $.extend({
			uploadType: upload_Type_enum.IMG,
			elementSelector: "#upload",
			success: function() {},
			error:function(){}
		}, options);
		
		if (ie) {
			var optionsfile =  options.elementSelector;
			var fileId = optionsfile.substring(1,optionsfile.length);
			var fileupload = document.getElementById(fileId);
			var filesize = fileupload.files[0].size;
			var path = $(options.elementSelector).upload("getFileVal");
			var fileExtend = path.substring(path.lastIndexOf('.')).toLowerCase();
			var ImageFileExtend = ".png,.jpg,.bmp";
			if( optionsfile == "#file-img"){
				if(ImageFileExtend.indexOf(fileExtend) > -1) {
					var uploadType = "IMG";
					if(filesize > 500*1024){
						layer.msg('单张图片限制500k', { icon: 5 });
						return;
					}
				}else if(ImageFileExtend.indexOf(fileExtend) == -1){
					layer.msg('文件类型不符合', {icon: 5});
					return;
				}
			}else{
				var ImageFileExtendV = ".mp4";
				var fileExtendV = path.substring(path.lastIndexOf('.')).toLowerCase();
				if(ImageFileExtendV.indexOf(fileExtendV) > -1) {
					var uploadType = "VIDEO";
					if(filesize > 10 * 1024 * 1024) {
						layer.msg('单个视频限制10M', {
							icon: 5
						});
						return;
					}
				} else if(ImageFileExtend.indexOf(fileExtendV) == -1) {
					layer.msg('文件类型不符合', {
						icon: 5
					});
					return;
				}
			}
	        $(options.elementSelector).upload({
	            url: confUrl.upload,
	            // 其他表单数据
	            params: { "uploadType": uploadType},
	            // 上传完成后, 返回json, text
	            dataType: 'json',
	            onSend: function (obj, str) {  return true; },
	            // 上传之后回调
	            onComplate: function (data) {
	              options.success(data);
	            }
	        });
	        $(options.elementSelector).upload("ajaxSubmit")
		    
		} else {
			var $elementSelector = $(options.elementSelector);
			var file = $elementSelector[0].files[0];
			if(file == undefined) {
				return;
			}
			if(options.uploadType == upload_Type_enum.IMG) {
				var accept = "image/x-png,image/png,image/jpeg";
				if(accept.indexOf(file.type) < 0) {
					layer.msg('文件类型不符合', {icon: 5});
					$elementSelector.attr("accept", accept);
					return;
				}
				if(file.size > 500 * 1024) {
					layer.msg('单张图片限制500k', { icon: 5 });
					return;
				}
			}
			if(options.uploadType == upload_Type_enum.VIDEO) {
				if(!/^video\/.*$/.test(file.type)) {
					layer.msg('文件类型不符合', { icon: 5 });
					$elementSelector.attr("accept", "video/*");
					return;
				}
				if(file.size > 10 * 1024 * 1024) {
					layer.msg('单个视频限制10M', { icon: 5 });
					return;
				}
			}
			if(options.uploadType == upload_Type_enum.OTHER && file.size > 20 * 1024 * 1024) {
				layer.msg('单个文件限制10M', { icon: 5 });
			}
			var formData = new FormData();
			formData.append("file", file);
			formData.append("uploadType", options.uploadType);
			$.ajax({
				url: request_url_upload,
				type: 'POST',
				data: formData,
				async: false,
				cache: false,
				contentType: false,
				processData: false,
				success: function(returndata) {
					options.success(returndata);
				},
				error: function(returndata) {}
			});
		}
	}
})(jQuery, window)