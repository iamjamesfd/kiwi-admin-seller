<!-- eslint-disable vue/no-parsing-error -->
<script setup lang="tsx">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const props = defineProps([
  'onSold',
  'id',
  'rating',
  'views',
  'sold',
  'refund',
  'drawback',
  'name',
  'price'
])
const showModal = ref(false)

const target = ref(null)
onClickOutside(target, () => {
  showModal.value = false
})
</script>
<template>
  <div class="bg-white border-b-2 rounded-lg">
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

        <div class="dropdown relative" ref="target" @click="showModal = !showModal">
          <Icon icon="iconamoon:menu-kebab-horizontal-bold"></Icon>
          <ul
            :class="{ '!block': showModal }"
            class="hidden absolute right-0 bg-white shadow border whitespace-nowrap overflow-hidden rounded-lg"
          >
            <li><RouterLink to="#" @click="console.log(21)">Berkitish</RouterLink></li>
            <li><RouterLink to="#" @click="console.log(21)">Sotuvda yo'q</RouterLink></li>
            <li><RouterLink to="#" @click="console.log(21)">E'lonni ko'tarish</RouterLink></li>
            <li><RouterLink to="#" @click="console.log(21)">Tahrirlash</RouterLink></li>
            <li><RouterLink to="#" @click="console.log(21)" class="text-[#DA2C2C]">E'lonni o'chirish</RouterLink></li>
          </ul>
        </div>
      </div>
      <div class="text-black">
        <div class="flex items-center justify-between py-2 font-light">
          <h3 class="text-[#666]">ID</h3>
          <p>#{{ props.id }}</p>
        </div>
        <div class="flex items-center justify-between py-2 font-light">
          <h3 class="text-[#666]">Reyting</h3>
          <p>{{ props.rating }}</p>
        </div>
        <div class="flex items-center justify-between py-2 font-light">
          <h3 class="text-[#666]">Ko'rganlar soni</h3>
          <p>{{ props.views }}</p>
        </div>
        <div class="flex items-center justify-between py-2 font-light">
          <h3 class="text-[#666]">Sotilgan</h3>
          <p>{{ props.sold }}</p>
        </div>
        <div class="flex items-center justify-between py-2 font-light">
          <h3 class="text-[#666]">Qaytarilgan</h3>
          <p>{{ props.refund }}</p>
        </div>
        <div class="flex items-center justify-between py-2 font-light">
          <h3 class="text-[#666]">Nuqson</h3>
          <p>{{ props.drawback }}</p>
        </div>
        <div>
          <h1 class="text-lg mb-4 mt-1">{{ props.name }}</h1>
          <h3 class="text-sm">{{ props.price }} <span>so'm dan</span></h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.dropdown:hover > ul {
  @apply block;
}
ul a {
  @apply px-4 py-2 block hover:bg-slate-100;
}
</style>
