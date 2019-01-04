var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
var screen_width = width; //屏幕宽度
if (width < height) {
        screen_width = height; //如果 是竖屏，灵感的宽度就等于屏高
        var contentDOM = document.getElementById('all');
        contentDOM.style.width = height + 'px';
        contentDOM.style.height = width + 'px';
        contentDOM.style.top = (height - width) / 2 + 'px';
        contentDOM.style.left = 0 - (height - width) / 2 + 'px';
        contentDOM.style.transform = 'rotate(90deg)';
    }
window.onload=function(){
    

    var story = document.getElementById('word');
    var s = document.getElementById('show');
    var i = 0;
    timer = setInterval(function () {
        s.innerHTML = story.innerHTML.substring(0, i);
        i++;
        if (s.innerHTML == story.innerHTML) {
            clearInterval(timer);
             s.style.display='none'
            var story1 = document.getElementById('word1');
            var s1 = document.getElementById('show1');
            var ii = 0;
            timer1 = setInterval(function () {
                s1.innerHTML = story1.innerHTML.substring(0, ii);
                ii++;
                if (s1.innerHTML == story1.innerHTML) {
                    clearInterval(timer1);
                }
            }, 200);
        }
    }, 200);


}

function orientationHandler(event) {
    var num=event.gamma.toFixed(6)
    var reg = new RegExp("^-?[0-9]*.?[0-9]*$");
    if ( reg.test(num) ) {
        var absVal = Math.abs(num);
        screen_width = height;
        var contentDOM = document.getElementById('all');
        if(num==absVal && num>10){
            contentDOM.style.width = height + 'px';
            contentDOM.style.height = width + 'px';
            contentDOM.style.top = (height - width) / 2 + 'px';
            contentDOM.style.left = 0 - (height - width) / 2 + 'px';
            contentDOM.style.transform = 'rotate(-90deg)';
            contentDOM.style.transition='.5s'
        }else if(num!=absVal && num<-10){
            contentDOM.style.width = height + 'px';
            contentDOM.style.height = width + 'px';
            contentDOM.style.top = (height - width) / 2 + 'px';
            contentDOM.style.left = 0 - (height - width) / 2 + 'px';
            contentDOM.style.transform = 'rotate(90deg)';
            contentDOM.style.transition='.5s'
        }
    }
}
if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", orientationHandler, false);
}
