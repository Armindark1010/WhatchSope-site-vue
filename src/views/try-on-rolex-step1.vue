<template>
    <div class="text-white" > 
        <div class="text-left mx-16"> <router-link class="text-left" :to="{name:'COMPARE-YOUR-ROLEX-STEP-2'}" ><img src="../imgs/icons/Back.png" alt=""></router-link></div>
       
        <div class="text-3xl">TRY ON ROLEX</div>
        <div class="md:mx-16 mt-16">
            <div class="md:flex">
                <div class="md:w-1/3 flex items-center md:mx-12 mx-2">
                    <img class="w-full" src="../imgs/try on rolex/img1.png" alt="">
                </div>
                <div class="w-2/3 md:mt-0 mt-6 md:text-base text-xs">
                    <div class="flex"><div class="w-3 h-6 mr-5 bg-white"></div>
                    <div>SUBMARINER 41MM</div></div>
                    <div class="mt-10 text-left md:w-2/3">
                        "Experience Rolex's innovative AR customization feature, allowing you to personalize your dream watch virtually. Select from a range of dials, materials, and designs, all from the comfort of your device. Embrace the future of luxury watch customization with Rolex AR."
                    </div>
                </div>
            </div>
            <div class="md:flex mt-5">
                <div class="md:w-1/3 md:mx-12">
                    <img class="w-full" src="../imgs/try on rolex/img2.png" alt="">
                </div>
                <div class="md:w-2/3 md:flex">
                    <div class="mt-12 flex justify-center" >
                        <div class="text-white">

<img v-if="watch == 1" src="../imgs/COMPARE-YOUR-ROLEX/center-image-1.png" alt="">
<img v-if="watch == 2" src="../imgs/COMPARE-YOUR-ROLEX/center-image-2.png" alt="">
<img v-if="watch == 3" src="../imgs/COMPARE-YOUR-ROLEX/center-image-3.png" alt="">
<img v-if="watch == 4" src="../imgs/COMPARE-YOUR-ROLEX/center-image-4.png" alt="">
<img v-if="watch == 5" src="../imgs/COMPARE-YOUR-ROLEX/center-image-5.png" alt="">
                    </div>
                    </div>
                    <div class="md:w-1/3 md:text-left ml-5">
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
                    <div class="md:w-1/3 mt-5 md:mt-0 flex flex-col justify-end">
                        <div class="flex justify-center">
                            <img  src="../imgs/try on rolex/qrcode-step-1.png" alt="">
                        </div>
                        <div>
                            <router-link :to="{name:'try_rolex_step2'}" >
                            <button class="w-full border rounded-full py-2 mt-5 hover:text-black hover:bg-slate-300">Curate Your Exclusive Rolex</button>
                            </router-link>
                            
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