<template>
    <div>
        <hed></hed>
        <div class="main">
            <fish></fish>
            <mytext></mytext>
        </div>
        <foot></foot>
    </div>
</template>


<script>
    import hed from './hed.vue'
    import fish from './fish.vue'
    import mytext from './mytext.vue'
    import foot from './foot.vue'
export default{
            components:{
                hed,
                fish,
                mytext,
                foot
            }
}

</script>


<style scoped>
    .main{
        padding-left:20px;
        padding-right:20px;
        background: #fff;
    }
    @media(max-width: 720px){
        .main{
            padding-left:15px;
            padding-right:15px;
        }
    }
</style>