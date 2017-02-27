    //单行文本翻滚
    if(document.getElementById("global-push")){
        var scrollup = new ScrollText("global-push");
        scrollup.LineHeight = 22;        //单排文字滚动的高度
        scrollup.Amount = 1;            //注意:子模块(LineHeight)一定要能整除Amount.
        scrollup.Delay = 20;           //延时
        scrollup.Start();             //文字自动滚动
        scrollup.Direction = "down"; //文字向下滚动
    }