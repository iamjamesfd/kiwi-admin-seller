<template>
  <div
    class="z-20 flex items-center justify-between border-b border-b-stroke_primary bg-white px-3 py-6 md:px-5"
  >
    <div class="flex items-center gap-3">
      <div class="lg:hidden">
        <Icon icon="ion:chevron-back" height="24" @click="emit('back')" />
      </div>
      <div
        class="flex cursor-pointer gap-3"
        @click="$router.push({ name: 'userProfile', params: { id: 1 } })"
      >
        <div class="img relative md:hidden">
          <img src="https://picsum.photos/40" alt="" class="rounded-full" />
          <div
            class="online--mark absolute right-0 top-0 h-3 w-3 rounded-full bg-green-400 shadow"
          ></div>
        </div>
        <div class="flex flex-col">
          <p class="font-normal">{{ props.name }}</p>
          <span class="text-xs text-blue-400 md:hidden">{{
            props.status
          }}</span>
        </div>
      </div>
    </div>
    <a href="tel:+998916000000">
      <Icon class="text-primary" icon="bx:phone" height="24" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps<{ name: string; status: string }>();
const emit = defineEmits<{ (event: "back"): void }>();
</script>

<style scoped></style>
