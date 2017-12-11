var i=1;
var lun=document.getElementById("lun");

function lunbo(){
    i=i==2?0:i;
    var a=-1200*i;
    var f="margin-left:"+(a)+"px;";
    lun.style.cssText=f;
    i++;
    console.log(f)
}
setInterval(lunbo,3000);  
var left = document.getElementById("dian-left");
var right = document.getElementById("dian-right");
var v = 1;
left.onclick = function () {
    clearInterval(lunbo)
    v = v == 2 ? 0 : v;
    var aa = -1200 * v;
    v++;
    var xx = "margin-left:" + aa + "px;";
    lun.style.cssText = xx;
}
right.onclick = function () {
    clearInterval(lunbo)
    v = v == 2 ? 0 : v;
    var aa = -1200 * v;
    v++;
    var xx = "margin-left:" + aa + "px;";
    lun.style.cssText = xx;
}