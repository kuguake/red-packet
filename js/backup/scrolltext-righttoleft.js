/**
 * datatime : 2016/3/7
 * author   : liweitao
 * param    dome  :元素名称，父区域
 * param    dome1 :元素名称，第一个滚动区域
 * param    dome2 :元素名称，第二个滚动区域
 * description : 实现单行文本从右向左无缝滚动
 * 
 */
var ScrollleftToright = function(dome,dome1,dome2){
	this.dome = document.getElementById(dome);
	this.dome1 = document.getElementById(dome1);
	this.dome2 = document.getElementById(dome2);
	this.dome2.innerHTML = document.getElementById(dome1).innerHTML; //第第一个滚动区域二个滚动区域的内容拷贝
	// 滚动	
	}
	var Marquee = function(dome,dome1,dome2){
		if(dome.scrollLeft-dome2.offsetWidth>=0){
			dome.scrollLeft-=dome1.offsetWidth;
		}else{
			dome.scrollLeft++;
		}
	};
	ScrollleftToright.prototype = {

		Scrollstart :function(){
			var myvar=setInterval(Marquee(this.dome,this.dome1,this.dome2),30);
			this.dome.onmouseout=function (){myvar=setInterval(Marquee(this.dome,this.dome1,this.dome2),30);};
			this.dome.onmouseover=function(){clearInterval(myvar);};
		}

	}
	
