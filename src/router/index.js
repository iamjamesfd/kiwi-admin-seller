import { createRouter, createWebHistory } from 'vue-router'
import DashboardProducts from '../views/DashboardProducts.vue'
import DashboardAnalytics from '@/views/DashboardAnalytics.vue'
import DashboardComments from '@/views/DashboardComments.vue'
import DashboardFollowers from '@/views/DashboardFollowers.vue'
import DashboardSettings from '@/views/DashboardSettings.vue'
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
      component: DashboardSettings
    },
    {
      path: '/user-profile',
      name: 'user-profile',
      component: DashboardUserProfile
    }
  ]
})

export default router
