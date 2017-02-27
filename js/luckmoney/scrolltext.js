/**
 * datatime : 2016/3/3
 * author   : liweitao
 * param    单行文本无缝滚动
 * param    demo 主滚动区域
 * param    demo1 第一条滚动文字
 * param    demo2 第二条滚动文字 
 * description :
 * 
 */
define(function(require,exports,module){
	exports.srolltext = function(demo,demo1,demo2){
		var demo = document.getElementById(demo);
		var demo1 = document.getElementById(demo1);
		var demo2 = document.getElementById(demo2);
		demo2.innerHTML=demo1.innerHTML;
		function Marquee(){
			if(demo.scrollLeft-demo2.offsetWidth>=0){
				 demo.scrollLeft-=demo1.offsetWidth;
			}
			else{
				 demo.scrollLeft++;
			}
		}
		var myvar=setInterval(Marquee,30);
		demo.onmouseout=function (){myvar=setInterval(Marquee,30);}
		demo.onmouseover=function(){clearInterval(myvar);}
	}
	
})
