<script setup>
import { Icon } from '@iconify/vue'
import DashboardHeader from '@/components/layout/DashboardHeader.vue'
</script>

<template>
  <DashboardHeader title="Obunachilar" />
  <div class="flex justify-between min-[624px]:gap-2 items-center py-8 px-6 text-black flex-wrap">
    <div class="flex">
      <div class="w-10 h-10 rounded bg-[#DA2C2C] text-white grid place-items-center cursor-pointer">
        1
      </div>
      <div class="w-10 h-10 border rounded bg-white grid place-items-center cursor-pointer">2</div>
      <div class="w-10 h-10 border rounded bg-white grid place-items-center cursor-pointer">3</div>
      <div class="w-10 h-10 border rounded bg-white grid place-items-center cursor-pointer">4</div>
      <div class="w-10 h-10 border rounded bg-white grid place-items-center cursor-pointer">
        ...
      </div>
      <div class="w-10 h-10 border rounded bg-white grid place-items-center cursor-pointer">15</div>
    </div>
    <div class="flex gap-2 flex-wrap mt-2 min-[624px]:mt-0">
      <div class="w-fit flex items-center gap-2 py-2 px-4 bg-white rounded-lg cursor-pointer">
        <Icon icon="system-uicons:filtering" class="w-[24px] h-[24px]"></Icon>
        <span class="whitespace-nowrap">Filterlash</span>
      </div>
      <RouterLink
        :to="{ name: 'create-product' }"
        class="w-fit flex items-center gap-2 py-2 px-4 bg-[#0EB182] text-white rounded-lg cursor-pointer"
      >
        <span class="whitespace-nowrap">Xabar yuborish</span>
      </RouterLink>
    </div>
  </div>
  <div class="overflow-auto">
    <div class="px-6 pb-5 min-w-[1024px]">
      <table class="w-full bg-white rounded-xl overflow-hidden">
        <thead class="bg-[#F6F5FF] text-black">
          <tr class="text-center text-sm">
            <td>
              <div class="my-4"><span>&#x2116;</span></div>
            </td>
            <td>
              <div class="my-4"><span>Ism familiya</span></div>
            </td>
            <td>
              <div class="my-4"><span>Telefon raqami</span></div>
            </td>
            <td>
              <div class="my-4"><span>Manzil</span></div>
            </td>
            <td>
              <div class="my-4"><span>Qo'shilgan sana</span></div>
            </td>
            <td>
              <div class="my-4"><span>Holati</span></div>
            </td>
            <td>
              <div class="my-4"><span>&nbsp;</span></div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center border-b pb-2 text-sm text-black" v-for="x in 10" :key="x">
            <td class="p-3">
              <span>{{ x }}</span>
            </td>
            <td class="py-3">
              <div><span>Saidmurod Xasanov</span></div>
            </td>
            <td class="py-3">
              <div><span>+998 91 123 4567</span></div>
            </td>
            <td class="py-3">
              <div><span>Andijon tumani</span></div>
            </td>
            <td class="py-3">
              <div><span>2 aprel, 2024</span></div>
            </td>
            <td class="py-3">
              <div><span class="text-[#39BC91]">Faol</span></div>
            </td>
            <td class="p-3">
              <div><Icon icon="iconamoon:menu-kebab-vertical-bold"></Icon></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
* {
  scrollbar-width: none;
}
</style>
