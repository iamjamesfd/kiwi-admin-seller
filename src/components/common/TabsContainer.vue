<template>
  <div class="relative" :class="$attrs.tabBarClass">
    <div class="flex overflow-auto border-b border-b-stroke_primary" @scroll="changeTab(activeTab)">
      <div
        :key="index"
        v-for="(tab, index) in props.tabs"
        @click="changeTab(index)"
        ref="tabRefs"
        :class="{
          '-md:flex-1': mode === 'full'
        }"
      >
        <slot name="tabButton" :tab="{ tab, isActive: activeTab === index }">
          <button
            class="medium-bold w-full shrink-0 px-6 py-4 text-sm text-font-accent-1 transition-colors"
            :class="{
              'font-medium !text-primary': activeTab === index
            }"
          >
            <p>{{ tab }}</p>
          </button>
        </slot>
      </div>
      <div
        class="caret absolute -bottom-0.5 h-1 w-8 rounded-full bg-primary transition-all"
        :style="{ left: caretPosition.left, width: caretPosition.width }"
        ref="caretRef"
      ></div>
    </div>
  </div>
  <div v-if="props.tabs" :class="$attrs.tabsContainerClass">
    <slot :key="activeTab" :name="activeTab + 1"></slot>
  </div>
  <slot name="absoluteBody"></slot>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()
const props = withDefaults(defineProps<{ tabs?: string[]; mode?: 'full' | 'inline' }>(), {
  mode: 'inline'
})

const emit = defineEmits<{ (e: 'tabChange', value: number): void }>()

const activeTab = ref(0) // Default active tab index
const caretPosition = ref<{ left: string; width?: string }>({ left: 0 + 'px' }) // Default caret position
const tabRefs = ref([])
const caretRef = ref()

function changeTab(index: number): void {
  activeTab.value = index
  if (index) router.replace({ hash: '#' + index })
  else router.replace({ hash: '' })
  moveCaret(index)
  emit('tabChange', activeTab.value)
}

function moveCaret(index: number): void {
  var tabElement = tabRefs.value[index] as HTMLElement
  if (tabElement) {
    tabElement = tabElement.children[0] as HTMLElement
    const tabRect = tabElement.getBoundingClientRect()
    caretPosition.value.left = tabElement.offsetLeft + 'px'
    caretPosition.value.width = tabRect.width + 'px'
  }
}
onMounted(() => {
  if (route.hash) {
    setTimeout(() => {
      changeTab(+route.hash.replace('#', ''))
    }, 300)
    return
  }
  changeTab(0)
})
</script>
