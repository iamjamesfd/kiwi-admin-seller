<template>
  <h1 class="text-lg font-semibold mb-5">Sizning ma'lumotlaringiz</h1>
  <div class="grid grid-cols-1 lg:grid-cols-2">
    <div class="mb-7">
      <h1 class="text-sm mb-2">To'liq ismingiz</h1>
      <input
        type="text"
        placeholder="Ism familiya"
        value="Rahmatullo Madrahimov"
        class="w-full p-3 rounded-[10px] border outline-none"
      />
    </div>
    <div class="hidden lg:block lg:invisible">clear space</div>
    <div  class="mb-7">
      <h1 class="text-sm mb-2">Telefon raqam</h1>
      <input
        type="text"
        placeholder="Telefon raqam"
        value="+998 90 000 0000"
        class="w-full p-3 rounded-[10px] border outline-none"
      />
    </div>
  </div>
  <div>
    <h1 class="text-lg font-semibold mb-5">Bildirishnomalar</h1>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="flex items-center justify-between">
        <p>Push-bildirishnomalar</p>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider"></span>
        </label>
      </div>
      <div class="hidden lg:block lg:invisible ">clear space</div>
      <div class="flex items-center justify-between">
        <p>Yangiliklar</p>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider"></span>
        </label>
      </div>
      <div class="hidden lg:block lg:invisible ">clear space</div>
      <div class="flex items-center justify-between">
        <p>Chatlar</p>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider"></span>
        </label>
      </div>
    </div>
  </div>
  <div class="flex justify-end gap-6 mt-8">
    <button class="bg-slate-200 py-[10px] px-[32px] rounded-lg">Bekor qilish</button>
    <button class="bg-[#FF6200] text-white py-[10px] px-[32px] rounded-lg">Saqlash</button>
  </div>
</template>
