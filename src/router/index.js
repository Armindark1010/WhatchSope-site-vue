import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import COLLECTION from '../views/COLLECTION.vue'
import CONFIGURE_YOUR_ROLEX from '../views/CONFIGURE-YOUR-ROLEX'
import COMPARE_YOUR_ROLEX_STEP_1 from '../views/COMPARE-YOUR-ROLEX-STEP-1.vue'
import COMPARE_YOUR_ROLEX_STEP_2 from '../views/COMPARE-YOUR-ROLEX-STEP-2.vue'
import try_rolex from '../views/try-on-rolex.vue'
import try_rolex_step1 from '../views/try-on-rolex-step1.vue'
import try_rolex_step2 from '../views/try-on-rolex-step2.vue'
import try_rolex_step3 from '../views/try-on-rolex-step3.vue'
import Add_to_Cart from '../views/Add-to-Cart.vue'
import test from '../views/test.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/COLLECTION',
    name: 'COLLECTION',
    component: COLLECTION
  },
  {
    path: '/Add-to-Cart',
    name: 'Add_to_Cart',
    component: Add_to_Cart
  },
  {
    path: '/CONFIGURE-YOUR-ROLEX',
    name: 'CONFIGURE_YOUR_ROLEX',
    component: CONFIGURE_YOUR_ROLEX,
    redirect: { name: 'COMPARE-YOUR-ROLEX-STEP-1' }, // اضافه کردن redirect
    children: [
        {
            path: '/CONFIGURE-YOUR-ROLEX',
            name: 'COMPARE-YOUR-ROLEX-STEP-1',
            component: COMPARE_YOUR_ROLEX_STEP_1
        },
        {
            path: '/CONFIGURE-YOUR-ROLEX/STEP-2',
            name: 'COMPARE-YOUR-ROLEX-STEP-2',
            component: COMPARE_YOUR_ROLEX_STEP_2
        },
        {
            path: '/CONFIGURE-YOUR-ROLEX/try_rolex',
            name: 'try_rolex',
            component: try_rolex,
            redirect: { name: 'try_rolex_step1' }, // اضافه کردن redirect
            children: [
              {
                path: '/CONFIGURE-YOUR-ROLEX/try_rolex',
                name: 'try_rolex_step1',
                component: try_rolex_step1
              },
              {
                path: '/CONFIGURE-YOUR-ROLEX/try_rolex',
                name: 'try_rolex_step2',
                component: try_rolex_step2
              },
              {
                path: '/CONFIGURE-YOUR-ROLEX/try_rolex',
                name: 'try_rolex_step3',
                component: try_rolex_step3
              },
            ]
        },
    ]
}

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
