define(function(require,exports,module){
	var $ = require("jquery");
	var random = require("random");
	var ajax_partlist = require("ajax_partList");

	// // 获得随机数
	// random.GetRandom("#yuan",80,3);
	// random.GetRandom("#angle",90,10);
	// random.GetRandom("#minute",90,10);
	// random.GetRandom("#li",90,10);

	// 单行文本Ajax加载
	ajax_partlist.partListAjax();




})