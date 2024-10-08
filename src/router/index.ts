import {createRouter, createWebHistory} from 'vue-router'
import DashboardProducts from '../views/DashboardProducts.vue'
import CreateProduct from '@/views/inner_views/CreateProduct.vue'
import DashboardAnalytics from '@/views/DashboardAnalytics.vue'
import DashboardComments from '@/views/DashboardComments.vue'
import DashboardFollowers from '@/views/DashboardFollowers.vue'
import DashboardSettings from '@/views/DashboardSettings.vue'
import MainSettings from '@/views/inner_views/Settings/MainSettings.vue'
import ProfileSettings from '@/views/inner_views/Settings/ProfileSettings.vue'
import GeneralSecurity from '@/views/inner_views/Settings/GeneralSecurity.vue'
import DashboardUserProfile from '@/views/DashboardUserProfile.vue'
import LoginView from "@/views/onboarding/LoginView.vue";
import DashboardHomeBaseView from "../views/DashboardBaseView.vue"

import ChatGroupsView from "@/views/inner_views/ChatGroupsView.vue";
import ChatRoomView from "@/views/inner_views/ChatRoomView.vue";

import BoostProduct from '@/views/inner_views/BoostProduct.vue'
import {RouteRecordRaw} from 'vue-router'
import useAuthStore from '@/store/api/useAuthStore'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      allowUnauthorized: true,
    }
  },

  {
    path: '/',
    name: 'homeBase',
    component: DashboardHomeBaseView,
    children: [
      {
        path: '',
        name: 'products',
        component: DashboardProducts
      },
      {
        path: '/products/:id',
        name: 'boost-product',
        component: BoostProduct
      },
      {
        path: '/create-product',
        name: 'create-product',
        component: CreateProduct
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
            path: '',
            name: 'main-settings',
            component: MainSettings
          },
          {
            path: 'profile-settings',
            name: 'profile-settings',
            component: ProfileSettings
          },
          {
            path: 'security',
            name: 'security',
            component: GeneralSecurity
          }
        ]
      },
      {
        path: '/user-profile',
        name: 'user-profile',
        component: DashboardUserProfile
      },
      {
        name: "chats",
        path: "/chat",
        component: ChatGroupsView,
        children: [
          {
            name: "chatRoom",
            path: ":roomId",
            component: ChatRoomView,
          },
        ],
      },

    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.beforeEach(async (to, _, next) => {
  const authStore = useAuthStore();
  if (!to.meta.allowUnauthorized && !authStore.isAuthenticated)
    next({name: "login"});
  else if (to.name == "login" && authStore.isAuthenticated)
    next({name: "products"});
  else next();
});

export default router
