<template>
    <div class="text-white" > 
        <div class="text-left mx-16"> <router-link class="text-left" :to="{name:'try_rolex_step1'}" ><img src="../imgs/icons/Back.png" alt=""></router-link></div>
       <div class="md:flex">
        <div class="md:w-1/3 ">
            <div>REQUEST VIRTUAL</div>
            <div class="flex justify-center my-16"><router-link to="/"><img src="../imgs/icons/Logo.png" alt=""></router-link></div>
            <div class="flex justify-center my-16"><img src="../imgs/try on rolex/qr2.png" alt=""></div>
            <div class="mt-16">
                <router-link :to="{name:'try_rolex_step3'}" >
                            <button class="w-1/2 border rounded-full py-2 mt-5 hover:text-black hover:bg-slate-300">QR Code Scan</button>
                </router-link>
            </div>
            <div class="mt-16 flex justify-center">
                <router-link to="/">
                <img src="../imgs/icons/home.png" alt="">
                </router-link>
            </div>
        </div>
        <div class="md:w-2/3 mt-12 md:mt-0">
            <div class="text-3xl md:text-left">TRY ON ROLEX</div>
            <div class="flex mt-16 md:mx-12"><div class="w-3 h-6 mr-5 bg-white"></div>
                    <div>SUBMARINER 41MM</div>
            </div>
            <div class="mt-10 text-left md:w-2/3 md:mx-12 md:text-2xl text-xs">
                        "Experience Rolex's innovative AR customization feature, allowing you to personalize your dream watch virtually. Select from a range of dials, materials, and designs, all from the comfort of your device. Embrace the future of luxury watch customization with Rolex AR."
            </div>
            <div class="md:flex mt-12 md:mx-16">
                <div class="md:w-1/3 flex justify-center">
                    <div>
<img v-if="watch == 1" src="../imgs/COMPARE-YOUR-ROLEX/center-image-1.png" alt="">
<img v-if="watch == 2" src="../imgs/COMPARE-YOUR-ROLEX/center-image-2.png" alt="">
<img v-if="watch == 3" src="../imgs/COMPARE-YOUR-ROLEX/center-image-3.png" alt="">
<img v-if="watch == 4" src="../imgs/COMPARE-YOUR-ROLEX/center-image-4.png" alt="">
<img v-if="watch == 5" src="../imgs/COMPARE-YOUR-ROLEX/center-image-5.png" alt="">
                    </div>
                </div>
                <div class="md:w-1/3 flex flex-col items-center">
                    <div class="h-1/2 mb-12"><img src="../imgs/try on rolex/watch-img.png" alt=""></div>
                    <div class="h-1/2"><img src="../imgs/try on rolex/cover.png" alt=""></div>
                </div>
                <div class="md:w-1/3 md:mt-0 mt-5 md:text-left">
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