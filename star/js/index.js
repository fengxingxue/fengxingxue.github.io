function scroll(){
    var title=document.title;// 获取 title
    var first=title.charAt(0);// 第一个文字
    var right=title.substring(1,title.length);
    //console.log(right);
    document.title=right+first;
}
setInterval(scroll,500);



Vue.component('my-header',{
    template:`
        <header>
            <!--<div class="logo"><img src="img/logo.png" alt=""></div>-->
            <nav class="navbar-default navbar navbar-fixed-top" style="background: #fff;" role="navigation">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a href="#" class="logo navbar-brand">
                            <img src="img/logo.png" alt="">
                        </a>
                    </div>
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="index.html" class="self">首页</a></li>
                            <li><a href="photo.html" class="self">肖像照片</a></li>
                            <li><a href="shang.html" class="self">商演活动</a></li>
                            <li><a href="#" class="self">形象代言</a></li>
                            <li><a href="#" class="self">自媒体</a></li>
                            <li><a href="#" class="self">案例库</a></li>
                            <li><a href="#" class="self">研究报告</a></li>
                            <li><a href="#" class="self">星咨询</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    `
})
var app=new Vue({
    el:"#app"
})

Vue.component('mymain',{
    props:["myh2","myp","myimg1","myimg2","myimg3","myimg4","name1","name2","name3","name4","text1","text2","text3","text4"],
    template:`
        <div>
            <div class='first' v-for="list in lists">
                <h2>{{list.myh2}}</h2>
                <p>{{list.myp}}</p>
                <div class="myimg">
                    <a href="#">
                        <img :src="list.myimg1" :alt="list.name1" :title="list.name1">
                        <p>{{list.name1}}</p>
                        <p>{{list.text1}}</p>
                    </a>
                    <a href="#">
                        <img :src="list.myimg2" :alt="list.name2" :title="list.name2">
                        <p>{{list.name2}}</p>
                        <p>{{list.text2}}</p>
                    </a>
                    <a href="#">
                        <img :src="list.myimg3" :alt="list.name3" :title="list.name3">
                        <p>{{list.name3}}</p>
                        <p>{{list.text3}}</p>
                    </a>
                    <a href="#">
                        <img :src="list.myimg4" :alt="list.name4" :title="list.name4">
                        <p>{{list.name4}}</p>
                        <p>{{list.text4}}</p>
                    </a>
                </div>
            </div>
        </div>
    `,
    data:function(){
        return{
            lists:[
                {myh2:"肖像图片",myp:"使用明星肖像做包装，做推广，提升品牌辨识度。",
                myimg1:"./img/5.jpg",name1:"张艺兴",text1:"歌手、演员",
                    myimg2:"./img/6.jpg",name2:"迪丽热巴",text2:"演员",
                    myimg3:"./img/1.jpeg",name3:"吴磊",text3:"演员",
                    myimg4:"./img/1.png",name4:"宋祖儿",text4:"演员"
                },
                {myh2:"商演活动",myp:"商业演出，明星站台，有气势有卖点。",
                    myimg1:"./img/8.jpg",name1:"陈乔恩",text1:"歌手、主持人、演员",
                    myimg2:"./img/9.jpg",name2:"陈伟霆",text2:"演员、歌手、主持人",
                    myimg3:"./img/10.jpg",name3:"侯明昊",text3:"演员、歌手",
                    myimg4:"./img/11.jpg",name4:"曾舜晞",text4:"演员、歌手"
                },
                {myh2:"形象代言",myp:"明星微博在线发布或转发，帮品牌做宣传。",
                    myimg1:"./img/12.jpg",name1:"张雪迎",text1:"演员",
                    myimg2:"./img/13.jpg",name2:"宋威龙",text2:"演员",
                    myimg3:"./img/14.jpg",name3:"刘昊然",text3:"演员、学生",
                    myimg4:"./img/15.jpg",name4:"白敬亭",text4:"演员"
                },
                {myh2:"自媒体",myp:"品牌形象代言，彰显实力，提升品牌知名度。",
                    myimg1:"./img/16.jpg",name1:"魏大勋",text1:"演员",
                    myimg2:"./img/17.jpg",name2:"马天宇",text2:"演员、歌手",
                    myimg3:"./img/18.jpg",name3:"郑爽",text3:"演员",
                    myimg4:"./img/19.jpg",name4:"张彬彬",text4:"演员"
                }

            ]
        }
    }
})
var app1=new Vue({
    el:"#app1"
})

