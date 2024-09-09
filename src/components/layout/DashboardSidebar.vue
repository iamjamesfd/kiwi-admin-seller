<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { onMounted, ref } from 'vue'
import SidebarItem from '../common/SidebarItem.vue'
import { useRoute } from 'vue-router'
import Menu from 'primevue/menu'

import useAuthStore from '@/store/api/useAuthStore'

const route = useRoute()

const sidebarCollapsed = ref(true)

const dashboardSettingsChildrenPath = ['main-settings', 'profile-settings', 'security']

const is = (...routes: string[]) => {
  const args = Array.from(routes)
  return args.some((r) => r === route.name)
}

const logoutMenu = ref()
const authStore = useAuthStore()

const toggleLogoutMenu = (event: Event) => {
  if (logoutMenu.value) {
    console.log(logoutMenu)
    logoutMenu.value.toggle(event)
  }
}

// const showSidebar = ref(true)

// window.onresize = () => {
//   if (innerWidth > 583) {
//     showSidebar.value = true
//   } else {
//     showSidebar.value = false
//   }
// }

const isLargeScreen = ref(window.innerWidth > 768) // Initial screen size check

const handleResize = () => {
  isLargeScreen.value = window.innerWidth > 768
}

onMounted(handleResize) // Call on component mount and resize

// Responsive behavior based on isLargeScreen value
// (Adapt this to your component structure)
</script>

<template>
  <div>
    <div
      v-if="isLargeScreen"
      class="min-[768px]:w-[260px] min-[1024px]:w-[312px] h-[100svh] bg-[#26282D] relative duration-500"
      :class="{ '!w-[72px]': sidebarCollapsed }"
    >
      <div class="flex justify-end items-center px-8 py-6 mb-10 min-h-24 overflow-hidden relative">
        <Transition name="dissapear">
          <h1 class="text-[28px] text-white flex-1" v-if="!sidebarCollapsed">Mandarin</h1>
        </Transition>
        <button type="button" @click="sidebarCollapsed = !sidebarCollapsed">
          <img
            src="@/assets/layout-icons/sidebar-toggler.svg"
            alt=""
            class="w-6 h-6 duration-200 absolute right-6"
          />
        </button>
      </div>
      <div class="overflow-hidden">
        <SidebarItem
          name="Mahsulotlar"
          link-name="products"
          icon="lucide:box"
          :collapsed="sidebarCollapsed"
        />
        <SidebarItem
          name="Analitika"
          link-name="analytics"
          icon="flowbite:chart-line-up-outline"
          :collapsed="sidebarCollapsed"
        />
        <SidebarItem
          name="Sharhlar"
          link-name="comments"
          icon="ph:star"
          :collapsed="sidebarCollapsed"
        />
        <SidebarItem
          name="Obunachilar"
          link-name="followers"
          icon="mage:users"
          :collapsed="sidebarCollapsed"
        />
        <SidebarItem
          name="Sozlamalar"
          link-name="main-settings"
          icon="basil:settings-outline"
          :collapsed="sidebarCollapsed"
          :class="{ 'router-link-exact-active': is(...dashboardSettingsChildrenPath) }"
        />
      </div>
      <div
        class="w-full px-8 py-6 text-white flex items-center justify-end absolute bottom-0 min-h-28"
        :class="{ '!p-0 justify-center': sidebarCollapsed }"
      >
        <Transition name="dissapear">
          <div class="flex items-center gap-3 flex-1" v-if="!sidebarCollapsed">
            <div class="w-[50px] h-[50px] bg-gray-400 rounded-full"></div>
            <h1 class="text-lg">{{ authStore.user?.username }}</h1>
          </div>
        </Transition>
        <div>
          <button
            class="p-2.5 hover:bg-[#181B1F] rounded-full"
            aria-haspopup="true"
            aria-controls="overlay_menu"
            @click="toggleLogoutMenu"
          >
            <Icon icon="iconamoon:menu-kebab-vertical-bold" class="size-6 p-2 box-content"></Icon>
          </button>
          <Menu
            ref="logoutMenu"
            :model="[{ label: 'Logout', command: () => authStore.logout() }]"
            :popup="true"
          />
        </div>
      </div>
    </div>

    <div v-if="!isLargeScreen" class="w-full h-[72px] bg-[#26282D] fixed bottom-0 z-30">
      <div class="flex justify-between">
        <SidebarItem
          class="max-[768px]:flex-1 max-[768px]:border-b-[2px] max-[768px]:h-[72px] max-[768px]:!p-0"
          link-name="products"
          icon="lucide:box"
          :collapsed="sidebarCollapsed"
        />
        <SidebarItem
          class="max-[768px]:flex-1 max-[768px]:border-b-[2px] max-[768px]:h-[72px] max-[768px]:!p-0"
          link-name="analytics"
          icon="flowbite:chart-line-up-outline"
          :collapsed="sidebarCollapsed"
        />
        <SidebarItem
          class="max-[768px]:flex-1 max-[768px]:border-b-[2px] max-[768px]:h-[72px] max-[768px]:!p-0"
          link-name="comments"
          icon="ph:star"
          :collapsed="sidebarCollapsed"
        />
        <SidebarItem
          class="max-[768px]:flex-1 max-[768px]:border-b-[2px] max-[768px]:h-[72px] max-[768px]:!p-0"
          link-name="followers"
          icon="mage:users"
          :collapsed="sidebarCollapsed"
        />
        <SidebarItem
          class="max-[768px]:flex-1 max-[768px]:border-b-[2px] max-[768px]:h-[72px] max-[768px]:!p-0"
          link-name="main-settings"
          icon="basil:settings-outline"
          :collapsed="sidebarCollapsed"
          :class="{ 'router-link-exact-active': is(...dashboardSettingsChildrenPath) }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  @apply bg-[#1E1E23] border-white;
}

.dissapear-enter-active,
.dissapear-leave-active {
  transition: opacity 1s ease;
}

.dissapear-enter-from,
.dissapear-leave-to {
  opacity: 0;
  transition: 200ms;
}
.dropdown:hover ~ ul {
  @apply block;
}
</style>
