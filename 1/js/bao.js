var wait=60;
function time(i) {
    if (wait == 0) {
        i.removeAttribute("disabled");
        i.innerHTML="发送验证码";
        wait = 60;
    } else {
        i.setAttribute("disabled", true);
        i.innerHTML="重新发送(" + wait + ")";
        wait--;
        setTimeout(function() {
            time(i)
        },1000)
    }
}
document.querySelector(".btn").onclick=function(){
    time(this)
}