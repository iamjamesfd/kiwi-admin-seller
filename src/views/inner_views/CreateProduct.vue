<script setup >
import { ref, onMounted } from 'vue'

import { QuillEditor } from '@vueup/vue-quill'
import { Icon } from '@iconify/vue'

import DashboardHeader from '@/components/layout/DashboardHeader.vue'
import SelectInput from '@/components/common/SelectInput.vue'

import '@vueup/vue-quill/dist/vue-quill.snow.css'

const editorContent = ref('')
const editorOptions = ref({
  modules: {
    toolbar: {
      container: [
        ['undo', 'redo'],
        [{ header: [1, 2, 3, 4, false] }],
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ align: '' }, { align: 'center' }, { align: 'right' }],
        ['image']
      ],
      handlers: {
        undo: function () {
          this.quill.history.undo()
        },
        redo: function () {
          this.quill.history.redo()
        }
      }
    },

    history: {
      delay: 1000,
      maxStack: 100,
      userOnly: true
    }
  },
  placeholder: 'Tavsif yozish...',
  theme: 'snow' // or 'bubble'
})
onMounted(() => {
  // Add custom buttons to the toolbar
  const undoButton = document.querySelector('.ql-undo')
  const redoButton = document.querySelector('.ql-redo')

  if (undoButton) {
    undoButton.innerHTML =
      "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path d='m8 5l-5 5l5 5'/><path d='M3 10h8c5.523 0 10 4.477 10 10v1'/></g></svg"
  }
  if (redoButton) {
    redoButton.innerHTML =
      "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path d='m16 5l5 5l-5 5'/><path d='M21 10h-8C7.477 10 3 14.477 3 20v1'/></g></svg>"
  }
})

const isDeliveryAvalible = ref(null)
const variants = ref(null)

const addVariant = () => {
  variants.value.innerHTML += '<h1>hello world</h1>'
}


</script>

<template>
  <DashboardHeader title="Mahsulotlar" />
  <div class="grid grid-cols-12 gap-6 p-5 text-black">
    <div class="col-span-12 min-[750px]:col-span-10 lg:col-span-8 rounded-lg bg-white p-7">
      <h1 class="text-xl mb-8">Mahsulot yaratish</h1>
      <h3 class="mb-2">Mahsulot nomi <span class="text-[#DA2C2C]">*</span></h3>
      <input
        type="text"
        placeholder="Mahsulot nomini kiriting"
        class="w-full p-3 mb-8 rounded-lg border outline-none"
      />
      <h3 class="mb-2">Mahsulot tavsifi <span class="text-[#DA2C2C]">*</span></h3>
      <QuillEditor v-model="editorContent" :options="editorOptions"></QuillEditor>
    </div>
    <div class="col-span-12 min-[750px]:col-span-10 lg:col-span-8 p-7 bg-white rounded-lg">
      <h3 class="mb-2">Mahsulot rasmi <span class="text-[#DA2C2C]">*</span></h3>
      <p class="text-[#3A93FF] text-[12px] font-light mb-6">
        Birinchi surat e'loningiz asosiy rasmi bo'ladi.
      </p>
      <div class="flex gap-2 flex-wrap">
        <div class="rounded-lg border-[2px] border-dashed text-[#7F7F7F]">
          <input type="file" class="hidden" id="image" />
          <label for="image" class="h-[100px] w-[90px] flex flex-col justify-center items-center">
            <Icon icon="akar-icons:cloud-upload" class="w-6 h-6"></Icon>
            <p class="text-[12px] text-[#7F7F7F] text-center">Rasm yuklash</p>
          </label>
        </div>
        <div class="rounded-lg border-[2px] border-dashed text-[#7F7F7F]" v-for="x in 9" :key="x">
          <input type="file" class="hidden" :id="'image_' + x" />
          <label
            :for="'image_' + x"
            class="h-[100px] w-[90px] flex flex-col justify-center items-center"
          >
            <Icon icon="ph:plus-bold" class="w-6 h-6"></Icon>
            <p class="text-[12px] text-[#7F7F7F] text-center">Qo'shish</p>
          </label>
        </div>
      </div>
    </div>
    <div class="col-span-12 min-[750px]:col-span-10 lg:col-span-8 p-7 bg-white rounded-lg">
      <h3 class="mb-2">Mahsulot kategoriyasi <span class="text-[#DA2C2C]">*</span></h3>
      <div class="flex items-center mb-8 justify-between border px-4 py-[14px] rounded-[10px]">
        <p>Kategoriyani tanlang</p>
        <Icon icon="icon-park:down"></Icon>
      </div>
      

      <h3 class="mb-2">Kalit so'zlar <span class="text-[#DA2C2C]">*</span></h3>
      <input
        type="text"
        placeholder="Misol uchun: oyoq kiyim"
        class="w-full p-3 mb-8 rounded-lg border outline-none"
      />
      <div class="flex justify-between items-center">
        <p>Yetkazib berish</p>
        <label class="switch">
          <input type="checkbox" v-model="isDeliveryAvalible" />
          <span class="slider"></span>
        </label>
      </div>
      <div
        v-if="isDeliveryAvalible"
        class="flex flex-col flex-wrap gap-3 mt-5 min-[550px]:flex-row min-[550px]:gap-8"
      >
        <div>
          <h3 class="mb-1 text-sm">Yetkazib berish xizmati</h3>
          <input
            type="text"
            placeholder="Xizmat narxini kiriting"
            class="w-[254px] block p-3 rounded-lg border outline-none"
          />
        </div>
        <div class="flex gap-4 min-[550px]:relative min-[550px]:top-9">
          <p>Bepul</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider"></span>
          </label>
        </div>
      </div>
    </div>
    <div class="col-span-12 min-[750px]:col-span-10 lg:col-span-8 p-7 bg-white rounded-lg">
      <h1 class="text-xl mb-8">Variant</h1>
      <div ref="variants"></div>
      <!-- <div>
        <h3 class="mb-2">Variant nomi <span class="text-[#DA2C2C]">*</span></h3>
      </div> -->
      <p class="flex items-center text-[#2563EB] gap-3 cursor-default" @click="addVariant">
        <Icon icon="ph:plus-bold"></Icon>Hajmi yoki rangi kabi variantlarni qo'shing
      </p>
    </div>
    <div
      class="col-span-12 min-[750px]:col-span-10 lg:col-span-8 p-7 bg-white rounded-lg flex gap-4 flex-wrap"
    >
      <div>
        <h3 class="mb-2">Narxi<span class="text-[#DA2C2C]">*</span></h3>
        <div class="flex gap-2 max-w-[300px]">
          <input
            type="text"
            placeholder="Narxini kiriting"
            class="w-full p-3 rounded-[10px] flex-1 border outline-none"
          />
          <SelectInput :options="['uzs', 'usd']" :default="'uzs'" class="select"></SelectInput>
        </div>
      </div>
      <div>
        <h3 class="mb-2">Chegirma<span class="text-[#DA2C2C]">*</span></h3>
        <input
          type="text"
          placeholder="Chegirmani kiriting %"
          class="w-full p-3 rounded-[10px] border outline-none"
        />
      </div>
      <div>
        <h3 class="mb-2">Mahsulot soni<span class="text-[#DA2C2C]">*</span></h3>
        <input
          type="number"
          placeholder="Mahsulot sonini kiriting"
          class="w-full p-3 rounded-[10px] border outline-none bg-white"
        />
      </div>
    </div>
    <div
      class="col-span-12 min-[750px]:col-span-10 lg:col-span-8 flex items-center flex-wrap min-[430px]:justify-end gap-6"
    >
      <button>Bekor qilish</button>
      <button class="bg-white py-[10px] px-[32px] rounded-lg">Ko'rish</button>
      <button class="bg-[#FF6200] text-white py-[10px] px-[32px] rounded-lg">Chop etish</button>
    </div>
  </div>
