<template>
  <div
    class="flex flex-col gap-y-2 overflow-hidden px-3"
    :class="self ? 'items-end justify-end' : 'items-start justify-start'"
  >
    <div
      class="max-w-[230px] rounded-2xl"
      :class="self ? 'bg-message-foreground' : 'bg-gray-100'"
    >
      <p class="message-text" :class="{ self: self }">
        {{ props.message.text }}
      </p>
    </div>
    <div class="flex items-center gap-3">
      <span
        class="text-xs text-navigation-icon-color"
        :class="{ 'order-2': !self }"
        >{{ utils.formatDate(new Date(message.send_at)).getTime() }}</span
      >
      <div class="h-4 w-4 overflow-hidden rounded-full">
        <img
          alt=""
          class="h-full w-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type Message from "@/types/chat/message.interface";
import utils from "@/utils";

const props = defineProps<{ message: Message; last: boolean; self: boolean }>();
</script>

<style scoped>
.message-text {
  @apply relative px-5 py-3 text-sm leading-[150%] text-[#141F1A] after:h-4 after:w-7;
}

.message-text.self {
  @apply before:absolute before:left-full  before:top-full before:z-20 before:h-6 before:w-6 before:-translate-y-full before:rounded-full before:bg-white after:absolute after:-right-3 after:bottom-0 after:bg-message-foreground;
}
</style>
