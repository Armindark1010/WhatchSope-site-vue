<template>
    <div class="mt-12 md:mx-12 mx-0 text-white">
        <div class="text-5xl">Our Bestsellers</div>
        <div class="mt-12 text-left md:mx-16 mx-0 relative">
            <div :id="`our-watch-box-${index+1}`" class="hidden duration-1000" :style="`color:${watch.color};`" :class="{'actin-our-watch':index == 0}" v-for="(watch,index) in watches">
                <div class="text-4xl" :id="`our-watch-name-${index+1}`">{{ watch.name }}</div>
                <div class="mt-10 md:flex justify-between items-center p-12 rounded-3xl" :style="`background: linear-gradient(to left,${watch.color},rgb(0, 0, 0));`">
                    <div class="md:w-1/2">{{ watch.decription }}</div>
                    <img :id="`mwatch-${index+1}`" :class="{'wactive':index == 0}" class="md:absolute md:h-full mt-6 md:mt-0 md:w-auto w-full right-0  top-0 bottom-0" :src="require(`../../imgs/home/box3/${watch.img}`)" alt="">
                </div>
            </div>
            <div class="flex justify-center mt-10 relative z-50">
                <div><img id="left-btn-our" class="w-8 h-8 cursor-pointer" src="../../imgs/icons/chevron-left.png" alt=""></div>
                <div><img id="right-btn-our" class="w-8 h-8 cursor-pointer" src="../../imgs/icons/chevron-right.png" alt=""></div>
            </div>
        </div>
    </div>
</template>
<script>
import gsap from 'gsap'
export default{
    data(){
        return{
            test:'test',
            watches:[
                {img:'watch-3.png',name:'AIR-KING',decription:'With its 40 mm case in Oystersteel, solid-link Oyster bracelet, and distinctive Black dial, the Air-King perpetuates the aeronautical heritage of the original Rolex Oyster.',color:'#AFAFAF'},
                {img:'watch-4.png',name:'GMT MAStER-2',decription:'This model features a black dial and a two-colour Cerachrom bezel insert in brown and black ceramic. Designed to show the time in two different time zones simultaneously',color:'#AA8A7B'},
                {img:'watch-5.png',name:'MILGAUSE',decription:'With its clean lines and evocative orange seconds hand,shaped like a lightning bolt to echo the original model, the Milgauss is recognizable at a glance.',color:'#3A6072'}
            ],
            
        }
    },mounted(){
        this.right_and_left()
    },methods:{
        right_and_left(){
            let watch = this.watches.length
        $('#right-btn-our').click(function(){
            let id = $(".actin-our-watch").attr("id")
            id = id.split("-").slice(-1).join("-")
            console.log(id)
            if(id < watch ){
                id ++
                console.log(id)
            }else{
                id = 1
            }
            $(".actin-our-watch").removeClass("actin-our-watch")
            $(`#our-watch-box-${id}`).addClass("actin-our-watch")
            gsap.from(`#our-watch-box-${id}`,{duration:1,opacity:0})
            // gsap.to(`#our-watch-box-${id}`,{duration:1,opacity:1,delay:1})
            console.log(id)
            console.log(watch)
        })
        $('#left-btn-our').click(function(){
            let id = $(".actin-our-watch").attr("id")
            id = id.split("-").slice(-1).join("-")
            console.log(id)
            if(id > 1 ){
                id --
                console.log(id)
            }else{
                id = watch
            }
            $(".actin-our-watch").removeClass("actin-our-watch")
            $(`#our-watch-box-${id}`).addClass("actin-our-watch")
            console.log(id)
            console.log(watch)
        })
        }
    }
}
</script>
<style scoped>
.actin-our-watch{
    display: block !important;
}
</style>