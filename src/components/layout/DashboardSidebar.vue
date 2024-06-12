<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="w-[312px] h-screen bg-[#26282D] relative">
    <div class="flex justify-between items-center px-8 py-6 mb-10">
      <h1 class="text-[28px] text-white">Mandarin</h1>
      <img src="@/assets/layout-icons/sidebar-toggler.svg" alt="" class="w-[24px] h-[24px]" @click="console.log(1212)"/>
    </div>
    <div>
      <ul>
        <li>
          <RouterLink
            :to="{ name: 'products' }"
            class="flex items-center gap-3 text-[#9B9B9B] py-4 px-9 text-[15px] hover:bg-[#1E1E23] border-l-[5px] border-transparent"
          >
            <Icon icon="lucide:box" class="w-[24px] h-[24px]"></Icon>
            <span>Mahsulotlar</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'analytics' }"
            class="flex items-center gap-3 text-[#9B9B9B] py-4 px-9 text-[15px] hover:bg-[#1E1E23] border-l-[5px] border-transparent"
          >
            <Icon icon="flowbite:chart-line-up-outline" class="w-[24px] h-[24px]"></Icon>
            <span>Analitika</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'comments' }"
            class="flex items-center gap-3 text-[#9B9B9B] py-4 px-9 text-[15px] hover:bg-[#1E1E23] border-l-[5px] border-transparent"
          >
            <Icon icon="ph:star" class="w-[24px] h-[24px]"></Icon>
            <span>Sharhlar</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'followers' }"
            class="flex items-center gap-3 text-[#9B9B9B] py-4 px-9 text-[15px] hover:bg-[#1E1E23] border-l-[5px] border-transparent"
          >
            <Icon icon="mage:users" class="w-[24px] h-[24px]"></Icon>
            <span>Obunachilar</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'settings' }"
            class="flex items-center gap-3 text-[#9B9B9B] py-4 px-9 text-[15px] hover:bg-[#1E1E23] border-l-[5px] border-transparent"
          >
            <Icon icon="tabler:settings-2" class="w-[24px] h-[24px]"></Icon>
            <span>Sozlamalar</span>
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="w-full px-8 py-6 text-white flex items-center justify-between absolute bottom-0">
      <div class="flex items-center gap-3">
        <div class="w-[50px] h-[50px] bg-gray-400 rounded-full"></div>
        <h1 class="text-lg">Rahmatulloh</h1>
      </div>
      <Icon icon="iconamoon:menu-kebab-vertical-bold" class="w-[24px] h-[24px]"></Icon>
    </div>
  </div>
</template> 

<style scoped>
.router-link-exact-active {
  @apply bg-[#1E1E23] border-white;
}
</style>
