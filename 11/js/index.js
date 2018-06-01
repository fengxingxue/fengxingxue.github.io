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
var tbtn=document.querySelector(".t-btn");
var name=document.querySelector(".name");
var phone=document.querySelector(".phone");
var xjiao=document.querySelector(".xjiao");
var time=document.querySelector(".time");
var time1=document.querySelector(".time1");
var time2=document.querySelector(".time2");
var jiao8=document.querySelector("#jiao8");
var jiao5=document.querySelector("#jiao5");
tbtn.onclick=function(){
    if(name.value!=""&&phone.value!=""&&xjiao.value!=""&&time.value!=""&&time1.value!=""&&time2.value!=""){
        alert("恭喜你！预约成功，请选择班车");
        jiao8.style.display='block';
        jiao5.style.display='none';
    }else{
        alert("请填写完整");
    }

}

