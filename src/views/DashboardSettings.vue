<script setup>
import { Icon } from '@iconify/vue'
import DashboardHeader from '@/components/layout/DashboardHeader.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <DashboardHeader title="Sozlamalar" />
  <div class="p-6 grid grid-cols-12 gap-6">
    <div class="col-span-12 md:col-span-4 flex flex-col gap-6">
      <div class="p-6 rounded-lg bg-white flex flex-col items-center gap-[10px]">
        <div class="relative">
          <div
            class="w-[120px] h-[120px] bg-gray-400 rounded-full border-[2px] border-[#FF6200]"
          ></div>
          <div
            class="w-8 h-8 flex items-center justify-center bg-[#FF6200] border border-white absolute right-0 top-3/4 rounded-full text-white"
          >
            <Icon icon="hugeicons:edit-02" class="w-[18px] h-[18px]"></Icon>
          </div>
        </div>
        <h1 class="text-[18px] font-semibold text-center">UzShop Qurilish materiallar do'koni</h1>
        <p class="flex text-[#9A9A9A] text-sm gap-2">
          Status:
          <span class="flex items-center text-[#2EC076]"
            ><Icon icon="mage:stars-a"></Icon>ishonchli</span
          >
        </p>
      </div>
      <div class="p-6 rounded-lg bg-white">
        <h1 class="text-xl font-semibold mb-5">Media</h1>
        <div>
          <div class="flex items-center gap-4 mb-5">
            <Icon icon="logos:telegram" class="w-6 h-6"></Icon>
            <input
              type="text"
              placeholder="@daveadme"
              class="w-full p-3 rounded-lg border outline-none placeholder:!text-base placeholder:font-light"
            />
          </div>
          <div class="flex justify-end">
            <button class="bg-[#FF6200] text-white py-[10px] px-[32px] rounded-lg">Saqlash</button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-12 md:col-span-8 rounded-lg bg-white">
      <div class="border-b overflow-auto">
        <ul class="flex">
          <li>
            <RouterLink :to="{ name: 'main-settings' }" class="px-4 py-2 block whitespace-nowrap"
              >Asosiy sozlamalar</RouterLink
            >
          </li>
          <li>
            <RouterLink :to="{ name: 'profile-settings' }" class="px-4 py-2 block whitespace-nowrap"
              >Profil sozlamalari</RouterLink
            >
          </li>
          <li>
            <RouterLink :to="{ name: 'security' }" class="px-4 py-2 block whitespace-nowrap"
              >Xavfsizlik</RouterLink
            >
          </li>
        </ul>
      </div>
      <div class="p-7">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
.router-link-exact-active {
  @apply border-b-2 border-b-red-500;
}
</style>
