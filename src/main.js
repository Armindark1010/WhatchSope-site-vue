
import { createApp,onMounted } from 'vue' 
import { Datepicker, Input, initTE } from "tw-elements";
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'jquery/src/jquery.js'
import './assets/tailwind.css'
import $ from "jquery";

onMounted(() => {
    initTE({ Datepicker, Input });
  });
  
createApp(App).use(store).use(router).use($).mount('#app')
