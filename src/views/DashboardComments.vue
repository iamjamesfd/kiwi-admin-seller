<script setup lang="ts">
import DashboardHeader from '@/components/layout/DashboardHeader.vue'
import TabsContainer from '@/components/common/TabsContainer.vue'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

interface Item {
  id: string
  name: string
  rating: number
  date: string
  answered: boolean
  comment: string
  user__full_name: string
}

const items = ref<Item[]>([
  {
    id: 'a1',
    name: 'Lolalar assorti',
    rating: 5,
    date: '02 July, 2023',
    answered: false,
    comment: 'Lorem ipsum dolor sit amet concetueter',
    user__full_name: 'what the fuck'
  },
  {
    id: 'a2',
    name: 'Настроние',
    rating: 3,
    date: '02 July, 2023',
    answered: true,
    comment: 'Lorem ipsum dolor sit amet concetueter',
    user__full_name: 'what the fuck'
  },
  {
    id: 'a3',
    name: 'Свежий бриз',
    rating: 4,
    date: '02 July, 2023',
    answered: false,
    comment: 'Lorem ipsum dolor sit amet concetueter',
    user__full_name: 'what the fuck'
  },
  {
    id: 'a4',
    name: 'Фрида Кало',
    rating: 5,
    date: '02 July, 2023',
    answered: true,
    comment: 'Lorem ipsum dolor sit amet concetueter',
    user__full_name: 'what the fuck'
  }
])

const selectedItem = ref<null | Item>(null)

const updateSelectedItem = (id: string) => {
  var item = items.value.find((i) => i.id === id)
  if (item) selectedItem.value = item
}
</script>
<template>
  <DashboardHeader title="Sharhlar" />
  <div class="grid lg:gap-4 lg:p-4 lg:grid-cols-12 gap-0 "><!--grid-cols-12 ||  col-span-8 || col-span-12 md:col-span-4-->
    <div class="px-8 py-3 overflow-auto lg:col-span-8 lg:px-0">
      <div class="bg-white rounded-xl min-w-[600px] overflow-hidden">
        <div></div>
        <TabsContainer :tabs="['Hammasi', 'Yangi sharhlar', 'Javob yozilmagan', 'Javob yozilgan']">
          <template #absoluteBody>
            <table class="w-full">
              <tbody>
                <tr role="button" @click="updateSelectedItem(item.id)" :tabindex="index + 1"
                  v-for="(item, index) in items" :key="index" class="border-b">
                  <td class="py-4 px-8 text-purple-600">{{ item.name }}</td>
                  <td class="py-4 px-8">
                    <div class="flex">
                      <Icon v-for="n in 5" :key="n" icon="mdi:star"
                        :class="['w-5 h-5', n <= item.rating ? 'text-yellow-400' : 'text-gray-300']" />
                    </div>
                  </td>
                  <td class="py-4 px-8 text-gray-600">{{ item.date }}</td>
                  <td class="py-4 px-8">
                    <Icon v-if="item.answered" icon="mdi:check" class="w-5 h-5 text-green-500" />
                  </td>
                </tr>
              </tbody>
            </table>
          </template>
        </TabsContainer>
      </div>
    </div>

    <div class="px-8 py-3 overflow-auto lg:col-span-4 lg:px-0">
      <div class="bg-white rounded-lg  p-5" v-if="selectedItem">
        <h2 class="text-sm border-b pb-3 border-b-stroke_primary">Haridorlarga javob yozish</h2>
        <h1 class="text-base mt-3">{{ selectedItem.name }}</h1>
        <div class="flex justify-between items-center mt-3">
          <p>{{ selectedItem.user__full_name }}</p>
          <div class="flex">
            <Icon v-for="n in 5" :key="n" icon="mdi:star"
              :class="['w-5 h-5', n <= selectedItem.rating ? 'text-yellow-400' : 'text-gray-300']" />
          </div>
        </div>
        <div class="flex flex-col gap-4 py-5 border-b border-b-stroke_primary">
          <div class="flex justify-between items-center">
            <p>Buyurtma qilingan vaqti</p>
            <p>{{ selectedItem.date }}</p>
          </div>
          <div class="flex justify-between items-center">
            <p>Sharh qoldirilgan</p>
            <p>{{ selectedItem.date }}</p>
          </div>
          <div class="flex justify-between items-center">
            <p>Sharh ID</p>
            <p>{{ selectedItem.id }}</p>
          </div>
        </div>
        <div class="mt-4 py-6 border-b border-b-stroke_primary">
          <div class="flex">
            <Icon v-for="n in 5" :key="n" icon="mdi:star"
              :class="['w-5 h-5', n <= selectedItem.rating ? 'text-yellow-400' : 'text-gray-300']" />
          </div>
          <p class="mt-3">{{ selectedItem.comment }}</p>
        </div>
        <div
          class="mt-4 max-w-[500px] h-[177px] bg-white border transition-colors border-stroke_primary rounded-xl p-4 flex flex-col justify-between has-[:focus]:border-gray-300">
          <textarea class="placeholder:text-gray-500 text-sm focus:outline-none resize-none"
            placeholder="Javob yozish"></textarea>
          <div class="flex justify-end">
            <button class="bg-[#EEEEEE] text-font_color px-4 py-1.5 rounded-full text-sm">
              Yuborish
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="p-6">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-8 py-5 bg-white rounded-lg">
       
      </div>
      <div class="col-span-4 py-5 bg-white rounded-lg"></div>
    </div>
  </div> -->
</template>
