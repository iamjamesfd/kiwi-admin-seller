<script setup lang="ts">
import { Icon } from '@iconify/vue'
// import { data } from '@/store'

import DashboardHeader from '@/components/layout/DashboardHeader.vue'
import VirtualTable from '@/components/common/VirtualTable.vue'

// const head = ['Rasm', 'Mahsulot nomi', 'Mahsulot ID', 'Narxi', 'Sotildi', 'Qoldiq']
const head = [
  { label: 'Rasm', key: 'img', type: 'image' },
  { label: 'Mahsulot nomi', key: 'name' },
  { label: 'Mahsulot ID', key: 'id' },
  {
    label: 'Narxi',
    key: 'price',
    formatter: function (val) {
      return val.price + val.currency
    }
  },
  { label: 'Sotildi', key: 'sold' },
  { label: 'Qoldiq', key: 'availibleProducts' }
]
const body = [
  {
    img: null,
    name: 'Macbook Pro 2019',
    id: '#' + 1234,
    price: { currency: 'uzs', price: 123.22 },
    sold: 142,
    availibleProducts: 38
  },
  {
    img: null,
    name: 'Macbook Pro 2016',
    id: '#' + 1234,
    price: { currency: 'uzs', price: 123.42 },
    sold: 142,
    availibleProducts: 38
  },
  {
    img: null,
    name: 'Macbook Pro 2015',
    id: '#' + 1234,
    price: { currency: 'uzs', price: 124253.23 },
    sold: 142,
    availibleProducts: 38
  },
  {
    img: null,
    name: 'Macbook Pro 2014',
    id: '#' + 1234,
    price: { currency: 'usd', price: 123243.22 },
    sold: 142,
    availibleProducts: 38
  },
  {
    img: null,
    name: 'Macbook Pro 2019',
    id: '#' + 1234,
    price: { currency: 'usd', price: 123.22 },
    sold: 142,
    availibleProducts: 38
  },
  {
    img: null,
    name: 'Macbook Pro 2019',
    id: '#' + 1234,
    price: { currency: 'usd', price: 123.22 },
    sold: 142,
    availibleProducts: 38
  },
  {
    img: null,
    name: 'Macbook Pro 2019',
    id: '#' + 1234,
    price: { currency: 'usd', price: 123.22 },
    sold: 142,
    availibleProducts: 38
  },
  {
    img: null,
    name: 'Macbook Pro 2019',
    id: '#' + 1234,
    price: { currency: 'usd', price: 123.22 },
    sold: 142,
    availibleProducts: 38
  },
  {
    img: null,
    name: 'Macbook Pro 2019',
    id: '#' + 1234,
    price: { currency: 'usd', price: 123.22 },
    sold: 142,
    availibleProducts: 38
  }
]
</script>

<template>
  <DashboardHeader title="Analitika" />
  <div class="grid grid-cols-12 gap-3 p-6">
    <div
      class="bg-white p-5 space-y-2 rounded-[10px] col-span-12 min-[500px]:col-span-6 min-[768px]:col-span-4 min-[1024px]:col-span-3"
    >
      <h3 class="text-sm">Yoqtirilganlar</h3>
      <h1 class="text-black text-2xl font-semibold">
        121 123 213 <span class="text-base">so'm</span>
      </h1>
      <p class="text-[#2EC076] text-[12px] flex items-center gap-2">
        <Icon icon="iconoir:stat-up" class="w-4 h-4"></Icon>
        <span class="font-light">O'tgan oydan 18% ko'p</span>
      </p>
    </div>
    <div
      class="bg-white p-5 space-y-2 rounded-[10px] col-span-12 min-[500px]:col-span-6 min-[768px]:col-span-4 min-[1024px]:col-span-3"
    >
      <h3 class="text-sm">Obunachilar</h3>
      <h1 class="text-black text-2xl font-semibold">121 123</h1>
      <p class="text-[#2EC076] text-[12px] flex items-center gap-2">
        <Icon icon="iconoir:stat-up" class="w-4 h-4"></Icon>
        <span class="font-light">O'tgan oydan 18% ko'p</span>
      </p>
    </div>
    <div
      class="bg-white p-5 space-y-2 rounded-[10px] col-span-12 min-[500px]:col-span-6 min-[768px]:col-span-4 min-[1024px]:col-span-3"
    >
      <h3 class="text-sm">Mahsulotlar summasi</h3>
      <h1 class="text-black text-2xl font-semibold">
        121 123 213 <span class="text-base">so'm</span>
      </h1>
      <p class="text-[#2EC076] text-[12px] flex items-center gap-2">
        <Icon icon="iconoir:stat-up" class="w-4 h-4"></Icon>
        <span class="font-light">O'tgan oydan 18% ko'p</span>
      </p>
    </div>
  
    <div class=" col-span-12 min-[1024px]:col-span-9  overflow-hidden rounded-lg">
      <div class="pt-4 bg-white rounded-[10px]">
        <div class="flex items-center justify-between px-4">
          <h1 class="text-xl text-black">Top mahsulotlar</h1>
          <select class="bg-white border px-3 py-2 rounded-lg  text-black text-sm">
            <option>Kunlik</option>
            <option>Haftalik</option>
            <option>Oylik</option>
            <option>Yillik</option>
          </select>
        </div>
        <div class="overflow-auto">
          <VirtualTable :head :body class="min-w-[692px] min-[768px]:w-full bg-white"/>
        </div>
      </div>
    </div>
  </div>
</template>
