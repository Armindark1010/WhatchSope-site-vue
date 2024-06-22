<template>
    <div  style="height: 90vh;">
        <div class="flex md:h-auto h-screen md:px-12 md:text-left text-white text-center">
          <div class="md:flex w-full">
            <div class="md:w-1/2">
                <div class="text-3xl">SUBMARINER</div>
            <div class="text-slate-500">41mm , Oystersteel ,<span id="watch-color" class="relative">
                <span class="absolute opacity-0 inset-0" :class="{'cwatch':index == 0}" :id="`watch-color-${watch.id}`" v-for="(watch,index) in watches">{{ watch.color }}</span>
            </span></div>
            <div class="px-12 relative">
                <img class="w-full opacity-0" src="../imgs/COMPARE-YOUR-ROLEX/configor-watch-1.png" alt="">
                <img :id="`md-img-${watch.id}`" :class="{'md_img':index ==0}" v-for="(watch,index) in watches" class="w-full opacity-0 absolute inset-0 duration-1000 h-full"  :src="require(`../imgs/COMPARE-YOUR-ROLEX/${watch.md_img}`)" alt="">
                </div>
            </div>
            <div class="md:w-1/2 md:h-auto h-1/2">
                <div class="text-3xl">PERSONALISE YOUR TIMEPIECE</div>
                <div class="flex justify-center relative mt-12 h-full">
                    <div id="cover" class="mt-5 h-2/3 w-2/3 relative rounded-t-full border-dashed border-2 flex justify-center items-center">
                        <img :id="`sm-img-${watch.id}`" v-for="(watch,index) in watches" :class="{'sm_img':index == 0}" class="duration-1000  absolute opacity-0 z-20 h-1/2 top-1/2 left-1/2" style="transform: translate(-50%, -50%);" :src="require(`../imgs/COMPARE-YOUR-ROLEX/${watch.sm_img}`)" alt="">
        
                        <div :id="`cover-watch-${watch.id}`" v-for="(watch,index) in watches" class="absolute" :class="{'cover_active':index == 0,'right_next':index == 1,'dright_next':index == 2,'previous':index == 3,'dprevious':index==4,'hidden':index == 5}" style="transition: all 3s;">
                            <img  class="h-full w-full" :src="require(`../imgs/COMPARE-YOUR-ROLEX/${watch.cover_img}`)" alt="">
                        </div>
                    <div class="absolute -left-10 -right-10 h-2/3 bg-black top-1/2 flex justify-between items-center px-6">
                        <img id="next-cover-left" class="w-6 h-6 cursor-pointer " src="../imgs/icons/next-cover.png" alt="">
                        <img id="next-cover-right" class="w-6 h-6 cursor-pointer" src="../imgs/icons/next-cover.png" alt="">
                    </div>
                    </div>
                    
                    
            </div>
            </div>
        </div>
        
        </div>
         <div class="flex gap-6 px-6 text-white mt-10">
            <button class="border rounded-full w-1/2 py-5"  @click="addto">
                    add to card
            </button>
            <button class="border rounded-full w-1/2 py-5 cursor-pointer" @click="tryon">
                
                Try on Rolex
                
            </button>
        </div> 
    
    </div>
