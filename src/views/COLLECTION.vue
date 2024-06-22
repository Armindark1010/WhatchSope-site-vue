<template>
  <div class="COLLECTION text-white bg-gif">
    <div class="flex flex-wrap">
      <div v-for="watch in watches" class="md:w-1/4 w-1/2 mt-4">
     <div>{{ watch.fname }}</div>
     <div class="my-2">{{ watch.lname }}</div>
     <div class="flex justify-center items-center">
    <img class="w-1/2 h-1/2 watch-shadow" :src="require(`../imgs/COLLECTION/${watch.img}`)" alt="">
     </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return{
      watches:[
        {fname:'DATEJUST',lname:'DAY-DATE 36',img:'watch-1.png'},
        {fname:'SUBMARINER',lname:'GMT-MASTER llI',img:'watch-2.png'},
        {fname:'DAYTONA',lname:'GMT-MASTER II',img:'watch-3.png'},
        {fname:'SUBMARINER',lname:'Yatch-Master42',img:'watch-4.png'},
        {fname:'GMT-MASTER II',lname:'GMT-PEPSI',img:'watch-5.png'},
        {fname:'SUBMARINER',lname:'GMT-MASTER II',img:'watch-6.png'},
        {fname:'DATEJUST',lname:'Yatch-Master42',img:'watch-7.png'},
        {fname:'DATEJUST',lname:'DAY-DATE 36',img:'watch-8.png'},
      ]
    }
  }
}
</script>
<style>
.bg-gif{
  background: linear-gradient(
    to right,rgba(0, 0, 0, 0.708),
    rgba(33, 26, 26, 0.661)),
    url(../imgs/9f56d16a621f6555616e19f070b76283.gif);
    background-size: cover;
}
.watch-shadow{
  filter: drop-shadow(15px 8px 10px rgb(88, 88, 88));
}
</style>