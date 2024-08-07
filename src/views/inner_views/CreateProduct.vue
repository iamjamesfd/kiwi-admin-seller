<script setup>
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { options } from '@/store'
import DashboardHeader from '@/components/layout/DashboardHeader.vue'
import VueSelect from '@/components/common/VueSelect.vue'
import VariantsInput from '@/components/create-product/VariantsInput.vue'

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
</script>

<template>
  <DashboardHeader title="Mahsulot yaratish" />
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
      <vue-select :options="options" :default="'Kategoriyani tanlang'" optionType="Object">
        <template #option="{ option }">
          <div class="px-3 py-3 hover:bg-slate-100 hover:text-[#FF6200] flex items-center gap-4">
            <img :src="option.image" />
            <p>{{ option.name }}</p>
          </div>
        </template>
      </vue-select>

      <h3 class="mb-2 mt-8">Kalit so'zlar <span class="text-[#DA2C2C]">*</span></h3>
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
      <h1 class="text-xl mb-5">Variant</h1>
      <!-- <div>
<h3 class="mb-2">Variant nomi <span class="text-[#DA2C2C]">*</span></h3>
</div> -->
      <VariantsInput />
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
          <vue-select :options="['UZS', 'USD']" :default="'USD'" optionType="String">
            <template #icon>
              <Icon icon="emojione:green-apple"></Icon>
            </template>
            <template #option="{ option }">
              <div class="px-3 py-2 hover:bg-slate-300">
                {{ option }}
              </div>
            </template>
          </vue-select>
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

<style scoped>
input[type='text'] {
  @apply !bg-white placeholder:text-sm;
}
.ql-toolbar {
  @apply rounded-t-lg bg-[#eef2f8];
}
.ql-container {
  @apply rounded-b-lg text-black h-[200px];
}
</style>