Vue.component('myfoot', {
    props: [],
    template: `
    <footer>
        <div class="footer-top">
            <ul>
                <li>
                    <p><i></i>保障双方利益</p>
                    <ul>
                        <li><strong>购买指南</strong></li>
                        <li><a href="#">购买流程</a></li>
                        <li><a href="#">常见问题</a></li>
                    </ul>
                </li>
                <li>
                    <p><i></i>选择迅速、成交迅速</p>
                    <ul>
                        <li><strong>产品介绍</strong></li>
                        <li><a href="#">肖像图片</a></li>
                        <li><a href="#">形象代言</a></li>
                        <li><a href="#">商演活动</a></li>
                    </ul>
                </li>
                <li>
                    <p><i></i>多对多沟通选择</p>
                    <ul>
                        <li><strong>公司介绍</strong></li>
                        <li><a href="#">公司简介</a></li>
                    </ul>
                </li>
                <li>
                    <p><i></i>找到适合自己的产品</p>
                    <ul>
                        <li><strong>关于我们</strong></li>
                        <li><a href="#">品台介绍</a></li>
                        <li><a href="#">联系我们</a></li>
                        <li><a href="#">友情链接</a></li>
                        <li><a href="#">加入我们</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="footer-btn">
            <p>
                <strong>网站关键词：</strong>
                企业明星代表、明星代言价格、如何请明星代言、明星代言报价表、明星广告代言、明星出场费、明星代言网、明星出场费报价
            </p>
            <p>
                @前锋锐吉（北京）传媒有限公司 京ICP备17006767
            </p>
        </div>
    </footer>
    `


})


var foot=new Vue({
    el:"#foot"
})




//var photo=document.querySelector("#photo");
var ul=document.querySelectorAll(".shai>ul>li>p");
var ul1=document.querySelectorAll(".active1");
var ul2=document.querySelectorAll(".shai>ul>li>ul");




    ul[0].onclick=function(){
        if(ul2[0].className=="active1"){
            ul1[0].className="b";
            ul1[1].className="active1";
            ul1[2].className="active1";
        }else{
            ul1[0].className="active1";
            ul1[1].className="active1";
            ul1[2].className="active1";
        }
    }
ul[1].onclick=function(){
    if(ul2[1].className=="active1"){
        ul1[1].className="b";
        ul1[0].className="active1";
        ul1[2].className="active1";
    }else{
        ul1[0].className="active1";
        ul1[1].className="active1";
        ul1[2].className="active1";
    }
}
ul[2].onclick=function(){
    if(ul2[2].className=="active1"){
        ul1[2].className="b";
        ul1[1].className="active1";
        ul1[0].className="active1";
    }else{
        ul1[0].className="active1";
        ul1[1].className="active1";
        ul1[2].className="active1";
    }
}

var li=document.querySelectorAll(".active1 li");
for(var i=0;i<li.length;i++){
    li[i].onclick=function(){
        this.className="red";
    }
}


