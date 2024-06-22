<template>
    
</template>
<script>
export default{
    mounted() {
        $(".markers").click(function(){
            $(".active").removeClass("active")
            $(this).addClass("active")
        })
    },
}
</script>
<style scoped>
.markers{
    opacity: 0.5;
}
.active{
    opacity: 1 !important;
}

</style>