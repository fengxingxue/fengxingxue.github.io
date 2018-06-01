var bao=document.querySelectorAll(".baoming");
var baoa=document.querySelectorAll(".bao-top1 span");
for(var i=0;i<bao.length;i++){
    bao[i].onclick=function(){
        var bb=this.nextElementSibling;
        console.log(bb);
        bb.style.display='block';
    }
    baoa[i].onclick=function(){
        var aa=this.parentNode;
        console.log(aa);
        var bb=aa.parentNode;
        console.log(bb);
        bb.style.display='none';
    }
}
// var wait=60;
// function time(i) {
//     if (wait == 0) {
//         i.removeAttribute("disabled");
//         i.innerHTML="发送验证码";
//         wait = 60;
//     } else {
//         i.setAttribute("disabled", true);
//         i.innerHTML="重新发送(" + wait + ")";
//         wait--;
//         setTimeout(function() {
//             time(i)
//         },1000)
//     }
// }
// document.querySelector(".btn").onclick=function(){
//     time(this)
// }