Vue.component('mypic',{
    props:["myimg1","name1","text1"],
    template:`
        <div class="first first1">
            <div class="myimg">
                <a href="#" v-for="list in lists">
                        <img :src="list.myimg1" :alt="list.name1" :title="list.name1">
                        <p>{{list.name1}}</p>
                        <p>{{list.text1}}</p>
                        <p></p>
                </a>
            </div>
        </div>
    `,
    data:function(){
        return{
            lists:[
                {myimg1:"./img/20.jpg",name1:"杨幂",text1:"演员、歌手、制片人"},
                {myimg1:"./img/21.jpg",name1:"李易峰",text1:"演员、歌手、制片人"},
                {myimg1:"./img/22.jpg",name1:"张艺兴",text1:"演员、歌手"},
                {myimg1:"./img/23.jpg",name1:"刘诗诗",text1:"演员"},
                {myimg1:"./img/24.jpg",name1:"戚薇",text1:"演员、歌手"},
                {myimg1:"./img/25.jpg",name1:"陈紫函",text1:"演员"},
                {myimg1:"./img/26.jpg",name1:"胡一天",text1:"演员"},
                {myimg1:"./img/27.jpg",name1:"王俊凯",text1:"学生、演员、歌手"},
                {myimg1:"./img/28.jpg",name1:"王源",text1:"学生、演员、歌手、主持"},
                {myimg1:"./img/29.jpg",name1:"易烊千玺",text1:"学生、演员、歌手、舞者"},
                {myimg1:"./img/30.jpg",name1:"刘宪华",text1:"演员、歌手、主持人"},
                {myimg1:"./img/31.jpg",name1:"陈翔",text1:"演员、歌手"},
                {myimg1:"./img/32.jpg",name1:"黄子韬",text1:"演员、歌手"},
                {myimg1:"./img/33.jpg",name1:"吴昕",text1:"主持人、演员"},
                {myimg1:"./img/34.jpg",name1:"王一博",text1:"演员、歌手"},
                {myimg1:"./img/35.jpg",name1:"熊梓淇",text1:"演员、歌手"},
                {myimg1:"./img/36.jpg",name1:"郑合惠子",text1:"演员"},
                {myimg1:"./img/37.jpg",name1:"陈学冬",text1:"演员、歌手"},
                {myimg1:"./img/38.jpg",name1:"张一山",text1:"演员"},
                {myimg1:"./img/39.jpg",name1:"李沁",text1:"演员"},
                {myimg1:"./img/40.jpg",name1:"邓伦",text1:"演员"},
                {myimg1:"./img/41.jpg",name1:"邓紫棋",text1:"唱作歌手、作曲人"},
                {myimg1:"./img/42.jpg",name1:"任嘉伦",text1:"演员、歌手"},
                {myimg1:"./img/43.jpg",name1:"成毅",text1:"演员"},
                {myimg1:"./img/44.jpg",name1:"秦俊杰",text1:"演员"},
                {myimg1:"./img/45.jpg",name1:"杨紫",text1:"演员、歌手"},
                {myimg1:"./img/46.jpg",name1:"马可",text1:"演员"},
                {myimg1:"./img/47.jpg",name1:"张云龙",text1:"演员、歌手"},
                {myimg1:"./img/48.jpg",name1:"高伟光",text1:"演员、模特"},
                {myimg1:"./img/49.jpg",name1:"张哲瀚",text1:"演员、歌手"},
                {myimg1:"./img/50.jpg",name1:"魏晨",text1:"演员、歌手"},
                {myimg1:"./img/51.jpg",name1:"陈晓",text1:"演员"},
                {myimg1:"./img/52.jpg",name1:"毛晓彤",text1:"演员"},
                {myimg1:"./img/53.jpg",name1:"古力娜扎",text1:"演员、平面模特"},
                {myimg1:"./img/54.jpg",name1:"吴倩",text1:"演员、书膜"},
                {myimg1:"./img/55.jpg",name1:"Angelababy",text1:"演员、模特"},
            ]
        }
    }

})
var app2=new Vue({
    el:"#app2"
})




