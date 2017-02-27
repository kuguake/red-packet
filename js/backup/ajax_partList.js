/**
 * datatime : 2016/3/15
 * author   : liweitao
 * param    全局AJAX请求
 * description :
 * 
 */
define(function(require,exports,module){
		var scrolltext = require("scrolltext"); //引用单行文本滚动模块
		exports.partListAjax = function(){
			$.ajax({
			   type: "POST",
			   url: "getpartlist.php",
			   dataType: "json",
			   // data: "",
			   success: callback,
			   beforeSend:beforeSend,
			   error:error,
			   complete:complete
			});
		}
		function error(XMLHttpRequest, textStatus, errorThrown){
			console.log(textStatus);
		}
		function beforeSend(XMLHttpRequest){}
		function complete(XMLHttpRequest, textStatus){}
		// 获得用户抽取金额成功后的回调函数
		function callback(message){
		   var partlist = "";
		   $.each(message.partlist,function(n, value){
		   		var viplevel = value.viplevel;				   	
				var total = value.total;
				var username = value.username;
				var num = value.num;
				partlist += "<li>VIP"+viplevel+" "+username+" 拆得红包"+num+"次，共计"+total+"元&nbsp;&nbsp;</li>";
           });
		   $("#global-push-dome1 ul").html(partlist); //将获得的红包金额显示   
		   	// 执行单行文本滚动
			scrolltext.srolltext('global-push','global-push-dome1','global-push-dome2');
		}
})