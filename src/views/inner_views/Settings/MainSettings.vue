<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <div>
      <h1 class="text-sm mb-2">Do'kon nomi</h1>
      <input
        type="text"
        placeholder="Dokon nomini kiriting"
        value="UzShop qurilish materiallari do'koni"
        class="w-full p-3 rounded-[10px] flex-1 border outline-none"
      />
    </div>
    <div>
      <h1 class="text-sm mb-2">Telefon raqam</h1>
      <input
        type="text"
        placeholder="Telefon raqamni kiriting"
        value="+998 90 838 38838"
        class="w-full p-3 rounded-[10px] flex-1 border outline-none"
      />
    </div>
    <div>
      <h1 class="text-sm mb-2">Do'kon manzili</h1>
      <input
        type="text"
        placeholder="Manzilni kiriting"
        value="Andijon shahar 12-a uy"
        class="w-full p-3 rounded-[10px] flex-1 border outline-none"
      />
    </div>
    <div class="text-[#FF6200] flex flex-col">
      <h1 class="hidden md:block md:invisible">clear space</h1>
      <div class="flex items-center flex-1 gap-2 cursor-pointer">
        <Icon icon="solar:map-linear" class="w-[18px] h-[18px]"></Icon>
        <p>Kartadan korsatish</p>
      </div>
    </div>
    <div>
      <h1 class="text-sm mb-2">Do'kon faoliyati</h1>
      <input
        disabled
        type="text"
        placeholder="Maishiy texnika"
        class="w-full p-3 rounded-[10px] flex-1 border outline-none"
      />
    </div>
    <div>
      <h1 class="text-sm mb-2">Qo'shilgan sanasi</h1>
      <input
        disabled
        type="text"
        placeholder="24 Noyabr, 2022"
        class="w-full p-3 rounded-[10px] flex-1 border outline-none"
      />
    </div>
    <div>
      <h1 class="text-sm mb-2">Ish vaqti</h1>
      <input
        type="text"
        placeholder="09:00 - 18:00"
        class="w-full p-3 rounded-[10px] flex-1 border outline-none"
      />
    </div>
  </div>
  <div>
    <h1 class="text-sm mb-2">Do'kon haqida qisqacha</h1>
    <textarea class="resize-none border w-full h-[200px] outline-none rounded-lg p-3"></textarea>
  </div>
  <div class="flex justify-end mt-8">
    <button class="bg-[#FF6200] text-white py-[10px] px-[32px] rounded-lg">Saqlash</button>
  </div>
</template>
