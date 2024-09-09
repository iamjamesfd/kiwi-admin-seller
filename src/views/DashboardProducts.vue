<script setup>
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
import { data } from '@/store'
import useMarketProductStore from "@/store/api/useMarketProductsStore";

import DashboardHeader from '@/components/layout/DashboardHeader.vue'
import ProductCard from '@/components/common/ProductCard.vue'
import { onMounted } from 'vue'
onMounted(async () => {
  const productsStore = useMarketProductStore(); 
  await productsStore.fetchData();
  console.log(productsStore.items);
})
</script>
<template>
  <DashboardHeader title="Mahsulotlar" />
  <div
    class="flex justify-between min-[624px]:gap-2 items-center py-8 px-6 text-font_color flex-wrap"
  >
    <div class="flex">
      <div class="w-10 h-10 rounded bg-secondary text-white grid place-items-center cursor-pointer">
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
        <Icon icon="gala:add" class="w-[24px] h-[24px]"></Icon>
        <span class="whitespace-nowrap">Mahsulot qo'shish</span>
      </RouterLink>
    </div>
  </div>
  <div class="@container">
    <div
      class="grid @sm:grid-cols-1 @lg:grid-cols-2 @2xl:grid-cols-3 @4xl:grid-cols-4 @6xl:grid-cols-5 gap-4 px-6 pb-5"
    >
      <ProductCard
        v-for="(x, i) in data"
        :key="x"
        :onSold="x.onSold"
        :id="x.id"
        :rating="x.rating"
        :views="x.views"
        :sold="x.sold"
        :refund="x.refund"
        :drawback="x.drawback"
        :name="x.name"
        :price="x.price"
        :i="i"
      />
    </div>
  </div>
</template>
