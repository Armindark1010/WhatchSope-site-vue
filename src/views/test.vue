<template>
    <div id="body-gym" class="text-white text-left mx-12" style="height: 100vh;">
        <div id="box1-gym" class=" mb-3 justify-center items-center text-5xl text-black bg-slate-200 rounded-md opacity-0 hidden" style="">
            Striking the <br> Perfect Balance
        </div>
        <div class="flex overflow-hidden text-black" id="box2-gym"  style="height: 0%;">
            <div id="box-2-item-1" class=""  style="width: 0;">
                <div id="box-2-item-1-item-1" class="text-5xl bg-slate-200 rounded-md p-12 flex justify-end flex-col" style="height: 100%;">
                    <div class="mb-3">
                        <button class="bg-green-300 rounded-full px-2 text-base">Lorem ipsum dolor sit amet.</button>
                    </div>
                    <div>
                        <div>
                        Harmony in Motion 
                    </div>
                    <div class="flex w-full">
                        <div class="mr-2 ">Elevating</div>
                        <div class="w-1/3 h-6 text-base" style="font-size: 5px;">
                            <div class="h-2">Lorem ipsum dolor sit</div>
                            <div class="h-2">amet consectetur adipisicing</div>
                            <div class="h-2">elit. Vitae ipsum ullam</div>
                        </div>

                    </div>
                    <div>
                             Your Well-being
                    </div>
                    </div>
                    
                </div>
                <div id="box-2-item-1-item-2" class="flex items-center text-white" style="height: 0;">
                    Weliness Programs
                </div>
            </div>
            <div id="box-2-item-2" class=""  style="width: 100%; height: 100%;">
                <div id="box-2-item-2-item-1" class="flex justify-end flex-col bg-slate-200 rounded-md" style="height: 0;">
                    <div class="text-5xl w-2/3 mb-1">We empower individuals</div>
                    <div class="text-slate-400">Lorem ipsum dolor sit amet.</div>
                </div>
                <div id="box-2-item-2-item-2" class=" rounded-md" style="height: 100%;">
                    <img class="w-full h-full" src="../imgs/Rectangle-4.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import gsap from 'gsap';
export default{
    mounted(){
        let tl = gsap.timeline({delay:2,paused:true})
        tl.to("#box2-gym",{height:"100%",direction:2,})
        tl.to("#box-2-item-1",{width:"66.6%",delay:1,marginRight:8})
        tl.to("#box-2-item-2",{width:"33.3%",direction:1})
        tl.to("#box-2-item-2-item-1",{height:"50%",marginBottom:8,padding:48})
        tl.add(() => {
        gsap.to("#box-2-item-1-item-2", {height:"50%",marginBottom:8});
        gsap.to("#box-2-item-1-item-1", {height:"50%"});
    }, "<");
    tl.to("#box2-gym",{height:"100vh",direction:2,})
    tl.to("#box1-gym",{height:"100vh",direction:2,opacity:1,display:"flex"})

        tl.duration(10);
        tl.play()
    }
}
</script>