Vue.component('mypic1',{
    props:["myimg1","name1","text1"],
    template:`
        <div class="first first1">
            <div class="myimg">
                <a href="#" v-for="list in lists">
                        <img :src="list.myimg1" :alt="list.name1" :title="list.name1">
                        <p>{{list.name1}}</p>
                        <p>{{list.text1}}</p>
                        <p></p>
                </a>
            </div>
        </div>
    `,
    data:function(){
        return{
            lists:[
                {myimg1:"./img/56.jpg",name1:"唐嫣",text1:"演员"},
                {myimg1:"./img/57.jpg",name1:"罗晋",text1:"演员"},
                {myimg1:"./img/58.jpg",name1:"张靓颖",text1:"歌手"},
                {myimg1:"./img/59.jpg",name1:"张碧晨",text1:"歌手"},
                {myimg1:"./img/60.jpg",name1:"王丽坤",text1:"演员"},
                {myimg1:"./img/61.jpg",name1:"欧阳娜娜",text1:"演员、大提琴演奏者"},
                {myimg1:"./img/62.jpg",name1:"宋茜",text1:"演员、歌手、主持人"},
                {myimg1:"./img/63.jpg",name1:"沈梦辰",text1:"主持人、演员、模特"},
                {myimg1:"./img/64.jpg",name1:"舒畅",text1:"演员、歌手"},
                {myimg1:"./img/65.jpg",name1:"张钧甯",text1:"演员"},
                {myimg1:"./img/92.jpg",name1:"唐禹哲",text1:"演员、歌手"},
                {myimg1:"./img/67.jpg",name1:"高圆圆",text1:"演员、模特"},
                {myimg1:"./img/68.jpg",name1:"韩雪",text1:"演员、歌手、影视制作人"},
                {myimg1:"./img/82.jpg",name1:"林更新",text1:"演员"},
                {myimg1:"./img/83.jpg",name1:"武艺",text1:"歌手，演员，主持人"},
                {myimg1:"./img/84.jpg",name1:"薛之谦",text1:"歌手、演员、音乐制作人"},
                {myimg1:"./img/85.jpg",name1:"华晨宇",text1:"歌手"},
                {myimg1:"./img/86.jpg",name1:"蒋劲夫",text1:"演员、模特"},
                {myimg1:"./img/87.jpg",name1:"汪东城",text1:"演员，歌手，主持，模特"},
                {myimg1:"./img/88.jpg",name1:"付辛博",text1:"演员、歌手"},
                {myimg1:"./img/72.jpg",name1:"张慧雯",text1:"演员"},
                {myimg1:"./img/73.jpg",name1:"蒋欣",text1:"演员"},
                {myimg1:"./img/74.jpg",name1:"徐璐",text1:"演员"},
                {myimg1:"./img/75.jpg",name1:"颖儿",text1:"演员、歌手"},
                {myimg1:"./img/76.jpg",name1:"杨蓉",text1:"演员"},
                {myimg1:"./img/77.jpg",name1:"韩庚",text1:"演员、歌手、舞者"},
                {myimg1:"./img/78.jpg",name1:"贾乃亮",text1:"演员"},
                {myimg1:"./img/79.jpg",name1:"郑凯",text1:"演员"},
                {myimg1:"./img/80.jpg",name1:"邓超",text1:"演员、导演、出品人"},
                {myimg1:"./img/81.jpg",name1:"张若昀",text1:"演员"},
                {myimg1:"./img/89.jpg",name1:"萧敬腾",text1:"歌手、音乐创作人、演员"},
                {myimg1:"./img/90.jpg",name1:"张丹峰",text1:"演员"},
                {myimg1:"./img/91.jpg",name1:"张睿",text1:"演员、歌手、主持人"},
                {myimg1:"./img/69.jpg",name1:"张蒙",text1:"演员、歌手、平面模特"},
                {myimg1:"./img/70.jpg",name1:"娄艺潇",text1:"演员"},
                {myimg1:"./img/71.jpg",name1:"袁姗姗",text1:"演员"}
            ]
        }
    }

})
var app3=new Vue({
    el:"#app3"
})

















