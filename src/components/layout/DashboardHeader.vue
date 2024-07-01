<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{title: string}>()
</script>

<template>
    <div class="flex items-center px-6 py-4 justify-between shadow bg-white sticky top-0 z-[9999]">
      <h1 class="text-xl text-font_color">{{title}}</h1>
        <div class="flex gap-3 text-font_color">
          <div class="flex items-center justify-center border w-10 h-10 rounded-lg">
            <Icon icon="f7:bell" class="w-6 h-6" />
          </div>
        <div class="flex items-center justify-center border w-10 h-10 rounded-lg">
            <Icon icon="mage:message-dots" class="w-6 h-6" />
        </div>
      </div>
    </div>
</template>
