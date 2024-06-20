<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import SidebarItem from '../common/SidebarItem.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const sidebarCollapsed = ref(true)

const dashboardSettingsChildrenPath = ['main-settings', 'profile-settings', 'security']

const is = (...routes) => {
  const args = Array.from(routes)
  return args.some((r) => r === route.name)
}

const showSidebar = ref(true)

window.onresize = () => {
  if(innerWidth > 583) {
    showSidebar.value = true
  } else {
    showSidebar.value = false
  }
}



</script>

<template>
  <div>
    <div
      v-if="showSidebar"
      class="min-[583px]:w-[260px] min-[1024px]:w-[312px] h-[100svh] bg-[#26282D] relative duration-500 overflow-hidden"
      :class="{ '!w-[72px]': sidebarCollapsed }"
    >
      <div class="flex justify-end items-center px-8 py-6 mb-10 min-h-24 overflow-hidden relative">
        <Transition name="dissapear">
          <h1 class="text-[28px] text-white flex-1" v-if="!sidebarCollapsed">Mandarin</h1>
        </Transition>
        <img
          src="@/assets/layout-icons/sidebar-toggler.svg"
          alt=""
          class="w-[24px] h-[24px] duration-200 absolute right-6"
          @click="sidebarCollapsed = !sidebarCollapsed"
        />
      </div>
      <div>
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
        class="w-full px-8 py-6 text-white flex items-center justify-end absolute bottom-0 min-h-28 overflow-hidden"
      >
        <Transition name="dissapear">
          <div class="flex items-center gap-3 flex-1" v-if="!sidebarCollapsed">
            <div class="w-[50px] h-[50px] bg-gray-400 rounded-full"></div>
            <h1 class="text-lg">Rahmatulloh</h1>
          </div>
        </Transition>
        <Icon
          icon="iconamoon:menu-kebab-vertical-bold"
          class="w-[24px] h-[24px] absolute right-6"
        ></Icon>
      </div>
    </div>
    <div v-if="!showSidebar"  class="w-full h-[72px] bg-[#26282D] fixed bottom-0 z-30">
      <div class="flex justify-between">
        <SidebarItem
          class="max-[583px]:flex-1 max-[583px]:border-b max-[583px]:h-[72px] max-[583px]:!p-0"
          link-name="products"
          icon="lucide:box"
          :collapsed="sidebarCollapsed"
        />
        <SidebarItem
          class="max-[583px]:flex-1 max-[583px]:border-b max-[583px]:h-[72px] max-[583px]:!p-0"
          link-name="analytics"
          icon="flowbite:chart-line-up-outline"
          :collapsed="sidebarCollapsed"
        />
        <SidebarItem
          class="max-[583px]:flex-1 max-[583px]:border-b max-[583px]:h-[72px] max-[583px]:!p-0"
          link-name="comments"
          icon="ph:star"
          :collapsed="sidebarCollapsed"
        />
        <SidebarItem
          class="max-[583px]:flex-1 max-[583px]:border-b max-[583px]:h-[72px] max-[583px]:!p-0"
          link-name="followers"
          icon="mage:users"
          :collapsed="sidebarCollapsed"
        />
        <SidebarItem
          class="max-[583px]:flex-1 max-[583px]:border-b max-[583px]:h-[72px] max-[583px]:!p-0"
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
</style>
