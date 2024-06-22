<template>
  <div class="flex text-left text-white h90" style="">
    <div class="w-1/2 pl-12">
      <div class="text-5xl my-8">Rolex</div>
      <div class="text-4xl">Time’s Elegance: Elevate </div>
      <div class="text-4xl mb-6">Your Every Moment</div>
      <div class="mb-10">Crafting moments, one ticking second at a time</div>
      <div>
        <router-link to=""></router-link>
        <btn text="Discover more" />
      </div>
    </div>
    <div class="w-1/2"><img class="h-full w-full" src="../../imgs/home/box2/wallpaper.png" alt=""></div>
  </div>
</template>
<script>
import btn from '../../components/btn.vue'
export default{
  components:{
    btn
  }
}
</script>
<style scoped>
@media (min-width: 768px) {
    .h90 {
        height: 90vh/* 32px */;
    }
}
</style>