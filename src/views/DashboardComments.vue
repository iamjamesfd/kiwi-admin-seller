<script setup lang="ts">
import DashboardHeader from '@/components/layout/DashboardHeader.vue'
import TabsContainer from '@/components/common/TabsContainer.vue'
import { Icon } from '@iconify/vue'

interface Item {
  name: string
  rating: number
  date: string
  answered: boolean
}

const items: Item[] = [
  { name: 'Lolalar assorti', rating: 5, date: '02 July, 2023', answered: false },
  { name: 'Настроние', rating: 3, date: '02 July, 2023', answered: true },
  { name: 'Свежий бриз', rating: 4, date: '02 July, 2023', answered: false },
  { name: 'Фрида Кало', rating: 5, date: '02 July, 2023', answered: true }
]
</script>
<template>
  <DashboardHeader title="Sharhlar" />
  <div class="grid grid-cols-12 gap-3 px-8 py-6">
    <div class="bg-white rounded-xl col-span-8">
      <TabsContainer :tabs="['Hammasi', 'Yangi sharhlar', 'Javob yozilmagan', 'Javob yozilgan']">
        <template #absoluteBody>
          <table class='w-full'>
            <tbody>
              <tr role="button" :tabindex="index + 1" v-for="(item, index) in items" :key="index" class="border-b">
                <td class="py-4 px-8 text-purple-600">{{ item.name }}</td>
                <td class="py-4 px-8">
                  <div class="flex">
                    <Icon
                      v-for="n in 5"
                      :key="n"
                      icon="mdi:star"
                      :class="['w-5 h-5', n <= item.rating ? 'text-yellow-400' : 'text-gray-300']"
                    />
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

    <div class="bg-white rounded-lg col-span-4"></div>
  </div>
  <!-- <div class="p-6">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-8 py-5 bg-white rounded-lg">
       
      </div>
      <div class="col-span-4 py-5 bg-white rounded-lg"></div>
    </div>
  </div> -->
</template>
