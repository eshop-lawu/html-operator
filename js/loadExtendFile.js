if (typeof v == "undefined" || v == undefined) {
	// 如果文件指纹不存在，用当前时间戳作为文件指纹
	window.v = new Date().getTime();
	//解决添加文件指纹之后不能debug
	//window.v = 1111;
}

/**
 * 获取项目的根目录
 */
var rootPath = /(?:http|https):\/\/[^\/]+(?:\:\d+)?(\/[^\/]+)\//ig.exec(location.href)[1];

//本地开发使用

/*var request_url = "http://127.0.0.1:81/operator-api/";
var request_url_image = "http://test.lovelawu.com:12680/images/";
var request_url_video = "http://test.lovelawu.com:12680/videos/";*/


var fileTypeConstants = {
	CSS: "css",
	JS: "js"
};

var fileGroupConstants = {
	JQUERY: "jquery",
	H_UI: "H-ui",
	LAYER: "layer",
	WDATEPICKER: "WdatePicker",
	BOOTSTRAP: "bootstrap",
	COMMON: "common",
	THEME: "theme",
	VALIDATE: "validate",
	TEMPLATE: "template",
	DISTRICT: "districtSelector",
	JQUERY_CHECK: "jquerycheck",
	STYLE_PER: "style_per",
	LIGHTBOX:"lightbox",
	ECHARTS:"echarts",
	EDITABLE:"editable"
};

/**
 * list页面外部资源模本
 * fileType 文件类型
 * filePath 文件路径
 * version IE版本
 * isAbsolutePath 是否是绝对路径
 * eval 引入包之后的执行函数
 * group 资源文件组别
 * 
 */
