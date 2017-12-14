function initMap(){
    createMap();//创建地图
    setMapEvent();//设置地图事件
    addMapControl();//向地图添加控件
    addMapOverlay();//向地图添加覆盖物
}
function createMap(){
    map = new BMap.Map("map");
    map.centerAndZoom(new BMap.Point(116.585748,38.085217),16);
}
function setMapEvent(){
    map.enableScrollWheelZoom();
    map.enableKeyboard();
    map.enableDragging();
    map.enableDoubleClickZoom()
}
function addClickHandler(target,window){
    target.addEventListener("click",function(){
        target.openInfoWindow(window);
    });
}
function addMapOverlay(){
    var markers = [
        {content:"学校",title:"我的学校",imageOffset: {width:0,height:3},position:{lat:38.082761,lng:116.577627}}
    ];
    for(var index = 0; index < markers.length; index++ ){
        var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
        var marker = new BMap.Marker(point,{icon:new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{
            imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
        })});
        var label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
        var opts = {
            width: 200,
            title: markers[index].title,
            enableMessage: false
        };
        var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
        marker.setLabel(label);
        addClickHandler(marker,infoWindow);
        map.addOverlay(marker);
    };
}
//向地图添加控件
function addMapControl(){
    var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
    scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
    map.addControl(scaleControl);
    var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
    map.addControl(navControl);
    var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
    map.addControl(overviewControl);
}
var map;
initMap();
























var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertival',//direction 方向  vertival（垂直）、horizontal(水平)
    loop: true,// 类似于无缝轮播的效果
    //autoplay:true,// 类似于自动轮播，自动播放


    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        // type:'progressbar',
        clickable:true,//clickable 点击
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        //prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
//        scrollbar: {
//            el: '.swiper-scrollbar',
//
//
//
//
//    },

    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
})
var app=new Vue({
    el:"#app",
    data:{
        rotate:{
            rotate:true,
        },
        f:true
    },
    methods:{
        e:function(){
            var a=document.querySelector(".audio");
            if(this.rotate.rotate==this.f){
                this.rotate.rotate=false;
                a.pause();//音频暂停
            }else{
                this.rotate.rotate=true;
                a.play();//音频开始
            }
        }
    }
})



