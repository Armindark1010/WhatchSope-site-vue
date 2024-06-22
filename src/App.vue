<template>
  <navbar class="sticky top-0  left-0 right-0 z-50"/>
  <router-view/>
</template>
<script>
import navbar from './components/nav-bar.vue'
export default {
  components:{
    navbar
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
html{
    background-color: #000000;
}
.bg-blur{
  backdrop-filter: blur(30px);
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #fdba74;
}

nav a.router-link-exact-active {
  color: rgb(255, 255, 255);
  background-color: rgb(255, 255, 255)
}
@media (min-width: 768px) {
  nav a.router-link-exact-active {
        --tw-bg-opacity: 1;
        color: #fdba74;
        background-color: rgba(0, 149, 255, 0)
    }
}
.center{
  transform: translate(-50%, -50%);
}

.scroll-bar::-webkit-scrollbar {
  height: 6px;
  width: 12px;
  background-color: #999999;
}
.scroll-bar::-webkit-scrollbar-thumb {
  background: #005E37; 
  border-radius: 10px;
  width: 6px;
}
div::-webkit-scrollbar {
width: 12px;
}
.scroll-bar::-webkit-scrollbar-thumb:hover {
  background: #003d24; 
}
</style>