var extendFiles = [
	// jquery  
	{
		fileType: fileTypeConstants.JS,
		filePath: "/lib/jquery/1.9.1/jquery.min.js",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.JQUERY,
		id: null
	},

	// H-ui
	{
		fileType: fileTypeConstants.CSS,
		filePath: "/lib/Hui-iconfont/1.0.1/iconfont.css",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.H_UI,
		id: null
	},
	{
		fileType: fileTypeConstants.CSS,
		filePath: "/css/H-ui.min.css",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.H_UI,
		id: null
	},
	{
		fileType: fileTypeConstants.JS,
		filePath: "/js/H-ui.js",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.H_UI,
		id: null
	},

	//H-ui.admin
	{
		fileType: fileTypeConstants.CSS,
		filePath: "/css/H-ui.admin.css",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.H_UI
	},
	{
		fileType: fileTypeConstants.JS,
		filePath: "/js/H-ui.admin.js",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.H_UI
	},

	// Theme
	{
		fileType: fileTypeConstants.CSS,
		filePath: "/skin/default/skin.css",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.THEME,
		id: null
	},
	{
		fileType: fileTypeConstants.CSS,
		filePath: "/css/style.css",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.THEME,
		id: "skin"
	},

	// layer
	{
		fileType: fileTypeConstants.JS,
		filePath: "/lib/layer/1.9.3/layer.js",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.LAYER,
		id: null
	},
	{
		fileType: fileTypeConstants.JS,
		filePath: "/lib/laypage/1.2/laypage.js",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.LAYER,
		id: null
	},
	
	// lightbox
	{
		fileType: fileTypeConstants.CSS,
		filePath: "/plugins/image-browsing/css/lightbox.css",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.LIGHTBOX,
		id: null
	},
	{
		fileType: fileTypeConstants.JS,
		filePath: "/plugins/image-browsing/js/lightbox-2.6.min.js",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.LIGHTBOX,
		id: null
	},
	
	// validate
	{
		fileType: fileTypeConstants.CSS,
		filePath: "/plugins/jquery-validation/1.11.0/jquery.validate.min.css",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.VALIDATE,
		id: null
	},
	{
		fileType: fileTypeConstants.JS,
		filePath: "/plugins/jquery-validation/1.11.0/jquery.validate.min.js",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.VALIDATE,
		id: null
	},
	{
		fileType: fileTypeConstants.JS,
		filePath: "/plugins/jquery/jquery-form.js",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.VALIDATE,
		id: null
	},

	// template
	{
		fileType: fileTypeConstants.JS,
		filePath: "/js/template.js",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.TEMPLATE,
		id: null
	},

	// WdatePicker
	{
		fileType: fileTypeConstants.JS,
		filePath: "/lib/My97DatePicker/WdatePicker.js",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.WDATEPICKER,
		id: null
	},

	// bootstrap
	{
		fileType: fileTypeConstants.CSS,
		filePath: "/plugins/bootstrap/2.3.1/awesome/font-awesome.min.css",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.BOOTSTRAP,
		id: null
	},
	{
		fileType: fileTypeConstants.CSS,
		filePath: "/plugins/bootstrap/2.3.1/css_default/bootstrap.min.css",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.BOOTSTRAP,
		id: null
	},
	{
		fileType: fileTypeConstants.JS,
		filePath: "/plugins/bootstrap/2.3.1/js/bootstrap.min.js",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.BOOTSTRAP,
		id: null
	},

	// bootstrap-table
	{
		fileType: fileTypeConstants.CSS,
		filePath: "/plugins/bootstrap-table/bootstrap-table.css",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.BOOTSTRAP,
		id: null
	},
	{
		fileType: fileTypeConstants.JS,
		filePath: "/plugins/bootstrap-table/bootstrap-table.js",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.BOOTSTRAP,
		id: null
	},
	{
		fileType: fileTypeConstants.JS,
		filePath: "/plugins/bootstrap-table/locale/bootstrap-table-zh-CN.js",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.BOOTSTRAP,
		id: null
	},

	// 兼容包
	{
		fileType: fileTypeConstants.CSS,
		filePath: "/plugins/bootstrap/2.3.1/awesome/font-awesome-ie7.min.css",
		version: 7,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.BOOTSTRAP,
		id: null
	},
	{
		fileType: fileTypeConstants.CSS,
		filePath: "/plugins/bootstrap/2.3.1/awesome/bootstrap-ie6.min.css",
		version: 6,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.BOOTSTRAP,
		id: null
	},
	{
		fileType: fileTypeConstants.JS,
		filePath: "/plugins/bootstrap/bsie/js/bootstrap-ie.min.js",
		version: 6,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.BOOTSTRAP,
		id: null
	},

	// common-兼容包
	{
		fileType: fileTypeConstants.JS,
		filePath: "http://lib.h-ui.net/DD_belatedPNG_0.0.8a-min.js",
		version: 6,
		isAbsolutePath: true,
		eval: 'DD_belatedPNG.fix("*");',
		group: fileGroupConstants.COMMON,
		id: null
	},
	{
		fileType: fileTypeConstants.JS,
		filePath: "/lib/html5.js",
		version: 9,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.COMMON,
		id: null
	},
	{
		fileType: fileTypeConstants.JS,
		filePath: "/lib/respond.min.js",
		version: 9,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.COMMON,
		id: null
	},
	{
		fileType: fileTypeConstants.JS,
		filePath: "/lib/PIE_IE678.js",
		version: 9,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.COMMON,
		id: null
	},
	{
		fileType: fileTypeConstants.JS,
		filePath: "/js/common.js",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.COMMON,
		id: null
	},

	//地区选择器
	{
		fileType: fileTypeConstants.CSS,
		filePath: "/plugins/districtSelector/css/city-picker.css",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.DISTRICT,
		id: null
	},
	{
		fileType: fileTypeConstants.JS,
		filePath: "/plugins/districtSelector/js/city-picker.data.js",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.DISTRICT,
		id: null
	},
	{
		fileType: fileTypeConstants.JS,
		filePath: "/plugins/districtSelector/js/city-picker.js",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.DISTRICT,
		id: null
	},

	{
		fileType: fileTypeConstants.CSS,
		filePath: "/lib/icheck/icheck.css",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.JQUERY_CHECK,
		id: null
	},
	{
		fileType: fileTypeConstants.JS,
		filePath: "/lib/icheck/jquery.icheck.min.js",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.JQUERY_CHECK,
		id: null
	},

	//CSS
	{
		fileType: fileTypeConstants.CSS,
		filePath: "/css/style.css",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.STYLE_PER,
		id: null
	},
	
	// echarts
	{
		fileType: fileTypeConstants.JS,
		filePath: "/js/echarts.js",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.ECHARTS,
		id: null
	},
	{
		fileType: fileTypeConstants.JS,
		filePath: "/js/ajaxfileupload.js",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.FILEUPLOAD,
		id: null
	},
	{
		fileType: fileTypeConstants.JS,
		filePath: "/lib/jedate/jquery.jedate.js",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.JEDATE,
		id: null
	},
	{
		fileType: fileTypeConstants.CSS,
		filePath: "/lib/jedate/skin/jedate.css",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.JEDATE,
		id: null
	},
	{
		fileType: fileTypeConstants.JS,
		filePath: "/plugins/bootstrap/bootstrap-editable/js/bootstrap-editable.min.js",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.EDITABLE,
		id: null
	},
	{
		fileType: fileTypeConstants.CSS,
		filePath: "/plugins/bootstrap/bootstrap-editable/css/bootstrap-editable.css",
		version: null,
		isAbsolutePath: false,
		eval: null,
		group: fileGroupConstants.EDITABLE,
		id: null
	}
];



/**
 * 加载资源文件
 * @param {Object} filePath 文件路径
 * @param {Object} fileType 文件类型
 * @param {Object} callback 回调函数
 */
