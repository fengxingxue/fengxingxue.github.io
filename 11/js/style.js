var lnav=document.querySelector(".lnav");
var ynav=document.querySelector(".ynav");
var snav=document.querySelector(".ynav span");
lnav.onclick=function(){
    ynav.style.left='0';
}
snav.onclick=function(){
    ynav.style.left='-35em';
}