<template>
    <div class="text-white">
        <div class="flex px-16 md:flex-row flex-col-reverse justify-center">
            <div class="md:w-2/5 text-left">
                <div class="text-3xl">Rolex</div>
                <div class="mt-5">
                    <span class="">Information</span>
                    <span class="mx-2">></span>
                    <span class="">Shipping</span>
                    <span class="mx-2">></span>
                    <span class="">Payment</span>
                </div>
                <div class="w-full p-5 border rounded-md relative mt-5 flex items-center">
                    <div class="absolute w-3/12 h-1 -top-0.5 left-1/4 bg-black"></div>
                    <button class="bg-white md:w-1/3 w-1/2 flex justify-center py-3 rounded-md mr-3"><img src="../imgs/icons/paypal.png" alt=""></button>
                    <button class="bg-white md:w-1/3 w-1/2 flex justify-center py-3 rounded-md"><img src="../imgs/icons/gpay.png" alt=""></button>
                </div>
                <div class="h-0.5 mt-5 bg-white w-full relative">
                    <div class="absolute h-8 w-8 flex justify-center bg-black left-1/2 -top-2" style="transform: translate(-50%, -0%);">Or</div>
                </div>
                <div class="flex justify-between mt-5">
                    <div>Contact information</div>
                    <div>Already have an account? Log in</div>
                </div>
                <form class="mt-5" action="">
                    <input type="text" placeholder="Email" class="bg-transparent border rounded-md w-full p-2" >
                    <div class="mt-2 flex">
                        <input type="checkbox" class="mr-2 p-3" name="" id="email-news">
                        <label for="email-news">Email me with news and offers</label>
                    </div>
                    <div class="my-5">Shipping address</div>
                    <input type="text" placeholder="Country/region" class="bg-transparent border rounded-md w-full p-2" >
                    <div class="flex gap-5 mt-2">
                        <input type="text" placeholder="First name (optional)" class="bg-transparent border rounded-md w-1/2 p-2" >
                        <input type="text" placeholder="Last name" class="bg-transparent border rounded-md w-1/2 p-2" >
                    </div>
                    <input type="text" placeholder="Company (optional)" class="bg-transparent mt-2 border rounded-md w-full p-2" >
                    <input type="text" placeholder="Address" class="bg-transparent border rounded-md w-full my-2 p-2" >
                    <input type="text" placeholder="Apartment, suite, etc. (optional)" class="bg-transparent border rounded-md w-full p-2" >
                    <div class="flex gap-5 mt-2">
                        <input type="text" placeholder="City" class="bg-transparent border rounded-md w-1/2 p-2" >
                        <input type="text" placeholder="Postal code" class="bg-transparent border rounded-md w-1/2 p-2" >
                    </div>
                    <input type="text" placeholder="Phone-Receive SMS support" class="bg-transparent mt-2 border rounded-md w-full p-2" >
                    <div class="mt-5 flex items-start">
                        <input type="checkbox" class="mr-2 p-3" name="" id="text-news">
                        <div>
                            <div><label for="text-news">Text me with news and offers.</label></div>
                            <div class="text-xs mt-5">
By signing up via text, you agree to receive recurring automated marketing messages, including cart reminders, at the phone number provided. Consent is not a condition of purchase. Reply STOP to unsubscribe. Reply HELP for help. Message frequency varies. 
Msg & data rates may apply. View our <span class="text-green-800">Privacy Policy</span> and <span class="text-green-800">Terms of Service</span>.
                    </div>
                        </div>
                            
                            
                    </div>
                    <div class="flex justify-center mt-5" >
                        <button class="text-3xl border p-3 rounded-full">
                           Continue  
                        </button>
                        
                    </div>
                    
                </form>
                <hr class="my-12">
                <div class="text-green-800 flex justify-center gap-4 mb-12">
                    <div>Refund policy</div>
                    <div>Shipping policy</div>
                    <div>Privacy policy</div>
                    <div>Terms of service</div>
                </div>
            </div>
            <div class="md:w-1/5 w-0"></div>
            <div class="md:w-2/5 mt-5">
                    <div class="flex justify-center">
                    <div>
<img v-if="watch == 1" src="../imgs/COMPARE-YOUR-ROLEX/center-image-1.png" alt="">
<img v-if="watch == 2" src="../imgs/COMPARE-YOUR-ROLEX/center-image-2.png" alt="">
<img v-if="watch == 3" src="../imgs/COMPARE-YOUR-ROLEX/center-image-3.png" alt="">
<img v-if="watch == 4" src="../imgs/COMPARE-YOUR-ROLEX/center-image-4.png" alt="">
<img v-if="watch == 5" src="../imgs/COMPARE-YOUR-ROLEX/center-image-5.png" alt="">
                    </div>
                </div>
                <div>
                    <div class="mt-5">
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
                <div class="mt-5">
                    <div class="flex justify-between mx-6">
                        <div>Subtotal</div>
                        <div>Rs 1, 690,000</div>
                    </div>
                    <div class="flex justify-between mx-6 my-2">
                        <div>Shipping</div>
                        <div>FREE</div>
                    </div>
                        <hr>
                    <div class="flex justify-between m-6">
                        <div class="text-3xl">Total</div>
                        <div class="text-3xl">Rs 1,690,000</div>
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