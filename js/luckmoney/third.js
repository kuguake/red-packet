define(function(require,exports,module){
	var $ = require("jquery");
	var ajax_partlist = require("luckmoney/ajax_partList");
	// 单行文本Ajax加载
	ajax_partlist.partListAjax();

	
	$(".btn-220:eq(0)").on('click',function(){
		// $(".pop-up-box").css("display","block");
		$(".pop-up-box").slideDown(200);
	})
	$(".btn-220:eq(1)").on('click',function(){
		// $(".pop-up-box").css("display","block");
		window.location.href="show.html"
	})
	$(".close").on('click',function(){
		$(".pop-up-box").slideUp(200);
	})

})