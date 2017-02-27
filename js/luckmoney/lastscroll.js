define(function(require,exports,module){
	var $ = require("jquery");
	var gallery = require("jquery.gallery"),
	 ajax_partlist = require("luckmoney/ajax_partList");
	 ajax_partlist.partListAjax();
	$('#dg-container').gallery();
	
	
	$(document).on("click",".btn-unlocking",function(){
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
});