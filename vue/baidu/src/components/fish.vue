<template>
    <div class="fish">
        <div class="shi">
            <a href="">{{text}}</a>
            <span>{{mess}}</span>
            <span>{{ages}}</span>
        </div>

    </div>
</template>


<script>
    export default{
        data(){
            return{
                text:'习近平用这五句话介绍中国“新时代”',
                mess:'央视网 11-19',
                ages:'置顶'
            }
        }
    }
</script>


<style scoped>
    .shi{
        padding-bottom:16px;
        border-bottom: solid 1px #f0f0f0;
    }
    .shi a{
        padding-top:18px;
        padding-bottom:18px;
        font-size: 22px;
        color: #333333;
        font-weight: 500;
        display: block;
        text-decoration: none;
    }
    .shi span:nth-of-type(1){
        font-size: 15px;
        color: #999999;
    }
    .shi span:nth-of-type(2){
        color: #f45c40;
        font-size: 14px;
        display: inline-block;
        font-weight:bolder;
        border:solid 1px #efb9b9;
        padding: 0px 3px;
    }
    a:hover{
        color: #f00;
    }
</style>


























