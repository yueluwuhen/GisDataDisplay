//写为jquery插件
//接口中数据为空处理
function filterValue(value, defaultValue) {
	if (isNull(value)) {
		if (isEmpty(defaultValue))
			return "";
		return defaultValue;
	} else {
		return value;
	}
}

function isEmptyObject(e) {
    var t;
    for (t in e) 
        return !1; 
    return !0;
} 

function isNull(value) {
	if (value == undefined || value == null || value == "undefined" || value == "null")
		return true;
	else
		return false;
}

function isEmpty(value) {
	if (value == undefined || value == null || value == "undefined"
			|| value == "null" || value == "")
		return true;
	else
		return false;
}

// url中获取中文转码
function getUrlParam(key) {
	var url = window.location.search;
	var urlParams = new Object();
	if (url.indexOf('?') != -1) {
		var str = url.substr(1);
		var arr = str.split('&');
		for ( var i = 0; i < arr.length; i++) {
			urlParams[arr[i].split('=')[0]] = decodeURI(arr[i].split('=')[1]);
		}
	}
	return urlParams[key];
};