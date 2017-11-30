<template>
    <header>
        <nav>
            <ul>
                <li v-for="list in lists"><a href="">{{list}}</a></li>
            </ul>
        </nav>
        <div class="logo"><img :src='url' :alt="alt"></div>
        <div class="search">
            <input type="text">
            <a href="">{{alt}}</a>
        </div>
        <div class="page">
            <ul>
                <li v-for="mylist in mylists"><a href=""><img :src="mylist.src" alt=""><br>{{mylist.name}}</a></li>
            </ul>
            <div class="qiu">
                <span></span><span></span><span></span>
            </div>
        </div>
    </header>
</template>


<script>
    export default{
        data(){
            return{
                lists:['推荐','视频','热点','娱乐','时尚','+'],
                url:"./images/logo.png",
                alt:'百度一下',
                mylists:[
                    {name:'关注',src:'./images/page1.png'},
                    {name:'新闻',src:'./images/page2.png'},
                    {name:'小说',src:'./images/page3.png'},
                    {name:'视频',src:'./images/page4.png'},
                    {name:'糯米',src:'./images/page5.png'},
                    {name:'地图',src:'./images/page6.png'}
                ]
            }
        }
    }
</script>


<style scoped>
    header{
        padding-left:20px;
        padding-right:20px;
    }
    header ul::after{
        display: table;
        content: '';
        clear: both;
    }
    header li{
        list-style: none;
        float:left;
    }
    header nav a{
        display: inline-block;
        padding: 15px 17px;
        text-decoration: none;
        color: #848484;
        font-size: 20px;
        border-bottom:solid 1px #f0f0f0;
    }
    header nav a:hover{
        color: #3388ff;
        border-bottom:solid 2px #3388ff;
    }
    header nav li:nth-of-type(1) a{
        color: #3388ff;
        border-bottom:solid 2px #3388ff;
    }
    header nav li:nth-of-type(6) a{
        padding:8px 0 8px 15px;
        font-size:30px;
    }
    header nav li:nth-of-type(6) a:hover{
        color: #848484;
        border-bottom:solid 1px #f0f0f0;
    }
    .logo{
        text-align: center;
        padding: 5px 0 20px 0;
    }
    .search{
        position: relative;
    }
    .search input{
        width: 310px;
        height:58px;
        background: #fff;
        padding: 15px;
    }
    .search a{
        color:#fff;
        background: #3388ff;
        font-size: 18px;
        float: right;
        padding: 17px 14px;
        text-decoration: none;
    }
    .page{
        padding-top: 25px;
        padding-bottom:10px;
    }
    .page ul{
        padding-bottom: 15px;
    }
    .page li{
        padding-left:18px;
        padding-right:18px;
    }
    .page img{
        padding-bottom: 8px;
    }
    .page a{
        text-decoration: none;
        color: #999999;
        font-size:16px;
    }
    .page li:nth-of-type(6) img{
        padding-bottom:5px;
    }
    .qiu{
        text-align: center;
    }
    .qiu span{
        width:5px;
        height:5px;
        background: #e0e0e0;
        border-radius: 50%;
        display: inline-block;
        margin-right: 5px;
    }
    .qiu span:nth-of-type(1){
        background: #999999;
    }
</style>