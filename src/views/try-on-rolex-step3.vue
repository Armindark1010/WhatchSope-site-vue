<template>
    <div class="text-white" > 
        <div class="text-left mx-16"> <router-link class="text-left" :to="{name:'try_rolex_step2'}" ><img src="../imgs/icons/Back.png" alt=""></router-link></div>
       <div class="md:flex">
        <div class="md:w-1/3">
            <div class="text-center">VIRTUAL TRY ON</div>
            <div class="mx-16 flex justify-center items-center mt-12">
                <img class="w-2/3" src="../imgs/try on rolex/gifp.png" alt="">
            </div>
        </div>
        <div class="md:w-2/3 mt-5 md:mt-0">
            <div class="text-3xl md:text-left">TRY ON ROLEX</div>
            <div class="flex mt-16 md:mx-12"><div class="w-3 h-6 mr-5 bg-white"></div>
                    <div>SUBMARINER 41MM</div>
            </div>
            <div class="mt-10 text-left md:w-2/3 md:mx-12 text-xs md:text-2xl">
                        "Experience Rolex's innovative AR customization feature, allowing you to personalize your dream watch virtually. Select from a range of dials, materials, and designs, all from the comfort of your device. Embrace the future of luxury watch customization with Rolex AR."
            </div>
            <div class="md:flex mt-12 md:mx-16">
                <div class="md:w-1/2">
                    <div class="flex justify-center">
<img v-if="watch == 1" src="../imgs/COMPARE-YOUR-ROLEX/center-image-1.png" alt="">
<img v-if="watch == 2" src="../imgs/COMPARE-YOUR-ROLEX/center-image-2.png" alt="">
<img v-if="watch == 3" src="../imgs/COMPARE-YOUR-ROLEX/center-image-3.png" alt="">
<img v-if="watch == 4" src="../imgs/COMPARE-YOUR-ROLEX/center-image-4.png" alt="">
<img v-if="watch == 5" src="../imgs/COMPARE-YOUR-ROLEX/center-image-5.png" alt="">
                    </div>
                    <div class="mt-5">Rs 1, 690,000</div>
                </div>
                <div class="md:w-1/2 md:text-left">
                    <div class="mt-5">PERSONALIZE YOUR ROLEX </div>
                        <div class="mt-5">SUBMARINER 41MM </div>
                        <div class="mt-5">
                            <div>MODEL CASE</div>
                            <div>Oyster, 41 mm, Oystersteel</div>
                        </div>
                        <div class="mt-5">
                            <div>BRACELET</div>
                            <div>Oystering Silver </div>
                        </div>
                        <div class="mt-5">
                            <div>Bezel</div>
                            <div>Black , Stainless Steel</div>
                        </div>
                        <router-link :to="{name:'try_rolex_step3'}" >
                            <button class="w-1/2 border rounded-full py-2 mt-5 hover:text-black hover:bg-slate-300">Purchase  timepiece</button>
                        </router-link>
                </div>
            </div>
        </div>
       </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            watch:null
        }
    },
    mounted(){
         let personName = sessionStorage.getItem("id_watch");
         this.watch = personName
         console.log(personName)   
    }

}

</script>