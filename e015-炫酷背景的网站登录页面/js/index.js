window.onload = function(){
    //屏蔽键盘事件
    document.onkeydown = function (){
        var e = window.event || arguments[0];
        /*延迟，兼容FF浏览器  */
        if(e.keyCode== 83 && e.ctrlKey){
            setTimeout(function(){
                alert('整理不易，不要另存哦');
            },1);
            return false;
        }else if(e.keyCode == 123){
            //F12
            setTimeout(function(){
                alert('亲，你想干嘛,不要做坏事哦');
            },1);
            return false;
            //Ctrl+Shift+I
        }else if((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)){
            setTimeout(function(){
                alert('亲，你想干嘛,不要做坏事哦');
            },1);
            return false;
            //Shift+F10
        }else if((e.shiftKey) && (e.keyCode == 121)){
            setTimeout(function(){
                alert('亲，你想干嘛,不要做坏事哦');
            },1);
            return false;
            //Ctrl+U
        }else if((e.ctrlKey) && (e.keyCode == 85)){
            setTimeout(function(){
                alert('亲，你想干嘛,不要做坏事哦');
            },1);
            return false;
        }
    };
    //屏蔽鼠标右键
    window.document.oncontextmenu = function (){
        alert('亲，你想干嘛,不要做坏事哦');
        return false;
    }

}