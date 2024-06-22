<template>
    <div class="mt-24">
        <div class=" scroll-bar" style="width: 100%;overflow-x: scroll;height: 400px;scroll-snap-type: x mandatory;">
            <div :style="`width:${50 * boxes.length}% ;`" class="h-full gap-5 flex mx-5 pb-10">
                <figure v-for="box in boxes" class="relative h-full" style="width: 40%;aspect-ratio: 2/1;  scroll-snap-align: center;">
                    <img class="h-full w-full rounded-3xl" :src="require(`../../imgs/home/box4/${box.img}`)" alt="">
                    <figcaption class=" absolute inset-0 flex justify-center items-center text-white">
                        <div>
                          <div>{{box.name}}</div>
                        <div><button class="border rounded-full mt-2 hover:bg-green-900 duration-100 border-green-900 bg-transparent px-12 py-3">Discover</button></div>  
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            boxes:[
                {name:'Professional Watches',img:'img-1.png'},
                {name:'Classic Watches',img:'img-2.png'},
                {name:'Gold Watches',img:'img-3.png'},
                {name:'Men’s Watches',img:'img-4.png'},
                {name:'Women’s Watches',img:'img-5.png'}
            ]
        }
    }
}
</script>
<style>

</style>