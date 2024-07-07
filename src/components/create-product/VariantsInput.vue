<script setup lang="ts">
import { ref, computed, watch, reactive } from 'vue'
import { Icon } from '@iconify/vue'

interface Option {
  name: string
  values: string[]
}

interface Variant {
  name: string
  price: number
  image: string
  option_values: string[]
}

interface ParentVariant {
  name: string
  children: Variant[]
  price: number
  image: string
}

const msg = ref<string>('Hello World!')
const options = ref<Option[]>([])
const currentOption = ref<Option>({ name: '', values: [] })
const variants = reactive<Variant[]>([])
const openVariants = ref<Record<number, boolean>>({})
const isInputMode = ref(false)

const createOptionValue = (e: Event): void => {
  const target = e.target as HTMLInputElement
  if (!target.value) return
  currentOption.value.values.push(target.value)
  target.value = ''
}

const createOption = (): void => {
  if (!options.value.find((option) => option.name === currentOption.value.name)) {
    options.value.push({ ...currentOption.value })
    generateVariants()
  }
  currentOption.value = { name: '', values: [] }
  isInputMode.value = false
}

const deleteCurrentOption = () => {
  const index = options.value.findIndex((option) => option.name === currentOption.value.name)
  if (index !== -1) {
    options.value.splice(index, 1)
    generateVariants()
  }
  currentOption.value = { name: '', values: [] }
  isInputMode.value = false
}

const editOption = (option: Option): void => {
  currentOption.value = option
  isInputMode.value = true
}

const generateVariants = (): void => {
  const optionValues = options.value.map((option) => option.values)
  if (!optionValues.length) {
    variants.splice(0)
    return
  }

  const combinations = (arr: string[][]): string[][] => {
    return arr.reduce<string[][]>(
      (acc, val) => {
        return acc.flatMap((d) => val.map((e) => [...d, e]))
      },
      [[]]
    )
  }

  const newVariants = combinations(optionValues).map((combination) => ({
    name: combination.join(' '),
    price: 0,
    image: '',
    option_values: combination
  }))

  variants.splice(0, variants.length, ...newVariants)
}

const groupedVariants = computed<ParentVariant[]>(() => {
  if (!options.value.length || !variants.length) return []

  const groups: Record<string, ParentVariant> = {}
  variants.forEach((variant) => {
    const parentValue = variant.option_values[0]
    if (!groups[parentValue]) {
      groups[parentValue] = { name: parentValue, children: [], price: 0, image: '' }
    }
    groups[parentValue].children.push(variant)
  })
  return Object.values(groups)
})

const toggleVariant = (index: number): void => {
  openVariants.value[index] = !openVariants.value[index]
}

const isVariantOpen = (index: number): boolean => {
  return !!openVariants.value[index]
}

const updateVariantImage = (event: Event, variant: Variant): void => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e: ProgressEvent<FileReader>) => {
      variant.image = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }
}

const updateParentVariantImage = (event: Event, parentVariant: ParentVariant): void => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const result = e.target?.result as string
      parentVariant.image = result
      parentVariant.children.forEach((child) => {
        child.image = result
      })
    }
    reader.readAsDataURL(file)
  }
}

const updateChildrenPrice = (parentVariant: ParentVariant): void => {
  parentVariant.children.forEach((child) => {
    child.price = parentVariant.price
  })
}

watch(options, generateVariants, { deep: true })
</script>

