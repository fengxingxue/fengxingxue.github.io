<template>
    <div class="main">
        <h4>{{myh4}}{{dan}}</h4>
        <ul id="lit">
            <li v-for="list in lists">{{list}}</li>
        </ul>
        <div class="text">
                <div class="mydiv" v-for="(first,index) in first1">
                    <div class="img">
                        <img :src="first.url" alt="">
                    </div>
                    <div class="p">
                        <i v-if="first.url1" class="jing"></i>
                        <i v-if="first.url2" class="sheng"></i>
                        {{first.mes}}
                        <span>{{first.mess}}</span>
                    </div>
                    <div class="q">￥{{first.qian}}</div>
                    <div class="s">
                        <input type="number" v-model="first.val"><br>
                        <span>{{ first.you > 0 ? '有货' : '没货' }}</span>
                    </div>
                    <div class="x">
                        <p>￥{{first.qian * first.val}}</p>
                        <span>{{first.kg * first.val}}kg</span>
                    </div>
                    <div class="n" @click="e(index)">{{first.shan}}</div>
                </div>
        </div>
        <div class="zong">总价：<span>￥{{zong}}</span></div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                myh4:'全部商品 ',
                lists:['商品','名称','单价','数量','小计','操作'],
                first1:[
                    {url:'images/orange.jpg',url1:true,url2:true,
                        mes:'美伦达 嶦难脐橙',mess:'颜色：嶦难脐橙铂金果 3斤装 2017新上市 3斤装 铂金果',
                        qian:25.8,you:100,kg:'1.68',shan:'删除',val:1},
                    {url:'images/blueberry.jpg',url1:false,url2:true,
                        mes:'Camposol 秘鲁进口精选蓝',mess:'颜色：秘鲁蓝莓 4盒装 单盒约125g 新鲜水果',
                        qian:46.90,you:100,kg:'1.25',shan:'删除',val:1},
                    {url:'images/mango.jpg',url1:false,url2:true,
                        mes:'欢乐果园 广西青皮芒果 2个',mess:'颜色：青皮芒 2粒 尝鲜装装 单果约260g以上 新鲜水果',
                        qian:10.90,you:100,kg:'0.75',shan:'删除',val:1},
                    {url:'images/pear.jpg',url1:false,url2:true,
                        mes:'爱奇果 新疆库尔勒香梨 约',mess:'颜色：2.5kg单果约120-150g 2.5kg 当季新果 特级装 单果约120-',
                        qian:39.90,you:100,kg:'2.6',shan:'删除',val:1},
                    {url:'images/apple.jpg',url1:false,url2:true,
                        mes:'宏辉果蔬 苹果 烟台红富士',mess:'颜色：12粒75mm红富士12个 单果约75mm 总重约2.1kg 新鲜',
                        qian:34.90,you:100,kg:'2.1',shan:'删除',val:1}
                ]
            }
        },
        computed:{
         dan:function(){
             return this.first1.length
         },
            zong:function(){
                var all=0
                for(var i=0;i<this.first1.length;i++){
                    var one=Number(this.first1[i].qian)
                    var num=Number(this.first1[i].val)
                    all += one*num
                }
                return all
            }
        },
        methods:{
            e:function(i){
                if(confirm('确认删除吗？')){
                    this.first1.splice(i,1)
                }
            }
        }
    }
</script>


<style scoped>
        h4{
            font-size: 16px;
            color: #de414c;
            position: relative;
            top:1px;
            padding-bottom:10px;
            border-bottom:solid 1px #de414c;
            display: inline-block;
        }
        ul::after,.text::after{
            display: table;
            content: '';
            clear: both;
        }
        ul{
            list-style:none;
        }
        #lit{
            border-top:solid 1px #e1e1e1;
            border-bottom:solid 2px #ababab;
        }
        #lit li{
            float: left;
            color: #65626d;
            font-size: 12px;
            padding:17px 20px;
            background: #f3f3f3;
            font-size:12px;
            color: #605c59;
        }
        .text div{
            float: left;
        }
        .text .mydiv{
            border-bottom:solid 3px #f5eee4;
            padding-top:17px;
        }
        .text{
            background: #fef4e8;
        }
        .text .img{
            padding:0px 6px 22px 22px;
        }
        .text .img img{
            width:82px;
            height:82px;
        }
        .text .p img{
            position: relative;
            top:2px;
        }
        .text .p{
            padding-right:80px;
            padding-left:7px;
            color: #303a39;
            font-size:14px;
        }
        .text .p span{
            padding-left:17px;
            color: #746369;
        }
        .text .q{
            padding-left:12px;
            font-size: 12px;
            color: #3a261b;;
        }
        .text .s{
            padding-left:15px;
        }
        .text .s input{
            width:46px;
            height:22px;
            background: #fff;
            text-align: center;
        }
        .text .s span{
            font-size: 12px;
            color: #b8aa9f;
            margin-left:10px;
        }
        .text .x{
            padding-left:15px;
        }
        .text .x p{
            font-size: 12px;
            color: #263635;
            font-weight:bold;;
        }
        .text .x span{
            font-size: 10px;
            color: #7f675d;
        }
        .text .n{
            padding-left:15px;
            font-size:12px;
            color: #656251;
            width:118px;
            cursor: pointer;
        }
        .zong{
            margin:20px 0;
            border:solid 1px #eeeeee;
            width:995px;
            padding:20px 30px 20px 0;
            text-align: right;
            font-size:12px;
            color: #9e9b92;
        }
        i{
            background: url("images/aicon.png");
            display: inline-block;
        }
        .jing{
            background-position: -1px -276px;
            width:57px;
            height:16px;
        }
        .sheng{
            background-position: -1px -300px;
            width: 48px;
            height: 16px;
        }

        .zong span{
            color: #e33956;
        }
        #lit li:nth-of-type(1),text .img{
            width:108px;
        }
        #lit li:nth-of-type(2),.text .p{
            width:460px;
        }
        #lit li:nth-of-type(3),.text .q{
            width:104px;
        }
        #lit li:nth-of-type(4),.text .s{
            width:117px;
        }
        #lit li:nth-of-type(5),.text .x{
            width:86px;
        }
        #lit li:nth-of-type(6){
            width:120px;
        }
</style>
