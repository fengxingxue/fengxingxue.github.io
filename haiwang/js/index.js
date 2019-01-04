var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
var screen_width = width; //屏幕宽度
window.onload=function(){
    if (width < height) {
        screen_width = height; //如果 是竖屏，灵感的宽度就等于屏高
        var contentDOM = document.getElementById('all');
        var contentDOM1 = document.getElementById('all1');
        var contentDOM2 = document.getElementById('all2');
        contentDOM.style.width = height + 'px';
        contentDOM.style.height = width + 'px';
        contentDOM.style.top = (height - width) / 2 + 'px';
        contentDOM.style.left = 0 - (height - width) / 2 + 'px';
        contentDOM.style.transform = 'rotate(90deg)';


        contentDOM1.style.width = height + 'px';
        contentDOM1.style.height = width + 'px';
        contentDOM1.style.top = (height - width) / 2 + 'px';
        contentDOM1.style.left = 0 - (height - width) / 2 + 'px';


        contentDOM2.style.width = height + 'px';
        contentDOM2.style.height = width + 'px';
        contentDOM2.style.top = (height - width) / 2 + 'px';
        contentDOM2.style.left = 0 - (height - width) / 2 + 'px';
    }


}


function orientationHandler(event) {
    var num=event.gamma.toFixed(6)
    var reg = new RegExp("^-?[0-9]*.?[0-9]*$");
    if ( reg.test(num) ) {
        var absVal = Math.abs(num);
        screen_width = height;
        var contentDOM = document.getElementById('all');
        var contentDOM1 = document.getElementById('all1');
        var contentDOM2 = document.getElementById('all2');
        if(num==absVal && num>10){
            contentDOM.style.width = height + 'px';
            contentDOM.style.height = width + 'px';
            contentDOM.style.top = (height - width) / 2 + 'px';
            contentDOM.style.left = 0 - (height - width) / 2 + 'px';
            contentDOM.style.transform = 'rotate(-90deg)';
            contentDOM.style.transition='.5s'

            contentDOM1.style.width = height + 'px';
            contentDOM1.style.height = width + 'px';
            contentDOM1.style.top = (height - width) / 2 + 'px';
            contentDOM1.style.left = 0 - (height - width) / 2 + 'px';


            contentDOM2.style.width = height + 'px';
            contentDOM2.style.height = width + 'px';
            contentDOM2.style.top = (height - width) / 2 + 'px';
            contentDOM2.style.left = 0 - (height - width) / 2 + 'px';

        }else if(num!=absVal && num<-10){
            contentDOM.style.width = height + 'px';
            contentDOM.style.height = width + 'px';
            contentDOM.style.top = (height - width) / 2 + 'px';
            contentDOM.style.left = 0 - (height - width) / 2 + 'px';
            contentDOM.style.transform = 'rotate(90deg)';
            contentDOM.style.transition='.5s'

            contentDOM1.style.width = height + 'px';
            contentDOM1.style.height = width + 'px';
            contentDOM1.style.top = (height - width) / 2 + 'px';
            contentDOM1.style.left = 0 - (height - width) / 2 + 'px';


            contentDOM2.style.width = height + 'px';
            contentDOM2.style.height = width + 'px';
            contentDOM2.style.top = (height - width) / 2 + 'px';
            contentDOM2.style.left = 0 - (height - width) / 2 + 'px';

        }
    }
}
if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", orientationHandler, false);
}