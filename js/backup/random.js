/**
 * datatime : 2016/3/3
 * author   : liweitao
 * param    elm  :元素名称，可以指定数字显示的位置
 * param    time :速度阀值，值越小数字变化的速度越快
 * param    max  :倒计时的最大值，设定倒计时区间
 * param    hbtotal :随机出来的数字
 * description :
 * 
 */
define(function(require,exports,module){

// 抽奖函数
		exports.GetRandom = function(elm,time,max){
		var hbtotal = "";
		// 自动开始
		hbtotal=setInterval(function(){
			$(elm).html(Math.floor(Math.random()*max));
		},time);

		$('#stop').click(function(){ //点击第二个按钮停止抽奖程序
			$('#play').removeAttr("disabled");
			setTimeout(function(){ //设定一个计时器，数字不会一下子全部停止
				clearInterval(hbtotal);
				hbtotal=null;
			},3000)
		 })
		};
		// 以下代码为倒计时过后自动跳转
		// 在此不用这个功能
		// var i = 3;
		// var time2=setInterval(function(){
		// 		$(".hbtext").append('..');
		// 		if(i==0){
		// 			window.location.href='showtotal.html'; //三秒后跳转至展示金额页
		// 			clearInterval(time2); //防止频繁跳转，进行停止动作
		// 		}else{
		// 			i-=1;	
		// 		}		
		// },1000);
})