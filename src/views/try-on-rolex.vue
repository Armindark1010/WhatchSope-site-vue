<template>
        <router-view></router-view>
</template>
<script>
// export default{
//     data() {
//         return {
//             watches: [
//                 {url:'center-image-1.png'},
//                 {url:'center-image-2.png'},
//                 {url:'center-image-3.png'},
//                 {url:'center-image-4.png'},
//                 {url:'center-image-5.png'},
//             ],
//             watch : null
//         };
//     },
//     mounted(){
//         this.getCookie("configure-watch")
//     },methods:{
//         getCookie(cname){
//         let data = ''
//   let name = cname + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(';');
//   for(let i = 0; i < ca.length; i++) {
//       let c = ca[i];
//     while (c.charAt(0) == ' ') {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//         data = c.substring(name.length, c.length)
//         this.watch = data
//         console.log(this.watch)
//     }
//   }
//   return "";
// }
//     }
// }
</script>