<template>
  <!-- Options Display -->
  <div
    class="mb-6 overflow-hidden rounded-lgx divide-y divide-stroke_primary"
    v-if="options.length"
  >
    <div
      @click="editOption(option)"
      v-for="option in options"
      :key="option.name"
      class="cursor-pointer bg-slate-100 hover:bg-slate-200 p-4 transition-colors"
    >
      <h3 class="font-semibold">{{ option.name }}</h3>
      <div class="flex flex-wrap gap-2">
        <span v-for="value in option.values" :key="value" class="bg-gray-200 px-2 py-1 rounded">
          {{ value }}
        </span>
      </div>
    </div>
  </div>

  <!-- Option Creator -->
  <div class="mb-6" v-if="isInputMode">
    <div>
      <h2 class="text-sm font-semibold mb-2">Variant nomi <span class="text-secondary">*</span></h2>
      <input
        class="border w-full transition-colors border-stroke_primary focus:border-gray-300 focus:outline-none py-3 px-4 rounded-lgx"
        v-model="currentOption.name"
        placeholder="Rang, Razmer"
        list="test"
      />
      <datalist id="test">
        <option value="Red" />
        <option value="Red" />
        <option value="Red" />
      </datalist>
    </div>
    <div class="mt-8 pb-5 border-b border-b-stroke_primary">
      <h2 class="text-sm font-semibold mb-2">
        Variant qiymatlari<span class="text-secondary">*</span>
      </h2>
      <div class="space-y-2">
        <input
          v-for="value in currentOption.values"
          :key="value"
          :value
          class="border w-full border-stroke_primary transition-colors focus:border-gray-300 focus:outline-none py-3 px-4 rounded-lgx"
        />
        <input
          @keyup.enter="createOptionValue"
          placeholder="Qiymatni kiriting"
          class="border w-full border-stroke_primary transition-colors focus:border-gray-300 focus:outline-none py-3 px-4 rounded-lgx"
        />
      </div>
      <div class="flex justify-between items-center mt-5">
        <button class="flex items-center gap-2 text-red-400" @click="deleteCurrentOption">
          <Icon icon="fluent:delete-24-regular" />
          O'chirish
        </button>
        <button @click="createOption" class="bg-secondary px-8 py-1.5 text-white rounded-xl">
          Saqlash
        </button>
      </div>
    </div>
  </div>

  <button @click="isInputMode = true" class="my-5 flex items-center text-[#2563EB] gap-3">
    <Icon icon="ph:plus-bold" />Hajmi yoki rangi kabi variantlarni qo'shing
  </button>

  <!-- Hierarchical Variants Display -->
  <div v-if="groupedVariants.length">
    <h2 class="text-xl font-semibold mb-4">Variants</h2>
    <table v-if="options.length > 0" class="w-full border-collapse">
      <thead>
        <tr>
          <th class="rounded-tl-lgx p-4 bg-gray-200 text-left">Variant</th>
          <th class="rounded-tr-lgx p-4 bg-gray-200 text-left">Price</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(parentVariant, parentIndex) in groupedVariants" :key="parentIndex">
          <tr class="border-b">
            <td class="py-5 px-4">
              <div class="flex items-center space-x-2">
                <label :for="'image-parent-' + parentIndex" class="cursor-pointer">
                  <div
                    class="size-15 rounded-md border border-dashed border-stroke_primary flex items-center justify-center"
                  >
                    <Icon icon="ph:plus-bold" v-if="!parentVariant.image" class="text-gray-500" />
                    <img
                      v-else
                      :src="parentVariant.image"
                      class="w-full h-full object-cover rounded-md"
                      :alt="parentVariant.name"
                    />
                  </div>
                </label>
                <input
                  @change="updateParentVariantImage($event, parentVariant)"
                  type="file"
                  accept="image/*"
                  class="hidden"
                  :id="'image-parent-' + parentIndex"
                />
                <button
                  @click="toggleVariant(parentIndex)"
                  class="flex flex-col items-start justify-center gap-2.5"
                >
                  <span>{{ parentVariant.name }}</span>
                  <div class="flex gap-2 items-center">
                    <span class="text-sm text-[#8A8A8A]"
                      >{{ parentVariant.children.length }} variant</span
                    >
                    <Icon
                      icon="icon-park-outline:down"
                      class="rotate-0 transition-transform"
                      :class="{ 'rotate-180': isVariantOpen(parentIndex) }"
                    />
                  </div>
                </button>
              </div>
            </td>
            <td class="p-2">
              <input
                v-model="parentVariant.price"
                @input="updateChildrenPrice(parentVariant)"
                type="number"
                class="border border-stroke_primary focus:outline-none focus:border-primary transition-colors px-4 py-3.5 rounded-lgx leading-[normal] rounded w-full"
                placeholder="Narxini kiriting"
              />
            </td>
          </tr>
          <tr>
            <td colspan="2" class="p-0">
              <div
                class="overflow-hidden pl-10 transition-all duration-300 ease-in-out"
                :class="{
                  'max-h-0': !isVariantOpen(parentIndex),
                  'max-h-[1000px]': isVariantOpen(parentIndex)
                }"
              >
                <table class="w-full pl-8">
                  <tbody>
                    <tr
                      v-for="childVariant in parentVariant.children"
                      :key="childVariant.name"
                      class="border-b last:border-b-0"
                    >
                      <td class="p-5">
                        <div class="flex items-center space-x-2">
                          <label :for="'image-' + childVariant.name" class="cursor-pointer">
                            <div class="w-12 h-12 rounded-md flex items-center justify-center">
                              <Icon
                                icon="ph:plus-bold"
                                v-if="!childVariant.image"
                                class="text-gray-500 text-xs"
                              />
                              <img
                                v-else
                                :src="childVariant.image"
                                class="w-full h-full object-cover rounded-md"
                                :alt="childVariant.name"
                              />
                            </div>
                          </label>
                          <input
                            @change="updateVariantImage($event, childVariant)"
                            type="file"
                            accept="image/*"
                            class="hidden"
                            :id="'image-' + childVariant.name"
                          />
                          <span>{{ childVariant.name }}</span>
                        </div>
                      </td>
                      <td class="p-2">
                        <input
                          v-model="childVariant.price"
                          type="number"
                          class="border border-stroke_primary focus:outline-none focus:border-primary transition-colors px-4 py-3.5 rounded-lgx leading-[normal] rounded w-full"
                          placeholder="Narxini kiriting"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