</template>
<script>
import Box2 from '@/components/COMPARE-YOUR-ROLEX-STEP-2/box2.vue'
import gsap from 'gsap'
export default{
    components:{
        Box2
    },
    data() {
        return {
            watches: [
                { id: '1', color: 'blakc', md_img: 'configor-watch-1.png', sm_img: 'center-image-1.png', cover_img: 'center-cover-1.png' },
                { id: '2', color: 'green', md_img: 'configor-watch-2.png', sm_img: 'center-image-2.png', cover_img: 'center-cover-2.png' },
                { id: '3', color: 'red', md_img: 'configor-watch-3.png', sm_img: 'center-image-3.png', cover_img: 'center-cover-3.png' },
                { id: '4', color: 'blue', md_img: 'configor-watch-4.png', sm_img: 'center-image-4.png', cover_img: 'center-cover-4.png' },
                { id: '5', color: 'yellow', md_img: 'configor-watch-5.png', sm_img: 'center-image-5.png', cover_img: 'center-cover-5.png' },
            ],
            click: true
        };
    },
    mounted() {
        this.next_left_right();
    },
    methods: {
        next_left_right() {
            jQuery(`<div id="" class="absolute hright2 boxright" style="transition: all 2s;"></div>`, {}).appendTo('#cover');
            jQuery(`<div id="" class="absolute hleft boxleft" style="transition: all 2s;"></div>`, {}).appendTo('#cover');
            let click = true;
            $("#next-cover-left").click(function () {
                if (click == true) {
                    click = false;
                    $("#next-cover-left").addClass("cursor-no-drop");
                    $("#next-cover-left").removeClass("cursor-pointer");
                    $("#next-cover-right").addClass("cursor-no-drop");
                    $("#next-cover-right").removeClass("cursor-pointer");
                    $(".dprevious").addClass("hleft2");
                    $(".dprevious").removeClass("dprevious");
                    $(".previous").addClass("dprevious");
                    $(".previous").removeClass("previous");
                    $(".cover_active").addClass("previous");
                    $(".cover_active").removeClass("cover_active");
                    $(".right_next").addClass("cover_active");
                    $(".right_next").removeClass("right_next");
                    $(".dright_next").addClass("right_next");
                    $(".dright_next").removeClass("dright_next");
                    $(".hright2").addClass("dright_next");
                    $(".hright2").removeClass("hright2");
                    let cover_active = $(".cover_active").attr("id");
                    cover_active = cover_active.split("-").slice(-1).join("-");
                    $(".sm_img").removeClass("sm_img");
                    $(`#sm-img-${cover_active}`).addClass("sm_img");
                    $(".md_img").removeClass("md_img");
                    $(`#md-img-${cover_active}`).addClass("md_img");
                    $(".cwatch").removeClass("cwatch");
                    $(`#watch-color-${cover_active}`).addClass("cwatch");
                    let hleft = $(".hleft2").attr("id");
                    let hleft_img = $(".hleft2").find("img").attr("src");
                    jQuery(`<img  class="h-full w-full" src="${hleft_img}" alt="">`, {}).appendTo('.boxright');
                    $('.boxright').attr("id", hleft);
                    $('.boxright').removeClass("boxright");
                    jQuery(`<div id="" class="absolute hright2 boxright" style="transition: all 2s;"></div>`, {}).appendTo('#cover');
                    setTimeout(function () {
                        $(".hleft2").remove();
                        $("#next-cover-left").addClass("cursor-pointer");
                        $("#next-cover-left").removeClass("cursor-no-drop");
                        $("#next-cover-right").addClass("cursor-pointer");
                        $("#next-cover-right").removeClass("cursor-no-drop");
                        click = true;
                    }, 1500);
                }
                else {
                }
            });
            $("#next-cover-right").click(function () {
                if (click == true) {
                    click = false;
                    $("#next-cover-left").addClass("cursor-no-drop");
                    $("#next-cover-left").removeClass("cursor-pointer");
                    $("#next-cover-right").addClass("cursor-no-drop");
                    $("#next-cover-right").removeClass("cursor-pointer");
                    $(".dright_next").addClass("hright");
                    $(".dright_next").removeClass("dright_next");
                    $(".right_next").addClass("dright_next");
                    $(".right_next").removeClass("right_next");
                    $(".cover_active").addClass("right_next");
                    $(".cover_active").removeClass("cover_active");
                    $(".previous").addClass("cover_active");
                    $(".previous").removeClass("previous");
                    $(".dprevious").addClass("previous");
                    $(".dprevious").removeClass("dprevious");
                    $(".hleft").addClass("dprevious");
                    $(".hleft").removeClass("hleft");
                    let cover_active = $(".cover_active").attr("id");
                    cover_active = cover_active.split("-").slice(-1).join("-");
                    $(".sm_img").removeClass("sm_img");
                    $(`#sm-img-${cover_active}`).addClass("sm_img");
                    $(".md_img").removeClass("md_img");
                    $(`#md-img-${cover_active}`).addClass("md_img");
                    $(".cwatch").removeClass("cwatch");
                    $(`#watch-color-${cover_active}`).addClass("cwatch");
                    let hright = $(".hright").attr("id");
                    let hright_img = $(".hright").find("img").attr("src");
                    jQuery(`<img  class="h-full w-full" src="${hright_img}" alt="">`, {}).appendTo('.boxleft');
                    $('.boxleft').attr("id", hright);
                    $('.boxleft').removeClass("boxleft");
                    jQuery(`<div id="" class="absolute hleft boxleft" style="transition: all 2s;"></div>`, {}).appendTo('#cover');
                    setTimeout(function () {
                        $(".hright").remove();
                        $("#next-cover-left").addClass("cursor-pointer");
                        $("#next-cover-left").removeClass("cursor-no-drop");
                        $("#next-cover-right").addClass("cursor-pointer");
                        $("#next-cover-right").removeClass("cursor-no-drop");
                        click = true;
                    }, 1500);
                }
                else {
                }
            });
        },
        addto(){
    let id_watch = $(".cover_active").attr("id")
    id_watch = id_watch.split("-").slice(-1).join("-");
    console.log(id_watch)
    sessionStorage.setItem("id_watch", id_watch);
    this.$router.push('/Add-to-Cart')
},
tryon(){
    let id_watch = $(".cover_active").attr("id")
    id_watch = id_watch.split("-").slice(-1).join("-");
    console.log(id_watch)
    sessionStorage.setItem("id_watch", id_watch);
    this.$router.push({name:'try_rolex'})
}
    },
    components: { Box2 }
}
</script>
<style>
.cwatch{
    opacity: 1 !important;
}
@media (min-width: 820px) {
    /* #cover{
    width:384px;
    height: 384px;
} */
    .cover_active{
    height: 80px;
    width: 80px;
    top: -40px;
    left: 50%;
    transform: translate(-50%, -0%);
    transition: transform 3s;
}
.right_next{
    height: 56px;
    width: 56px;
    top: 0%;
    right: 20%;
}
.dright_next{
    height: 56px;
    width: 56px;
    top: 30%;
    right: 0px;
}
.previous{
    height: 56px;
    width: 56px;
    top: 0%;
    left: 20%;
}
.dprevious{
    height: 56px;
    width: 56px;
    top: 30%;
    left: 0px;
}
.hright{
    height: 56px;
    width: 56px;
    top: 50%;
    right: -28px;
    opacity: 0;
}
.hleft{
    height: 56px;
    width: 56px;
    top: 50%;
    left: -28px;
    opacity: 0;
}
.hright2{
    height: 56px;
    width: 56px;
    top: 50%;
    right: -28px;
    opacity: 0;
}
.hleft2{
    height: 56px;
    width: 56px;
    top: 50%;
    left: -28px;
    opacity: 0;
}
}
.sm_img{
    opacity: 1 !important;
}
.md_img{
    opacity: 1 !important;
}
@media (max-width: 819px) {
    /* #cover{
    width:350px;
    height: 350px;
} */
    .cover_active{
    height: 60px;
    width: 60px;
    top: -30px;
    left: 50%;
    transform: translate(-50%, -0%);
}
.right_next{
    height: 40px;
    width: 40px;
    top: 10px;
    right: 40px;
}
.dright_next{
    height: 40px;
    width: 40px;
    top: 30%;
    right: -20px;
}
.previous{
    height: 40px;
    width: 40px;
    top: 10px;
    left: 40px;
}
.dprevious{
    height: 40px;
    width: 40px;
    top: 30%;
    left: -20px;
}
.hright{
    height: 40px;
    width: 40px;
    top: 50%;
    right: -20px;
    opacity: 0;
}
.hleft{
    height: 40px;
    width: 40px;
    top: 50%;
    left: -20px;
    opacity: 0;

}
.hright2{
    height: 40px;
    width: 40px;
    top: 50%;
    right: -20px;
    opacity: 0;

}
.hleft2{
    height: 40px;
    width: 40px;
    top: 50%;
    left: -20px;
    opacity: 0;

}
}
</style>