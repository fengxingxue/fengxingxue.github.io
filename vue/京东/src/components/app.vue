<template>
    <div>
        <myheader></myheader>
        <mymain></mymain>
    </div>
</template>

<script>
    import myheader from './myheader.vue'
    import mymain from './mymain.vue'
    export default{
        components:{
            myheader,
            mymain
        }
    }
</script>

<style>
 *{
     padding:0;
     margin:0;
     box-sizing: border-box;
 }
</style>