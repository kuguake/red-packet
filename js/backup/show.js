define(function(require,exports,module){
	var $ = require("jquery");
	var random = require("random");
	var ajax_partlist = require("ajax_partList");

	// 单行文本Ajax加载
	ajax_partlist.partListAjax();

	var alert_tishi = function(){
		$(".btn-380:eq(0)").on('click',function(){
			$("#mcover").css('display','block');
			$(this).attr('disabled','disabled');
			$(this).text("红包已领取");
		})
		$("#mcover").on('click',function(){
			$(this).css('display','none');
			window.location.href="show2.html";
		})
	}
	
	return alert_tishi();
	



})