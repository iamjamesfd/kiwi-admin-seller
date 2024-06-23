<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
  options: {
    type: Array,
    reqired: true
  },
  default: {
    type: String,
    reqired: false,
    default: null
  },
  optionType: {
    type: String,
    reqired: true
  }
})

const isOpen = ref(false)
const selected = ref(
  props.default ? props.default : props.options.length > 0 ? props.options[0] : null
)

const select = (option) => {
  if (props.optionType == 'Object') {
    selected.value = option.name
    isOpen.value = false
  } else {
    selected.value = option
    isOpen.value = false
  }
}
</script>
<template>
  <div>
    <div
      class="flex items-center justify-between gap-2 border p-3 rounded-lg text-sm"
      @click="isOpen = !isOpen"
    >
      <slot name="icon"></slot>
      {{ selected }}
      <Icon icon="icon-park:down"></Icon>
    </div>
    <div v-if="isOpen" class="relative z-[9999]">
      <ul class="bg-white w-full shadow border rounded-lg mt-1 overflow-hidden text-sm absolute">
        <li v-for="(option, i) of props.options" :key="i" @click="select(option)">
          <slot name="option" :option="option"></slot>
        </li>
      </ul>
    </div>
  </div>
</template>
