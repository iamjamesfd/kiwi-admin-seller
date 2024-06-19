import { createRouter, createWebHistory } from 'vue-router'
import DashboardProducts from '../views/DashboardProducts.vue'
import CreateProduct from '@/views/inner_views/CreateProduct.vue'
import DashboardAnalytics from '@/views/DashboardAnalytics.vue'
import DashboardComments from '@/views/DashboardComments.vue'
import DashboardFollowers from '@/views/DashboardFollowers.vue'
import DashboardSettings from '@/views/DashboardSettings.vue'
import MainSettings from '@/views/Settings/MainSettings.vue'
import ProfileSettings from '@/views/Settings/ProfileSettings.vue'
import GeneralSecurity from '@/views/Settings/GeneralSecurity.vue'
import DashboardUserProfile from '@/views/DashboardUserProfile.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'products',
      component: DashboardProducts
    },
    {
      path: '/create-product',
      name: 'create-product',
      component: CreateProduct,
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: DashboardAnalytics
    },
    {
      path: '/comments',
      name: 'comments',
      component: DashboardComments
    },
    {
      path: '/followers',
      name: 'followers',
      component: DashboardFollowers
    },
    {
      path: '/settings',
      name: 'settings',
      component: DashboardSettings,
      children: [
        {
          path: "",
          name: "main-settings",
          component: MainSettings
        },
        {
          path: "profile-settings",
          name: "profile-settings",
          component: ProfileSettings
        },
        {
          path: "security",
          name: "security",
          component: GeneralSecurity
        },
      ]
    },
    {
      path: '/user-profile',
      name: 'user-profile',
      component: DashboardUserProfile
    },
  ]
})

export default router
