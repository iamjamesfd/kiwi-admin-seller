<script setup>
import { Icon } from '@iconify/vue'
import DashboardHeader from '@/components/layout/DashboardHeader.vue'
</script>
<template>
  <DashboardHeader title="Reklama qilish" />
  <div class="p-6">
    <h1 class="text-2xl font-semibold mb-5">Reklama to'plamlari</h1>
    <div class="grid grid-cols-3 gap-6">
      <div class="relative bg-white p-5 rounded-lg flex flex-col items-start">
        <p class="text-[#FF6200]">Oson start</p>
        <h1 class="text-lg font-semibold">700 000so'm</h1>
        <div class="flex items-center gap-2 text-sm mt-2">
          <Icon icon="simple-line-icons:check" class="text-[#0EB182]"></Icon>
          <p>3 kun davomida topda joylashtirish</p>
        </div>
        <button
          class="absolute bottom-5 bg-[#0EB182] text-white py-[10px] px-[32px] rounded-lg justify-end"
        >
          Tanlash
        </button>
      </div>
      <div class="relative bg-white p-5 rounded-lg flex flex-col items-start">
        <p class="text-[#FF6200]">Tezkor savdo</p>
        <h1 class="text-lg font-semibold">1 500 000so'm</h1>
        <div class="flex items-center gap-2 text-sm mt-2">
          <Icon icon="simple-line-icons:check" class="text-[#0EB182]"></Icon>
          <p>3 kun davomida topda joylashtirish</p>
        </div>
        <div class="flex items-center gap-2 text-sm mt-2">
          <Icon icon="simple-line-icons:check" class="text-[#0EB182]"></Icon>
          <p>3 martta ko'tarish</p>
        </div>
        <button
          class="absolute bottom-5 bg-[#0EB182] text-white py-[10px] px-[32px] rounded-lg justify-end"
        >
          Tanlash
        </button>
      </div>
      <div class="bg-white p-5 rounded-lg flex flex-col items-start">
        <p class="text-[#FF6200]">Turbo savdo</p>
        <h1 class="text-lg font-semibold">4 100 000so'm</h1>
        <div class="flex items-center gap-2 text-sm mt-2">
          <Icon icon="simple-line-icons:check" class="text-[#0EB182]"></Icon>
          <p>30 kun davomida topda joylashtirish</p>
        </div>
        <div class="flex items-center gap-2 text-sm mt-2">
          <Icon icon="simple-line-icons:check" class="text-[#0EB182]"></Icon>
          <p>9 martta ko'tarish</p>
        </div>
        <div class="flex items-center gap-2 text-sm mt-2">
          <Icon icon="simple-line-icons:check" class="text-[#0EB182]"></Icon>
          <p>7 kun davomida VIP e'lonlarda</p>
        </div>
        <button
          class="bg-[#0EB182] mt-8 text-white py-[10px] px-[32px] rounded-lg justify-self-end"
        >
          Tanlash
        </button>
      </div>
    </div>

    <h1 class="text-2xl font-semibold mt-10 mb-5">Boshqa alohida xizmatlar</h1>
    <div class="grid grid-cols-3 gap-6">
      <div class="relative bg-white p-5 rounded-lg flex flex-col items-start">
        <h1 class="text-lg font-semibold">1 300 000so'm</h1>
        <div class="flex items-center gap-2 text-sm mt-2">
          <Icon icon="simple-line-icons:check" class="text-[#0EB182]"></Icon>
          <p>7 kun davomida topda joylashtirish</p>
        </div>
        <button class="mt-8 bg-[#0EB182] text-white py-[10px] px-[32px] rounded-lg justify-end">
          Tanlash
        </button>
      </div>
      <div class="relative bg-white p-5 rounded-lg flex flex-col items-start">
        <h1 class="text-lg font-semibold">800 000so'm</h1>
        <div class="flex items-center gap-2 text-sm mt-2">
          <Icon icon="simple-line-icons:check" class="text-[#0EB182]"></Icon>
          <p>7 martta ko'tarish</p>
        </div>
        <button class="mt-8 bg-[#0EB182] text-white py-[10px] px-[32px] rounded-lg justify-end">
          Tanlash
        </button>
      </div>
      <div class="relative bg-white p-5 rounded-lg flex flex-col items-start">
        <h1 class="text-lg font-semibold">2 800 000so'm</h1>
        <div class="flex items-center gap-2 text-sm mt-2">
          <Icon icon="simple-line-icons:check" class="text-[#0EB182]"></Icon>
          <p>7 kun davomida VIP e'lonlarda</p>
        </div>
        <button class="mt-8 bg-[#0EB182] text-white py-[10px] px-[32px] rounded-lg justify-end">
          Tanlash
        </button>
      </div>
    </div>
  </div>
</template>
