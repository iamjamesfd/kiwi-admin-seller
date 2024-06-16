<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import SidebarItem from '../common/SidebarItem.vue'

const sidebarCollapsed = ref(true)

</script>

<template>
  <div
    class="w-[312px] h-screen bg-[#26282D] relative duration-500 overflow-hidden"
    :class="{ 'w-[72px]': sidebarCollapsed }"
  >
    <div
      class="flex justify-end items-center px-8 py-6 mb-10 min-h-24 overflow-hidden relative"
    >
      <Transition name="dissapear">
        <h1 class="text-[28px] text-white flex-1" v-if="!sidebarCollapsed">
          Mandarin
        </h1>
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
        link-name="settings"
        icon="basil:settings-outline"
        :collapsed="sidebarCollapsed"
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
      <Icon icon="iconamoon:menu-kebab-vertical-bold" class="w-[24px] h-[24px] absolute right-6"></Icon>
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
