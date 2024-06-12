<script setup>
import {Icon} from "@iconify/vue"
import DashboardHeader from '@/components/layout/DashboardHeader.vue'
import ProductCard from '@/components/common/ProductCard.vue'
</script>
<template>
  <DashboardHeader title="Mahsulotlar" />
  <div class="flex justify-between items-center py-8 px-6 text-black">
    <div class="flex">
      <div class='w-10 h-10 rounded bg-[#DA2C2C] text-white grid place-items-center cursor-pointer'>1</div>
      <div class='w-10 h-10 border rounded bg-white grid place-items-center cursor-pointer'>2</div>
      <div class='w-10 h-10 border rounded bg-white grid place-items-center cursor-pointer'>3</div>
      <div class='w-10 h-10 border rounded bg-white grid place-items-center cursor-pointer'>4</div>
      <div class='w-10 h-10 border rounded bg-white grid place-items-center cursor-pointer'>...</div>
      <div class='w-10 h-10 border rounded bg-white grid place-items-center cursor-pointer'>15</div>
    </div>
    <div class="flex gap-5">
      <div class="w-fit flex items-center gap-2 py-2 px-4 bg-white rounded-lg cursor-pointer">
        <Icon icon="system-uicons:filtering" class="w-[24px] h-[24px]"></Icon>
        <span>Filterlash</span>
      </div>
      <div class="w-fit flex items-center gap-2 py-2 px-4 bg-[#0EB182] text-white rounded-lg cursor-pointer">
        <Icon icon="gala:add" class="w-[24px] h-[24px]"></Icon>
        <span>Mahsulot qo'shish</span>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-12 gap-6 px-6">
    <ProductCard :onSold="true"/>
    <ProductCard :onSold="false"/>
    <ProductCard :onSold="true"/>
    <ProductCard :onSold="false"/>
    <ProductCard :onSold="true"/>
    <ProductCard :onSold="false"/>
  </div>
</template>
