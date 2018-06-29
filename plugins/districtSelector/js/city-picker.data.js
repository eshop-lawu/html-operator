/*!
 * Distpicker v1.0.2
 * https://github.com/tshi0912/city-picker
 *
 * Copyright (c) 2014-2016 Tao Shi
 * Released under the MIT license
 *
 * Date: 2016-02-29T12:11:36.473Z
 */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as anonymous module.
        define('ChineseDistricts', [], factory);
    } else {
        // Browser globals.
        factory();
    }
})(function () {
	var ChineseDistricts= {};
	$.ajaxExtend({
		url: request_url_get_region_selector_data,
		type: "get",
		async: false,
		success:function(data){
			if (data.ret == 1000) {
		        ChineseDistricts = data.model;
			}
		}
	})
    if (typeof window !== 'undefined') {
        window.ChineseDistricts = ChineseDistricts;
    }
    return ChineseDistricts;
});
