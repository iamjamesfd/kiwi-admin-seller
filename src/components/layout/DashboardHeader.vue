<script setup>
import {Icon} from '@iconify/vue'

const props = defineProps(['title'])
</script>

<template>
    <div class="flex items-center px-6 py-4 justify-between shadow bg-white sticky top-0 z-[9999]">
        <h1 class="text-xl text-black">{{props['title']}}</h1>
        <div class="flex gap-3 text-black">
            <div class="flex items-center justify-center border w-10 h-10 rounded-lg"><Icon icon="f7:bell" class="w-[24px] h-[24px]"></Icon></div>
            <div class="flex items-center justify-center border w-10 h-10 rounded-lg"><Icon icon="mage:message-dots" class="w-[24px] h-[24px]"></Icon></div>
        </div>
    </div>
</template>