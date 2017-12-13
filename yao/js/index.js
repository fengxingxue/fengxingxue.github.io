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
//            prevEl: '.swiper-button-prev',
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
            rotate:''
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