<template>
  <div class="relative leading-[50px] uppercase" :tabindex="tabindex" @blur="open = false">
    <div
      class="flex items-center justify-between gap-[6px] outline-none border rounded-xl px-4"
      :class="{ open: open }"
      @click="open = !open"
    >
      <Icon icon="emojione:green-apple"></Icon>
      <p class="text-[12px]">{{ selected }}</p>
      <Icon icon="formkit:down" class="w-4 h-[7px]"></Icon>
    </div>
    <div
      class="absolute mt-1 text-[12px] overflow-hidden text-black bg-white w-full border shadow rounded-lg"
      :class="{ selectHide: !open }"
    >
      <div
        class="hover:bg-slate-300 px-4"
        v-for="(option, i) of options"
        :key="i"
        @click="(selected = option), (open = false), $emit('input', option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { ref, onMounted } from 'vue'

// Define props
const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  default: {
    type: String,
    required: false,
    default: null
  },
  tabindex: {
    type: Number,
    required: false,
    default: 0
  }
})

// Define emits
const emit = defineEmits(['input'])

// Reactive state
const selected = ref(
  props.default ? props.default : props.options.length > 0 ? props.options[0] : null
)
const open = ref(false)

// Emit the initial selected value
onMounted(() => {
  emit('input', selected.value)
})
</script>

<style scoped>
.custom-select {
  position: relative;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
}

.custom-select .selected.open {
  border: 1px solid #ad8225;
  border-radius: 6px 6px 0px 0px;
}

.custom-select .items div {
  color: #fff;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: #ad8225;
}

.selectHide {
  display: none;
}
</style>
