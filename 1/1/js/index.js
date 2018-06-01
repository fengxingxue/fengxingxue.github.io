window.onload=function(){
    var i=1;
    var image=document.querySelector(".first div");
    function lunbo(){
        i=i==3?0:i;
        var a=-50*i;
        var f="margin-top:"+(a)+"px;";
        image.style.cssText=f;
        i++;
        console.log(f)
    }
    setInterval(lunbo,3000);
}
var tbao=document.querySelectorAll('.bnav>ul>li')
var btn1=document.querySelectorAll('.nnav>div');
var tspan=document.querySelectorAll('.bao-top1 span');
for(var i=0;i<tbao.length;i++){
    tbao[i].index=i;
    document.querySelectorAll('.bnav>ul>li')[i].onclick=function(){
        for(var i=0;i<tbao.length;i++){
            document.querySelectorAll('.nnav>div')[i].style.display='none';
        }
        btn1[this.index].style.display='block';
    }
}
for(var i=0;i<tspan.length;i++){
    document.querySelectorAll('.bao-top1 span')[i].onclick=function(){
        for(var i=0;i<tspan.length;i++){
            document.querySelectorAll('.nnav>div')[i].style.display='none';
            //jiaox[i].style.display='none';
        }
    }
}
var xbao=document.querySelectorAll(".bao-btn1>div");
var jiaox=document.querySelectorAll(".jiaox");
for(var i=0;i<xbao.length;i++){
    xbao[i].onclick=function(){
        for(var i=0;i<xbao.length;i++){
            jiaox[i].style.display='block';
        }
    }
}