</template>

<style>
input[type='text'] {
  @apply !bg-white placeholder:text-sm;
}
.ql-toolbar {
  @apply rounded-t-lg bg-[#eef2f8];
}
.ql-container {
  @apply rounded-b-lg text-black h-[200px];
}
.switch {
  --button-width: 44px;
  --button-height: 24px;
  --toggle-diameter: 1em;
  --button-toggle-offset: calc((var(--button-height) - var(--toggle-diameter)) / 2);
  --toggle-shadow-offset: 10px;
  --toggle-wider: 2.2em;
  --color-grey: #cccccc;
  --color-green: #0eb182;
}

.slider {
  display: inline-block;
  width: var(--button-width);
  height: var(--button-height);
  background-color: var(--color-grey);
  border-radius: calc(var(--button-height) / 2);
  position: relative;
  transition: 0.3s all ease-in-out;
}

.slider::after {
  content: '';
  display: inline-block;
  width: var(--toggle-diameter);
  height: var(--toggle-diameter);
  background-color: #fff;
  border-radius: calc(var(--toggle-diameter) / 2);
  position: absolute;
  top: var(--button-toggle-offset);
  transform: translateX(var(--button-toggle-offset));
  box-shadow: var(--toggle-shadow-offset) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
  transition: 0.3s all ease-in-out;
}

.switch input[type='checkbox']:checked + .slider {
  background-color: var(--color-green);
}

.switch input[type='checkbox']:checked + .slider::after {
  transform: translateX(
    calc(var(--button-width) - var(--toggle-diameter) - var(--button-toggle-offset))
  );
  box-shadow: calc(var(--toggle-shadow-offset) * -1) 0 calc(var(--toggle-shadow-offset) * 4)
    rgba(0, 0, 0, 0.1);
}

.switch input[type='checkbox'] {
  display: none;
}

.switch input[type='checkbox']:active + .slider::after {
  width: var(--toggle-wider);
}

.switch input[type='checkbox']:checked:active + .slider::after {
  transform: translateX(
    calc(var(--button-width) - var(--toggle-wider) - var(--button-toggle-offset))
  );
}
</style>