function loadExtendFile(extendFile, callback) {
	var filePath;
	if(extendFile.isAbsolutePath) {
		filePath = extendFile.filePath;
	} else {
		filePath = rootPath + extendFile.filePath;
	}
	var o = null;
	if(extendFile.fileType == fileTypeConstants.JS) {
		o = document.createElement('script');
		o.setAttribute("type", "text/javascript");
		o.setAttribute("src", filePath + "?_d=" + v);
	} else if(extendFile.fileType == fileTypeConstants.CSS) {
		var o = document.createElement("link");
		o.setAttribute("rel", "stylesheet");
		o.setAttribute("type", "text/css");
		o.setAttribute("href", filePath + "?_d=" + v);
	}
	if(extendFile.id != null) {
		o.setAttribute("id", extendFile.id);
	}
	var version = getVersion();
	if(isNull(version) || version > 8) {
		o.addEventListener('load', function() {
			if(!isNull(callback)) {
				callback();
			}
		});
	} else {
		o.attachEvent('load', function() {
			if(!isNull(callback)) {
				callback();
			}
		});
	}
	document.getElementsByTagName("head")[0].appendChild(o);
};

/**
 * 递归加载资源文件
 * @param {Object} extendFiles 资源文件
 */
function recursiveloadExtendFile(extendFiles, groups) {
	if(extendFiles.length <= 0) {
		return;
	}
	var extendFile = extendFiles[0];
	// 如果资源已经加载继续便利
	var version = getVersion();
	if(indexOf(groups, extendFile.group) >= 0 && (isNull(extendFile.version) || (!isNull(version) && version < extendFile.version))) {
		loadExtendFile(extendFile, function() {
			// 如果有初始化函数执行初始化函数
			if(!isNull(extendFile.eval)) {
				eval(extendFile.eval);
			}

			// 删除已经加载的资源文件
			extendFiles.splice(0, 1);
			// 继续遍历
			recursiveloadExtendFile(extendFiles, groups);
		});
	} else {
		// 删除不需要加载的资源文件
		extendFiles.splice(0, 1);
		// 继续递归
		recursiveloadExtendFile(extendFiles, groups);
	}
}

/** 
 * 判断是否null 
 * @param data 
 */
function isNull(data) {
	return(typeof data == undefined || data == undefined || data == null) ? true : false;
}

/**
 * IE浏览器版本
 */
function getVersion() {
	version = /MSIE\s+([0-9.]+)/.exec(navigator.userAgent);
	if(!isNull(version)) {
		return version[1];
	}
}

/**
 * 判断当前值是否存在数组中
 * @param {Object} list
 * @param {Object} elem
 */
function indexOf(list, elem) {
	var i = 0,
		len = list.length;
	for(; i < len; i++) {
		if(list[i] === elem) {
			return i;
		}
	}
	return -1;
}

/**
 * Bootstrap Table 模块
 */

/*图片处理*/
function getImage(data) {
	return '<img class="radius" src="' + request_url_image + data + '" onerror="this.src=\'' + rootPath + '/images/user.png\';" style="height:30px;">';
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

var permissionKeyData = localStorage.getItem("premissionKeyData");

function showPermission() {
	if(permissionKeyData != null) {
		var dataArr = permissionKeyData.split(",");
		for(var id in dataArr) {
			$("[name='" + dataArr[id] + "']").removeClass("permission_hide");
		}

	}
}

function initContentLoad() {
	if($('#contentTable').length > 0) {
		$('#contentTable').on('load-success.bs.table', function(data) {
			showPermission();
		});
		$('#contentTable').on('load-error.bs.table', function(data, xhr) {
			if(xhr == 401) {
				if(window != top) {
					//跳出iframe
					top.location.href = location.href;
				}
				window.location.href = rootPath + "/view/login.html";
			}

		});
	} else {
		showPermission();
	}

}

var ajaxRequest = {
	//ajax请求数据
	//murl:请求路径     mdata:请求参数 mtype:请求类型,successFunction 成功回调
	ajax: function(murl, mdata, mtype, success_fun) {
		$.ajax({
			type: mtype,
			url: murl,
			data: mdata,
			success: success_fun,
			error: function(xhr, textStatus, errorThrown) {
				if(xhr.status == 401) {

					top.location.href = rootPath + "/view/login.html";
				}    　
			}
		});
	},
	ajaxSub: function(form, success_fun) {
		//表单提交
		$(form).ajaxSubmit({
			success: success_fun,
			error: function(xhr, textStatus, errorThrown) {
				if(xhr.status == 401) {
					top.location.href = rootPath + "/view/login.html";
				}    　
			}
		});
	}
}


// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
Date.prototype.Format = function (fmt) { 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}