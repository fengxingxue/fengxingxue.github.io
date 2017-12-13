window.onload = function () {
    var text = document.querySelector("#banner .text");
    var scrollH = document.documentElement.scrollTop || document.body.scrollTop;
//banner动画，只有在滚动条的高度小于300的时候才出效果
    if (scrollH < 300) {
        text.style.transition = '0.2s all ease-in';
        text.style.width = '400px';
        text.style.opacity = '1';
        text.num = 0;
        text.addEventListener('transitionend', function () {
            text.num++;
            if (text.num <= 1) {
                var html = document.querySelector("html");
                html.style.animation = '0.3s shake';
            }
        });
    } else {
        text.style.width = '400px';
        text.style.opacity = '1';
    }
}