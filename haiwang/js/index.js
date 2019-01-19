var width = window.screen.width
var height =window.screen.height
var screen_width = width; //屏幕宽度
var contentDOM = document.getElementById('all');//最大那个层转换
var contentDOM1 = document.getElementById('all1');
window.onload=function(){
        if (width < height) {
            screen_width = height; //如果 是竖屏，灵感的宽度就等于屏高
            contentDOM.style.width = height + 'px';
            contentDOM.style.height = (width-10) + 'px';
            contentDOM.style.top = (height - width) / 2 + 'px';
            contentDOM.style.left = 0 - (height - width) / 2 + 'px';
            //contentDOM.style.transform = 'rotate(90deg)';

            contentDOM1.style.width = height + 'px';
            contentDOM1.style.height = (width-10)  + 'px';
            contentDOM1.style.top = '0px';
            contentDOM1.style.left =  '0px';
        }
}

$('input').click(function() {
    contentDOM.style.height =Number(window.screen.height-15) + 'px';
    contentDOM1.style.height = Number(window.screen.height-15) + 'px';
});





function CreateNotification(m,n){
        var NotifyID = n;
        var Context = plus.android.importClass("android.content.Context");
        var main = plus.android.runtimeMainActivity();
        var Noti = plus.android.importClass("android.app.Notification");
        var NotificationManager = plus.android.importClass("android.app.NotificationManager");
        var nm = main.getSystemService(Context.NOTIFICATION_SERVICE)
        var Notification = plus.android.importClass("android.app.Notification");
        var mNotification = new Notification.Builder(main);
        var pending=plus.android.importClass("android.app.PendingIntent");
        var intent=plus.android.importClass("android.content.Intent");

        //mNotification.setOngoing(true);
        mNotification.setContentTitle("您有一条未读消息");//标题
        mNotification.setContentText(m);//内容
        mNotification.setSmallIcon(17301620);//图标
        mNotification.setTicker("First Time");//通知首次出现在通知栏时的效果
        mNotification.setNumber(5);//通知集合的数量
        //var str = dateToStr(new Date());
        //mNotification.setWhen(str);//通知产生时间
        //mNotification.setContentIntent();//通知栏点击事件
        mNotification.setDefaults(Noti.DEFAULT_VIBRATE);//声音、闪灯、震动效果，可叠加
        mNotification.setPriority(Noti.PRIORITY_DEFAULT);//通知优先级
        mNotification.flags=Notification.FLAG_ONLY_ALERT_ONCE;//发起通知时震动
        var mNb = mNotification.build()
        nm.notify(NotifyID , mNb);
    }


    var i=0;

    //开启连接
    function startConnection() {
        hub.on('listen',function (message) {

            $('#_messageList').append('<li>' + message + '</li>');
            i=i+1;
            CreateNotification(message,i);
        });

        listener.start().fail(function () {
            $('#_messageList').append('<li>打开连接失败!</li>');
        }).done(function () {
            $('#_messageList').append('<li>连接已打开...</li>');
        });

    }
startConnection()









//判断手机重力和是否开启竖屏锁定

// function orientationHandler(event) {
//     var num=event.gamma.toFixed(6)
//     var reg = new RegExp("^-?[0-9]*.?[0-9]*$");
//     if ( reg.test(num) ) {
//         var absVal = Math.abs(num);
//         screen_width = height;
//         var contentDOM = document.getElementById('all');
//         var contentDOM1 = document.getElementById('all1');
//         var contentDOM2 = document.getElementById('all2');
//         if(num==absVal && num>10){
//             const evt = "onorientationchange" in window ? "orientationchange" : "resize"; //旋转事件
//             //window.addEventListener(evt, function () { //事件监听
//                 var contentDOM = document.getElementById('all');
//                 if (window.orientation) { //旋转到 90 或 -90 度，即竖屏到横屏
//                     screen_width = height; //横屏，灵感的宽度就等于屏高
//                     contentDOM.style.width = height + 'px';
//                     contentDOM.style.height = width + 'px';
//                     contentDOM.style.top = '0px';
//                     contentDOM.style.left = '0px';
//                     contentDOM.style.transform = 'none'; //不旋转；
//                 }else{ //旋转到 180 或 0 度，即横屏到竖屏
//                     contentDOM.style.width = height + 'px';
//                     contentDOM.style.height = width + 'px';
//                     contentDOM.style.top = (height - width) / 2 + 'px';
//                     contentDOM.style.left = 0 - (height - width) / 2 + 'px';
//                     contentDOM.style.transform = 'rotate(-90deg)';
//                     contentDOM.style.transition='.5s'
//
//                     contentDOM1.style.width = height + 'px';
//                     contentDOM1.style.height = width + 'px';
//                     contentDOM1.style.top = (height - width) / 2 + 'px';
//                     contentDOM1.style.left = 0 - (height - width) / 2 + 'px';
//
//
//                     contentDOM2.style.width = height + 'px';
//                     contentDOM2.style.height = width + 'px';
//                     contentDOM2.style.top = (height - width) / 2 + 'px';
//                     contentDOM2.style.left = 0 - (height - width) / 2 + 'px';
//                 }
//             //}, false);
//
//
//         }else if(num!=absVal && num<-10){
//             const evt = "onorientationchange" in window ? "orientationchange" : "resize"; //旋转事件
//             //window.addEventListener(evt, function () { //事件监听
//                 var contentDOM = document.getElementById('all');
//                 if (window.orientation) { //旋转到 90 或 -90 度，即竖屏到横屏
//                     screen_width = height; //横屏，灵感的宽度就等于屏高
//                     contentDOM.style.width = height + 'px';
//                     contentDOM.style.height = width + 'px';
//                     contentDOM.style.top = '0px';
//                     contentDOM.style.left = '0px';
//                     contentDOM.style.transform = 'none'; //不旋转；
//                 }else{ //旋转到 180 或 0 度，即横屏到竖屏
//                     contentDOM.style.width = height + 'px';
//                     contentDOM.style.height = width + 'px';
//                     contentDOM.style.top = (height - width) / 2 + 'px';
//                     contentDOM.style.left = 0 - (height - width) / 2 + 'px';
//                     contentDOM.style.transform = 'rotate(90deg)';
//                     contentDOM.style.transition='.5s'
//
//                     contentDOM1.style.width = height + 'px';
//                     contentDOM1.style.height = width + 'px';
//                     contentDOM1.style.top = (height - width) / 2 + 'px';
//                     contentDOM1.style.left = 0 - (height - width) / 2 + 'px';
//
//
//                     contentDOM2.style.width = height + 'px';
//                     contentDOM2.style.height = width + 'px';
//                     contentDOM2.style.top = (height - width) / 2 + 'px';
//                     contentDOM2.style.left = 0 - (height - width) / 2 + 'px';
//                 }
//            // }, false);
//
//         }
//     }
// }
// if (window.DeviceOrientationEvent) {
//     window.addEventListener("deviceorientation", orientationHandler, false);
// }
