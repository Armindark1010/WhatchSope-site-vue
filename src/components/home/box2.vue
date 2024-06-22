<template>
  <div class="bg-black mt-12 overflow-hidden relative" style="height: 90vh;">
    <div class="absolute right-0 bottom-0 overflow-hidden h-52 w-56">
      <img class="opacity-50 h-48 w-56 absolute -bottom-5 -right-8" style="transform: rotate(315deg);" src="../../imgs/icons/Logo-home.png" alt="">
    </div>
    <div class="absolute bottom-14 right-14">
      <img id="mouse" src="../../imgs/icons/mouse.png" alt="">
    </div>
<div class="md:flex h-full">
  <div class="md:h-full h-1/2 md:w-5/12 flex">
    <div class="flex flex-col items-center justify-center ml-5">
      <div class="my-1 flex items-center" v-for="(watch,index) in watches">
        <div>
          <img :id="`swatch-${index+1}`" class="swatch md:w-10 w-28 md:h-10 h-28 cursor-pointer" :class="{'active':index == 0}" :src="require(`../../imgs/home/watches/${watch.img}`)" alt="">
        </div>
        <div>
          <div :id="`pwatch-${index+1}`" :class="{'pactive':index == 0}" class="opacity-0 duration-500 bg-orange-300 rounded-full ml-3 md:w-2 w-4 md:h-2 h-4"></div>
        </div>
      </div>
    </div>
    <div class="watch w-full">
      <div class="h-5/6 relative w-full">
      <div v-for="(watch,index) in watches" >
        <img :id="`mwatch-${index+1}`" :class="{'wactive':index == 0}" class="opacity-0 duration-500 z-20 absolute inset-0 w-full h-full" :src="require(`../../imgs/home/watches/${watch.img}`)" alt="">
      </div>
      <div class="absolute -right-32 z-10 bottom-4 md:block hidden">
      <img  src="../../imgs/home/watches/Vector-1.png" alt="">
      <span class="text-white absolute -bottom-3 -right-10">crowin</span>
      </div>
      </div>
      <div class="h-1/6 flex justify-center items-center ">
        <div :id="`pmwatch-${index+1}`" :class="{'pwactive':index == 0}" v-for="(watch,index) in watches" class="cursor-pointer pmwatch duration-500 bg-white rounded-full ml-3 w-2 h-2">
        </div>
      </div>
    </div>
  </div>
  <div class="md:h-full md:w-2/12 flex md:flex-col items-center justify-center">
    <div class="bg-black md:pl-2 text-white rotate270 w-full md:w-auto" style="">
      <div :id="`wname-${index+1}`" class="hidden duration-500" :class="{'nwatch':index == 0}" v-for="(watch,index) in watches">
      {{ watch.name }}
      </div>
    </div>
    <div class="md:h-1/2 h-2 w-11/12 bg-orange-300 md:w-2"></div>
  </div>
  <div class="md:h-full h-1/2 md:w-5/12 text-left pr-4 text-white pt-10">
    <div class="text-5xl">New Watches 2024</div>
    <div class="text-4xl my-5 text-slate-500">The rolex collection</div>
    <div>Indulge in timeless elegance with our luxury watch collection, where every timepiece tells a story of impeccable craftsmanship and sophistication. Each watch is meticulously crafted by skilled artisans, marrying traditional artistry .</div>
    <div></div>
  </div>
</div>
  </div>
</template>
<script>
import gsap from 'gsap'
export default{
  data(){
    return{
      watches:[{img:'watch-3.png',name:'GMT-MASTER II'},{img:'watch-5.png',name:'Yacht-Master 42'},{img:'watch-1.png',name:'Day-date 36'}]
    }
  },
  mounted(){
    let tl = gsap.timeline({delay:1,yoyo: true,repeat: -1,})
    tl.to("#mouse", {y:-50,delay:1,duration:0.5});
    tl.to("#mouse", {y:0,delay:1,duration:0.5});
    tl.to("#mouse", {y:50,delay:1,duration:0.5});
    tl.play();
    this.chane('.swatch')
    this.chane('.pmwatch')
  },methods:{
    chane(method){
      $(method).click(function(){
      let id = $(this).attr("id")
      id = id.split("-").slice(-1).join("-")
      $(".active").removeClass("active")
      $(".pactive").removeClass("pactive")
      $(".wactive").removeClass("wactive")
      $(".pwactive").removeClass("pwactive")
      $(".nwatch").removeClass("nwatch")
      $(this).addClass("active")
      $(`#pwatch-${id}`).addClass("pactive")
      $(`#mwatch-${id}`).addClass("wactive")
      $(`#pmwatch-${id}`).addClass("pwactive")
      $(`#wname-${id}`).addClass("nwatch")
    })
    }
  }
}
</script>

<style scoped>
.pactive{
  opacity: 1 !important;
}
.wactive{
  opacity: 1 !important;

}
.nwatch{
  display: block !important;
}.pwactive{
  outline: 2px solid #fdba74;
  outline-offset: 2px;
  background-color: #fdba74;
}
@media (min-width: 768px) {
    .rotate270 {
        --tw-rotate: 270deg;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
}
</style>