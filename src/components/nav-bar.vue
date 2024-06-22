<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>
<template>
    <!-- <div class="text-orange-300 text-sm p-3 bg-blur">
        <nav class="w-full flex justify-between items-center bg-blak"  style="height: 10vh;">
            <div class="flex w-1/3 justify-between">
                <div><img src="../imgs/icons/menu.png" alt=""></div>
                <div><router-link to="/CONFIGURE-YOUR-ROLEX">CONFIGURE YOUR ROLEX</router-link></div>
                <div><router-link to="/COLLECTION">COLLECTION</router-link></div>
            </div>
            <div class="md:w-1/3 w-full flex items-center justify-center">
                <router-link to="/"><img src="../imgs/icons/Logo.png" alt=""></router-link>
            </div>
            <div class="w-1/3 md:flex hidden justify-between ji">
                <div>REQUEST VIRTUAL</div>
                <router-link to="/test">
                <div class="flex items-center rounded-full border p-1">
                    <label for="search"><img class="h-3 w-3 cursor-pointer" src="../imgs/icons/search.svg" alt=""></label>
                    <input id="search" class="h-3 bg-transparent outline-none border-r mx-1 my-1" type="text">
                    <div><img class="h-5 w-5" src="../imgs/icons/Ellipse 2.png" alt=""></div>
                </div>
                </router-link>
                
            </div>
        </nav>
    </div> -->

    



 



   

<nav class=" border-gray-200 bg-transparent">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div class="hidden w-full md:block md:w-auto">
      <ul class="font-medium md:flex hidden flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
        <li>
            <router-link to="/CONFIGURE-YOUR-ROLEX" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">CONFIGURE YOUR ROLEX</router-link>
        </li>
        <li>
            <router-link to="/COLLECTION" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500">COLLECTION</router-link>
        </li>

      </ul>
    </div>
    <router-link class="flex items-center space-x-3 rtl:space-x-reverse !bg-transparent" to="/"><img src="../imgs/icons/Logo.png" alt=""></router-link>


    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>

    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex bg-black flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
        <li class="md:hidden block">
            <router-link to="/CONFIGURE-YOUR-ROLEX" class="block py-2 px-3 text-white border border-gray-600 bg-transparent my-1 md:my-0 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">CONFIGURE YOUR ROLEX</router-link>
        </li>
        <li class="md:hidden block">
            <router-link to="/COLLECTION" class="block py-2 px-3 text-white border border-gray-600 bg-transparent my-1 md:my-0 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">COLLECTION</router-link>
        </li>
        <li>
            <router-link to="/#" class="block py-2 px-3 text-white md:border-none border border-gray-600 bg-transparent my-1 md:my-0 rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500">REQUEST VIRTUAL</router-link>
        </li>
        <li>
            <router-link to="/COLLECTION" class="block py-2 px-3 text-white bg-transparent my-1 md:my-0 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
                <div class="flex items-center rounded-full border p-1">
                    <label for="search"><img class="h-3 w-3 cursor-pointer" src="../imgs/icons/search.svg" alt=""></label>
                    <input id="search" class="h-3 bg-transparent outline-none border-none mx-1 my-1" type="text">
                    <div><img class="h-5 w-5" src="../imgs/icons/Ellipse 2.png" alt=""></div>
                </div>
            </router-link>
        </li>
      </ul>
    </div>

  </div>
</nav>


</template>