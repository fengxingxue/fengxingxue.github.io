<template>
    <header>
        <div class="logo"><img :src="mylogo" alt="">{{message}}</div>
    </header>
</template>

<script>
    export default{
        data(){
            return{
                mylogo:'./images/alogo.png',
                message:'购物车'
            }
        }
    }
</script>

<style scoped>
    .logo{
        padding:27px 0 47px 0;
        font-size: 20px;
        color: #383838;
        font-weight:500;
    }
    .logo img{
        padding-right:16px;
    }

</style>