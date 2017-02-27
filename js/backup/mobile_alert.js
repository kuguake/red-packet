/**
 * datatime : 2016/3/15
 * author   : liweitao
 * param    移动端表单验证灰色提示框
 * description :
 * 
 */
define(function(require,exports,module){
        exports.alertinfo = function(text){
                var str2 = "";
                str2+="<span class='localloading' id='tishi'>"+text+"</span>";
                $("body").append(str2); //给页面添加弹窗
                $("#tishi").css("display", "block");
                $("#tishi").css("top",yscroll+"px");
                var yscroll = document.documentElement.scrollTop;
                var screenx=$(window).width();
                var screeny=$(window).height();
                var DialogDiv_width=$("#tishi").width();
                var DialogDiv_height=$("#tishi").height();
                $(".localloading").css("left",(screenx/2-DialogDiv_width/2)+"px")
                $(".localloading").css("top",((screeny/2-DialogDiv_height/2)+100)+"px")
                setTimeout("$('#tishi').hide();$('#tishi').remove();",2000);
        }
})
