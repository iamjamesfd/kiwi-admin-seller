<script setup lang="tsx">
import { Icon } from '@iconify/vue'
const props = defineProps(['onSold'])
</script>
<template>
  <div class="col-span-3 bg-white border-b-2 rounded-lg">
    <div class="w-full h-[166px] bg-gray-500 rounded-t-lg"></div>
    <div class="p-4 text-sm">
      <div class="flex items-center justify-between">
        <div
          class="px-[10px] py-[6px] cursor-pointer rounded-lg text-[#088178] border border-[#088178]"
          v-if="props.onSold"
        >
          Sotuvda
        </div>
        <div
          class="px-[10px] py-[6px] cursor-pointer rounded-lg border text-[#FF6161] border-[#FF6161]"
          v-if="!props.onSold"
        >
          Sotuvda yo'q
        </div>

        <div class="dropdown dropdown-hover">
          <div tabindex="0" role="button" class="m-1">
            <Icon icon="iconamoon:menu-kebab-horizontal-bold" class="w-6 h-6 text-black"></Icon>
          </div>
          <ul
            tabindex="0"
            class="dropdown-content z-[1] menu shadow bordre bg-white text-black rounded-box"
          >
            <li><a class="px-4 whitespace-nowrap active:!bg-slate-300 active:!text-black">Sotuvda yo'q</a></li>
            <li><a class="px-4 whitespace-nowrap active:!bg-slate-300 active:!text-black">Berkitish</a></li>
            <li><a class="px-4 whitespace-nowrap active:!bg-slate-300 active:!text-black">E'lonni ko'tarish</a></li>
            <li><a class="px-4 whitespace-nowrap active:!bg-slate-300 active:!text-black">Tahrirlash</a></li>
            <li><a class="px-4 whitespace-nowrap text-[#DA2C2C] active:!bg-slate-300 active:!text-[#DA2C2C]">E'lonni o'chirish</a></li>
          </ul>
        </div>
      </div>
      <div class="text-black">
        <div class="flex items-center justify-between py-2 font-light">
          <h3 class="text-[#666]">ID</h3>
          <p>#13323</p>
        </div>
        <div class="flex items-center justify-between py-2 font-light">
          <h3 class="text-[#666]">Reyting</h3>
          <p>0,00</p>
        </div>
        <div class="flex items-center justify-between py-2 font-light">
          <h3 class="text-[#666]">Ko'rganlar soni</h3>
          <p>113</p>
        </div>
        <div class="flex items-center justify-between py-2 font-light">
          <h3 class="text-[#666]">Sotilgan</h3>
          <p>14</p>
        </div>
        <div class="flex items-center justify-between py-2 font-light">
          <h3 class="text-[#666]">Qaytarilgan</h3>
          <p>0</p>
        </div>
        <div class="flex items-center justify-between py-2 font-light">
          <h3 class="text-[#666]">Nuqson</h3>
          <p>0</p>
        </div>
        <div>
          <h1 class="text-lg mb-4 mt-1">Фрида Кало</h1>
          <h3 class="text-sm">700 000<span>so'm dan</span></h3>
        </div>
      </div>
    </div>
  </div>
</template>
