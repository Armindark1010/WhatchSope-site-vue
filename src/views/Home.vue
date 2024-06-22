<template>
  <div class="home">
    <box1/>
    <box2/>
    <box3/>
    <box4/>
    <box5/>
  </div>
</template>

<script>
import box1 from '@/components/home/box1'
import box2 from '@/components/home/box2'
import box3 from '@/components/home/box3'
import box4 from '@/components/home/box4'
import box5 from '@/components/home/box5'

export default {
  name: 'HomeView',
  components: {
    box1,
    box2,
    box3,
    box4,
    box5,
  }
}
</script>
