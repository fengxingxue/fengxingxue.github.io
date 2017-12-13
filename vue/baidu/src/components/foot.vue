<template>
    <footer>
        <h2><img :src="src" alt="">{{mess}}</h2>
        <p>{{myp}}</p>
        <p><img :src="url" alt="">{{myp1}}</p>
    </footer>
</template>


<script>
    export default{
        data(){
            return{
                src:'./images/footer.png',
                mess:'用户反馈',
                myp:'使用百度前必读 Baidu 京ICP证030173',
                url:'./images/footer1.png',
                myp1:'京公网安备11000002000001'
            }
        }
    }
</script>

<style scoped>

    footer{
        background: #f8f8f8;
        text-align: center;
        padding-bottom:10px;
    }
    footer h2{
        padding:25px 0;
        font-size: 16px;
        color: #666666;
    }
    footer img{
        position: relative;
        top:3px;
        right:5px;
    }
    footer p{
        font-size:14px;
        color: #999999;
        padding-bottom:14px;
    }
</style>
