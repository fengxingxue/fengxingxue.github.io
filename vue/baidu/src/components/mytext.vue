<template>
    <div>
        <div class="text" v-for="list in lists">
            <div class="top">
                <a href="">{{list.myh2}}</a>
                <img :src="list.myimg" alt="">
                <span>{{list.myspan1}}</span>
                <span>{{list.myspan2}}</span>
                <span>{{list.myspan3}}</span>
            </div>
            <div class="btn">
                <img :src="list.mysrc" alt="">
                <a href="">{{list.myh22}}</a>
                <span>{{list.my1span1}}</span>
                <span>{{list.my1span2}}</span>
                <span>{{list.my1span3}}</span>
            </div>

        </div>
    </div>

</template>

<script>
    export default{
        data(){
            return{
                lists:[
                    {myh2:'农村大集鲫鱼鲫鱼铺满地，鱼的来源让人太生气，最好别吃',myimg:'./images/1.gif',
                        myspan1:'河北乡土 11-19',myspan2:'图集',myspan3:'打开手机百度',
                        myh22:'女人情到深处时，才会这样称呼你，你可曾如此称呼过？',my1span1:'宇宙用户精选 11-16',
                        my1span2:'图集',my1span3:'打开手机百度'},
                    {myh2:'超神学院：曾经的雄兵连终于集合了，真是不容易啊！',myimg:'./images/2.gif',
                        myspan1:'透明的车玻璃 11-18',myspan2:'',myspan3:'打开手机百度',
                        myh22:'烤鱼店生意红火 秘方：用漏斗过滤剩菜后的口水油',my1span1:'南方都市报 07:27',
                        my1span2:'热点',my1span3:''},
                    {myh2:'刘鑫称她也不记得当时有没有反锁门，现在是百口莫辩解释不清楚了',myimg:'./images/3.gif',
                        myspan1:'娱七杂八话天下 11-19',myspan2:'',myspan3:'打开手机百度',
                        myh22:'结婚70周年！英国女王庆祝白金婚 王室发布合影',my1span1:'新浪娱乐 11-19',
                        my1span2:'',my1span3:''},
                    {myh2:'女兵在阅兵时想上厕所怎么办，原来还有这种操作',myimg:'',
                        myspan1:'军人魂魄 11-18',myspan2:'',myspan3:'',
                        myh22:'专家发现：女人有没有生过孩子，看下面就知道，非常“与众不同”',my1span1:'只要你愿意等 11-19',
                        my1span2:'',my1span3:''},
                    {myh2:'日本女星Shinozaki沙滩游玩，太漂亮了',myimg:'./images/4.gif',
                        myspan1:'精选影片 11-17',myspan2:'图集',myspan3:'打开手机百度',
                        myh22:'农村孤寡老人没钱装暖气，施工人员牵走他家羊炖了，还拆掉壁挂炉',my1span1:'闻舞视界 11-19',
                        my1span2:'图集',my1span3:'打开手机百度'},
                    {myh2:'马末都：我为什么不佩戴文玩，说出来你们不要觉得恶心',myimg:'./images/5.gif',
                        myspan1:'百家人和文 11-18',myspan2:'',myspan3:'打开手机百度',
                        myh22:'红色越野正开走 警察突然瞄见副驾门把手上有手铐',my1span1:'网易新闻 11-19',
                        my1span2:'热点',my1span3:''},
                    {myh2:'泰版《命中注定我爱你》最终帕乌面临死亡，妮子应该不会难受吧',myimg:'./images/6.gif',
                        myspan1:'军旅中的生涯 11-18',myspan2:'',myspan3:'打开手机百度',
                        myh22:'中国造出“地表最强”两栖战车 多项性能居世界第一',my1span1:'新华网 11-19',
                        my1span2:'',my1span3:''},
                    {myh2:'徐州下雪了，今夜淮北地区有雨夹雪',myimg:'',
                        myspan1:'东方头条 11-19',myspan2:'',myspan3:'',
                        myh22:'成都10岁男孩在家上学：做德语主播 写万字英文小说',my1span1:'凤凰新闻 11-19',
                        my1span2:'',my1span3:''},
                    {myh2:'潘玮柏访谈现场被逼问感情生活 他是这样回答吴昕知道吗',myimg:'./images/7.gif',
                        myspan1:'楚秀网综合 11-19',myspan2:'',myspan3:'打开手机百度',
                        myh22:'观众席有人挂出“藏独”旗 蓄意挑衅 中国球员在德退场抗议',my1span1:'网易新闻 00:31',
                        my1span2:'',my1span3:''}
                ]

            }

        }
    }
</script>


<style scoped>
    .text a{
        display: inline-block;
        padding-top:18px;
        padding-bottom:10px;
        font-size: 22px;
        color: #333333;
        text-decoration: none;
        font-weight: 500;
    }
    .top,.btn{
        border-bottom: solid 1px #f0f0f0;
    }
    .text span{
        color: #999999;
        font-size: 15px;
        padding-top: 16px;
        padding-bottom:22px;
        display: inline-block;
    }
    .text span:nth-of-type(2){
        color: #f45c40;
        font-size: 14px;
        font-weight:bolder;
        border:solid 1px #efb9b9;
        padding: 0px 3px;
    }
    .btn a{
        padding-bottom: 9px;
    }
    a:hover{
        color: #f00;
    }
    .text:nth-of-type(2) .top span:nth-of-type(2),.text:nth-of-type(3) .top span:nth-of-type(2),.text:nth-of-type(3) .btn span:nth-of-type(2),
    .text:nth-of-type(4) .top span:nth-of-type(2),.text:nth-of-type(4) .btn span:nth-of-type(2),.text:nth-of-type(6) .top span:nth-of-type(2),
    .text:nth-of-type(7) .top span:nth-of-type(2),.text:nth-of-type(7) .btn span:nth-of-type(2),.text:nth-of-type(8) .top span:nth-of-type(2),
    .text:nth-of-type(8) .btn span:nth-of-type(2),.text:nth-of-type(9) .top span:nth-of-type(2),.text:nth-of-type(9) .btn span:nth-of-type(2){
        border-width: 0px;
    }
    .text:nth-of-type(6) .btn img,.text:nth-of-type(8) .top img,.text:nth-of-type(9) .btn img{
        width:145px;
        height:134px;
        border:none;
        float: left;
        margin-right:3px;
    }
    .text:nth-of-type(6) .btn a,.text:nth-of-type(8) .top a,.text:nth-of-type(9) .btn a{
        width:260px;
    }
    .text:nth-of-type(6) .btn span,.text:nth-of-type(8) .top span,.text:nth-of-type(9) .btn span{
        padding-top:0;
    }
    .text:nth-of-type(9) .btn img{
        height:149px;
    }
    .text:nth-of-type(9) .btn span{
        padding-bottom:14px;
    }
</style>


































